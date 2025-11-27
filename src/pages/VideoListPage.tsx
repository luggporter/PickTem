import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  Image,
} from '@chakra-ui/react'
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
              <Image 
                src="/PickTem/SsikaPicktem_logo1.png" 
                alt="SsikAPickTem 로고" 
                w={{ base: '100px', md: '100px' }} 
                h={{ base: '100px', md: '100px' }} 
                objectFit="contain"
              />
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
              영상별 추천 상품을 한눈에! <br />
              상품 추천은 역시 씩아픽템 🐶🐈
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