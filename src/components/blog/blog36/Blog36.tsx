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

const Blog36 = () => {
  const navigate = useNavigate();
  const title = '코딩 독학 로드맵 2026';
  const description = '프로그래밍을 독학하는 현실적인 로드맵을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/36`;

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
    keywords: `${category}, 코딩 독학, 프로그래밍 입문, 개발자, Python`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 코딩 독학, 프로그래밍 입문, 개발자, Python`} />
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
                      코딩 독학 어디서부터 시작할까?
                    </Heading>

                    <Text mb={4}>"파이썬부터 배워라"는 맞는 말이지만 부족하다. 중요한 건 <b>뭘 만들고 싶은지 먼저 정하는 것</b>이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      목표별 로드맵
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      웹사이트/웹앱 만들기
                    </Heading>

                    <Text mb={4}>1. HTML + CSS (2주) → 기본 웹페이지 만들기</Text>

                    <Text mb={4}>2. JavaScript (4주) → 웹페이지에 동작 추가</Text>

                    <Text mb={4}>3. React (4주) → 현대적인 웹앱 개발</Text>

                    <Text mb={4}>4. Node.js (3주) → 서버 개발</Text>

                    <Text mb={4}>5. 포트폴리오 프로젝트 (2주)</Text>

                    <Text mb={4}><b>총 소요: 약 4개월</b> (하루 2시간 기준)</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      데이터 분석/AI
                    </Heading>

                    <Text mb={4}>1. Python 기초 (3주)</Text>

                    <Text mb={4}>2. Pandas/NumPy (2주) → 데이터 처리</Text>

                    <Text mb={4}>3. 시각화 (1주) → Matplotlib, Seaborn</Text>

                    <Text mb={4}>4. 머신러닝 기초 (4주) → scikit-learn</Text>

                    <Text mb={4}>5. 프로젝트 (2주)</Text>

                    <Text mb={4}><b>총 소요: 약 3개월</b></Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      앱 개발
                    </Heading>

                    <Text mb={4}>1. Dart + Flutter (6주) → 크로스플랫폼 앱</Text>

                    <Text mb={4}>2. 상태관리 (2주) → Provider/Riverpod</Text>

                    <Text mb={4}>3. Firebase (2주) → 백엔드</Text>

                    <Text mb={4}>4. 앱스토어 출시 (1주)</Text>

                    <Text mb={4}><b>총 소요: 약 3개월</b></Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      무료 학습 자원 추천
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>자원</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>난이도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>생활코딩</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>웹 입문</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>노마드코더</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>웹/앱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초중급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>freeCodeCamp</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>웹 전반</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초중급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Codecademy</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>언어별</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>CS50 (하버드)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>컴퓨터과학</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중급</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      현실적인 조언
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>완벽하게 이해하고 넘어가려 하지 마라. 60% 이해하면 다음으로</li>
                      <li style={{marginBottom:'4px'}}>튜토리얼만 보지 말고 직접 만들어라. "따라 치기"는 공부가 아니다</li>
                      <li style={{marginBottom:'4px'}}>에러 메시지를 두려워하지 마라. 에러 해결이 진짜 실력</li>
                      <li style={{marginBottom:'4px'}}>커뮤니티 참여하라 (개발자 오픈채팅, 디스코드)</li>
                      <li style={{marginBottom:'4px'}}>매일 30분이라도 꾸준히 하는 게 주말에 5시간보다 낫다</li>
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

export default Blog36;
