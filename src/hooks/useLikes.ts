import { useState, useEffect } from 'react'

const LIKES_STORAGE_KEY = 'picktem_likes'

/**
 * 로컬스토리지에서 좋아요 목록을 가져옵니다.
 */
function getLikesFromStorage(): Set<string> {
  try {
    const stored = localStorage.getItem(LIKES_STORAGE_KEY)
    if (stored) {
      return new Set(JSON.parse(stored))
    }
  } catch (error) {
    console.error('좋아요 목록 로드 실패:', error)
  }
  return new Set()
}

/**
 * 로컬스토리지에 좋아요 목록을 저장합니다.
 */
function saveLikesToStorage(likes: Set<string>): void {
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(Array.from(likes)))
  } catch (error) {
    console.error('좋아요 목록 저장 실패:', error)
  }
}

/**
 * 좋아요 상태를 관리하는 Hook
 */
export function useLikes() {
  const [likes, setLikes] = useState<Set<string>>(new Set())

  // 초기 로드
  useEffect(() => {
    setLikes(getLikesFromStorage())
  }, [])

  /**
   * 좋아요 토글
   */
  const toggleLike = (id: string): boolean => {
    const newLikes = new Set(likes)
    let isLiked = false

    if (newLikes.has(id)) {
      newLikes.delete(id)
      isLiked = false
    } else {
      newLikes.add(id)
      isLiked = true
    }

    setLikes(newLikes)
    saveLikesToStorage(newLikes)

    return isLiked
  }

  /**
   * 좋아요 여부 확인
   */
  const isLiked = (id: string): boolean => {
    return likes.has(id)
  }

  /**
   * 모든 좋아요 제거
   */
  const clearLikes = (): void => {
    setLikes(new Set())
    localStorage.removeItem(LIKES_STORAGE_KEY)
  }

  return {
    likes: Array.from(likes),
    isLiked,
    toggleLike,
    clearLikes,
  }
}

