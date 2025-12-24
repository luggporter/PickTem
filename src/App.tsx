import { Routes, Route, useLocation } from 'react-router-dom'
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

  useEffect(() => {
    // 페이지 변경 시 방문 로그 전송
    const path = location.pathname + location.search
    logPageView(path)
  }, [location])

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
