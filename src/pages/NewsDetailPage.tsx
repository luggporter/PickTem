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
 import { newsData, NewsItem } from '../data/newsData'
import { KakaoAdDirect } from './Home'

const NewsDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const toast = useToast()
  const [newsAdViewed, setNewsAdViewed] = useState<string[]>([])
  const [isFullView, setIsFullView] = useState(false)
  const [iframeHeight, setIframeHeight] = useState<number>(600)

  // 뉴스 데이터 찾기
  const news = newsData.find(n => n.id === id)

  // iframe 높이 설정
  useEffect(() => {
    console.log({news});
    
    if (news) {
      // 뉴스 데이터의 fullHeight 사용, 없으면 기본값 600px
      setIframeHeight(news.fullHeight || 600)
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

  // 페이지 이탈 감지 - 모든 경우에 광고 클릭으로 간주 (새로고침 제외)
  useEffect(() => {
    let isRefreshing = false
    let hasProcessedAdClick = false // 중복 실행 방지

    // 새로고침 감지용 이벤트
    const handleKeyDown = (e: KeyboardEvent) => {
      // F5, Ctrl+R, Cmd+R 새로고침 감지
      if (e.key === 'F5' || (e.ctrlKey && e.key === 'r') || (e.metaKey && e.key === 'r')) {
        isRefreshing = true
        setTimeout(() => { isRefreshing = false }, 100)
      }
    }

    // 브라우저 탭 전환 감지 (다른 탭으로 이동)
    const handleVisibilityChange = () => {
      if (document.hidden && id && !newsAdViewed.includes(id) && !isRefreshing && !hasProcessedAdClick) {
        console.log('탭 전환 감지 - 광고 클릭 처리:', id)
        hasProcessedAdClick = true
        handleAdClick()
      }
    }

    // 창 포커스 잃음 감지 (새 창 열림 등)
    const handleWindowBlur = () => {
      // 약간의 딜레이 후에 처리 (새 창 열림 등으로 인한 blur인지 확인)
      setTimeout(() => {
        if (document.hidden && id && !newsAdViewed.includes(id) && !isRefreshing && !hasProcessedAdClick) {
          console.log('창 포커스 잃음 감지 - 광고 클릭 처리:', id)
          hasProcessedAdClick = true
          handleAdClick()
        }
      }, 500)
    }

    // 실제 페이지 이탈 (브라우저 닫기, 다른 페이지 이동)
    const handleBeforeUnload = () => {
      if (id && !newsAdViewed.includes(id) && !isRefreshing && !hasProcessedAdClick) {
        console.log('페이지 이탈 감지 (새로고침 아님) - 광고 클릭 처리:', id)
        hasProcessedAdClick = true
        handleAdClick()
      }
    }

    // 새로고침 감지용 sessionStorage 설정
    const pageLoadTime = Date.now()
    sessionStorage.setItem('pageLoadTime', pageLoadTime.toString())

    // 이벤트 리스너 등록
    window.addEventListener('beforeunload', handleBeforeUnload)
    window.addEventListener('blur', handleWindowBlur)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
      window.removeEventListener('blur', handleWindowBlur)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [id, newsAdViewed])

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

                {/* 블러 오버레이 - 상단 20% 제외하고 블러 처리 */}
                <Box
                  position="absolute"
                  top="90%"
                  bottom="0"
                  left="0"
                  right="0"
                  bg="linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.8), white)"
                  backdropFilter="blur(4px)"
                  pointerEvents="none"
                  borderRadius="0 0 12px 12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <VStack spacing={2}>
                    <Text color="gray.700" fontSize="md" fontWeight="bold" textAlign="center">
                      나머지 내용 보기
                    </Text>
                    <Text color="gray.600" fontSize="sm" textAlign="center">
                      아래 광고를 클릭하세요
                    </Text>
                    <Text color="gray.500" fontSize="lg">
                      ⬇️
                    </Text>
                  </VStack>
                </Box>
              </Box>

              {/* 광고 배너 */}
              <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100}  />
              
              
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
  )
}

export default NewsDetailPage
