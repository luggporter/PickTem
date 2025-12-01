import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import VideoListPage from './pages/VideoListPage'
import VideoDetailPage from './pages/VideoDetailPage'
import BottomNav from './components/BottomNav'

function App() {
  return (
    <Box minH="100vh" bg="#f7f7f7" pb="80px">
      <Routes>
        <Route path="/" element={<VideoListPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
      </Routes>
      <BottomNav />
    </Box>
  )
}

export default App
