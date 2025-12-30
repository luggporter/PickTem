/**
 * 방문자 로그를 Google Sheets에 저장합니다.
 * 브라우저 지문과 국가 정보를 조합하여 방문자를 식별합니다.
 */

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || ''

interface VisitorLog {
  visitorId: string        // 방문자 ID (브라우저지문_국가_해시 형태)
  timestamp: string
  path: string
  referrer?: string
  userAgent?: string
  language?: string
  timezone?: string
  screenResolution?: string
  country?: string
  visitType: '페이지뷰' | '세션시작'
  logType: '방문자로그'  // Google Apps Script에서 구분하기 위한 필드
}

/**
 * 브라우저 지문 생성 (여러 정보 조합)
 */
function generateVisitorId(): string {
  // localStorage에 저장된 ID가 있으면 사용 (영구 식별)
  const storedId = localStorage.getItem('visitor_id')
  if (storedId) {
    return storedId
  }
  
  // 새 방문자면 지문 생성
  const components = {
    userAgent: navigator.userAgent || '',
    language: navigator.language || '',
    platform: navigator.platform || '',
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    colorDepth: window.screen.colorDepth || 0,
  }
  
  const fingerprint = [
    components.userAgent.substring(0, 50), // 브라우저 정보 일부
    components.language,
    components.platform,
    components.screenResolution,
    components.timezone,
    components.colorDepth
  ].join('_')
  
  // 해시 생성
  const hash = simpleHash(fingerprint)
  const visitorId = `visitor_${hash}`
  
  // localStorage에 저장 (다음 방문 시 동일 인식)
  localStorage.setItem('visitor_id', visitorId)
  
  return visitorId
}

/**
 * 간단한 해시 함수
 */
function simpleHash(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // 32bit 정수로 변환
  }
  return Math.abs(hash).toString(36) // 36진수로 변환
}

/**
 * IP 기반 국가 정보 가져오기 (무료 API)
 */
async function getCountryFromIP(): Promise<string> {
  try {
    // ipapi.co 사용 (무료, 월 1000회)
    const response = await fetch('https://ipapi.co/json/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
    
    if (!response.ok) {
      throw new Error('IP API 요청 실패')
    }
    
    const data = await response.json()
    // 국가 코드 우선, 없으면 국가명
    return data.country_code || data.country_name || 'Unknown'
  } catch (error) {
    // Fallback: 타임존 기반 추정
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
      return timezone.split('/')[0] || 'Unknown'
    } catch {
      return 'Unknown'
    }
  }
}

/**
 * 같은 페이지 방문 중복 방지 (5분 이내)
 */
const lastVisitCache = new Map<string, number>()
const DUPLICATE_THRESHOLD = 5 * 60 * 1000 // 5분

function shouldLogVisit(path: string, visitorId: string): boolean {
  const key = `${visitorId}_${path}`
  const now = Date.now()
  const lastVisit = lastVisitCache.get(key)
  
  if (lastVisit && now - lastVisit < DUPLICATE_THRESHOLD) {
    return false // 5분 이내 재방문은 로그하지 않음
  }
  
  lastVisitCache.set(key, now)
  return true
}

/**
 * 세션 시작 여부 확인
 */
function isNewSession(): boolean {
  const lastSessionTime = sessionStorage.getItem('last_session_time')
  const now = Date.now()
  
  // 세션이 없거나 30분 이상 지났으면 새 세션
  if (!lastSessionTime || now - parseInt(lastSessionTime) > 30 * 60 * 1000) {
    sessionStorage.setItem('last_session_time', now.toString())
    return true
  }
  
  return false
}

/**
 * 페이지 뷰 로그 전송
 */
export async function logPageView(path: string): Promise<boolean> {
  if (!APPS_SCRIPT_URL) {
    console.warn('Apps Script URL이 설정되지 않았습니다. 방문자 로그를 전송하지 않습니다.')
    return false
  }
  
  const visitorId = generateVisitorId()
  
  // 중복 방지 체크
  if (!shouldLogVisit(path, visitorId)) {
    return false
  }
  
  // 국가 정보 가져오기
  const country = await getCountryFromIP()
  const visitorIdWithCountry = `${visitorId}_${country}`
  
  const isNew = isNewSession()
  
  const log: VisitorLog = {
    visitorId: visitorIdWithCountry, // 브라우저지문_국가 형태
    timestamp: new Date().toISOString(),
    path,
    referrer: document.referrer || '',
    userAgent: navigator.userAgent || '',
    language: navigator.language || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    screenResolution: `${window.screen.width}x${window.screen.height}`,
    country,
    visitType: isNew ? '세션시작' : '페이지뷰',
    logType: '방문자로그'  // 활동 로그와 구분하기 위한 필드
  }
  
  try {
    await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Apps Script는 CORS를 지원하지 않으므로 no-cors 사용
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    })
    
    // no-cors 모드에서는 response를 확인할 수 없음
    return true
  } catch (error) {
    console.error('방문자 로그 전송 실패:', error)
    return false
  }
}

