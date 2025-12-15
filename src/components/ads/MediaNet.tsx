/**
 * Media.net 광고 컴포넌트
 * 
 * 사용 방법:
 * <MediaNet cid="YOUR_CID" />
 * 
 * 설정 방법:
 * 1. https://www.media.net 에서 계정 생성
 * 2. 사이트 승인 후 광고 단위 생성
 * 3. CID(Customer ID)를 cid에 입력
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

declare global {
  interface Window {
    _mNHandle: any
    _mNHandleQueue: any[]
    mediaNetScriptLoaded?: boolean
  }
}

interface MediaNetProps {
  /** Media.net에서 발급받은 Customer ID (CID) */
  cid: string
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const MediaNet = ({ 
  cid,
  style = { display: 'block', minHeight: '120px', width: '100%' }
}: MediaNetProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adRef.current) return

    const loadScript = () => {
      if (window.mediaNetScriptLoaded) {
        renderAd()
        return
      }

      window._mNHandle = window._mNHandle || {}
      window._mNHandleQueue = window._mNHandleQueue || []

      const script = document.createElement('script')
      script.async = true
      script.src = `https://contextual.media.net/dmedianet.js?cid=${cid}`
      script.onload = () => {
        window.mediaNetScriptLoaded = true
        renderAd()
      }
      document.head.appendChild(script)
    }

    const renderAd = () => {
      try {
        if (window._mNHandle && adRef.current) {
          const containerId = `media-net-${cid}-${Date.now()}`
          adRef.current.id = containerId

          window._mNHandleQueue = window._mNHandleQueue || []
          window._mNHandleQueue.push(() => {
            window._mNHandle.createPlaceholder({
              cid: cid,
              ph: containerId
            })
          })
        }
      } catch (err) {
        console.error('Media.net error:', err)
      }
    }

    loadScript()
  }, [cid])

  return (
    <Box
      ref={adRef}
      style={style}
    />
  )
}

export default MediaNet

