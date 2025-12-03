import {
  Box,
  Container,
  HStack,
  Heading,
  Text,
  VStack,
  Button,
  SimpleGrid,
  Image,
} from '@chakra-ui/react'
import { useEffect, useState, useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
import VideoCard from '../components/VideoCard'
import { useVideos } from '../hooks/useVideos'

const PickTemList = () => {
  const navigate = useNavigate()
  const { videos: mockVideos } = useVideos()
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || '전체'
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam)

  // 카테고리 목록 (상품 판매 사이트)
  const categories: string[] = [
    '전체',
    '생활용품',
    '가구',
    '전자제품',
    '미용',
    '패션',
    '주방용품',
    '건강/의료',
    '스포츠/레저',
    '도서/문구',
    '반려동물용품',
  ]

  // URL 파라미터 변경 시 카테고리 업데이트
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || '전체'
    if (categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [searchParams])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // 카테고리 변경 핸들러
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === '전체') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  // 필터링된 비디오 목록
  const filteredVideos = useMemo(() => {
    if (selectedCategory === '전체') {
      return mockVideos
    }
    return mockVideos.filter(v => v.category === selectedCategory)
  }, [selectedCategory])

  // 무작위 슬픈 이미지 선택 (카테고리 변경 시마다 새로운 이미지)
  const randomSadImage = useMemo(() => {
    const images = ['/SadAri.png', '/SadSsikSsiki.png']
    return images[Math.floor(Math.random() * images.length)]
  }, [selectedCategory])

  return (
    <Box bg="white" minH="100vh">
      <MobileHeader
        title="상품 리스트"
        showBack
        onBack={() => navigate('/')}
      />
      <Container maxW="container.sm" px={0}>
        <VStack spacing={0} align="stretch">
          {/* 카테고리 탭 (가로 스크롤) */}
          <Box
            px={4}
            py={3}
            borderBottom="1px solid"
            borderColor="gray.100"
            bg="white"
            position="sticky"
            top="60px"
            zIndex={10}
          >
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
              <HStack spacing={2} pb={2}>
                {categories.map((cat) => (
                  <Button
                    key={cat}
                    size="sm"
                    bg={selectedCategory === cat ? '#212529' : 'white'}
                    color={selectedCategory === cat ? 'white' : '#212529'}
                    borderRadius="20px"
                    px={4}
                    fontSize="13px"
                    fontWeight="600"
                    onClick={() => handleCategoryChange(cat)}
                    _hover={{
                      bg: selectedCategory === cat ? '#1a1a1a' : 'gray.50',
                    }}
                    border="1px solid"
                    borderColor={selectedCategory === cat ? '#212529' : 'gray.200'}
                    flexShrink={0}
                    transition="all 0.2s"
                  >
                    {cat}
                  </Button>
                ))}
              </HStack>
            </Box>

          
          </Box>

          <Container maxW="container.sm" py={4} px={4}>
            <VStack spacing={5} align="stretch">
              {/* 섹션 헤더 */}
              <HStack justify="space-between" align="center">
                <Heading size="lg" color="#212529" fontWeight="700">
                  {selectedCategory === '전체' 
                    ? `전체 영상` 
                    : `${selectedCategory}`}
                </Heading>
               
              </HStack>

              {/* 2열 그리드 */}
              <SimpleGrid columns={2} spacing={3}>
                {filteredVideos.map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </SimpleGrid>

              {/* 결과 없음 */}
              {filteredVideos.length === 0 && (
                <Box textAlign="center" py={16}>
                  <VStack spacing={6}>
                    {/* 우는 느낌의 로고 */}
                    <Box
                      position="relative"
                      w="120px"
                      h="120px"
                      mx="auto"
                      opacity={0.9}
                      transition="all 0.3s ease"
                    >
                      <Image
                        src={randomSadImage}
                        alt="슬퍼하는 캐릭터"
                        w="100%"
                        h="100%"
                        objectFit="contain"
                      />
                    </Box>

                    {/* 텍스트 */}
                    <VStack spacing={3}>
                      <Heading size="md" color="#212529" fontWeight="700">
                        아직 {selectedCategory === '전체' ? '등록된' : selectedCategory + ' 카테고리의'} 영상이 없어요 😢
                      </Heading>
                      <Text color="#868e96" fontSize="15px" lineHeight="1.6" maxW="300px">
                        빨리 좋은 상품 찾아서 올릴게요!
                        <br />
                        조금만 기다려주세요 🐾
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              )}
            </VStack>
          </Container>
        </VStack>
      </Container>
    </Box>
  )
}

export default PickTemList
