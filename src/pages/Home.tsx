import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Button,
  Flex,
  Icon,
  Image,
} from '@chakra-ui/react'
import { 
  FiHome, 
  FiMonitor, 
  FiScissors, 
  FiShoppingBag, 
  FiCoffee, 
  FiPackage, 
  FiActivity, 
  FiTrendingUp, 
  FiBook, 
  FiHeart 
} from 'react-icons/fi'
import VideoCard from '../components/VideoCard'
import MobileHeader from '../components/MobileHeader'
import AdSense from '../components/AdSense'
import { useVideos } from '../hooks/useVideos'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const Home = () => {
  const navigate = useNavigate()
  const { videos: mockVideos } = useVideos()
  const [currentBanner, setCurrentBanner] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const autoSlideRef = useRef<number | null>(null)
  const [showAdPlaceholder, setShowAdPlaceholder] = useState(true)

  // 배너 이미지 (상품 판매 사이트)
  // Unsplash License: 상업적 사용 포함 자유롭게 사용 가능
  const banners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&auto=format&fit=crop',
      title: '최신 전자제품 특가',
      subtitle: '파트너사 수입 상품 최대 30% 할인',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop',
      title: '인기 가구 모음',
      subtitle: '트렌디한 홈 인테리어 아이템',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop',
      title: '뷰티&미용 특별전',
      subtitle: '프리미엄 미용 제품 특가',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
      title: '패션 아이템 신상',
      subtitle: '스타일리시한 패션 상품 모음',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&auto=format&fit=crop',
      title: '주방용품 세일',
      subtitle: '실용적인 주방 아이템 특가',
    },
  ]

  // 자동 슬라이드
  useEffect(() => {
    autoSlideRef.current = window.setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 4000) // 4초마다 자동 슬라이드

    return () => {
      if (autoSlideRef.current) {
        window.clearInterval(autoSlideRef.current)
      }
    }
  }, [banners.length])

  // 광고 로드 감지 (5초 후 placeholder 숨김)
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowAdPlaceholder(false)
    }, 5000)

    // 광고가 로드되었는지 확인 (MutationObserver 사용)
    const adContainer = document.querySelector('.adsbygoogle')
    if (adContainer) {
      const observer = new MutationObserver(() => {
        // 광고 iframe이 추가되었는지 확인
        const hasAdContent = adContainer.querySelector('iframe')
        if (hasAdContent) {
          setShowAdPlaceholder(false)
          observer.disconnect()
        }
      })

      observer.observe(adContainer, {
        childList: true,
        subtree: true,
      })

      return () => {
        window.clearTimeout(timer)
        observer.disconnect()
      }
    }

    return () => {
      window.clearTimeout(timer)
    }
  }, [])

  // 스와이프 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentBanner < banners.length - 1) {
      setCurrentBanner(currentBanner + 1)
    }
    if (isRightSwipe && currentBanner > 0) {
      setCurrentBanner(currentBanner - 1)
    }

    // 자동 슬라이드 재시작
    if (autoSlideRef.current) {
      window.clearInterval(autoSlideRef.current)
    }
    autoSlideRef.current = window.setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length)
    }, 4000)
  }

  // 카테고리 데이터 (상품 판매 사이트)
  const categories = [
    { icon: FiHome, label: '가구', color: '#667eea' },
    { icon: FiMonitor, label: '전자제품', color: '#f093fb' },
    { icon: FiScissors, label: '미용', color: '#f5576c' },
    { icon: FiShoppingBag, label: '패션', color: '#4facfe' },
    { icon: FiCoffee, label: '주방용품', color: '#43e97b' },
    { icon: FiPackage, label: '생활용품', color: '#fa709a' },
    { icon: FiActivity, label: '건강/의료', color: '#fee140' },
    { icon: FiTrendingUp, label: '스포츠/레저', color: '#ff6b6b' },
    { icon: FiBook, label: '도서/문구', color: '#38f9d7' },
    { icon: FiHeart, label: '반려동물용품', color: '#764ba2' },
  ]

  return (
    <Box bg="white" minH="100vh">
      <MobileHeader title="씩아픽템" showNotification notificationCount={0} />
      <Container maxW="container.sm" px={0}>
        <VStack spacing={0} align="stretch">
          {/* 내부 광고 스와이프 배너 */}
          <Box
            position="relative"
            w="100%"
            h={{ base: '200px', md: '240px' }}
            overflow="hidden"
            bg="gray.100"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            cursor="grab"
            _active={{ cursor: 'grabbing' }}
          >
            <Flex
              transform={`translateX(-${currentBanner * 100}%)`}
              transition="transform 0.5s ease"
              h="100%"
            >
              {banners.map((banner) => (
                <Box
                  key={banner.id}
                  minW="100%"
                  h="100%"
                  position="relative"
                  overflow="hidden"
                  bgGradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                >
                  {/* 배경 이미지 */}
                  <Image
                    src={banner.image}
                    alt={banner.title}
                    position="absolute"
                    top={0}
                    left={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    objectPosition="center"
                  />
                  {/* 다크 오버레이 */}
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bg="rgba(0, 0, 0, 0.4)"
                    zIndex={1}
                  />
                  {/* 텍스트 */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={6}
                    color="white"
                    zIndex={2}
                  >
                    <Text fontSize="20px" fontWeight="700" mb={1}>
                      {banner.title}
                    </Text>
                    <Text fontSize="14px" opacity={0.9}>
                      {banner.subtitle}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Flex>
            {/* 페이지네이션 인디케이터 */}
            <HStack
              position="absolute"
              bottom={4}
              right={4}
              spacing={1}
              bg="rgba(0, 0, 0, 0.5)"
              px={2}
              py={1}
              borderRadius="12px"
              zIndex={2}
            >
              {banners.map((_, index) => (
                <Box
                  key={index}
                  w="6px"
                  h="6px"
                  borderRadius="full"
                  bg={index === currentBanner ? 'white' : 'rgba(255, 255, 255, 0.5)'}
                  cursor="pointer"
                  onClick={() => {
                    setCurrentBanner(index)
                    // 자동 슬라이드 재시작
                    if (autoSlideRef.current) {
                      window.clearInterval(autoSlideRef.current)
                    }
                    autoSlideRef.current = window.setInterval(() => {
                      setCurrentBanner((prev) => (prev + 1) % banners.length)
                    }, 4000)
                  }}
                />
              ))}
            </HStack>
          </Box>

          <Container maxW="container.sm" py={6} px={4}>
            <VStack spacing={6} align="stretch">
              {/* 카테고리 10개 */}
              <SimpleGrid columns={5} spacing={4}>
                {categories.map((category, index) => (
                  <Box
                    key={index}
                    textAlign="center"
                    cursor="pointer"
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="transform 0.2s"
                    onClick={() => navigate('/list?category=' + category.label)}
                  >
                    <Box
                      w="56px"
                      h="56px"
                      borderRadius="12px"
                      bg={`${category.color}15`}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mx="auto"
                      mb={2}
                    >
                      <Icon
                        as={category.icon}
                        w={7}
                        h={7}
                        color={category.color}
                      />
                    </Box>
                    <Text fontSize="11px" color="#212529" fontWeight="500">
                      {category.label}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>

              {/* 주간 인기 BEST 섹션 */}
              <Box>
                <HStack justify="space-between" align="center" mb={4}>
                  <HStack spacing={2}>
                    <Heading size="lg" color="#212529" fontWeight="700">
                      주간 인기 BEST
                    </Heading>
                    <Text fontSize="lg">🏆</Text>
                  </HStack>
                </HStack>

                {/* 가로 스크롤 카드 */}
                <Box
                  overflowX="auto"
                  css={{
                    '&::-webkit-scrollbar': {
                      display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <Flex gap={3} pb={2}>
                    {mockVideos.slice(0, 6).map((video) => (
                      <Box
                        key={video.id}
                        w={{ base: '70vw', md: '180px' }}
                        flexShrink={0}
                      >
                        <VideoCard video={video} />
                      </Box>
                    ))}
                  </Flex>
                </Box>
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
                {showAdPlaceholder && (
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
                )}
                
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

              {/* 최근 영상 섹션 */}
              <Box>
                <HStack justify="space-between" align="center" mb={4}>
                  <HStack spacing={2}>
                    <Heading size="lg" color="#212529" fontWeight="700">
                      최근 영상
                    </Heading>
                  </HStack>
                  <Button
                    variant="ghost"
                    size="sm"
                    fontSize="13px"
                    color="#868e96"
                    fontWeight="500"
                    _hover={{ color: '#212529', bg: 'transparent' }}
                    onClick={() => navigate('/list')}
                  >
                    전체보기
                  </Button>
                </HStack>
                <SimpleGrid columns={2} spacing={3}>
                  {[...mockVideos].reverse().slice(0, 6).map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </SimpleGrid>
              </Box>
            </VStack>
          </Container>
        </VStack>
      </Container>
    </Box>
  )
}

export default Home
