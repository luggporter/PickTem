import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Home from './pages/Home'
import VideoDetailPage from './pages/VideoDetailPage'
import PopularItemsPage from './pages/PopularItemsPage'
import BottomNav from './components/BottomNav'
import PickTemList from './pages/PickTemList'

function App() {
  return (
    <Box minH="100vh" bg="#f7f7f7" pb="80px">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<PickTemList />} />
        <Route path="/popular" element={<PopularItemsPage />} />
        <Route path="/video/:id" element={<VideoDetailPage />} />
      </Routes>
      <BottomNav />
    </Box>
  )
}

export default App
