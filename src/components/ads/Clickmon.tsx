/**
 * 클릭몬(Clickmon) 광고 컴포넌트
 * 
 * 사용 방법:
 * <Clickmon adCode="YOUR_AD_CODE" />
 * 또는
 * <Clickmon scriptSrc="https://..." containerId="clickmon-ad-123" />
 * 
 * 설정 방법:
 * 1. https://www.clickmon.co.kr 에서 회원 가입 및 사이트 등록
 * 2. 광고 관리 페이지에서 광고 코드 생성
 * 3. 생성된 광고 코드를 adCode에 입력하거나 scriptSrc와 containerId를 입력
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

interface ClickmonProps {
  /** 클릭몬에서 발급받은 전체 광고 코드 (HTML 전체) */
  adCode?: string
  /** 클릭몬 스크립트 URL (선택사항) */
  scriptSrc?: string
  /** 광고 컨테이너 ID (클릭몬에서 제공하는 ID) */
  containerId?: string
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const Clickmon = ({ 
  adCode,
  scriptSrc,
  containerId,
  style = { display: 'block', minHeight: '100px', width: '100%' }
}: ClickmonProps) => {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!adRef.current) return

    // adCode가 있으면 전체 HTML을 그대로 삽입
    if (adCode) {
      // 기존 내용 제거
      adRef.current.innerHTML = ''
      
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
        
        // 스크립트 내용이 있으면 실행
        if (oldScript.innerHTML) {
          // document.writeln을 사용하는 클릭몬 코드를 위해
          // document.writeln을 오버라이드하여 컨테이너에 쓰도록 설정
          const originalWriteln = document.writeln
          const container = adRef.current
          
          if (container) {
            document.writeln = function(html: string) {
              const tempDiv = document.createElement('div')
              tempDiv.innerHTML = html
              while (tempDiv.firstChild) {
                container.appendChild(tempDiv.firstChild)
              }
            }
            
            // 스크립트 실행
            try {
              newScript.innerHTML = oldScript.innerHTML
              container.appendChild(newScript)
            } catch (error) {
              console.error('클릭몬 스크립트 실행 실패:', error)
            } finally {
              // document.writeln 복원
              document.writeln = originalWriteln
            }
          }
        }
        
        // 외부 스크립트인 경우
        if (oldScript.src) {
          newScript.src = oldScript.src
          newScript.async = true
          adRef.current?.appendChild(newScript)
        } else if (!oldScript.innerHTML) {
          // 속성만 있는 경우
          adRef.current?.appendChild(newScript)
        }
      })
      
      // 스크립트가 아닌 다른 요소들도 추가
      Array.from(tempDiv.children).forEach((child) => {
        if (child.tagName !== 'SCRIPT') {
          adRef.current?.appendChild(child.cloneNode(true))
        }
      })
      
      return
    }

    // scriptSrc와 containerId를 사용하는 경우
    if (scriptSrc && containerId) {
      // 기존 광고 제거
      const existingContainer = adRef.current.querySelector(`#${containerId}`)
      if (existingContainer) {
        existingContainer.remove()
      }

      // 컨테이너 생성
      const container = document.createElement('div')
      container.id = containerId
      adRef.current.appendChild(container)

      // 스크립트 로드
      const loadScript = () => {
        // 이미 같은 스크립트가 로드되었는지 확인
        const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)
        if (existingScript) {
          return
        }

        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = scriptSrc
        script.async = true
        document.head.appendChild(script)
      }

      loadScript()

      // 클릭몬이 자동으로 containerId를 찾아서 광고를 렌더링함
    }
  }, [adCode, scriptSrc, containerId])

  return (
    <Box
      ref={adRef}
      style={style}
      id={`clickmon-container-${containerId || 'default'}`}
    />
  )
}

export default Clickmon

