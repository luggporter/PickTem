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

  // Git Pages SPA 라우팅을 위한 URL 변환 처리
  useEffect(() => {
    const processGitPagesUrl = (url: string): string => {
      try {
        const urlObj = new URL(url)

        // Git Pages에서 변환된 URL 처리 (?/path 형식)
        if (urlObj.search.startsWith('?/')) {
          const path = '/' + urlObj.search.slice(2) // ?/ 제거하고 / 추가
          return urlObj.origin + path + urlObj.hash
        }

        return url
      } catch {
        return url
      }
    }

    const checkAndFixUrl = () => {
      const currentUrl = window.location.href
      const processed = processGitPagesUrl(currentUrl)

      if (currentUrl !== processed) {
        console.log('URL processed:', currentUrl, '->', processed)
        // 처리된 URL로 복원 (replaceState 사용)
        window.history.replaceState(null, '', processed)
        return true // 변경됨을 표시
      }
      return false
    }

    // 페이지 로드 시 URL 처리
    const handleLoad = () => {
      setTimeout(() => {
        checkAndFixUrl()
      }, 10)
    }

    window.addEventListener('load', handleLoad)
    // 초기 확인
    checkAndFixUrl()

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

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
