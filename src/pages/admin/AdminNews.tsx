import { useState, useEffect } from 'react'
import {
  Box,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
  Image,
  Link,
} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { getNews, NewsArticle } from '../../services/googleSheets'

const AdminNews = () => {
  const [news, setNews] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = async () => {
    try {
      setLoading(true)
      setError(null)
      const newsData = await getNews()
      setNews(newsData)
    } catch (err) {
      setError('뉴스를 불러오는데 실패했습니다.')
      console.error('Failed to load news:', err)
    } finally {
      setLoading(false)
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

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        {error}
        <Button ml={4} size="sm" onClick={loadNews}>
          다시 시도
        </Button>
      </Alert>
    )
  }

  return (
    <VStack align="stretch" spacing={6}>
      <HStack justify="space-between" align="center">
        <Box>
          <Heading size="lg" mb={2}>
            뉴스 관리
          </Heading>
          <Text color="gray.600">
            총 {news.length}개의 뉴스 기사가 있습니다.
          </Text>
        </Box>
        <Button
          as={RouterLink}
          to="/admin/news/saveToGoogleSheets"
          colorScheme="blue"
        >
          새 뉴스 등록
        </Button>
      </HStack>

      {news.length === 0 ? (
        <Card>
          <CardBody>
            <Text textAlign="center" color="gray.500">
              등록된 뉴스가 없습니다.
            </Text>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody p={0}>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>이미지</Th>
                  <Th>제목</Th>
                  <Th>요약</Th>
                  <Th>출처</Th>
                  <Th>발행일</Th>
                  <Th>관리</Th>
                </Tr>
              </Thead>
              <Tbody>
                {news.map((article) => (
                  <Tr key={article.id}>
                    <Td>
                      {article.imageUrl ? (
                        <Image
                          src={article.imageUrl}
                          alt={article.title}
                          boxSize="50px"
                          objectFit="cover"
                          borderRadius="md"
                        />
                      ) : (
                        <Box
                          boxSize="50px"
                          bg="gray.200"
                          borderRadius="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Text fontSize="xs" color="gray.500">No Image</Text>
                        </Box>
                      )}
                    </Td>
                    <Td maxW="200px">
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="medium" noOfLines={2}>
                          {article.title}
                        </Text>
                        <Badge size="sm" colorScheme="blue">
                          ID: {article.id}
                        </Badge>
                      </VStack>
                    </Td>
                    <Td maxW="300px">
                      <Text noOfLines={2} fontSize="sm" color="gray.600">
                        {article.summary}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{article.source}</Text>
                    </Td>
                    <Td>
                      <Text fontSize="sm">{formatDate(article.publishedAt)}</Text>
                    </Td>
                    <Td>
                      <HStack spacing={2}>
                        <Button
                          as={Link}
                          href={article.url}
                          isExternal
                          size="sm"
                          variant="outline"
                        >
                          원본
                        </Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      )}
    </VStack>
  )
}

export default AdminNews
