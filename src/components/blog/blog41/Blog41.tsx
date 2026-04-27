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

const Blog41 = () => {
  const navigate = useNavigate();
  const title = 'AI 이미지 생성 도구 비교 2026';
  const description = 'AI 이미지 생성 도구를 비교하고 용도별 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/41`;

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
    keywords: `${category}, AI 이미지, Midjourney, DALL-E, 이미지 생성`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, AI 이미지, Midjourney, DALL-E, 이미지 생성`} />
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
                      AI로 이미지 만드는 시대
                    </Heading>

                    <Text mb={4}>텍스트만 입력하면 이미지가 나오는 세상이다. 블로그 썸네일, SNS 콘텐츠, 프레젠테이션 이미지를 직접 만들 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주요 도구 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>도구</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>품질</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>한국어</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Midjourney</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>$10/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최고</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>영어만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>예술/디자인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>DALL-E 3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>ChatGPT Plus 포함</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국어</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>범용</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Stable Diffusion</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>영어</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>커스텀/고급</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Canva AI</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료/유료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국어</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>디자인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Adobe Firefly</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료 체험</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국어</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>상업용</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      용도별 추천
                    </Heading>

                    <Text mb={4}><b>블로그 썸네일</b>: DALL-E 3 (ChatGPT에서 바로 생성)</Text>

                    <Text mb={4}><b>SNS 콘텐츠</b>: Canva AI (템플릿 + AI 조합)</Text>

                    <Text mb={4}><b>예술적 이미지</b>: Midjourney (품질 최고)</Text>

                    <Text mb={4}><b>상업용 안전</b>: Adobe Firefly (저작권 걱정 없음)</Text>

                    <Text mb={4}><b>무료로 시작</b>: Canva AI 또는 Bing Image Creator</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      프롬프트 팁
                    </Heading>

                    <Text mb={4}>좋은 이미지를 얻으려면 프롬프트가 중요하다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>구체적으로: "사진" 대신 "4K 사진, 자연광, 얕은 피사계심도"</li>
                      <li style={{marginBottom:'4px'}}>스타일 지정: "수채화 스타일", "미니멀 일러스트", "사실적 3D"</li>
                      <li style={{marginBottom:'4px'}}>분위기 지정: "따뜻한", "전문적인", "밝고 깨끗한"</li>
                      <li style={{marginBottom:'4px'}}>구도 지정: "정면", "45도 각도", "위에서 내려다보는"</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>AI 이미지 저작권은 아직 불분명한 부분이 있다</li>
                      <li style={{marginBottom:'4px'}}>상업적 사용 시 Adobe Firefly가 가장 안전</li>
                      <li style={{marginBottom:'4px'}}>사람 얼굴 생성은 초상권 문제 가능</li>
                      <li style={{marginBottom:'4px'}}>유명인/캐릭터 생성은 피하자</li>
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

export default Blog41;
