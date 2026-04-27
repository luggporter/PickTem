import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  HStack,
  Badge,
  Divider,
  VStack,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiUser } from 'react-icons/fi';
import MobileHeader from '../../MobileHeader';

const Blog75 = () => {
  const navigate = useNavigate();
  const title = '카드 포인트 활용법 정리';
  const description = '카드 포인트를 최대로 활용하는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/75`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '재테크';
  const readTime = 5;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: '씩아픽템',
      logo: { '@type': 'ImageObject', url: `${baseUrl}favicon.png` },
    },
    datePublished: '2026-04-27',
    dateModified: '2026-04-27',
    articleSection: category,
    keywords: `${category}, 카드 포인트, 신용카드, 포인트 활용, 카드 혜택`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 카드 포인트, 신용카드, 포인트 활용, 카드 혜택`} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="씩아픽템" />
        <meta property="og:locale" content="ko_KR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </Helmet>

      <Box as="main" bg="#f8faf9" minH="100vh">
        <MobileHeader title="메거진" showBack onBack={() => navigate('/magazine')} />

        <Container maxW="container.md" px={{ base: 4, md: 6 }} py={{ base: 6, md: 10 }}>
          <article>
            <VStack spacing={8} align="stretch">
              <VStack spacing={4} align="stretch">
                <Badge colorScheme="brand" px={3} py={1} borderRadius="8px" w="fit-content">
                  {category}
                </Badge>
                <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" lineHeight="1.3" color="#1a2e1a">
                  {title}
                </Heading>
                <HStack spacing={4} fontSize="14px" color="#868e96" flexWrap="wrap">
                  <HStack spacing={1}>
                    <Box as={FiUser} />
                    <Text fontWeight="500">{author}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Box as={FiCalendar} />
                    <Text>{publishedDate}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{readTime}분 읽기</Text>
                </HStack>
              </VStack>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      모르면 사라지는 카드 포인트 활용법
                    </Heading>

                    <Text mb={4}>카드 포인트가 쌓여있는데 안 쓰고 있다면 돈을 버리는 거다. 잘 활용하면 연 10~30만원 이상의 가치가 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      포인트 확인하는 법
                    </Heading>

                    <Text mb={4}><b>여신금융협회 카드포인트 통합조회</b>: cardpoint.or.kr</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>모든 카드사 포인트를 한 번에 조회</li>
                      <li style={{marginBottom:'4px'}}>소멸 예정 포인트도 확인 가능</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      포인트 활용 방법 TOP 5
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 현금 전환 (가장 실용적)
                    </Heading>

                    <Text mb={4}>대부분 카드사 앱에서 포인트를 현금으로 전환 가능. 계좌로 바로 입금된다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>최소 1,000~5,000포인트부터</li>
                      <li style={{marginBottom:'4px'}}>1포인트 = 1원</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 카드 결제 시 차감
                    </Heading>

                    <Text mb={4}>결제할 때 포인트로 일부/전액 결제. 온라인 쇼핑에서 특히 편리하다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 상품권 교환
                    </Heading>

                    <Text mb={4}>백화점, 편의점, 커피 상품권으로 교환. 보통 1:1 비율이라 현금과 같다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 기부
                    </Heading>

                    <Text mb={4}>소액 포인트를 기부할 수 있다. 1,000포인트부터 가능한 곳이 많다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      5. 마일리지 전환
                    </Heading>

                    <Text mb={4}>항공 마일리지로 전환 가능한 카드가 있다. 비율은 보통 10:1 (10포인트 → 1마일).</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      포인트 많이 쌓는 법
                    </Heading>

                    <Text mb={4}><b>1. 주력 카드 1~2개만 쓰기</b></Text>

                    <Text mb={4}>여러 장에 분산하면 포인트가 안 모인다. 실적 조건도 안 채워진다.</Text>

                    <Text mb={4}><b>2. 실적 구간 맞추기</b></Text>

                    <Text mb={4}>월 30만원 이상 쓰면 혜택 2배 같은 구간이 있다. 딱 맞춰서 쓰면 효율적.</Text>

                    <Text mb={4}><b>3. 카드사 이벤트 참여</b></Text>

                    <Text mb={4}>앱 푸시 알림 켜놓으면 포인트 적립 이벤트가 자주 온다. 참여만 하면 500~1,000포인트.</Text>

                    <Text mb={4}><b>4. 간편결제 추가 적립</b></Text>

                    <Text mb={4}>삼성페이, 카카오페이 등 간편결제 시 추가 포인트 적립되는 카드가 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      소멸 주의
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>대부분 포인트는 5년 내 소멸</li>
                      <li style={{marginBottom:'4px'}}>매년 12월 31일에 대량 소멸</li>
                      <li style={{marginBottom:'4px'}}>카드포인트 통합조회에서 소멸 예정 확인하고 미리 사용</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>cardpoint.or.kr에서 전체 조회 → 소멸 예정 포인트 현금 전환 → 주력 카드 1~2개로 집중. 이것만으로 연 10만원 이상 챙길 수 있다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog75;
