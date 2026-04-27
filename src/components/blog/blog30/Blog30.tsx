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

const Blog30 = () => {
  const navigate = useNavigate();
  const title = '맥북 vs 윈도우 노트북 2026 비교';
  const description = '맥북과 윈도우 노트북 장단점을 현실적으로 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/30`;

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
    keywords: `${category}, 맥북, 윈도우, 노트북 비교, 맥북 에어`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 맥북, 윈도우, 노트북 비교, 맥북 에어`} />
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
                      맥북 살까 윈도우 살까
                    </Heading>

                    <Text mb={4}>매년 나오는 질문이지만 2026년에도 정답은 같다. <b>뭘 하느냐에 따라 다르다.</b> 하지만 예전보다 맥북이 더 좋아진 건 사실이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      한눈에 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>맥북 에어 M4</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>윈도우 (동급)</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>159만원~</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>80~120만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>18시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8~12시간</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.24kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.3~1.8kg</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>성능</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>M4 칩 (매우 빠름)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>i7/Ryzen 7</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>디스플레이</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Liquid Retina</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>다양</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>팬리스 (무소음)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>팬 있음</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      맥북이 좋은 사람
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>영상 편집하는 사람 (Final Cut Pro 최적화)</li>
                      <li style={{marginBottom:'4px'}}>iOS 앱 개발자 (Xcode 필수)</li>
                      <li style={{marginBottom:'4px'}}>배터리가 오래 가야 하는 사람</li>
                      <li style={{marginBottom:'4px'}}>디자인/크리에이티브 작업자</li>
                      <li style={{marginBottom:'4px'}}>아이폰 쓰는 사람 (에어드롭, 연속성)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      윈도우가 좋은 사람
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>게임을 하는 사람 (맥은 게임 거의 불가)</li>
                      <li style={{marginBottom:'4px'}}>회사에서 윈도우 전용 프로그램 쓰는 사람</li>
                      <li style={{marginBottom:'4px'}}>예산이 100만원 이하인 사람</li>
                      <li style={{marginBottom:'4px'}}>하드웨어 업그레이드/수리가 중요한 사람</li>
                      <li style={{marginBottom:'4px'}}>특수 소프트웨어가 윈도우만 지원하는 경우</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      가격 대비 만족도
                    </Heading>

                    <Text mb={4}>솔직히 맥북이 비싸다. 하지만 5년 쓴다고 생각하면 이야기가 달라진다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>맥북 에어 159만원 / 5년 = 월 26,500원</li>
                      <li style={{marginBottom:'4px'}}>윈도우 100만원 / 3년(수명) = 월 27,800원</li>
                    </Box>

                    <Text mb={4}>맥북이 더 오래 쓸 수 있어서 장기적으로는 비슷하거나 오히려 싸다. 중고 가격도 맥북이 훨씬 높다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>예산 여유 있고 + 게임 안 하면 → 맥북</li>
                      <li style={{marginBottom:'4px'}}>예산 빠듯하거나 + 게임/특수 프로그램 → 윈도우</li>
                      <li style={{marginBottom:'4px'}}>둘 다 써본 적 없으면 → 매장에서 직접 만져보고 결정</li>
                    </Box>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog30;
