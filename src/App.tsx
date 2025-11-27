import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import VideoListPage from './pages/VideoListPage'
import VideoDetailPage from './pages/VideoDetailPage'

function App() {
  return (
    <Box minH="100vh" bg="gray.100">
      <Routes>
        <Route path="/PickTem" element={<VideoListPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
      </Routes>
    </Box>
  )
}

export default App
