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

const Blog47 = () => {
  const navigate = useNavigate();
  const title = '냉장고 정리 수납 방법';
  const description = '냉장고를 깔끔하게 정리하는 수납 방법을 소개합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/47`;

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
    keywords: `${category}, 냉장고 정리, 수납, 식재료 보관, 주방 정리`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 냉장고 정리, 수납, 식재료 보관, 주방 정리`} />
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
                      냉장고가 깔끔하면 음식물 쓰레기도 줄어든다
                    </Heading>

                    <Text mb={4}>냉장고 속이 엉망이면 뭐가 있는지 모르고, 결국 같은 식재료를 또 사고, 깊은 곳에서 상한 음식이 발견된다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      냉장고 정리 기본 원칙
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 구역 나누기
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>위치</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>보관할 것</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>온도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>윗칸</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>음료, 과일, 디저트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3~5도</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가운데</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>반찬, 남은 음식, 유제품</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3~5도</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아랫칸</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>고기, 생선 (날것)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~3도</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>문쪽 선반</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소스, 양념, 계란</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5~7도</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>야채칸</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>채소, 과일</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5~7도</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 보이는 수납
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>투명 용기 사용 (내용물이 바로 보이게)</li>
                      <li style={{marginBottom:'4px'}}>라벨 붙이기 (날짜 + 내용물)</li>
                      <li style={{marginBottom:'4px'}}>세로 수납 (눕히지 않고 세워서)</li>
                      <li style={{marginBottom:'4px'}}>수납 트레이/바구니 활용</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 선입선출
                    </Heading>

                    <Text mb={4}>오래된 것을 앞으로, 새로 산 것을 뒤로. 마트 진열 방식을 그대로 적용하자.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      실전 정리 순서 (30분 완성)
                    </Heading>

                    <Text mb={4}>1. 냉장고 전부 비우기 (5분)</Text>

                    <Text mb={4}>2. 선반/서랍 닦기 (3분)</Text>

                    <Text mb={4}>3. 유통기한 지난 것 버리기 (5분)</Text>

                    <Text mb={4}>4. 구역별로 분류 (10분)</Text>

                    <Text mb={4}>5. 투명 용기에 옮겨 담기 (7분)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      추천 수납템
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>다이소 냉장고 정리 트레이 (2,000원)</li>
                      <li style={{marginBottom:'4px'}}>투명 밀폐용기 세트 (만원대)</li>
                      <li style={{marginBottom:'4px'}}>냉장고 수납 바구니 (3,000원)</li>
                      <li style={{marginBottom:'4px'}}>라벨 프린터 or 마스킹테이프 + 펜</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      유통기한 관리 팁
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>냉장고 문에 "이번 주 먹을 것" 리스트 붙이기</li>
                      <li style={{marginBottom:'4px'}}>장 보기 전에 냉장고 사진 찍기 (중복 구매 방지)</li>
                      <li style={{marginBottom:'4px'}}>야채는 구매 후 바로 손질해서 보관</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>주 1회 5분 정리만 해도 냉장고 상태가 유지된다. 월 1회 전체 정리(30분)를 하면 음식물 쓰레기가 확 줄어든다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog47;
