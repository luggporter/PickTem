import { useState, useEffect } from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Button,
  Textarea,
  Image,
  Spinner,
  Alert,
  AlertIcon,
  Badge,
  HStack,
  Divider,
  useToast,
} from '@chakra-ui/react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { getNews, NewsArticle } from '../../services/googleSheets'

const AdminThreadsUpload = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const toast = useToast()

  const [news, setNews] = useState<NewsArticle | null>(null)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [threadsText, setThreadsText] = useState('')

  const newsId = searchParams.get('id')

  useEffect(() => {
    if (newsId) {
      loadNews()
    } else {
      setLoading(false)
    }
  }, [newsId])

  const loadNews = async () => {
    try {
      setLoading(true)
      const newsData = await getNews()
      const foundNews = newsData.find(n => n.id === newsId)

      if (foundNews) {
        setNews(foundNews)
        // 기본 Threads 텍스트 생성
        const defaultText = `${foundNews.title}

${foundNews.summary}

#${foundNews.source.replace(/\s+/g, '')} #뉴스

원본 기사: ${foundNews.url}`

        setThreadsText(defaultText)
      } else {
        toast({
          title: '뉴스를 찾을 수 없음',
          description: '해당 ID의 뉴스가 존재하지 않습니다.',
          status: 'error',
          duration: 3000,
        })
        navigate('/admin/news')
      }
    } catch (error) {
      console.error('뉴스 로드 실패:', error)
      toast({
        title: '로딩 실패',
        description: '뉴스를 불러오는데 실패했습니다.',
        status: 'error',
        duration: 3000,
      })
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async () => {
    if (!news || !threadsText.trim()) {
      toast({
        title: '내용 누락',
        description: '업로드할 텍스트를 입력해주세요.',
        status: 'warning',
        duration: 3000,
      })
      return
    }

    setUploading(true)
    try {
      // 실제로는 Instagram Threads API를 호출해야 하지만,
      // 현재는 시뮬레이션 (실제 구현 시 Meta Graph API 사용 필요)
      console.log('Threads 업로드:', {
        text: threadsText,
        image: news.imageUrl,
        newsId: news.id,
      })

      // 시뮬레이션 딜레이
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: '업로드 성공',
        description: 'Threads에 게시물이 성공적으로 업로드되었습니다.',
        status: 'success',
        duration: 5000,
      })

      navigate('/admin/news')
    } catch (error) {
      console.error('Threads 업로드 실패:', error)
      toast({
        title: '업로드 실패',
        description: 'Threads 업로드에 실패했습니다.',
        status: 'error',
        duration: 3000,
      })
    } finally {
      setUploading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('ko-KR')
    } catch {
      return dateString
    }
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minH="200px">
        <VStack spacing={4}>
          <Spinner size="xl" color="blue.500" />
          <Text>뉴스를 불러오는 중...</Text>
        </VStack>
      </Box>
    )
  }

  if (!news) {
    return (
      <Alert status="error">
        <AlertIcon />
        뉴스를 찾을 수 없습니다.
        <Button ml={4} size="sm" onClick={() => navigate('/admin/news')}>
          뉴스 목록으로 돌아가기
        </Button>
      </Alert>
    )
  }

  return (
    <VStack align="stretch" spacing={6}>
      <HStack justify="space-between" align="center">
        <Box>
          <Heading size="lg" mb={2}>
            Threads 업로드
          </Heading>
          <Text color="gray.600">
            뉴스를 Instagram Threads에 게시합니다.
          </Text>
        </Box>
        <Button variant="outline" onClick={() => navigate('/admin/news')}>
          목록으로 돌아가기
        </Button>
      </HStack>

      <HStack align="start" spacing={12}>
        {/* 왼쪽: 뉴스 정보 */}
        <Box flex={1}>
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                뉴스 정보
              </Heading>

              <VStack align="stretch" spacing={3}>
                {news.imageUrl && (
                  <Image
                    src={news.imageUrl}
                    alt={news.title}
                    borderRadius="md"
                    objectFit="cover"
                    maxH="200px"
                    w="100%"
                  />
                )}

                <Box>
                  <Text fontWeight="bold" mb={2}>
                    {news.title}
                  </Text>
                  <Text color="gray.600" fontSize="sm" mb={2}>
                    {news.summary}
                  </Text>

                  <HStack justify="space-between" fontSize="sm" color="gray.500">
                    <Text>{news.source}</Text>
                    <Text>{formatDate(news.publishedAt)}</Text>
                  </HStack>

                  <Badge mt={2} colorScheme="blue">
                    ID: {news.id}
                  </Badge>
                </Box>
              </VStack>
            </CardBody>
          </Card>
        </Box>

        {/* 오른쪽: Threads 업로드 폼 */}
        <Box flex={1}>
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                Threads 게시물 작성
              </Heading>

              <VStack align="stretch" spacing={4}>
                <Text fontSize="sm" color="gray.600">
                  Threads에 게시할 내용을 작성해주세요.
                </Text>

                <Textarea
                  value={threadsText}
                  onChange={(e) => setThreadsText(e.target.value)}
                  placeholder="Threads에 게시할 텍스트를 입력하세요..."
                  rows={8}
                  resize="vertical"
                />

                <Text fontSize="xs" color="gray.500">
                  글자 수: {threadsText.length} / 500
                </Text>

                <Divider />

                <VStack align="stretch" spacing={3}>
                  <Text fontSize="sm" fontWeight="medium">
                    미리보기:
                  </Text>

                  <Box
                    p={4}
                    bg="gray.50"
                    borderRadius="md"
                    fontSize="sm"
                    whiteSpace="pre-wrap"
                  >
                    {threadsText || '내용을 입력해주세요...'}
                  </Box>
                </VStack>

                <Button
                  colorScheme="purple"
                  size="lg"
                  onClick={handleUpload}
                  isLoading={uploading}
                  loadingText="업로드 중..."
                  isDisabled={!threadsText.trim() || threadsText.length > 500}
                >
                  Threads에 게시하기
                </Button>

                {threadsText.length > 500 && (
                  <Alert status="warning">
                    <AlertIcon />
                    텍스트가 너무 깁니다. 500자 이내로 작성해주세요.
                  </Alert>
                )}
              </VStack>
            </CardBody>
          </Card>
        </Box>
      </HStack>
    </VStack>
  )
}

export default AdminThreadsUpload
