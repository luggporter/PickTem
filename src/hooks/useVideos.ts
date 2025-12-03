import { useState, useEffect } from 'react'
import { Video } from '../types'
import { getVideos } from '../services/googleSheets'

/**
 * Google Sheets 또는 로컬 mockData에서 비디오 데이터를 가져옵니다.
 */
export function useVideos() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchVideos() {
      try {
        setLoading(true)
        const sheetsVideos = await getVideos()
        
        // Google Sheets에서 데이터를 가져왔으면 사용, 아니면 로컬 데이터 사용
        if (sheetsVideos.length > 0) {
          setVideos(sheetsVideos)
        } else {
          setVideos([])
        }
      } catch (err) {
        console.error('비디오 데이터 로드 실패:', err)
        setError(err as Error)
        setVideos([]) // fallback to local data
      } finally {
        setLoading(false)
      }
    }

    fetchVideos()
  }, [])

  return { videos, loading, error }
}

