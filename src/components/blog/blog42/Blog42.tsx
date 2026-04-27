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

const Blog42 = () => {
  const navigate = useNavigate();
  const title = '넷플릭스 vs 티빙 vs 웨이브 비교';
  const description = 'OTT 서비스 3개를 비교하고 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/42`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = 'AI/테크';
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
    keywords: `${category}, 넷플릭스, 티빙, 웨이브, OTT 비교`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 넷플릭스, 티빙, 웨이브, OTT 비교`} />
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
                      OTT 하나만 구독해야 한다면?
                    </Heading>

                    <Text mb={4}>넷플릭스, 티빙, 웨이브, 쿠팡플레이, 디즈니+. 다 구독하면 월 5만원이 넘는다. 하나만 골라야 한다면 뭘 볼까?</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      핵심 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>넷플릭스</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>티빙</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>웨이브</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5,500~17,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5,500~13,900원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>7,900~13,900원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>오리지널</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>글로벌 최강</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국 드라마/예능</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>tvN/OCN 독점</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>해외 콘텐츠</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최다</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>적음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>적음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국 콘텐츠</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최강 (CJ)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>강함 (지상파)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>스포츠</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>없음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>프로야구</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>KBO, 해외축구</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>동시접속</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~4명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~4명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~4명</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      넷플릭스
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>오리지널 콘텐츠 품질 최고 (오징어게임, 흑백요리사)</li>
                      <li style={{marginBottom:'4px'}}>해외 영화/드라마 가장 다양</li>
                      <li style={{marginBottom:'4px'}}>한국 드라마도 최근 많이 확보</li>
                      <li style={{marginBottom:'4px'}}>가장 비쌈</li>
                    </Box>

                    <Text mb={4}><b>추천</b>: 해외 콘텐츠도 보고 한국 드라마도 보고 싶은 사람</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      티빙
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>tvN 드라마 독점 (재벌집 막내아들, 눈물의 여왕)</li>
                      <li style={{marginBottom:'4px'}}>프로야구 중계</li>
                      <li style={{marginBottom:'4px'}}>CJ ENM 예능 (삼시세끼, 윤스테이)</li>
                      <li style={{marginBottom:'4px'}}>해외 콘텐츠는 부족</li>
                    </Box>

                    <Text mb={4}><b>추천</b>: 한국 드라마/예능 위주로 보는 사람, 야구 팬</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      웨이브
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>지상파 드라마 (KBS/MBC/SBS)</li>
                      <li style={{marginBottom:'4px'}}>해외 축구 중계</li>
                      <li style={{marginBottom:'4px'}}>한국 영화 가장 많음</li>
                      <li style={{marginBottom:'4px'}}>오리지널은 약함</li>
                    </Box>

                    <Text mb={4}><b>추천</b>: 지상파 드라마 보는 사람, 축구 팬</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      꿀팁
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>넷플릭스 광고형 5,500원이 가성비 최고 (광고 1시간에 4~5분)</li>
                      <li style={{marginBottom:'4px'}}>통신사 제휴 할인 확인 (LG U+ → 넷플릭스, KT → 티빙)</li>
                      <li style={{marginBottom:'4px'}}>한 달씩 돌아가며 구독하는 것도 방법</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>하나만 고르라면: <b>넷플릭스 광고형 (5,500원)</b>. 한국 드라마 광팬이면 <b>티빙</b>.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog42;
