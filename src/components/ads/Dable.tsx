/**
 * 데이블(Dable) 네이티브 광고 컴포넌트
 * 
 * 사용 방법:
 * <Dable serviceId="YOUR_SERVICE_ID" widgetId="dablewidget_XXX" />
 * 
 * 설정 방법:
 * 1. https://dable.io 에서 회원 가입 및 사이트 등록
 * 2. 광고 코드 생성에서 Service ID와 Widget ID 확인
 * 3. serviceId와 widgetId에 입력
 */
import { useEffect, useRef } from 'react'
import { Box } from '@chakra-ui/react'

declare global {
  interface Window {
    dable?: (method: string, ...args: unknown[]) => void
    dableq?: Array<[string, ...unknown[]]>
  }
}

interface DableProps {
  /** 데이블에서 발급받은 Service ID */
  serviceId: string
  /** 위젯 ID (예: dablewidget_XXX) */
  widgetId: string
  /** 광고 컨테이너 스타일 */
  style?: React.CSSProperties
}

const Dable = ({ 
  serviceId,
  widgetId,
  style = { display: 'block', minHeight: '100px', width: '100%' }
}: DableProps) => {
  const widgetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!widgetRef.current) return

    // 기존 위젯이 있으면 제거
    if (widgetRef.current.querySelector(`#${widgetId}`)) {
      return
    }

    // 위젯 컨테이너 생성
    const widgetContainer = document.createElement('div')
    widgetContainer.id = widgetId
    widgetRef.current.appendChild(widgetContainer)

    // 데이블 스크립트 로드 함수
    const loadDableScript = () => {
      // 스크립트가 이미 로드되었는지 확인
      if (document.querySelector('script[src*="static.dable.io/dist/plugin.min.js"]')) {
        return
      }

      // 데이블 공식 스크립트 로드
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.charset = 'utf-8'
      script.src = 'https://static.dable.io/dist/plugin.min.js'
      
      // 데이블 큐 초기화
      if (!window.dableq) {
        window.dableq = []
      }
      
      // 데이블 함수 초기화
      if (!window.dable) {
        window.dable = function(method: string, ...args: unknown[]) {
          if (window.dableq) {
            window.dableq.push([method, ...args])
          }
        }
      }
      
      const firstScript = document.getElementsByTagName('script')[0]
      if (firstScript && firstScript.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript)
      } else {
        document.head.appendChild(script)
      }
    }

    // 서비스 및 위젯 설정
    const initializeDable = () => {
      if (window.dable) {
        window.dable('setService', serviceId)
        window.dable('renderWidget', widgetId)
      } else if (window.dableq) {
        window.dableq.push(['setService', serviceId])
        window.dableq.push(['renderWidget', widgetId])
      }
    }

    // 스크립트 로드
    loadDableScript()

    // 스크립트 로드 완료 대기
    const checkInterval = setInterval(() => {
      if (window.dable || window.dableq) {
        clearInterval(checkInterval)
        initializeDable()
      }
    }, 100)

    // 5초 후 타임아웃
    setTimeout(() => clearInterval(checkInterval), 5000)

    // 클린업
    return () => {
      clearInterval(checkInterval)
    }
  }, [serviceId, widgetId])

  return (
    <Box
      ref={widgetRef}
      style={style}
      id={`dable-container-${widgetId}`}
    />
  )
}

export default Dable

