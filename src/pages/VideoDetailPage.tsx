import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react'
import { FiHeart, FiInfo } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
import ProductCard from '../components/ProductCard'
import AdSense from '../components/AdSense'
import SEO from '../components/SEO'
import { useVideos } from '../hooks/useVideos'

const VideoDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { videos: mockVideos } = useVideos()
  const [isLiked, setIsLiked] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  
  const video = mockVideos.find(v => v.id === id)

  // 이미지 갤러리 (메인 썸네일 + 상품 이미지들)
  const imageGallery = video
    ? [video.thumbnailUrl, ...video.products.slice(0, 4).map(p => p.imageUrl)]
    : []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [video])

  if (!video) {
    return (
      <Container maxW="container.md" py={8} px={4}>
        <VStack spacing={6}>
          <Text>영상을 찾을 수 없습니다.</Text>
        </VStack>
      </Container>
    )
  }

  // 평균 가격 계산
  const avgPrice = video.products.reduce((sum, p) => {
    const price = parseInt(p.price?.replace(/[^0-9]/g, '') || '0')
    return sum + price
  }, 0) / video.products.length

  // 동적 SEO 정보
  const pageTitle = `${video.title} - 씩아픽템`
  const pageDescription = `${video.description || video.title}에서 소개된 ${video.products.length}개의 추천 상품을 확인하세요.`
  const productNames = video.products.slice(0, 5).map(p => p.name).join(', ')
  const keywords = `${video.category || '추천템'}, ${productNames}, 인스타 쇼핑, 유튜브 쇼츠`

  // 구조화된 데이터 - 비디오 컨텐츠
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description || video.title,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.publishedAt || new Date().toISOString(),
    contentUrl: `https://ssikapicktem.co.kr/#/video/${video.id}`,
  }

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        ogImage={video.thumbnailUrl}
        ogType="video.other"
        canonical={`/#/video/${video.id}`}
        structuredData={structuredData}
      />
      <Box bg="white" minH="100vh">
        <MobileHeader 
          title=""
          showBack 
          onBack={() => navigate('/')} 
      />
      <VStack spacing={0} align="stretch">
        {/* 메인 이미지 갤러리 */}
        <Box
          position="relative"
          w="100%"
          h={{ base: '300px', md: '400px' }}
          bgImage={`url(${imageGallery[currentImage]})`}
          bgSize="cover"
          bgPosition="center"
          overflow="hidden"
        >
          {/* 이미지 인디케이터 (좌측 상단) */}
          {imageGallery.length > 1 && (
            <Box
              position="absolute"
              top={4}
              left={4}
              bg="rgba(0, 0, 0, 0.5)"
              color="white"
              px={3}
              py={1}
              borderRadius="12px"
              fontSize="12px"
              fontWeight="600"
              backdropFilter="blur(8px)"
            >
              {currentImage + 1}/{imageGallery.length}
            </Box>
          )}

          {/* 하트 아이콘 (우측 하단) */}
          <Box
            position="absolute"
            bottom={4}
            right={4}
            w="48px"
            h="48px"
            borderRadius="full"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            onClick={() => setIsLiked(!isLiked)}
            boxShadow="0 2px 8px rgba(0, 0, 0, 0.15)"
            _hover={{
              transform: 'scale(1.1)',
            }}
            transition="all 0.2s"
            zIndex={2}
          >
            <Icon
              as={FiHeart}
              w={6}
              h={6}
              color={isLiked ? '#ff6b6b' : '#868e96'}
              fill={isLiked ? '#ff6b6b' : 'none'}
              transition="all 0.2s"
            />
          </Box>

          {/* 이미지 네비게이션 점들 */}
          {imageGallery.length > 1 && (
            <HStack
              position="absolute"
              bottom={4}
              left="50%"
              transform="translateX(-50%)"
              spacing={1}
            >
              {imageGallery.map((_, index) => (
                <Box
                  key={index}
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg={index === currentImage ? 'white' : 'rgba(255, 255, 255, 0.5)'}
                  cursor="pointer"
                  onClick={() => setCurrentImage(index)}
                />
              ))}
            </HStack>
          )}
        </Box>

        <Container maxW="container.sm" py={6} px={4}>
          <VStack spacing={6} align="stretch">
            {/* 제목 */}
            <VStack spacing={2} align="flex-start">
              <Heading size="lg" color="#212529" fontWeight="700" lineHeight="1.4">
                {video.title}
              </Heading>
              {video.description && (
                <Text fontSize="15px" color="#868e96" lineHeight="1.5">
                  {video.description}
                </Text>
              )}
            </VStack>

            {/* 가격 정보 */}
            <Box>
              <Text fontSize="24px" fontWeight="700" color="#212529">
                평균 가격: ₩{Math.round(avgPrice).toLocaleString()}
              </Text>
              <Text fontSize="13px" color="#868e96" mt={1}>
                총 {video.products.length}개 상품
              </Text>
            </Box>

            {/* 정보 박스 (FRIP Care 스타일) */}
            <Box
              bg="#f8f9fa"
              borderRadius="12px"
              p={4}
              border="1px solid"
              borderColor="gray.100"
            >
              <HStack spacing={3}>
                <Box
                  w="40px"
                  h="40px"
                  borderRadius="8px"
                  bg="#48bb78"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexShrink={0}
                >
                  <Icon as={FiInfo} w={5} h={5} color="white" />
                </Box>
                <VStack spacing={0} align="flex-start" flex={1}>
                  <Text fontSize="14px" fontWeight="600" color="#212529">
                    씩아픽템 추천 상품
                  </Text>
                  <Text fontSize="12px" color="#868e96" lineHeight="1.4">
                    영상에서 추천한 상품들을 한눈에 확인하고 구매하세요
                  </Text>
                </VStack>
                <Icon as={FiInfo} w={4} h={4} color="#868e96" cursor="pointer" />
              </HStack>
            </Box>

            {/* 구글 광고 배너 */}
            <Box 
              position="relative"
              borderRadius="12px"
              overflow="hidden"
              minH="120px"
              bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            >
              {/* 플레이스홀더 배경 (광고가 로드되지 않았을 때) */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                display="flex"
                alignItems="center"
                justifyContent="center"
                zIndex={1}
                pointerEvents="none"
              >
                <VStack spacing={2}>
                  <Text color="white" fontSize="14px" fontWeight="600" opacity={0.9}>
                    Google 광고
                  </Text>
                  <Text color="rgba(255, 255, 255, 0.7)" fontSize="11px">
                    광고가 곧 표시됩니다
                  </Text>
                </VStack>
              </Box>
              
              {/* 실제 광고 (로드되면 플레이스홀더 위에 표시) */}
              <Box 
                position="relative" 
                zIndex={2} 
                w="100%"
                minH="120px"
                bg="transparent"
              >
                <AdSense
                  adSlot="9944590930"
                  adFormat="horizontal"
                  style={{
                    display: 'block',
                    minHeight: '120px',
                    width: '100%',
                    backgroundColor: 'transparent',
                  }}
                  fullWidthResponsive={true}
                />
              </Box>
            </Box>

            {/* 상품 리스트 */}
            <Box>
              <Heading size="md" color="#212529" fontWeight="700" mb={4}>
                추천 상품 ({video.products.length}개)
              </Heading>
              <VStack spacing={4}>
                {video.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </VStack>
            </Box>
          </VStack>
        </Container>
      </VStack>
    </Box>
    </>
  )
}

export default VideoDetailPage
