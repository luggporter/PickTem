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
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import { logPageView } from './services/visitorLogger'
import AdminLayout from './pages/admin/AdminLayout'
import AdminPassword from './pages/admin/AdminPassword'
import AdminHome from './pages/admin/AdminHome'
import AdminNews from './pages/admin/AdminNews'
import AdminNewsSave from './pages/admin/AdminNewsSave'

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
        const badPatterns = ['/&/~and~/', '&/~and~/', '?/&/~and~/', '/&/', '~and~']
        const hasBadPattern = badPatterns.some(pattern =>
          urlObj.search.includes(pattern) || urlObj.pathname.includes(pattern)
        )

        if (hasBadPattern) {
          // 깨끗한 pathname만 유지하고 search 파라미터 제거
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
        console.log('URL cleaned:', currentUrl, '->', clean)
        // 깨끗한 URL로 복원 (replaceState 사용)
        window.history.replaceState(null, '', clean)
        return true // 변경됨을 표시
      }
      return false
    }

    // MutationObserver로 주소 표시줄 변경 감지
    const observeUrlChanges = () => {
      // 주소 표시줄의 hashchange 감지
      const handleHashChange = () => {
        checkAndFixUrl()
      }

      // 주기적으로 URL 체크하는 더 강력한 방법
      let lastUrl = window.location.href
      const strongUrlChecker = () => {
        const currentUrl = window.location.href
        if (currentUrl !== lastUrl) {
          lastUrl = currentUrl
          checkAndFixUrl()
        }
      }

      window.addEventListener('hashchange', handleHashChange)
      // 매우 빈번하게 체크
      const strongInterval = setInterval(strongUrlChecker, 50)

      return () => {
        window.removeEventListener('hashchange', handleHashChange)
        clearInterval(strongInterval)
      }
    }

    // 새로고침 시 즉시 URL 클리닝
    const handleLoad = () => {
      setTimeout(() => {
        const changed = checkAndFixUrl()
        if (changed) {
          console.log('URL fixed on page load')
        }
      }, 50)
    }

    // History API 오버라이드 강화
    const originalPushState = window.history.pushState
    const originalReplaceState = window.history.replaceState

    window.history.pushState = function(state, title, url) {
      if (url && typeof url === 'string') {
        const cleaned = cleanUrl(url.toString())
        if (cleaned !== url.toString()) {
          console.log('pushState cleaned:', url.toString(), '->', cleaned)
          return originalPushState.call(window.history, state, title, cleaned)
        }
      }
      return originalPushState.call(window.history, state, title, url)
    }

    window.history.replaceState = function(state, title, url) {
      if (url && typeof url === 'string') {
        const cleaned = cleanUrl(url.toString())
        if (cleaned !== url.toString()) {
          console.log('replaceState cleaned:', url.toString(), '->', cleaned)
          return originalReplaceState.call(window.history, state, title, cleaned)
        }
      }
      return originalReplaceState.call(window.history, state, title, url)
    }

    // 이벤트 리스너 및 옵저버 설정
    window.addEventListener('load', handleLoad)
    window.addEventListener('popstate', checkAndFixUrl)
    const cleanupObserver = observeUrlChanges()

    // 초기 확인
    checkAndFixUrl()

    // 일반적인 주기적 체크
    const interval = setInterval(checkAndFixUrl, 200)

    return () => {
      clearInterval(interval)
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('popstate', checkAndFixUrl)
      cleanupObserver()
      // History API 복원
      window.history.pushState = originalPushState
      window.history.replaceState = originalReplaceState
    }
  }, [location.pathname])

  // 어드민 경로인지 확인
  const isAdminRoute = location.pathname.startsWith('/admin')

  return (
    <Box
      minH="100vh"
      bg={isAdminRoute ? "white" : "#f7f7f7"}
      pb={isAdminRoute ? "0" : "80px"}
      maxW="100vw"
      mx="auto"
      position="relative"
    >
      {isAdminRoute ? (
        // 어드민 페이지: 전체 너비 사용
        <Routes>
          <Route path="/admin/password" element={<AdminPassword />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="home" element={<AdminHome />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="news/saveToGoogleSheets" element={<AdminNewsSave />} />
          </Route>
        </Routes>
      ) : (
        // 일반 사용자 페이지: 모바일 컨테이너 사용
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
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsDetailPage />} />
          </Routes>
          <BottomNav />
        </Box>
      )}
    </Box>
  )
}

export default App
