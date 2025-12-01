import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  HStack,
} from '@chakra-ui/react'
import VideoCard from '../components/VideoCard'
import MobileHeader from '../components/MobileHeader'
import { mockVideos } from '../data/mockData'

const VideoListPage = () => {
  return (
    <Box>
      <MobileHeader title="Discover" showNotification notificationCount={9} />
      <Container maxW="container.sm" py={4} px={4}>
      <VStack spacing={6} align="stretch">
        {/* 섹션 헤더 */}
        <Box mb={2}>
          <HStack justify="space-between" align="center" mb={4}>
            <Heading size="lg" color="#212529" fontWeight="700">
              Popular Exercises
            </Heading>
            <Text fontSize="14px" color="#868e96" cursor="pointer">
              See more →
            </Text>
          </HStack>
        </Box>

        {/* 영상 카드 그리드 */}
        <SimpleGrid columns={1} spacing={4}>
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </SimpleGrid>

        {/* Our Collection 섹션 */}
        <Box mt={6}>
          <Heading size="lg" color="#212529" fontWeight="700" mb={4}>
            Our Collection
          </Heading>
          <SimpleGrid columns={1} spacing={4}>
            {mockVideos.slice(0, 2).map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
      </Container>
    </Box>
  )
}

export default VideoListPage