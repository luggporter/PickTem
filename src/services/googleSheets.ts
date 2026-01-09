import { NewsFormData } from '../pages/admin/AdminNewsSave';
import { Video } from '../types'

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  source: string;
  publishedAt: string;
  imageUrl: string;
  url: string;
}

// Google Sheets API 설정
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || ''
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID || ''
const VIDEO_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_VIDEO_RANGE || '비디오!A2:J1000'
const PRODUCT_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_PRODUCT_RANGE || '제품!A2:I1000'
const USER_ACTIVITY_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_USER_RANGE || '활동로그!A1:Z999'
const NEWS_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_NEWS_RANGE || '뉴스!A2:I1000'
const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || ''

interface GoogleSheetsResponse {
  values: string[][]
}

/**
 * Google Sheets에서 비디오와 제품 데이터를 가져옵니다.
 */
export async function fetchVideosFromGoogleSheets(): Promise<Video[]> {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.warn('Google Sheets API 설정이 없습니다. 로컬 mockData를 사용합니다.')
    return []
  }

  try {
    // 비디오와 제품 데이터를 병렬로 가져오기
    const [videosResponse, productsResponse] = await Promise.all([
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${VIDEO_RANGE}?key=${API_KEY}`),
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${PRODUCT_RANGE}?key=${API_KEY}`)
    ])

    if (!videosResponse.ok || !productsResponse.ok) {
      throw new Error(`Google Sheets API 오류`)
    }

    const videosData: GoogleSheetsResponse = await videosResponse.json()
    const productsData: GoogleSheetsResponse = await productsResponse.json()
    
    if (!videosData.values || videosData.values.length === 0) {
      return []
    }

    return parseSheetData(videosData.values, productsData.values || [])
  } catch (error) {
    console.error('Google Sheets 데이터 가져오기 실패:', error)
    return []
  }
}

/**
 * Google Sheets 데이터를 Video 형식으로 파싱합니다.
 * 
 * 비디오 테이블 (헤더 제외):
 * A: 고유키
 * B: 판매타입
 * C: 카테고리
 * D: 상태
 * E: 제목
 * F: 설명
 * G: 썸네일 이미지
 * H: 공개날짜
 * I: 종료날짜
 * J: 메모
 * 
 * 제품 테이블 (헤더 제외):
 * A: 부모 고유키
 * B: 자식 고유키
 * C: 상품명
 * D: 상품설명
 * E: 썸네일 이미지
 * F: 바로가기 주소
 * G: 가격
 * H: 상태
 * I: 메모
 */
function parseSheetData(videoRows: string[][], productRows: string[][]): Video[] {
  const videosMap = new Map<string, Video>()

  // 1. 비디오 데이터 파싱 (상태가 "공개"인 것만)
  videoRows.forEach((row) => {
    const [
      uniqueKey,        // A: 고유키
      ,                 // B: 판매타입 (미사용)
      category,         // C: 카테고리
      status,           // D: 상태
      title,            // E: 제목
      description,      // F: 설명
      thumbnailUrl,     // G: 썸네일 이미지
      publishedAt,      // H: 공개날짜
      ,                 // I: 종료날짜 (미사용)
      ,                 // J: 메모 (미사용)
    ] = row

    // 고유키가 없거나 상태가 "공개"가 아니면 건너뛰기
    if (!uniqueKey?.trim() || status?.trim() !== '공개') return

    // 날짜 포맷 변환 (2025-11-25 0:00:00 → 2025-11-25)
    const formattedDate = publishedAt?.trim().split(' ')[0] || new Date().toISOString().split('T')[0]

    videosMap.set(uniqueKey.trim(), {
      id: uniqueKey.trim(),
      title: title?.trim() || '',
      description: description?.trim() || '',
      thumbnailUrl: thumbnailUrl?.trim() || '',
      category: category?.trim() || '',
      publishedAt: formattedDate,
      products: [],
    })
  })

  // 2. 제품 데이터 파싱 및 비디오에 연결 (상태가 "공개"인 것만)
  productRows.forEach((row) => {
    const [
      parentKey,        // A: 부모 고유키
      childKey,         // B: 자식 고유키
      productName,      // C: 상품명
      productDesc,      // D: 상품설명
      productImage,     // E: 썸네일 이미지
      productUrl,       // F: 바로가기 주소
      productPrice,     // G: 가격
      productStatus,    // H: 상태
      ,                 // I: 메모 (미사용)
    ] = row

    // 부모 키가 없거나 상태가 "공개"가 아니면 건너뛰기
    if (!parentKey?.trim() || productStatus?.trim() !== '공개') return

    const video = videosMap.get(parentKey.trim())
    
    if (video && childKey?.trim() && productName?.trim()) {
      video.products.push({
        id: childKey.trim(),
        name: productName.trim(),
        description: productDesc?.trim() || '',
        imageUrl: productImage?.trim() || '',
        affiliateUrl: productUrl?.trim() || '',
        price: productPrice?.trim() || '',
      })
    }
  })

  // 3. 제품이 하나 이상 있는 비디오만 반환
  return Array.from(videosMap.values()).filter(video => video.products.length > 0)
}

