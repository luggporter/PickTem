import { Video } from '../types'

// Google Sheets API 설정
const API_KEY = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY || ''
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID || ''
const VIDEO_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_VIDEO_RANGE || '비디오!A2:J1000'
const PRODUCT_RANGE = import.meta.env.VITE_GOOGLE_SHEETS_PRODUCT_RANGE || '제품!A2:I1000'

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

