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

const Blog38 = () => {
  const navigate = useNavigate();
  const title = '생산성 앱 추천 TOP 7';
  const description = '업무 생산성을 높여주는 앱 7가지를 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/38`;

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
    keywords: `${category}, 생산성 앱, 노션, 투두리스트, 업무 효율`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 생산성 앱, 노션, 투두리스트, 업무 효율`} />
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
                      앱 하나 바꿨을 뿐인데 효율이 달라졌다
                    </Heading>

                    <Text mb={4}>생산성 앱을 잘 고르면 하루 1~2시간은 아낄 수 있다. 직접 써보고 정착한 앱 7개를 공유한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1. Notion — 만능 워크스페이스
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료~$10/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>메모, 프로젝트 관리, 위키</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>필수</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>하나의 앱으로 메모, 할일, 데이터베이스, 문서를 다 관리할 수 있다. 학습 곡선이 있지만 익숙해지면 이것 없이 못 산다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2. Todoist — 할일 관리
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료~$5/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>할일 관리, 습관 추적</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>강추</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>Notion이 무겁다고 느끼면 Todoist가 답이다. 할일 추가가 2초면 된다. 자연어 입력("내일 오후 3시 회의")이 강력하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3. Arc — 브라우저
                    </Heading>

                    <Text mb={4}>크롬 대체 브라우저. 탭 정리가 자동이고, 사이드바 기반이라 화면이 넓어진다. 한번 쓰면 크롬으로 못 돌아간다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      4. Raycast — 런처 (맥 전용)
                    </Heading>

                    <Text mb={4}>Spotlight 대체. 앱 실행, 계산, 번역, 클립보드 히스토리를 키보드만으로 할 수 있다. 마우스 사용이 확 줄어든다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      5. Grammarly — 영어 교정
                    </Heading>

                    <Text mb={4}>영어 이메일이나 문서 쓸 때 필수. 문법, 톤, 명확성까지 체크해준다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      6. Spark — 이메일
                    </Heading>

                    <Text mb={4}>메일함을 중요/뉴스레터/알림으로 자동 분류해준다. 진짜 중요한 메일만 확인할 수 있어서 이메일 스트레스가 줄어든다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      7. Forest — 집중 타이머
                    </Heading>

                    <Text mb={4}>뽀모도로 타이머 앱. 집중하는 동안 나무가 자라고, 폰을 만지면 나무가 죽는다. 단순하지만 효과적이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      조합 추천
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>미니멀: Todoist + Forest</li>
                      <li style={{marginBottom:'4px'}}>프로: Notion + Todoist + Arc + Raycast</li>
                      <li style={{marginBottom:'4px'}}>학생: Notion + Forest + Todoist</li>
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

export default Blog38;