/**
 * 데이터를 캐싱하여 재사용합니다.
 */
let cachedVideos: Video[] | null = null
let cacheTimestamp = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5분

export async function getVideos(): Promise<Video[]> {
  const now = Date.now()
  
  // 캐시가 유효하면 반환
  if (cachedVideos && now - cacheTimestamp < CACHE_DURATION) {
    return cachedVideos
  }

  // 새로운 데이터 가져오기
  const videos = await fetchVideosFromGoogleSheets()
  
  if (videos.length > 0) {
    // 캐시 업데이트
    cachedVideos = videos
    cacheTimestamp = now
  }

  
  return videos
}

/**
 * 캐시를 강제로 초기화합니다.
 */
export function clearCache(): void {
  cachedVideos = null
  cacheTimestamp = 0
}

/**
 * 활동 로그 데이터 타입
 */
export interface ActivityLog {
  uniqueKey: string
  productName: string
  count: number
  activityType: string
  timestamp: string
}

/**
 * 비디오 인기도 점수
 */
export interface VideoPopularity {
  videoId: string
  likeCount: number
  clickCount: number
  totalScore: number // 좋아요 * 3 + 클릭수
}

/**
 * Google Sheets에서 활동 로그 데이터를 가져옵니다.
 */
export async function fetchActivityLogs(): Promise<ActivityLog[]> {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.warn('Google Sheets API 설정이 없습니다.')
    return []
  }

  try {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${USER_ACTIVITY_RANGE}?key=${API_KEY}`
    )

    if (!response.ok) {
      throw new Error(`Google Sheets API 오류`)
    }

    const data: GoogleSheetsResponse = await response.json()
    
    if (!data.values || data.values.length <= 1) {
      return []
    }

    // 헤더 제외하고 데이터 파싱
    return data.values.slice(1).map(row => ({
      uniqueKey: row[0]?.trim() || '',
      productName: row[1]?.trim() || '',
      count: parseInt(row[2] || '0'),
      activityType: row[3]?.trim() || '',
      timestamp: row[5]?.trim() || '',
    })).filter(log => log.uniqueKey && log.activityType)
  } catch (error) {
    console.error('활동 로그 가져오기 실패:', error)
    return []
  }
}

/**
 * 비디오 ID인지 확인 (1, 2, 3 같은 형태만, 1-1 같은 상품 ID는 제외)
 */
function isVideoId(uniqueKey: string): boolean {
  return /^\d+$/.test(uniqueKey.trim())
}

/**
 * 활동 로그를 기반으로 비디오 인기도를 계산합니다.
 */
export async function getVideoPopularity(): Promise<VideoPopularity[]> {
  const logs = await fetchActivityLogs()
  
  // 비디오별로 좋아요/클릭수 집계
  const popularityMap = new Map<string, { likes: number; clicks: number }>()

  logs.forEach(log => {
    // 비디오 ID만 처리 (1, 2, 3 형태만, 1-1 같은 건 제외)
    if (!isVideoId(log.uniqueKey)) return

    const videoId = log.uniqueKey
    const current = popularityMap.get(videoId) || { likes: 0, clicks: 0 }

    if (log.activityType === '좋아요') {
      current.likes += log.count
    } else if (log.activityType === '클릭수') {
      current.clicks += log.count
    }

    popularityMap.set(videoId, current)
  })

  // 인기도 점수 계산 및 정렬 (좋아요에 가중치 3배)
  const popularityList: VideoPopularity[] = Array.from(popularityMap.entries()).map(
    ([videoId, { likes, clicks }]) => ({
      videoId,
      likeCount: likes,
      clickCount: clicks,
      totalScore: likes * 3 + clicks,
    })
  )

  // 점수 높은 순으로 정렬
  return popularityList.sort((a, b) => b.totalScore - a.totalScore)
}

/**
 * Google Sheets에서 뉴스 데이터를 가져옵니다.
 */
export async function fetchNewsFromGoogleSheets(): Promise<NewsArticle[]> {
  if (!API_KEY || !SPREADSHEET_ID) {
    console.warn('Google Sheets API 설정이 없습니다. 로컬 mockData를 사용합니다.')
    return []
  }

  try {
    // 뉴스 데이터를 가져오기
    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${NEWS_RANGE}?key=${API_KEY}`)

    if (!response.ok) {
      throw new Error(`Google Sheets API 오류: ${response.status}`)
    }

    const data: GoogleSheetsResponse = await response.json()

    if (!data.values || data.values.length === 0) {
      return []
    }

    return parseNewsData(data.values)
  } catch (error) {
    console.error('Google Sheets 데이터 가져오기 실패:', error)
    return []
  }
}

