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

const Blog35 = () => {
  const navigate = useNavigate();
  const title = '2026 태블릿 추천 용도별 정리';
  const description = '용도별 태블릿 추천 가이드입니다. 아이패드, 갤럭시탭 비교.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/35`;

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
    keywords: `${category}, 태블릿, 아이패드, 갤럭시탭, 태블릿 추천`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 태블릿, 아이패드, 갤럭시탭, 태블릿 추천`} />
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
                      태블릿 뭐 살까? 용도별 정답
                    </Heading>

                    <Text mb={4}>태블릿은 용도에 따라 답이 완전히 다르다. 30만원짜리로 충분한 사람이 100만원짜리 사면 돈 낭비다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      용도별 추천
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      넷플릭스/유튜브 시청용
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아이패드 10세대</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>499,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>10.9인치, 스피커 좋음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시탭 A9+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>349,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비, 11인치</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>샤오미 패드 6</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>299,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격 대비 화면 최고</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>영상 시청만 할 거면 <b>30~40만원대로 충분하다.</b></Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      필기/공부용
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아이패드 에어 M2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>899,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>애플펜슬 Pro + GoodNotes</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시탭 S9 FE</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>549,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>S펜 포함 (추가 구매 불필요)</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>필기 앱 완성도는 아이패드가 압도적이다. 하지만 갤럭시탭은 S펜이 기본 포함이라 총 비용은 비슷하다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      그림/디자인용
                    </Heading>

                    <Text mb={4}>아이패드 프로 M4 (1,499,000원~) 하나뿐이다. Procreate 앱이 아이패드에서만 된다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      노트북 대체용
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아이패드 프로 M4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,499,000원~</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>키보드 붙이면 노트북급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시탭 S9 Ultra</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,399,000원~</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>14.6인치 대화면 + DeX</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>솔직히 노트북 대체는 아직 어렵다. 파일 관리, 멀티태스킹이 노트북보다 불편하다. 서브 기기로 쓰는 건 좋지만 메인으로 쓰기엔 답답하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>영상 시청: 갤럭시탭 A9+ (35만원)</li>
                      <li style={{marginBottom:'4px'}}>필기/공부: 갤럭시탭 S9 FE (55만원, S펜 포함)</li>
                      <li style={{marginBottom:'4px'}}>돈 여유 있고 애플 생태계: 아이패드 에어 (90만원)</li>
                      <li style={{marginBottom:'4px'}}>그림: 아이패드 프로 (150만원, 유일한 선택지)</li>
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

export default Blog35;
