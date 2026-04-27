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

const Blog27 = () => {
  const navigate = useNavigate();
  const title = 'Claude vs ChatGPT 2026년 비교';
  const description = 'Claude와 ChatGPT 차이점을 실사용 기준으로 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/27`;

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
    keywords: `${category}, Claude, ChatGPT, AI 비교, LLM`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, Claude, ChatGPT, AI 비교, LLM`} />
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
                      Claude와 ChatGPT, 뭐가 다를까?
                    </Heading>

                    <Text mb={4}>AI 챗봇 시장에서 가장 많이 비교되는 두 서비스. 결론부터 말하면, <b>코딩과 긴 문서 작업은 Claude, 범용성과 이미지 생성은 ChatGPT</b>가 낫다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      모델 성능 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>Claude (Anthropic)</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>ChatGPT (OpenAI)</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최신 모델</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Claude Opus 4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>GPT-4o</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>코딩 능력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매우 강함</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>강함</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>긴 문서 처리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>100만 토큰</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>12.8만 토큰</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>이미지 생성</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>불가</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>DALL-E 3</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격 (월)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>$20</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>$20</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국어</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자연스러움</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자연스러움</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      Claude가 더 나은 경우
                    </Heading>

                    <Text mb={4}><b>1. 코드 작성과 디버깅</b></Text>

                    <Text mb={4}>Claude는 코딩에서 특히 강하다. 복잡한 버그를 찾아내는 능력이 뛰어나고, 한 번에 긴 코드를 작성할 수 있다. 프로그래밍 관련 작업이 많다면 Claude가 확실히 낫다.</Text>

                    <Text mb={4}><b>2. 긴 문서 분석</b></Text>

                    <Text mb={4}>100만 토큰 컨텍스트 윈도우는 엄청난 장점이다. 100페이지짜리 보고서를 통째로 넣고 분석할 수 있다. ChatGPT로는 이게 안 된다.</Text>

                    <Text mb={4}><b>3. 지시사항 준수</b></Text>

                    <Text mb={4}>"이 형식으로 답변해줘"라고 하면 Claude가 더 정확하게 따른다. 특히 구조화된 출력이 필요할 때 차이가 크다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      ChatGPT가 더 나은 경우
                    </Heading>

                    <Text mb={4}><b>1. 이미지 생성</b></Text>

                    <Text mb={4}>DALL-E 3 통합은 ChatGPT의 독보적인 장점이다. 블로그 썸네일, SNS 이미지를 대화하면서 바로 만들 수 있다.</Text>

                    <Text mb={4}><b>2. 플러그인/GPTs 생태계</b></Text>

                    <Text mb={4}>수만 개의 커스텀 GPT가 있다. 특정 분야에 최적화된 AI를 바로 사용할 수 있는 것은 큰 장점.</Text>

                    <Text mb={4}><b>3. 웹 브라우징</b></Text>

                    <Text mb={4}>실시간 정보 검색이 ChatGPT가 더 자연스럽다. 최신 뉴스나 가격 정보를 물어볼 때 유용하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론: 둘 다 쓰는 게 정답
                    </Heading>

                    <Text mb={4}>솔직히 하나만 고르기 어렵다. 코딩과 문서 작업이 많으면 Claude, 이미지와 범용 목적이면 ChatGPT. 두 서비스 모두 무료 버전이 있으니 직접 비교해보고 결정하자.</Text>

                    <Text mb={4}>가장 실용적인 조합은 <b>Claude Pro + ChatGPT 무료</b>다. 메인 작업은 Claude로 하고, 이미지 생성이 필요할 때만 ChatGPT를 쓰는 방식.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog27;
