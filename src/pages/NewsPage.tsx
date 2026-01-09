import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Card,
  CardBody,
  HStack,
  Icon
} from '@chakra-ui/react'
import { FiClock, FiExternalLink, FiEye } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
import { newsData, NewsItem } from '../data/newsData'

const NewsPage = () => {
  const navigate = useNavigate()
  const [newsAdViewed, setNewsAdViewed] = useState<string[]>([])

  // 로컬 스토리지에서 광고를 본 뉴스 목록 불러오기
  useEffect(() => {
    const viewed = localStorage.getItem('newsAdViewed')
    if (viewed) {
      try {
        const parsed = JSON.parse(viewed)
        if (Array.isArray(parsed)) {
          setNewsAdViewed(parsed)
        }
      } catch (error) {
        console.error('Failed to parse newsAdViewed from localStorage:', error)
        setNewsAdViewed([])
      }
    }
  }, [])

  const handleNewsClick = (news: NewsItem) => {
    navigate(`/news/${news.id}`)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <Box bg="#f7f7f7" minH="100vh" pb="100px">
      <MobileHeader title="뉴스" />

      <Container maxW="container.sm" py={4} px={4}>
        <VStack spacing={4} align="stretch">
          <Heading
            size="lg"
            color="#1a2e1a"
            textAlign="center"
            mb={2}
          >
            최신 뉴스
          </Heading>

          <Text fontSize="sm" color="gray.600" textAlign="center" mb={4}>
            다양한 연예 뉴스를 만나보세요
          </Text>

          {/* 뉴스 리스트 */}
          <VStack spacing={3} align="stretch">
            {newsData.map((news) => (
              <Card
                key={news.id}
                cursor="pointer"
                onClick={() => handleNewsClick(news)}
                _hover={{ shadow: 'md', transform: 'translateY(-2px)' }}
                transition="all 0.2s"
                borderRadius="12px"
                overflow="hidden"
              >
                <CardBody p={4}>
                  <VStack align="stretch" spacing={3}>
                    <Heading size="md" color="#1a2e1a" lineHeight="1.4">
                      {news.title}
                    </Heading>

                    <Text fontSize="sm" color="gray.600" lineHeight="1.5">
                      {news.summary}
                    </Text>

                    <HStack justify="space-between" align="center">
                      <HStack spacing={2}>
                        <Text fontSize="xs" color="gray.500">
                          {news.source}
                        </Text>
                        <Icon as={FiClock} w={3} h={3} color="gray.400" />
                        <Text fontSize="xs" color="gray.500">
                          {formatDate(news.publishedAt)}
                        </Text>
                      </HStack>

                      <HStack spacing={1}>
                        {newsAdViewed.includes(news.id) ? (
                          <Icon as={FiEye} w={4} h={4} color="green.500" title="광고 본 뉴스" />
                        ) : (
                          <Icon as={FiExternalLink} w={4} h={4} color="blue.500" title="새 뉴스" />
                        )}
                      </HStack>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default NewsPage