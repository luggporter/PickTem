import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Flex,
} from '@chakra-ui/react'
import VideoCard from '../components/VideoCard'
import MobileHeader from '../components/MobileHeader'
import { mockVideos } from '../data/mockData'
import { useNavigate } from 'react-router-dom'

const VideoListPage = () => {
  const navigate = useNavigate()
  
  return (
    <Box bg="#f7f7f7" minH="100vh">
      <MobileHeader title="씩아픽템 홈" showNotification notificationCount={0} />
      <Container maxW="container.sm" py={4} px={4}>
        <VStack spacing={5} align="stretch">
          {/* 섹션 헤더 */}
          <Box>
            <HStack justify="space-between" align="center">
              <Heading size="md" color="#212529" fontWeight="700">
                조회수 높은 아이템
              </Heading>
              <Text 
                fontSize="13px" 
                color="#868e96" 
                cursor="pointer"
                onClick={() => navigate('/popular')}
                _hover={{ color: '#212529' }}
                transition="color 0.2s"
                fontWeight="500"
              >
                더보기 →
              </Text>
            </HStack>
          </Box>

          {/* 영상 카드 가로 스크롤 */}
          <Box
            overflowX="auto"
            overflowY="hidden"
            css={{
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              '&::-webkit-scrollbar': {
                display: 'none',
              },
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <Flex gap={3} pb={2}>
              {mockVideos.map((video) => (
                <Box
                  key={video.id}
                  w={{base: '75vw', md: '280px'}}
                  flexShrink={0}
                  css={{
                    scrollSnapAlign: 'start',
                    scrollSnapStop: 'always',
                  }}
                >
                  <VideoCard video={video} />
                </Box>
              ))}
            </Flex>
          </Box>

          {/* 최근 영상 섹션 */}
          <Box mt={2}>
            <Heading size="md" color="#212529" fontWeight="700" mb={4}>
              최근 영상
            </Heading>
            <SimpleGrid columns={1} spacing={3}>
              {[...mockVideos].reverse().slice(0, 3).map((video) => (
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
