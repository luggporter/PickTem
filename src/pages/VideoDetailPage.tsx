import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  HStack,
  Heading,
  Icon,
  Text,
  VStack
} from '@chakra-ui/react'
import { FiArrowLeft, FiCalendar } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { mockVideos } from '../data/mockData'

const VideoDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const video = mockVideos.find(v => v.id === id)

  if (!video) {
    return (
      <Container maxW="container.md" py={8} px={4}>
        <VStack spacing={6}>
          <Text>영상을 찾을 수 없습니다.</Text>
          <Button onClick={() => navigate('/')}>
            홈으로 돌아가기
          </Button>
        </VStack>
      </Container>
    )
  }

  return (
    <Container maxW="container.md" py={{ base: 4, md: 6 }} px={{ base: 4, md: 4 }}>
      <VStack spacing={6} align="stretch">
        {/* 뒤로가기 버튼 */}
        <HStack>
          <Button
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            color="gray.600"
          >
            다른 영상 보러가기
          </Button>
        </HStack>

        {/* 영상 정보 섹션 */}
        <Box>
          <VStack spacing={4} align="stretch">
            <VStack spacing={3} align="stretch">
              <Heading size="lg" color="gray.800" lineHeight="1.3">
                {video.title}
              </Heading>
              
              {video.publishedAt && (
                <HStack color="gray.500" fontSize="sm">
                  <Icon as={FiCalendar} />
                  <Text>{video.publishedAt}</Text>
                </HStack>
              )}
              
              <Text color="gray.600" lineHeight="1.6" fontSize="md">
                {video.description}
              </Text>
            </VStack>
          </VStack>
        </Box>

        <Divider />

        {/* 상품 리스트 섹션 */}
        <Box>
          <VStack spacing={4} align="stretch">
            <HStack justify="space-between" align="center">
              <Heading size="md" color="gray.800">
                이 영상에서 소개한 상품들
              </Heading>
              <Badge colorScheme="brand" variant="subtle" px={3} py={1}>
                {video.products.length}개
              </Badge>
            </HStack>
            
            <Text fontSize="sm" color="gray.500" textAlign="center">
              💡 상품을 클릭하면 구매 페이지로 바로 이동합니다
            </Text>

            <VStack spacing={4}>
              {video.products.map((product) => (
                <ProductCard key={product.id} product={product}  />
              ))}
            </VStack>
          </VStack>
        </Box>

        {/* 하단 네비게이션 */}
        <Box pt={6} pb={4}>
          <Button
            width="100%"
            variant="outline"
            onClick={() => navigate('/')}
            size="lg"
          >
            다른 영상도 보러가기 🎬
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default VideoDetailPage