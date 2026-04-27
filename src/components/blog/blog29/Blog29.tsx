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

const Blog29 = () => {
  const navigate = useNavigate();
  const title = '노코드 앱 만들기 2026 가이드';
  const description = '코딩 없이 앱을 만드는 노코드 플랫폼 비교 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/29`;

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
    keywords: `${category}, 노코드, 앱 만들기, Bubble, FlutterFlow`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 노코드, 앱 만들기, Bubble, FlutterFlow`} />
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
                      코딩 모르는데 앱 만들 수 있을까?
                    </Heading>

                    <Text mb={4}>가능하다. 2026년 현재 노코드 플랫폼이 엄청나게 발전해서 <b>드래그 앤 드롭으로 실제 서비스를 만들 수 있다.</b> 물론 한계는 있지만, MVP(최소 기능 제품)을 만들기에는 충분하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      노코드 플랫폼 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>플랫폼</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>난이도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>무료</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천 대상</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Bubble</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>웹앱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>제한적</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>스타트업 MVP</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>FlutterFlow</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모바일앱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>제한적</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모바일 서비스</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Softr</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>랜딩페이지</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>간단한 사이트</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Glide</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모바일앱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>사내 도구</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Adalo</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모바일앱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>제한적</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>간단한 앱</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      어떤 플랫폼을 선택할까?
                    </Heading>

                    <Text mb={4}><b>웹 서비스를 만들고 싶다면: Bubble</b></Text>

                    <Text mb={4}>가장 강력한 노코드 플랫폼. 데이터베이스, 사용자 인증, API 연동까지 다 된다. 학습 곡선이 있지만 배워두면 거의 모든 웹앱을 만들 수 있다.</Text>

                    <Text mb={4}><b>모바일 앱을 만들고 싶다면: FlutterFlow</b></Text>

                    <Text mb={4}>구글 Flutter 기반이라 네이티브급 성능. 앱스토어/구글플레이 출시도 가능하다. 디자인 자유도가 높아서 예쁜 앱을 만들 수 있다.</Text>

                    <Text mb={4}><b>랜딩페이지만 필요하다면: Softr</b></Text>

                    <Text mb={4}>가장 쉽다. 1시간이면 깔끔한 랜딩페이지를 만들 수 있다. Airtable이랑 연동하면 간단한 CMS도 가능.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      노코드의 한계
                    </Heading>

                    <Text mb={4}>솔직히 한계가 있다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>복잡한 로직은 구현이 어렵다</li>
                      <li style={{marginBottom:'4px'}}>사용자가 많아지면 성능 문제</li>
                      <li style={{marginBottom:'4px'}}>플랫폼에 종속된다 (이전이 어려움)</li>
                      <li style={{marginBottom:'4px'}}>월 구독비가 쌓인다 (월 3~10만원)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>아이디어가 있으면 노코드로 먼저 만들어보자. 반응이 좋으면 그때 코딩으로 다시 만들어도 늦지 않다. 완벽한 앱보다 빠른 출시가 중요하다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog29;
