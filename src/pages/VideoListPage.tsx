import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Icon,
} from '@chakra-ui/react'
import { FiShoppingBag } from 'react-icons/fi'
import VideoCard from '../components/VideoCard'
import { mockVideos } from '../data/mockData'

const VideoListPage = () => {
  return (
    <Container maxW="container.md" py={{ base: 6, md: 8 }} px={{ base: 3, md: 4 }}>
      <VStack spacing={8} align="stretch">
        {/* 헤더 섹션 */}
        <Box textAlign="center" py={{ base: 3, md: 4 }}>
          <VStack spacing={{ base: 3, md: 4 }}>
            <Box>
              <Icon as={FiShoppingBag} w={{ base: 10, md: 12 }} h={{ base: 10, md: 12 }} color="brand.500" />
            </Box>
            <Heading
              size={{ base: 'lg', md: 'xl' }}
              color="gray.800"
              fontWeight="bold"
              lineHeight="1.2"
            >
              SsikAPickTem
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="gray.600"
              maxW="300px"
              lineHeight="1.5"
              px={2}
            >
              영상별 추천 상품을 한눈에! 🛍️
            </Text>
          </VStack>
        </Box>

        {/* 영상 카드 그리드 */}
        <SimpleGrid columns={1} spacing={{ base: 4, md: 6 }}>
          {mockVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </SimpleGrid>

      </VStack>
    </Container>
  )
}

export default VideoListPage