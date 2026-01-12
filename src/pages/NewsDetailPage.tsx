import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Button,
  useToast
} from '@chakra-ui/react'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
 import EventAdBanner from '../components/EventAdBanner'
import { getNews, NewsArticle } from '../services/googleSheets'
import SEO from '../components/SEO'
import { KakaoAdDirect } from './Home'

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const toast = useToast()
  const [newsAdViewed, setNewsAdViewed] = useState<string[]>([])
  const [isFullView, setIsFullView] = useState(false)
  const [iframeHeight, setIframeHeight] = useState<number>(600)
  const [news, setNews] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [ogImage, setOgImage] = useState<string>('')

  // 뉴스 데이터 로드
  useEffect(() => {
    const loadNews = async () => {
      if (!id) {
        setLoading(false)
        return
      }

      try {
        const newsData = await getNews()
        const foundNews = newsData.find(n => n.id === id)
        setNews(foundNews || null)
      } catch (error) {
        console.error('Failed to load news:', error)
        setNews(null)
      } finally {
        setLoading(false)
      }
    }

    loadNews()
  }, [id])

  // iframe 높이 설정
  useEffect(() => {
    console.log({news});

    if (news) {
      // Google Sheets 뉴스 데이터는 URL만 있으므로 기본값 사용
      setIframeHeight(600)
    }
  }, [news])

  // 로컬 스토리지에서 광고를 본 뉴스 목록 불러오기
  useEffect(() => {
    const viewed = localStorage.getItem('newsAdViewed')
    if (viewed) {
      try {
        const parsed = JSON.parse(viewed)
        if (Array.isArray(parsed)) {
          setNewsAdViewed(parsed)
          // 이미 광고를 본 뉴스라면 바로 전체 표시
          if (parsed.includes(id || '')) {
            setIsFullView(true)
          }
        }
      } catch (error) {
        console.error('Failed to parse newsAdViewed from localStorage:', error)
        setNewsAdViewed([])
      }
    }
  }, [id])

  // 광고 클릭을 통한 전체 보기 활성화 (페이지 이탈 감지 제거)
  // 배포 환경에서는 페이지 이탈 이벤트가 제대로 작동하지 않으므로
  // 명시적인 클릭 액션으로만 전체 보기를 허용

  // 광고를 본 뉴스를 로컬 스토리지에 저장
  const markNewsAdViewed = (newsId: string) => {
    if (!newsAdViewed.includes(newsId)) {
      const newViewed = [...newsAdViewed, newsId]
      setNewsAdViewed(newViewed)
      localStorage.setItem('newsAdViewed', JSON.stringify(newViewed))
    }
  }

  const handleAdClick = () => {
    if (news) {
      markNewsAdViewed(news.id)
      setIsFullView(true)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (loading) {
    return (
      <Box bg="#f7f7f7" minH="100vh" pb="100px">
        <MobileHeader title="로딩 중..." />
        <Container maxW="container.sm" py={4} px={4}>
          <VStack spacing={4} align="center">
            <Text>뉴스를 불러오는 중입니다...</Text>
          </VStack>
        </Container>
      </Box>
    )
  }

  if (!news) {
    return (
      <Box bg="#f7f7f7" minH="100vh" pb="100px">
        <MobileHeader title="뉴스를 찾을 수 없습니다" />
        <Container maxW="container.sm" py={4} px={4}>
          <VStack spacing={4} align="center">
            <Text>요청하신 뉴스를 찾을 수 없습니다.</Text>
            <Button onClick={() => navigate('/news')}>뉴스 목록으로 돌아가기</Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  return (
    <>
      {/* SEO 설정 */}
      <SEO
        title={`${news.title} - SsikAPickTem 뉴스`}
        description={news.summary}
        ogImage={ogImage || news.imageUrl}
        canonical={`/news/${news.id}`}
        ogType="article"
      />

      <Box bg="#f7f7f7" minH="100vh">

        <Container maxW="container.sm" py={4} px={4}>
        <VStack spacing={4} align="stretch">
          {/* 뒤로가기 버튼 */}
          <Button
            leftIcon={<FiArrowLeft />}
            variant="ghost"
            alignSelf="flex-start"
            onClick={() => navigate('/news')}
            size="sm"
          >
            뉴스 목록으로 돌아가기
          </Button>

          {/* 뉴스 상단 20% + 블러 효과 + 광고 */}
          {!isFullView && (
            <VStack spacing={4} align="stretch">
              {/* 뉴스 iframe + 블러 오버레이 */}
              <Box
                position="relative"
                borderRadius="12px"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.200"
                bg="white"
                height={`1500px`} // 동적 높이 설정
              >
                <iframe
                  src={news.url}
                  width="100%"
                  height="100%" // 부모 높이 100%
                  style={{
                    border: 'none',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    pointerEvents: 'none' // 스크롤 및 클릭 방지
                  }}
                  scrolling="no" // HTML 속성으로 스크롤 방지
                  title={news.title}
                />

                {/* 블러 오버레이 - 광고 클릭 유도 */}
                <Box
                  position="absolute"
                  top="90%"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.8), white)"
                  backdropFilter="blur(4px)"
                  borderRadius="0 0 12px 12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={handleAdClick}
                  _hover={{ bg: "linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.9), white)" }}
                  transition="all 0.2s"
                >
                  <VStack spacing={2}>
                    <Text color="gray.700" fontSize="md" fontWeight="bold" textAlign="center">
                      나머지 내용 보기
                    </Text>
                    <Text color="gray.600" fontSize="sm" textAlign="center">
                      이 영역을 클릭하세요
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      👆
                    </Text>
                  </VStack>
                </Box>
              </Box>

              {/* 광고 배너 - 클릭 시 전체 보기 허용 */}
              <Box
                onClick={handleAdClick}
                cursor="pointer"
                borderRadius="8px"
                overflow="hidden"
                _hover={{ shadow: 'md' }}
                transition="all 0.2s"
              >
                <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />
              </Box>
            </VStack>
          )}

          {/* 뉴스 전체 표시 */}
          {isFullView && (
            <VStack spacing={4} align="stretch" h={'calc(100vh - 150px)'}>
              <Box
                borderRadius="12px"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.200"
                bg="white"
                height={`100%`}
              >
                <iframe
                  src={news.url}
                  width="100%"
                  height="100%"
                  style={{
                    border: 'none',
                    borderRadius: '12px'
                  }}
                  title={news.title}
                />
              </Box>

              <Button
                rightIcon={<FiExternalLink />}
                colorScheme="blue"
                variant="outline"
                size="sm"
                alignSelf="center"
                onClick={() => window.open(news.url, '_blank')}
              >
                새 창에서 열기
              </Button>
            </VStack>
          )}
        </VStack>
      </Container>
    </Box>
    </>
  )
}

export default NewsDetailPage
