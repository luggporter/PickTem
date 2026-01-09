import { useState, useEffect } from 'react'
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Card,
  CardBody,
  Button,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  Divider,
  useToast,
  Image,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { fetchOGData, isValidUrl, OGData } from '../../services/ogImageService'
import { addNewsToGoogleSheets } from '../../services/googleSheets'

export interface NewsFormData {
  title: string
  summary: string
  content: string
  source: string
  publishedAt: string
  imageUrl: string
  url: string
}

const AdminNewsSave = () => {
  const [url, setUrl] = useState('')
  const [ogData, setOgData] = useState<OGData | null>(null)
  const [loadingOG, setLoadingOG] = useState(false)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<NewsFormData>({
    title: '',
    summary: '',
    content: '',
    source: '',
    publishedAt: '',
    imageUrl: '',
    url: '',
  })

  // Threads 관련 상태
  const [threadsText, setThreadsText] = useState('')
  const [uploadingToThreads, setUploadingToThreads] = useState(false)

  const toast = useToast()
  const navigate = useNavigate()

  // URL이 변경되면 OG 데이터 가져오기
  useEffect(() => {
    if (url && isValidUrl(url)) {
      fetchOGDataFromUrl(url)
    } else {
      setOgData(null)
    }
  }, [url])

  // OG 데이터가 로드되면 폼 데이터 업데이트
  useEffect(() => {
    if (ogData) {
      setFormData(prev => ({
        ...prev,
        title: ogData.title || prev.title,
        summary: ogData.description || prev.summary,
        source: ogData.siteName || prev.source,
        imageUrl: ogData.image || prev.imageUrl,
        url: url,
      }))
    }
  }, [ogData, url])

  const fetchOGDataFromUrl = async (inputUrl: string) => {
    // Git Pages 환경에서는 OG 데이터 로드 비활성화
    if (window.location.hostname.includes('github.io') || window.location.hostname.includes('ssikapicktem.co.kr')) {
      console.log('Git Pages 환경에서는 OG 데이터 로드를 지원하지 않습니다.')
      toast({
        title: 'OG 데이터 로드 불가',
        description: 'Git Pages 환경에서는 보안 정책으로 인해 지원되지 않습니다.',
        status: 'info',
        duration: 3000,
      })
      setOgData(null)
      setLoadingOG(false)
      return
    }

    setLoadingOG(true)
    try {
      const data = await fetchOGData(inputUrl)
      setOgData(data)
    } catch (error) {
      console.log({error});

      console.error('OG 데이터 로드 실패:', error)
      toast({
        title: 'OG 데이터 로드 실패',
        description: 'URL에서 정보를 가져올 수 없습니다.',
        status: 'warning',
        duration: 3000,
      })
      setOgData(null)
    } finally {
      setLoadingOG(false)
    }
  }

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url && isValidUrl(url)) {
      fetchOGDataFromUrl(url)
    }
  }

  const handleSave = async () => {
    // 필수 필드 검증
    if (!formData.title || !formData.url) {
      toast({
        title: '필수 정보 누락',
        description: '제목과 URL은 필수입니다.',
        status: 'error',
        duration: 3000,
      })
      return
    }

    setSaving(true)
    setUploadingToThreads(true)
    try {
      // 날짜가 없으면 오늘 날짜로 설정
      const newsData = {
        ...formData,
        publishedAt: formData.publishedAt || new Date().toISOString().split('T')[0],
      }

      console.log('Google Sheets에 뉴스 저장 시도:', newsData)
      const success = await addNewsToGoogleSheets(newsData)
      console.log({success});
      

//       if (success) {
//         console.log('✅ 뉴스 저장 성공')
//         // Threads 텍스트 자동 생성
//         const defaultText = `${formData.title}

// ${formData.summary}

// #${formData.source.replace(/\s+/g, '')} #뉴스

// 원본 기사: ${formData.url}`

//         setThreadsText(defaultText)

//         // 바로 Threads 업로드 시작
//         await handleThreadsUpload()
//       } else {
//         throw new Error('저장 실패')
//       }
    } catch (error) {
      console.error('저장 실패:', error)
      toast({
        title: '저장 실패',
        description: '뉴스를 저장하는데 실패했습니다.',
        status: 'error',
        duration: 3000,
      })
    } finally {
      setSaving(false)
    setUploadingToThreads(false)
  }
  }

  const handleThreadsUpload = async () => {
    if (!threadsText.trim()) {
      toast({
        title: '내용 누락',
        description: '업로드할 텍스트를 입력해주세요.',
        status: 'warning',
        duration: 3000,
      })
      return
    }

    setUploadingToThreads(true)
    try {
      // 실제로는 Instagram Threads API를 호출해야 하지만,
      // 현재는 시뮬레이션 (실제 구현 시 Meta Graph API 사용 필요)
      console.log('Threads 업로드:', {
        text: threadsText,
        image: formData.imageUrl,
        newsData: formData,
      })

      // 시뮬레이션 딜레이
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast({
        title: '저장 및 업로드 성공',
        description: 'Google Sheets와 Threads에 모두 게시되었습니다.',
        status: 'success',
        duration: 5000,
      })

      // 완료 후 목록으로 돌아가기
      navigate('/admin/news')
    } catch (error) {
      console.error('Threads 업로드 실패:', error)
      toast({
        title: 'Threads 업로드 실패',
        description: 'Google Sheets 저장은 성공했으나 Threads 업로드에 실패했습니다.',
        status: 'warning',
        duration: 5000,
      })
      // Threads 업로드 실패해도 Google Sheets는 성공했으므로 목록으로 이동
      setTimeout(() => navigate('/admin/news'), 1000)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('ko-KR')
    } catch {
      return dateString
    }
  }

  return (
    <Box>
      <Heading size="lg" mb={6}>
        뉴스 등록
      </Heading>
      <img  src="https://thumbnews.nateimg.co.kr/view610/news.nateimg.co.kr/orgImg/tr/2026/01/07/3cbd705f-f346-4692-8eba-d0c2db1aec4d.jpg"></img>

      <HStack align="start" spacing={12}>
        {/* 왼쪽: 모바일 미리보기 */}
        <Box flex={1} maxW="500px">
          <Card>
            <CardBody>
              <Heading size="md" mb={4}>
                모바일 미리보기 (씩아픽템)
              </Heading>

              <Box
                bg="white"
                border="1px solid"
                borderColor="gray.200"
                borderRadius="lg"
                p={4}
                maxW="320px"
                mx="auto"
              >
                {/* 뉴스 카드 미리보기 */}
                <VStack align="stretch" spacing={3}>
                  {formData.imageUrl && (
                    <Image
                      src={formData.imageUrl}
                      alt={formData.title}
                      borderRadius="md"
                      objectFit="cover"
                      h="120px"
                      w="100%"
                    />
                  )}

                  <Box>
                    <Text fontWeight="bold" fontSize="sm" noOfLines={2}>
                      {formData.title || '제목을 입력해주세요'}
                    </Text>
                    <Text fontSize="xs" color="gray.600" mt={1} noOfLines={2}>
                      {formData.summary || '요약을 입력해주세요'}
                    </Text>
                    <HStack justify="space-between" mt={2}>
                      <Text fontSize="xs" color="blue.500">
                        {formData.source || '출처'}
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        {formData.publishedAt ? formatDate(formData.publishedAt) : '날짜'}
                      </Text>
                    </HStack>
                  </Box>
                </VStack>
              </Box>
            </CardBody>
          </Card>
        </Box>

        {/* 오른쪽: 등록 폼과 OG 미리보기 */}
        <Box flex={1}>
          <VStack align="stretch" spacing={6}>
            {/* URL 입력 */}
            <Card>
              <CardBody>
                <form onSubmit={handleUrlSubmit}>
                  <VStack align="stretch" spacing={4}>
                    <FormControl>
                      <FormLabel>URL 입력</FormLabel>
                      <HStack>
                        <Input
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="https://example.com/news-article"
                        />
                        <Button
                          type="submit"
                          colorScheme="blue"
                          isLoading={loadingOG}
                          loadingText="가져오는 중..."
                        >
                          OG 정보 가져오기
                        </Button>
                      </HStack>
                    </FormControl>

                    {ogData && (
                      <Alert status="success">
                        <AlertIcon />
                        OG 정보를 성공적으로 가져왔습니다.
                      </Alert>
                    )}
                  </VStack>
                </form>
              </CardBody>
            </Card>

            {/* 등록 폼 */}
            <Card>
              <CardBody>
                <Heading size="md" mb={4}>
                  뉴스 정보 입력
                </Heading>

                <VStack align="stretch" spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>제목</FormLabel>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="뉴스 제목"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>요약</FormLabel>
                    <Textarea
                      value={formData.summary}
                      onChange={(e) => setFormData(prev => ({ ...prev, summary: e.target.value }))}
                      placeholder="뉴스 요약"
                      rows={2}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>내용</FormLabel>
                    <Textarea
                      value={formData.content}
                      onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
                      placeholder="뉴스 본문 내용"
                      rows={4}
                    />
                  </FormControl>

                  <HStack>
                    <FormControl>
                      <FormLabel>출처</FormLabel>
                      <Input
                        value={formData.source}
                        onChange={(e) => setFormData(prev => ({ ...prev, source: e.target.value }))}
                        placeholder="예: 스타뉴스"
                      />
                    </FormControl>

                    <FormControl>
                      <FormLabel>발행일</FormLabel>
                      <Input
                        type="date"
                        value={formData.publishedAt}
                        onChange={(e) => setFormData(prev => ({ ...prev, publishedAt: e.target.value }))}
                      />
                    </FormControl>
                  </HStack>

                  <FormControl isRequired>
                    <FormLabel>URL</FormLabel>
                    <Input
                      value={formData.url}
                      onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
                      placeholder="뉴스 원본 URL"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>이미지 URL</FormLabel>
                    <Input
                      value={formData.imageUrl}
                      onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
                      placeholder="썸네일 이미지 URL"
                    />
                  </FormControl>

                  <Button
                    colorScheme="green"
                    size="lg"
                    onClick={handleSave}
                    isLoading={saving}
                    loadingText="저장 및 업로드 중..."
                    alignSelf="flex-end"
                  >
                    Google Sheets에 저장
                  </Button>
                </VStack>
              </CardBody>
            </Card>


            {/* OG 이미지 미리보기 */}
            {(ogData?.image || formData.imageUrl) && (
              <Card>
                <CardBody>
                  <Heading size="md" mb={4}>
                    OG 이미지 미리보기
                  </Heading>

                  <Box textAlign="center">

                    {/* 직접 HTML img 태그로 테스트 */}
                    {/* <img
                      src="https://thumbnews.nateimg.co.kr/view610/news.nateimg.co.kr/orgImg/tr/2026/01/07/3cbd705f-f346-4692-8eba-d0c2db1aec4d.jpg"
                      alt="Test Image"
                      style={{
                        maxHeight: '300px',
                        borderRadius: '8px',
                        margin: '0 auto',
                        display: 'block',
                        border: '2px solid red'
                      }}
                    />

                    <Text fontSize="sm" color="gray.500" mt={2}>
                      직접 img 태그 테스트 (빨간 테두리)
                    </Text> */}

                    <Divider my={4} />

                    {
                      (ogData?.image || formData.imageUrl) && (
                    <Image
                      src={ogData?.image || formData.imageUrl}
                      alt="OG Image"
                      maxH="300px"
                      borderRadius="md"
                      mx="auto"
                    />
                      )
                    }

                    <Text fontSize="sm" color="gray.500" mt={2}>
                      {ogData?.image ? 'OG 이미지' : '직접 입력한 이미지'}
                    </Text>
                  </Box>
                </CardBody>
              </Card>
            )}
          </VStack>
        </Box>
      </HStack>
    </Box>
  )
}

export default AdminNewsSave
