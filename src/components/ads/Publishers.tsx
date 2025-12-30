/**
 * Publishers 광고 컴포넌트
 * 
 * 사용 방법:
 * <Publishers zoneId={10393755} />
 * 또는
 * <Publishers adCode="<div>...</div><script>...</script>" />
 * 
 * 설정 방법:
 * 1. Publishers 대시보드에서 광고 코드 생성
 * 2. zoneId 또는 전체 광고 코드를 입력
 * 3. Service Worker는 이미 설정되어 있음 (public/sw.js)
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

interface PublishersProps {
  /** Publishers에서 발급받은 Zone ID */
  zoneId?: number
  /** Publishers에서 발급받은 전체 광고 코드 (HTML 전체) */
  adCode?: string
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const Publishers = ({ 
  zoneId,
  adCode,
  style = { display: 'block', minHeight: '100px', width: '100%' }
}: PublishersProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adRef.current) return

    // 기존 광고 제거
    adRef.current.innerHTML = ''

    // adCode가 있으면 전체 HTML을 그대로 삽입
    if (adCode) {
      // 임시 div 생성하여 HTML 파싱
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = adCode.trim()
      
      // 모든 스크립트 태그를 찾아서 실행
      const scripts = tempDiv.querySelectorAll('script')
      scripts.forEach((oldScript) => {
        const newScript = document.createElement('script')
        Array.from(oldScript.attributes).forEach((attr) => {
          newScript.setAttribute(attr.name, attr.value)
        })
        if (oldScript.innerHTML) {
          newScript.innerHTML = oldScript.innerHTML
        }
        if (oldScript.src) {
          newScript.src = oldScript.src
        }
        adRef.current?.appendChild(newScript)
      })
      
      // 스크립트가 아닌 다른 요소들도 추가
      Array.from(tempDiv.children).forEach((child) => {
        if (child.tagName !== 'SCRIPT') {
          adRef.current?.appendChild(child.cloneNode(true))
        }
      })
      
      return
    }

    // zoneId만 있는 경우 - Publishers 표준 형식으로 광고 생성
    if (zoneId) {
      // Publishers 광고 div 생성
      const adDiv = document.createElement('div')
      adDiv.setAttribute('data-zone-id', zoneId.toString())
      adDiv.className = 'publishers-ad'
      adRef.current.appendChild(adDiv)

      // Publishers 광고 스크립트 로드 (이미 service worker가 있으므로 필요시 추가)
      // Publishers는 service worker를 통해 자동으로 광고를 주입하므로
      // 추가 스크립트가 필요하지 않을 수 있습니다.
    }
  }, [zoneId, adCode])

  return (
    <Box
      ref={adRef}
      style={style}
      id={`publishers-ad-${zoneId || 'default'}`}
    />
  )
}

export default Publishers

