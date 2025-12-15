/**
 * 카카오 애드핏 광고 컴포넌트
 * 
 * 사용 방법:
 * <KakaoAdFit adUnitId="DAN-BuizRnD4LssPLZoq" />
 * 
 * 설정 방법:
 * 1. https://adfit.kakao.com 에서 계정 생성
 * 2. 매체 등록 및 광고 단위 생성
 * 3. 광고 단위 ID를 adUnitId에 입력
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

declare global {
  interface Window {
    kakaoAdFitLoaded?: boolean
  }
}

interface KakaoAdFitProps {
  /** 카카오 애드핏에서 발급받은 광고 단위 ID (예: DAN-BuizRnD4LssPLZoq) */
  adUnitId: string
  /** 광고 너비 (기본값: 320) */
  adWidth?: number
  /** 광고 높이 (기본값: 50) */
  adHeight?: number
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const KakaoAdFit = ({ 
  adUnitId,
  adWidth = 320,
  adHeight = 50,
  style = { display: 'block', minHeight: '50px', width: '100%' }
}: KakaoAdFitProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adRef.current) return

    const loadScript = () => {
      // 스크립트가 이미 로드되었는지 확인
      if (document.querySelector('script[src*="t1.daumcdn.net/kas/static/ba.min.js"]')) {
        window.kakaoAdFitLoaded = true
        return
      }

      // 스크립트 동적 로드
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//t1.daumcdn.net/kas/static/ba.min.js'
      script.async = true
      script.onload = () => {
        window.kakaoAdFitLoaded = true
      }
      document.head.appendChild(script)
    }

    // 광고 영역 생성
    const createAdArea = () => {
      if (!adRef.current) return

      // 기존 광고 영역이 있으면 제거
      const existingAd = adRef.current.querySelector('.kakao_ad_area')
      if (existingAd) {
        existingAd.remove()
      }

      // 카카오 애드핏 공식 방식으로 광고 영역 생성
      const ins = document.createElement('ins')
      ins.className = 'kakao_ad_area'
      ins.style.display = 'block'
      ins.setAttribute('data-ad-unit', adUnitId)
      ins.setAttribute('data-ad-width', adWidth.toString())
      ins.setAttribute('data-ad-height', adHeight.toString())
      
      adRef.current.appendChild(ins)
    }

    loadScript()
    createAdArea()
  }, [adUnitId, adWidth, adHeight])

  return (
    <Box
      ref={adRef}
      style={style}
      id={`kakao-adfit-${adUnitId}`}
    />
  )
}

export default KakaoAdFit

