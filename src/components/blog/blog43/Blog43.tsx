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

const Blog43 = () => {
  const navigate = useNavigate();
  const title = '2026 모니터 추천 재택근무용';
  const description = '재택근무에 적합한 모니터를 예산별로 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/43`;

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
    keywords: `${category}, 모니터 추천, 재택근무, 27인치 모니터, 4K 모니터`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 모니터 추천, 재택근무, 27인치 모니터, 4K 모니터`} />
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
                      재택근무 모니터 어떤 걸 사야 할까?
                    </Heading>

                    <Text mb={4}>노트북으로만 일하면 목이 아프고 효율도 떨어진다. 외부 모니터 하나만 추가하면 생산성이 확 올라간다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      예산별 추천
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      20만원 이하: 기본형
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>크기</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>해상도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG 27MQ400</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>159,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>FHD</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 F27T350</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>169,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>FHD</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>FHD(1920x1080)로 기본 업무에 충분하다. 27인치가 적당한 크기.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      30~50만원: 가성비
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>크기</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>해상도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG 27UP850N</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>399,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4K</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 S27B610</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>349,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>QHD</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Dell S2722QC</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>379,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4K + USB-C</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>QHD나 4K로 가면 글자가 선명해져서 눈이 편하다. USB-C 연결 모니터는 케이블 하나로 충전+영상 출력이 돼서 편리하다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      50만원 이상: 프리미엄
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>크기</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>해상도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG 32UN880</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>649,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>32인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4K + 에르고스탠드</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 ViewFinity S8</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>549,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>32인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4K</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Dell U3223QE</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>699,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>32인치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4K + USB-C 허브</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>32인치 4K는 창 2개 나란히 띄워도 넉넉하다. LG 에르고스탠드는 모니터 암이 내장되어 있어 책상이 깔끔해진다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      고르는 팁
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>27인치면 QHD(2560x1440) 이상 추천</li>
                      <li style={{marginBottom:'4px'}}>32인치면 4K(3840x2160) 필수</li>
                      <li style={{marginBottom:'4px'}}>USB-C 포트 있으면 노트북 연결이 편함</li>
                      <li style={{marginBottom:'4px'}}>IPS 패널 (시야각 넓고 색감 정확)</li>
                      <li style={{marginBottom:'4px'}}>높이/틸트 조절 가능한 스탠드</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>가성비 최고: <b>Dell S2722QC</b> (4K + USB-C, 38만원)</Text>

                    <Text mb={4}>여유 있으면: <b>LG 32UN880</b> (4K + 에르고스탠드, 65만원)</Text>

                    <Text mb={4}>예산 적으면: <b>LG 27MQ400</b> (FHD, 16만원)</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog43;
