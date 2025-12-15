/**
 * 네이버 애드포스트 광고 컴포넌트
 * 
 * 사용 방법:
 * <NaverAdPost adUnitId="YOUR_AD_UNIT_ID" />
 * 
 * 참고: 네이버 애드포스트는 주로 네이버 블로그에 사용되며,
 * 웹사이트 사용 시 네이버에서 제공하는 공식 코드를 확인하세요.
 * https://adpost.naver.com
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

declare global {
  interface Window {
    naverAdpost: any
    smartadScriptLoaded?: boolean
  }
}

interface NaverAdPostProps {
  /** 네이버 애드포스트에서 발급받은 광고 단위 ID */
  adUnitId: string
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const NaverAdPost = ({ 
  adUnitId,
  style = { display: 'block', minHeight: '120px', width: '100%' }
}: NaverAdPostProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adRef.current) return

    const loadScript = () => {
      if (window.smartadScriptLoaded) {
        renderAd()
        return
      }

      const script = document.createElement('script')
      script.async = true
      script.src = 'https://ncode.smartad.co.kr/smartad.js'
      script.onload = () => {
        window.smartadScriptLoaded = true
        renderAd()
      }
      document.head.appendChild(script)
    }

    const renderAd = () => {
      try {
        if (window.naverAdpost && adRef.current) {
          window.naverAdpost.renderAd(adRef.current, {
            adUnitId: adUnitId
          })
        }
      } catch (err) {
        console.error('Naver AdPost error:', err)
      }
    }

    loadScript()
  }, [adUnitId])

  return (
    <Box
      ref={adRef}
      style={style}
      id={`naver-adpost-${adUnitId}`}
    />
  )
}

export default NaverAdPost

