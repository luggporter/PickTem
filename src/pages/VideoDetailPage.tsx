import {
  Box,
  Button,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FiPackage, FiTrendingUp } from 'react-icons/fi'
import { useNavigate, useParams } from 'react-router-dom'
import AdSense from '../components/AdSense'
import MobileHeader from '../components/MobileHeader'
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

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [video])

  // 통계 데이터 계산
  const totalProducts = video.products.length
  const avgPrice = video.products.reduce((sum, p) => {
    const price = parseInt(p.price?.replace(/[^0-9]/g, '') || '0')
    return sum + price
  }, 0) / totalProducts

  return (
    <Box bg="#1a1a1a" minH="100vh">
      <MobileHeader 
        title={video?.title}
        showBack 
        onBack={() => navigate('/')} 
      />
      <Container maxW="container.sm" py={6} px={4}>
        <VStack spacing={6} align="stretch">

        {/* 메인 통계 카드 */}
        {/* <Card bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" borderRadius="20px" overflow="hidden">
          <CardBody p={6}>
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between" align="center">
                <Text color="rgba(255, 255, 255, 0.9)" fontSize="14px" fontWeight="500">
                  Current Weight
                </Text>
                <Text color="rgba(255, 255, 255, 0.7)" fontSize="12px">
                  Weekly
                </Text>
              </HStack>
              <Heading size="2xl" color="white" fontWeight="700">
                {totalProducts}개
              </Heading>
              <Text color="rgba(255, 255, 255, 0.8)" fontSize="14px">
                상품 추천 완료
              </Text>
            </VStack>
          </CardBody>
        </Card> */}

        {/* 통계 그리드 */}
        <SimpleGrid columns={2} spacing={4}>
          <Card bg="#2a2a2a" borderRadius="16px" border="1px solid" borderColor="#3a3a3a">
            <CardBody p={4}>
              <VStack spacing={2} align="flex-start">
                <HStack spacing={2}>
                  <Icon as={FiPackage} color="#43e97b" w={5} h={5} />
                  <Text color="rgba(255, 255, 255, 0.7)" fontSize="12px">
                    상품 수
                  </Text>
                </HStack>
                <Text color="white" fontSize="24px" fontWeight="700">
                  {totalProducts}
                </Text>
              </VStack>
            </CardBody>
          </Card>

          <Card bg="#2a2a2a" borderRadius="16px" border="1px solid" borderColor="#3a3a3a">
            <CardBody p={4}>
              <VStack spacing={2} align="flex-start">
                <HStack spacing={2}>
                  <Icon as={FiTrendingUp} color="#4facfe" w={5} h={5} />
                  <Text color="rgba(255, 255, 255, 0.7)" fontSize="12px">
                    평균 가격
                  </Text>
                </HStack>
                <Text color="white" fontSize="24px" fontWeight="700">
                  ₩{Math.round(avgPrice).toLocaleString()}
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>

        {/* 차트 영역 */}
        <Card bg="#2a2a2a" borderRadius="16px" border="1px solid" borderColor="#3a3a3a">
          <CardBody p={6}>
            <VStack spacing={4} align="stretch">
              <Heading size="md" color="white" fontWeight="700">
                상품 분포
              </Heading>
              <Box>
                <VStack spacing={3} align="stretch">
                  {video.products.slice(0, 5).map((product) => {
                    return (
                      <Box key={product.id}>
                        <HStack justify="space-between" mb={2}>
                          <Text color="rgba(255, 255, 255, 0.9)" fontSize="13px" noOfLines={1} flex={1}>
                            {product.name}
                          </Text>
                          <Text color="rgba(255, 255, 255, 0.7)" fontSize="12px">
                            {product.price}
                          </Text>
                        </HStack>
                      </Box>
                    )
                  })}
                </VStack>
              </Box>
            </VStack>
          </CardBody>
        </Card>


        {/* 상품 리스트 섹션 */}
        <Box>
            <VStack spacing={4} align="stretch">
              

            {/* 광고 */}
            <Box py={4} display="flex" justifyContent="center">
              <AdSense 
                adSlot="1234567890" 
                adFormat="auto"
                style={{ display: 'block', minHeight: '100px' }}
              />
              </Box>
              <Text fontSize="14px" color="rgba(255, 255, 255, 0.7)" textAlign="center">
              💡 상품을 클릭하면 구매 페이지로 바로 이동합니다
            </Text>

            <VStack spacing={4}>
              {video.products.map((product) => (
                <ProductCard key={product.id} product={product}  />
              ))}
            </VStack>
          </VStack>
        </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default VideoDetailPage