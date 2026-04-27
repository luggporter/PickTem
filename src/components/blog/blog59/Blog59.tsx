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

const Blog59 = () => {
  const navigate = useNavigate();
  const title = '청소 루틴 만들기 주간 가이드';
  const description = '매일 10분 청소로 집을 깨끗하게 유지하는 방법입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/59`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '생활용품';
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
    keywords: `${category}, 청소, 청소 루틴, 집 관리, 정리정돈`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 청소, 청소 루틴, 집 관리, 정리정돈`} />
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
                      매일 10분이면 주말 대청소 안 해도 된다
                    </Heading>

                    <Text mb={4}>주말마다 3시간 대청소하는 것보다 매일 10분 청소가 훨씬 효율적이다. 습관이 되면 집이 항상 깨끗하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주간 청소 루틴
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>요일</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>청소 (10분)</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>장소</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>바닥 청소 (밀대/청소기)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>거실, 방</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>화</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>화장실 청소</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>변기, 세면대, 거울</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주방 청소</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>싱크대, 가스레인지</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>목</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>먼지 닦기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가구, 가전 위</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>금</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>빨래 + 정리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>옷장, 세탁물</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>토</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자유 (밀린 것)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>필요한 곳</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>일</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>쉬기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>없음</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      매일 하는 것 (2분)
                    </Heading>

                    <Text mb={4}>자기 전에 2분만 투자:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>싱크대 설거지 마무리</li>
                      <li style={{marginBottom:'4px'}}>쓰레기 모으기</li>
                      <li style={{marginBottom:'4px'}}>물건 제자리에 놓기</li>
                    </Box>

                    <Text mb={4}>이것만 해도 아침에 깨끗한 집에서 시작할 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      장소별 빠른 청소법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      화장실 (10분)
                    </Heading>

                    <Text mb={4}>1. 변기 세정제 뿌리기 (1분)</Text>

                    <Text mb={4}>2. 세면대 닦기 (2분)</Text>

                    <Text mb={4}>3. 거울 닦기 (1분)</Text>

                    <Text mb={4}>4. 변기 솔질 (2분)</Text>

                    <Text mb={4}>5. 바닥 물기 닦기 (4분)</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      주방 (10분)
                    </Heading>

                    <Text mb={4}>1. 가스레인지 기름때 닦기 (3분)</Text>

                    <Text mb={4}>2. 싱크대 스테인리스 닦기 (2분)</Text>

                    <Text mb={4}>3. 전자레인지 내부 닦기 (2분)</Text>

                    <Text mb={4}>4. 바닥 걸레질 (3분)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      청소 도구 추천
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>밀대 청소기 (만원대) — 매일 바닥 청소</li>
                      <li style={{marginBottom:'4px'}}>만능 세정제 1개 (5천원) — 주방+욕실 다 됨</li>
                      <li style={{marginBottom:'4px'}}>극세사 걸레 5장 (5천원) — 세탁해서 반복 사용</li>
                      <li style={{marginBottom:'4px'}}>고무장갑 (3천원)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>월: 바닥, 화: 화장실, 수: 주방, 목: 먼지. 이 4가지만 기억하면 된다. 매일 10분. 주말에는 쉬자.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog59;
