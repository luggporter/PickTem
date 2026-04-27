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

const Blog40 = () => {
  const navigate = useNavigate();
  const title = '비밀번호 관리 앱 추천';
  const description = '비밀번호 관리 앱 비교와 추천 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/40`;

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
    keywords: `${category}, 비밀번호 관리, 1Password, Bitwarden, 보안`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 비밀번호 관리, 1Password, Bitwarden, 보안`} />
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
                      비밀번호 1234 아직도 쓰고 있다면
                    </Heading>

                    <Text mb={4}>비밀번호를 기억하기 쉽게 만들면 해킹 당하기도 쉽다. 비밀번호 관리 앱을 쓰면 하나의 마스터 비밀번호만 기억하면 된다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      추천 앱 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>앱</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>장점</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Bitwarden</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료 (유료 $10/년)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>오픈소스, 가장 저렴</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비 최고</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1Password</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>$36/년</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>UI 최고, 가족 공유</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가족 추천</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 패스</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시 기본 내장</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시 유저</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>애플 키체인</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아이폰/맥 내장</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>애플 유저</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      왜 써야 할까?
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>사이트마다 다른 비밀번호 사용 가능 (하나 뚫려도 나머지 안전)</li>
                      <li style={{marginBottom:'4px'}}>자동 입력으로 로그인 시간 단축</li>
                      <li style={{marginBottom:'4px'}}>비밀번호 유출 알림 (다크웹 모니터링)</li>
                      <li style={{marginBottom:'4px'}}>신용카드, 메모 등 민감 정보 안전 보관</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      처음 설정하는 법
                    </Heading>

                    <Text mb={4}>1. 앱 설치 + 마스터 비밀번호 설정 (길고 기억하기 쉬운 문장형)</Text>

                    <Text mb={4}>2. 현재 쓰는 사이트 비밀번호 하나씩 등록</Text>

                    <Text mb={4}>3. 중복 비밀번호 → 랜덤 비밀번호로 변경</Text>

                    <Text mb={4}>4. 브라우저 확장 프로그램 설치 (자동 입력)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>무료로 시작하려면 <b>Bitwarden</b>. 편의성 최고는 <b>1Password</b>. 갤럭시/아이폰 쓰면 각각 내장 앱도 괜찮다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog40;
