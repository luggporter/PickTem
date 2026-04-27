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

const Blog45 = () => {
  const navigate = useNavigate();
  const title = '공기청정기 추천 2026 TOP 5';
  const description = '2026년 가성비 공기청정기 추천 5가지를 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/45`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '생활용품';
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
    keywords: `${category}, 공기청정기, 미세먼지, 공기청정기 추천, 다이슨`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 공기청정기, 미세먼지, 공기청정기 추천, 다이슨`} />
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
                      미세먼지 시즌, 공기청정기 어떤 게 좋을까?
                    </Heading>

                    <Text mb={4}>봄철 미세먼지 시즌이면 공기청정기 검색이 폭증한다. 10만원대부터 100만원대까지. 결론부터 말하면 <b>20~40만원대에서 가성비 최고 제품</b>을 고를 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      TOP 5 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>순위</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>적용면적</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>특징</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 블루스카이 AX60</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>349,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60㎡</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>극세 필터, 저소음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG 퓨리케어 360</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>399,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>58㎡</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>360도 흡입, 디자인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>위닉스 제로S</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>249,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>50㎡</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비 최고</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>샤오미 4 Pro</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>199,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60㎡</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격 파괴</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>코웨이 에어메가</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>449,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>66㎡</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2단 필터, 성능 최강</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1위. 삼성 블루스카이 AX60
                    </Heading>

                    <Text mb={4}>삼성 공기청정기 중 가성비 모델. PM1.0 극초미세먼지까지 잡는 필터 성능이 좋고, 수면 모드 소음이 23dB로 매우 조용하다. 필터 교체 비용도 합리적 (연 3~4만원).</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2위. LG 퓨리케어 360
                    </Heading>

                    <Text mb={4}>디자인이 가장 예쁘다. 원통형으로 360도 방향에서 공기를 빨아들이고, 클린부스터로 빠른 정화가 가능하다. 거실 인테리어와 잘 어울린다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3위. 위닉스 제로S
                    </Heading>

                    <Text mb={4}>25만원 이하에서 성능이 가장 좋다. 자체 개발 플라즈마웨이브 기술로 바이러스/세균 제거 효과도 있다. 가격 대비 만족도가 높은 제품.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      고르는 기준
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>방 크기에 맞는 적용면적 선택 (실제 면적의 1.5배 추천)</li>
                      <li style={{marginBottom:'4px'}}>필터 교체 비용 확인 (연 3~5만원이 적당)</li>
                      <li style={{marginBottom:'4px'}}>수면 모드 소음 체크 (30dB 이하가 좋음)</li>
                      <li style={{marginBottom:'4px'}}>HEPA H13 이상 필터 (PM2.5 99.97% 제거)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>가성비: 위닉스 제로S (25만원)</Text>

                    <Text mb={4}>추천: 삼성 블루스카이 AX60 (35만원)</Text>

                    <Text mb={4}>프리미엄: LG 퓨리케어 360 (40만원)</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog45;
