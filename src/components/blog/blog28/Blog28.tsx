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

const Blog28 = () => {
  const navigate = useNavigate();
  const title = 'AI로 블로그 글 쓰는 현실적인 방법';
  const description = 'AI를 활용해 블로그 글을 효율적으로 작성하는 실전 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/28`;

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
    keywords: `${category}, AI 블로그, 글쓰기, ChatGPT 활용, 콘텐츠 제작`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, AI 블로그, 글쓰기, ChatGPT 활용, 콘텐츠 제작`} />
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
                      AI로 글 쓴다고 다 좋은 글이 나올까?
                    </Heading>

                    <Text mb={4}>결론부터 말하면 아니다. AI가 초안을 잡아주면 시간은 절약되지만, <b>그대로 올리면 저품질 판정 받는다.</b> 핵심은 AI를 어시스턴트로 쓰되, 사람의 경험과 관점을 반드시 넣는 것이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      AI 글쓰기 워크플로우
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 키워드 선정
                    </Heading>

                    <Text mb={4}>네이버 키워드 도구나 구글 트렌드에서 검색량 있는 키워드를 찾는다. 월 검색량 1,000 이상이면서 경쟁이 적은 키워드가 이상적이다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: AI에게 초안 요청
                    </Heading>

                    <Text mb={4}>프롬프트가 중요하다. "블로그 글 써줘"라고 하면 평범한 글이 나온다. 대신 이렇게 요청한다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>타겟 독자 지정 (예: "30대 직장인 대상")</li>
                      <li style={{marginBottom:'4px'}}>톤 지정 (예: "친근하되 전문적인 톤")</li>
                      <li style={{marginBottom:'4px'}}>구조 지정 (예: "H2 3~5개, 2500자 이상")</li>
                      <li style={{marginBottom:'4px'}}>개인 경험 플레이스홀더 지정</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 사람이 수정
                    </Heading>

                    <Text mb={4}>AI 초안에서 반드시 바꿔야 할 것들:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>뻔한 서론 → 개인 경험으로 시작</li>
                      <li style={{marginBottom:'4px'}}>일반적인 정보 → 구체적인 수치/사례</li>
                      <li style={{marginBottom:'4px'}}>"~입니다" 반복 → 문체 변화</li>
                      <li style={{marginBottom:'4px'}}>결론에 나만의 의견 추가</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4단계: 이미지 추가
                    </Heading>

                    <Text mb={4}>직접 찍은 사진이 최고. 없으면 Canva로 인포그래픽을 만들거나 무료 이미지 사이트를 활용한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      AI 글쓰기 주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>네이버는 AI 생성 글을 감지할 수 있다. 100% AI 글은 저품질 판정 위험</li>
                      <li style={{marginBottom:'4px'}}>같은 패턴의 글을 대량으로 올리면 블로그 전체가 저품질 될 수 있다</li>
                      <li style={{marginBottom:'4px'}}>팩트 체크 필수. AI는 틀린 정보를 자신 있게 말한다</li>
                      <li style={{marginBottom:'4px'}}>저작권 문제없는 이미지만 사용</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      현실적인 생산성
                    </Heading>

                    <Text mb={4}>AI 없이: 1개 글에 2~3시간</Text>

                    <Text mb={4}>AI 활용: 1개 글에 30분~1시간</Text>

                    <Text mb={4}>하루 2~3개 고품질 글을 생산할 수 있다. 한 달이면 60~90개. 이 정도면 블로그 수익화의 시작점이다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog28;
