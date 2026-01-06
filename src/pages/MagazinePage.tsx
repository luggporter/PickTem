import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Badge,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MobileHeader from '../components/MobileHeader'
import SEO from '../components/SEO'
import { articles } from '../components/blog/blogList'

const ITEMS_PER_PAGE = 6
const MAGAZINE_PAGE_STORAGE_KEY = 'magazine_current_page'

const MagazinePage = () => {
  const navigate = useNavigate()
  
  // localStorage에서 저장된 페이지 번호 불러오기


  const [currentPage, setCurrentPage] = useState(1)

  // 메거진 데이터 (추후 구글 시트나 API로 대체)
  

  // 페이지네이션 계산 (역순 정렬)
  const reversedArticles = [...articles].reverse()
  const totalPages = Math.ceil(reversedArticles.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentArticles = reversedArticles.slice(startIndex, endIndex)

  // 초기 로드 시 저장된 페이지가 유효한지 확인
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1)
    }
  }, [totalPages])

  // 페이지 변경 시 localStorage에 저장 및 스크롤 상단으로 이동
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage, totalPages])

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  
  const magazineStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '메거진',
    description: '생활을 더 편하게 만드는 이야기',
    url: `${baseUrl}magazine`,
    inLanguage: 'ko-KR',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.slice(0, 10).map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          headline: article.title,
          description: article.description,
          url: `${baseUrl}magazine/${article.id}`,
          image: `${baseUrl}${article.thumbnailUrl.replace(/^\//, '')}`,
          datePublished: article.publishedAt,
          author: {
            '@type': 'Person',
            name: article.author,
          },
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="메거진 - 씩아픽템"
        description="생활을 더 편하게 만드는 이야기. 정리·수납, 생활 꿀팁, 인테리어, 안전 가이드 등 실용적인 정보를 제공합니다."
        keywords="메거진, 생활 꿀팁, 정리 수납, 인테리어, 안전 가이드, 생활 정보"
        canonical="/magazine"
        structuredData={magazineStructuredData}
      />
      <Box bg="white" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack={false}
        />
        <Container maxW="container.sm" px={0}>
          <VStack spacing={0} align="stretch">
            <Container maxW="container.sm" py={8} px={4}>
              <VStack spacing={8} align="stretch">
                <VStack align="start" spacing={2}>
                  <Heading size="xl" color="#212529" fontWeight="800" letterSpacing="-0.5px">
                    메거진
                  </Heading>
                  <Text fontSize="14px" color="#868e96" fontWeight="400">
                    생활을 더 편하게 만드는 이야기
                  </Text>
                </VStack>

                <VStack spacing={6} align="stretch">
                  {currentArticles.map((article) => (
                    <Box
                      key={article.id}
                      as={RouterLink}
                      to={`/magazine/${article.id}`}
                      bg="white"
                      borderRadius="20px"
                      overflow="hidden"
                      cursor="pointer"
                      textDecoration="none"
                      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                      boxShadow="0 1px 3px rgba(0, 0, 0, 0.05)"
                      _hover={{
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        transform: 'translateY(-4px)',
                        textDecoration: 'none',
                      }}
                      _focus={{
                        outline: '2px solid',
                        outlineColor: 'brand.500',
                        outlineOffset: '2px',
                      }}
                    >
                      <Box
                        position="relative"
                        w="100%"
                        h="220px"
                        bgImage={`url(${article.thumbnailUrl})`}
                        bgSize="cover"
                        bgPosition="center"
                        overflow="hidden"
                      >
                        {/* 그라데이션 오버레이 */}
                        <Box
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          h="60%"
                          bgGradient="linear(to-t, rgba(0,0,0,0.6), transparent)"
                        />
                        {article.category && (
                          <Badge
                            position="absolute"
                            top={4}
                            left={4}
                            bg="rgba(255, 255, 255, 0.95)"
                            color="#212529"
                            borderRadius="8px"
                            px={3}
                            py={1.5}
                            fontSize="11px"
                            fontWeight="700"
                            letterSpacing="0.3px"
                            textTransform="uppercase"
                            backdropFilter="blur(10px)"
                          >
                            {article.category}
                          </Badge>
                        )}
                      </Box>
                      <Box p={5}>
                        <Text
                          fontSize="18px"
                          fontWeight="700"
                          color="#212529"
                          mb={3}
                          noOfLines={2}
                          lineHeight="1.5"
                          letterSpacing="-0.3px"
                        >
                          {article.title}
                        </Text>
                        <Text
                          fontSize="14px"
                          color="#495057"
                          mb={4}
                          noOfLines={2}
                          lineHeight="1.6"
                          fontWeight="400"
                        >
                          {article.description}
                        </Text>
                        <HStack spacing={2.5} fontSize="12px" color="#868e96" fontWeight="500">
                          {article.author && (
                            <>
                              <Text>{article.author}</Text>
                              <Text>·</Text>
                            </>
                          )}
                          <Text>{new Date(article.publishedAt).toLocaleDateString('ko-KR', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</Text>
                          {article.readTime && (
                            <>
                              <Text>·</Text>
                              <Text>{article.readTime}분</Text>
                            </>
                          )}
                        </HStack>
                      </Box>
                    </Box>
                  ))}
                </VStack>

                {/* 페이지네이션 - 모던한 디자인 */}
                {articles.length > 0 && totalPages > 1 && (
                  <VStack spacing={4} pt={8} pb={4}>
                    {/* 이전/다음 버튼 */}
                    <HStack
                      justify="space-between"
                      w="100%"
                      spacing={3}
                    >
                      {/* 이전 버튼 */}
                      <Button
                        flex={1}
                        size="lg"
                        variant="ghost"
                        leftIcon={<Icon as={FiChevronLeft} />}
                        onClick={() => handlePageChange(currentPage - 1)}
                        isDisabled={currentPage === 1}
                        _disabled={{
                          opacity: 0.3,
                          cursor: 'not-allowed',
                        }}
                        fontSize="15px"
                        fontWeight="600"
                        h="52px"
                        color="#212529"
                        _hover={{
                          bg: '#f8f9fa',
                        }}
                        _active={{
                          bg: '#e9ecef',
                        }}
                      >
                        이전
                      </Button>

                      {/* 페이지 인디케이터 */}
                      <HStack spacing={2}>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Box
                            key={page}
                            w={currentPage === page ? '24px' : '8px'}
                            h="8px"
                            borderRadius="full"
                            bg={currentPage === page ? '#212529' : '#dee2e6'}
                            transition="all 0.3s ease"
                            cursor="pointer"
                            onClick={() => handlePageChange(page)}
                          />
                        ))}
                      </HStack>

                      {/* 다음 버튼 */}
                      <Button
                        flex={1}
                        size="lg"
                        variant="ghost"
                        rightIcon={<Icon as={FiChevronRight} />}
                        onClick={() => handlePageChange(currentPage + 1)}
                        isDisabled={currentPage === totalPages}
                        _disabled={{
                          opacity: 0.3,
                          cursor: 'not-allowed',
                        }}
                        fontSize="15px"
                        fontWeight="600"
                        h="52px"
                        color="#212529"
                        _hover={{
                          bg: '#f8f9fa',
                        }}
                        _active={{
                          bg: '#e9ecef',
                        }}
                      >
                        다음
                      </Button>
                    </HStack>
                  </VStack>
                )}

                {articles.length === 0 && (
                  <Box textAlign="center" py={20}>
                    <VStack spacing={4}>
                      <Text fontSize="64px" opacity={0.3}>📖</Text>
                      <VStack spacing={2}>
                        <Heading size="md" color="#212529" fontWeight="700">
                          아직 메거진이 없어요
                        </Heading>
                        <Text color="#868e96" fontSize="15px" fontWeight="400">
                          곧 새로운 이야기를 준비할게요!
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
    </>
  )
}

export default MagazinePage

