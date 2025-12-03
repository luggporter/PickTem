/**
 * 사용자 활동 로그를 Google Sheets에 저장합니다.
 */

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL || ''

export type ActivityType = '클릭수' | '좋아요'

interface ActivityLog {
  uniqueKey: string      // 고유키 (비디오 ID 또는 상품 ID)
  name: string           // 상품명 (비디오 제목 또는 상품명)
  count: number          // 카운트 (항상 1)
  activityType: ActivityType  // 활동 타입
  memo?: string          // 메모
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
  })
}

