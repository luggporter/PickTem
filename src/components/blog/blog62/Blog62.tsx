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

const Blog62 = () => {
  const navigate = useNavigate();
  const title = 'ETF 투자 입문 가이드';
  const description = 'ETF 투자를 시작하는 방법을 초보자 기준으로 설명합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/62`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '재테크';
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
    keywords: `${category}, ETF, 투자, 주식, S&P500, 적립식`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, ETF, 투자, 주식, S&P500, 적립식`} />
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
                      ETF가 뭔데 다들 추천할까?
                    </Heading>

                    <Text mb={4}>ETF는 쉽게 말해 "주식 묶음 상품"이다. 삼성전자 1주 사는 대신, 한국 상위 200개 기업을 한 번에 살 수 있다. 개별 주식보다 안전하고, 펀드보다 수수료가 싸다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      ETF vs 개별주식 vs 펀드
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>ETF</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>개별주식</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>펀드</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>분산투자</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자동</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>직접 해야 함</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자동</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수수료</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.01~0.5%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.015%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~2%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매매</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하루 1회</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최소 금액</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1주 가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1주 가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통 10만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>난이도</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>낮음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>높음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>낮음</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      초보자 추천 ETF
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      국내
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>ETF</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추종 지수</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>수수료</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>설명</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>KODEX 200</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>코스피 200</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.05%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국 대형주 200개</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>TIGER 미국S&P500</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>S&P500</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.07%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>미국 500대 기업</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>KODEX 미국나스닥100</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>나스닥100</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.05%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>미국 기술주 100개</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      해외 (직접 투자)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>ETF</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추종 지수</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>수수료</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>설명</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>VOO</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>S&P500</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.03%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세계에서 가장 인기</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>QQQ</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>나스닥100</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.20%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기술주 집중</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>VT</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>전세계</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0.07%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>전 세계 분산</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      투자 방법
                    </Heading>

                    <Text mb={4}><b>적립식 투자 (DCA)가 정답이다.</b></Text>

                    <Text mb={4}>매달 같은 금액을 같은 ETF에 투자. 주가가 높을 때 적게 사고, 낮을 때 많이 산다. 타이밍을 안 맞춰도 장기적으로 수익이 난다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>월 30만원 x S&P500 ETF</li>
                      <li style={{marginBottom:'4px'}}>10년 평균 수익률: 연 10~12%</li>
                      <li style={{marginBottom:'4px'}}>10년 후 예상: 약 6,000만원 (원금 3,600만원)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>ETF도 원금 손실 가능 (원금 보장 아님)</li>
                      <li style={{marginBottom:'4px'}}>단기 매매하지 마라 (최소 3~5년)</li>
                      <li style={{marginBottom:'4px'}}>한 종목에 몰빵하지 마라 (2~3개 분산)</li>
                      <li style={{marginBottom:'4px'}}>레버리지/인버스 ETF는 초보자 금지</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}><b>TIGER 미국S&P500</b> 하나만 매달 적립식으로 사면 된다. 이것보다 단순하고 효과적인 투자법은 거의 없다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog62;
