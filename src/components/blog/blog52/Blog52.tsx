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

const Blog52 = () => {
  const navigate = useNavigate();
  const title = '홈카페 커피 내리는 법 입문';
  const description = '집에서 커피를 맛있게 내리는 방법을 초보자 기준으로 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/52`;

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
    keywords: `${category}, 홈카페, 커피, 핸드드립, 커피 추출`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 홈카페, 커피, 핸드드립, 커피 추출`} />
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
                      카페 안 가고 집에서 맛있는 커피 마시기
                    </Heading>

                    <Text mb={4}>매일 카페 커피 5,000원. 한 달이면 15만원. 홈카페 장비에 10만원 투자하면 첫 달부터 아낀다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      추출 방법별 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>방법</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>초기 비용</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>난이도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>맛</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>핸드드립</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3~5만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>깔끔</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>입문 추천</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모카포트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2~4만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>진함</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>진한 커피 좋아하면</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>에어로프레스</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>균형</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>다양한 맛</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>프렌치프레스</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>묵직</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가장 쉬움</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      입문 추천: 핸드드립
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      필요한 장비 (총 5만원)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>드리퍼 (하리오 V60): 8,000원</li>
                      <li style={{marginBottom:'4px'}}>종이 필터 (100매): 5,000원</li>
                      <li style={{marginBottom:'4px'}}>드립 포트 (전기 주전자도 가능): 20,000원</li>
                      <li style={{marginBottom:'4px'}}>저울: 10,000원</li>
                      <li style={{marginBottom:'4px'}}>원두: 10,000원 (200g)</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      기본 레시피
                    </Heading>

                    <Text mb={4}>1. 원두 15g을 중간 굵기로 분쇄</Text>

                    <Text mb={4}>2. 필터에 넣고 뜨거운 물(92~96도) 준비</Text>

                    <Text mb={4}>3. 30ml 부어서 30초 뜸들이기</Text>

                    <Text mb={4}>4. 나머지 물을 천천히 원을 그리며 부어 총 250ml 추출</Text>

                    <Text mb={4}>5. 총 추출 시간 2분 30초~3분</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      원두 고르는 법
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>라이트 로스트: 산미 강함, 과일향 (에티오피아, 케냐)</li>
                      <li style={{marginBottom:'4px'}}>미디엄 로스트: 균형잡힌 맛 (콜롬비아, 과테말라)</li>
                      <li style={{marginBottom:'4px'}}>다크 로스트: 쓴맛 강함, 고소함 (브라질, 인도네시아)</li>
                    </Box>

                    <Text mb={4}>입문자는 <b>미디엄 로스트 콜롬비아</b>를 추천한다. 무난하고 실패 확률이 낮다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      실패하는 이유와 해결법
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>증상</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>원인</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>해결</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>너무 쓰다</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>추출 시간 길거나 물 너무 뜨거움</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>빨리 추출, 물 온도 낮추기</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>너무 시다</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>추출 시간 짧거나 물 미지근</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>천천히 추출, 물 온도 올리기</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>밋밋하다</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>원두 양 적거나 너무 굵게 분쇄</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>원두 더 넣거나 곱게 갈기</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>프렌치프레스가 가장 쉽고, 핸드드립이 가장 맛있다. 처음에는 프렌치프레스로 시작해서 커피 맛에 눈뜨면 핸드드립으로 넘어가는 걸 추천한다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog52;