/**
 * 뉴스 데이터를 파싱합니다.
 *
 * 뉴스 테이블 (헤더 제외):
 * A: ID
 * B: 제목
 * C: 요약
 * D: 내용
 * E: 출처
 * F: 발행일
 * G: 이미지 URL
 * H: 원본 URL
 * I: 상태 (공개/비공개)
 */
function parseNewsData(rows: string[][]): NewsArticle[] {
  return rows.map((_row) => {
    const row = _row
    const [
      id,           // A: ID
      title,        // B: 제목
      summary,      // C: 요약
      content,      // D: 내용
      source,       // E: 출처
      publishedAt,  // F: 발행일
      imageUrl,     // G: 이미지 URL
      url,          // H: 원본 URL
      status,       // I: 상태
    ] = row

    // ID가 없거나 상태가 "공개"가 아니면 건너뛰기
    if (!id?.trim() || status?.trim() !== '공개') return null

    return {
      id: id.trim(),
      title: title?.trim() || '',
      summary: summary?.trim() || '',
      content: content?.trim() || '',
      source: source?.trim() || '',
      publishedAt: publishedAt?.trim() || new Date().toISOString().split('T')[0],
      imageUrl: imageUrl?.trim() || '',
      url: url?.trim() || '',
    }
  }).filter((news): news is NewsArticle => news !== null)
}

/**
 * 뉴스 데이터를 캐싱하여 재사용합니다.
 */
let cachedNews: NewsArticle[] | null = null
let newsCacheTimestamp = 0

export async function getNews(): Promise<NewsArticle[]> {
  const now = Date.now()

  // 캐시가 유효하면 반환
  if (cachedNews && now - newsCacheTimestamp < CACHE_DURATION) {
    return cachedNews
  }

  // 새로운 데이터 가져오기
  const news = await fetchNewsFromGoogleSheets()

  if (news.length > 0) {
    // 캐시 업데이트
    cachedNews = news
    newsCacheTimestamp = now
  }

  return news
}

/**
 * 뉴스 캐시를 강제로 초기화합니다.
 */
export function clearNewsCache(): void {
  cachedNews = null
  newsCacheTimestamp = 0
}

/**
 * Google Sheets에 새로운 뉴스를 추가합니다.
 */
// export async function addNewsToGoogleSheets(log: ActivityLog): Promise<boolean> {
//   if (!APPS_SCRIPT_URL) {
//     console.warn('Apps Script URL이 설정되지 않았습니다. 로그를 전송하지 않습니다.')
//     return false
//   }
// console.log({log});

//   try {
//     await fetch(APPS_SCRIPT_URL, {
//       method: 'POST',
//       mode: 'no-cors', // Apps Script는 CORS를 지원하지 않으므로 no-cors 사용
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(log),
//     })

//     // no-cors 모드에서는 response를 확인할 수 없음
//     console.log('활동 로그 전송:', log)
//     return true
//   } catch (error) {
//     console.error('활동 로그 전송 실패:', error)
//     return false
//   }
// }
type NewsPost = {
  logType: string
  id: string
  title: string
  summary: string
  content: string
  source: string
  publishedAt: string
  imageUrl: string
  url: string
  status?: string
}

export async function addNewsToGoogleSheets(newsData: Omit<NewsFormData, 'sheet'>) {
  const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL

  const data = {...newsData, logType: '뉴스', id: `1`}
  await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}
// export async function addNewsToGoogleSheets(log: ActivityLog): Promise<boolean> {
//     if (!APPS_SCRIPT_URL) {
//     console.warn('Apps Script URL이 설정되지 않았습니다. 로그를 전송하지 않습니다.')
//     return false
//   }
//     try {
//     await fetch(APPS_SCRIPT_URL, {
//       method: 'POST',
//       mode: 'no-cors', // Apps Script는 CORS를 지원하지 않으므로 no-cors 사용
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(log),
//     })

//     // no-cors 모드에서는 response를 확인할 수 없음
//     console.log('활동 로그 전송:', log)
//     return true
//   } catch (error) {
//     console.error('활동 로그 전송 실패:', error)
//     return false
//   }
// }

/**
 * 인기도 순으로 정렬된 비디오 목록을 반환합니다.
 */
export async function getPopularVideos(): Promise<Video[]> {
  const [videos, popularity] = await Promise.all([
    getVideos(),
    getVideoPopularity()
  ])

  if (popularity.length === 0) {
    return videos // 활동 로그가 없으면 원본 순서 반환
  }

  // 인기도 점수를 맵으로 변환
  const scoreMap = new Map(
    popularity.map(p => [p.videoId, p.totalScore])
  )

  // 비디오를 인기도 순으로 정렬
  return videos.sort((a, b) => {
    const scoreA = scoreMap.get(a.id) || 0
    const scoreB = scoreMap.get(b.id) || 0
    return scoreB - scoreA
  })
}

