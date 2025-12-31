import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import VideoDetailPage from './pages/VideoDetailPage'
import PopularItemsPage from './pages/PopularItemsPage'
import BottomNav from './components/BottomNav'
import PickTemList from './pages/PickTemList'
import MagazinePage from './pages/MagazinePage'
import MagazineDetailPage from './pages/MagazineDetailPage'
import { logPageView } from './services/visitorLogger'

function App() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    // 페이지 변경 시 방문 로그 전송
    const path = location.pathname + location.search
    logPageView(path)
  }, [location])

  // URL에 이상한 파라미터가 추가되는 것을 방지
  useEffect(() => {
    const cleanUrl = (url: string): string => {
      try {
        const urlObj = new URL(url)
        // 이상한 파라미터 패턴이 있으면 제거
        if (urlObj.search.includes('/&/~and~/') || urlObj.pathname.includes('/&/~and~/')) {
          return urlObj.origin + urlObj.pathname
        }
        return url
      } catch {
        return url
      }
    }

    const checkAndFixUrl = () => {
      const currentUrl = window.location.href
      const clean = cleanUrl(currentUrl)
      
      if (currentUrl !== clean) {
        // 깨끗한 URL로 복원
        window.history.replaceState(null, '', clean)
      }
    }

    // History API 오버라이드 (Publishers 광고가 URL을 변경하는 것을 방지)
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function(state, title, url) {
      if (url && typeof url === 'string') {
        const cleaned = cleanUrl(url.toString())
        if (cleaned !== url.toString()) {
          return originalPushState.call(window.history, state, title, cleaned)
        }
      }
      return originalPushState.call(window.history, state, title, url)
    }

    window.history.replaceState = function(state, title, url) {
      if (url && typeof url === 'string') {
        const cleaned = cleanUrl(url.toString())
        if (cleaned !== url.toString()) {
          return originalReplaceState.call(window.history, state, title, cleaned)
        }
      }
      return originalReplaceState.call(window.history, state, title, url)
    }

    // popstate 이벤트 감지 (뒤로가기/앞으로가기 시)
    const handlePopState = () => {
      setTimeout(checkAndFixUrl, 0)
    }
    window.addEventListener('popstate', handlePopState)

    // 초기 확인
    checkAndFixUrl()

    // 주기적으로 URL 확인 (Publishers 광고가 URL을 변경할 수 있으므로)
    const interval = setInterval(checkAndFixUrl, 500)

    return () => {
      clearInterval(interval)
      window.removeEventListener('popstate', handlePopState)
      // History API 복원
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [location.pathname])

  return (
    <Box 
      minH="100vh" 
      bg="#f7f7f7" 
      pb="80px"
      maxW="100vw"
      mx="auto"
      position="relative"
    >
      {/* 모바일 스타일 유지를 위한 컨테이너 */}
      <Box
        maxW="480px"
        mx="auto"
        bg="white"
        minH="100vh"
        position="relative"
        boxShadow={{ base: 'none', md: '0 0 20px rgba(0,0,0,0.1)' }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<PickTemList />} />
          <Route path="/popular" element={<PopularItemsPage />} />
          <Route path="/video/:id" element={<VideoDetailPage />} />
          <Route path="/magazine" element={<MagazinePage />} />
          <Route path="/magazine/:id" element={<MagazineDetailPage />} />
        </Routes>
        <BottomNav />
      </Box>
    </Box>
  )
}

export default App
