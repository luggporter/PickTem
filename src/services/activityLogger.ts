/**
 * 사용자 활동 로그를 Google Sheets에 저장합니다.
 */

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || ''

export type ActivityType = '클릭수' | '좋아요'

export type NewsLogType = '뉴스추가'

interface ActivityLog {
  uniqueKey: string      // 고유키 (비디오 ID 또는 상품 ID)
  name: string           // 상품명 (비디오 제목 또는 상품명)
  count: number          // 카운트 (항상 1)
  activityType: ActivityType  // 활동 타입
  memo?: string          // 메모
  logType: '활동로그'    // Google Apps Script에서 구분하기 위한 필드
}

interface NewsLog {
  logType: NewsLogType   // 뉴스 로그 타입
  range?: string         // 시트 범위 (옵션)
  id?: string            // 뉴스 ID
  title: string          // 뉴스 제목
  summary: string        // 뉴스 요약
  content: string        // 뉴스 내용
  source: string         // 뉴스 출처
  publishedAt: string    // 발행일
  imageUrl: string       // 이미지 URL
  url: string            // 원본 URL
  status?: string        // 상태 (기본값: '공개')
}

/**
 * Google Apps Script Web App으로 로그 전송
 */
export async function logActivity(log: ActivityLog): Promise<boolean> {
  if (!APPS_SCRIPT_URL) {
    console.warn('Apps Script URL이 설정되지 않았습니다. 로그를 전송하지 않습니다.')
    return false
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
    console.log('활동 로그 전송:', log)
    return true
  } catch (error) {
    console.error('활동 로그 전송 실패:', error)
    return false
  }
}

/**
 * 비디오 클릭 로그
 */
export function logVideoClick(videoId: string, videoTitle: string): void {
  logActivity({
    uniqueKey: videoId,
    name: videoTitle,
    count: 1,
    activityType: '클릭수',
    logType: '활동로그',
  })
}

/**
 * 비디오 좋아요 로그
 */
export function logVideoLike(videoId: string, videoTitle: string): void {
  logActivity({
    uniqueKey: videoId,
    name: videoTitle,
    count: 1,
    activityType: '좋아요',
    logType: '활동로그',
  })
}

/**
 * 상품 클릭 로그
 */
export function logProductClick(productId: string, productName: string): void {
  logActivity({
    uniqueKey: productId,
    name: productName,
    count: 1,
    activityType: '클릭수',
    logType: '활동로그',
  })
}
