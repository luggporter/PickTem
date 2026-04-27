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

const Blog72 = () => {
  const navigate = useNavigate();
  const title = '자동차 유지비 줄이는 방법';
  const description = '자동차 유지비를 현실적으로 줄이는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/72`;

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
    keywords: `${category}, 자동차, 유지비, 자동차 보험, 기름값`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 자동차, 유지비, 자동차 보험, 기름값`} />
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
                      자동차 유지비 월 50만원 → 30만원으로 줄이기
                    </Heading>

                    <Text mb={4}>자동차는 사는 것보다 유지하는 게 더 비싸다. 기름값, 보험, 주차, 세금, 정비. 하지만 몇 가지만 바꾸면 월 15~20만원은 아낄 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      유지비 구성
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>월 평균</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>절약 가능</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기름값</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>15~25만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3~5만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보험료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8~15만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2~5만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주차비</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5~10만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~3만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>정비/소모품</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3~5만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~2만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세금/검사</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2~3만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>어려움</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      기름값 줄이기
                    </Heading>

                    <Text mb={4}><b>1. 주유 앱 활용</b></Text>

                    <Text mb={4}>오피넷, 카카오맵에서 주변 최저가 주유소 확인. 같은 지역에서도 리터당 50~100원 차이.</Text>

                    <Text mb={4}><b>2. 셀프 주유</b></Text>

                    <Text mb={4}>리터당 30~50원 저렴. 월 100리터 넣으면 3,000~5,000원 절약.</Text>

                    <Text mb={4}><b>3. 급발진/급제동 줄이기</b></Text>

                    <Text mb={4}>급가속 10% 줄이면 연비 15% 향상. 부드러운 운전이 기름값 절약.</Text>

                    <Text mb={4}><b>4. 타이어 공기압 체크</b></Text>

                    <Text mb={4}>적정 공기압보다 낮으면 연비 3~5% 하락. 월 1회 체크.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      보험료 줄이기
                    </Heading>

                    <Text mb={4}><b>5. 다이렉트 보험</b></Text>

                    <Text mb={4}>설계사 통하지 않고 온라인 직접 가입하면 10~15% 저렴.</Text>

                    <Text mb={4}><b>6. 마일리지 특약</b></Text>

                    <Text mb={4}>연간 주행거리가 7,000km 이하면 마일리지 특약으로 보험료 할인.</Text>

                    <Text mb={4}><b>7. 블랙박스 할인</b></Text>

                    <Text mb={4}>블랙박스 장착 시 보험료 2~3% 할인.</Text>

                    <Text mb={4}><b>8. 비교견적</b></Text>

                    <Text mb={4}>카카오페이, 네이버 보험 비교견적으로 최저가 찾기.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      정비비 줄이기
                    </Heading>

                    <Text mb={4}><b>9. 정비 주기 지키기</b></Text>

                    <Text mb={4}>소모품 교체를 미루면 나중에 더 큰 수리비가 든다.</Text>

                    <Text mb={4}><b>10. 동네 정비소 활용</b></Text>

                    <Text mb={4}>브랜드 공식센터보다 40~60% 저렴. 엔진오일, 브레이크패드 같은 기본 정비는 동네 정비소로.</Text>

                    <Text mb={4}><b>11. 자가 정비</b></Text>

                    <Text mb={4}>와이퍼, 에어필터, 워셔액은 직접 교체 가능. 유튜브 보고 따라 하면 됨.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>다이렉트 보험 + 셀프 주유 + 앱으로 최저가 주유소. 이 3가지만 해도 월 5~10만원 절약.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog72;
