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

const Blog74 = () => {
  const navigate = useNavigate();
  const title = '주린이 주식 입문 가이드';
  const description = '주식 투자를 처음 시작하는 사람을 위한 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/74`;

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
    keywords: `${category}, 주식, 투자 입문, 주식 초보, 주식 용어`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 주식, 투자 입문, 주식 초보, 주식 용어`} />
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
                      주식 처음이면 이것부터 읽자
                    </Heading>

                    <Text mb={4}>주식을 시작하고 싶은데 뭐부터 해야 할지 모르겠다면, 이 글 하나로 기본은 잡을 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주식 계좌 만들기
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      증권사 선택
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>증권사</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>수수료</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>앱 사용성</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>키움증권</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최저</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수수료 중시</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성증권</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>편의성</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>토스증권</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>저렴</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최고</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초보자</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>카카오페이증권</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>저렴</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>좋음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소액 투자</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>초보자 추천: 토스증권</b> (앱이 가장 직관적)</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      계좌 개설
                    </Heading>

                    <Text mb={4}>1. 앱 설치 → 비대면 계좌 개설 (신분증 필요)</Text>

                    <Text mb={4}>2. 은행 계좌 연결</Text>

                    <Text mb={4}>3. 입금 → 주식 매수 가능</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      꼭 알아야 할 용어
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용어</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>뜻</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매수</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주식 사기</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매도</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주식 팔기</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>호가</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>현재 사고팔 수 있는 가격</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>시가총액</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주가 x 전체 주식 수 (회사 규모)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>PER</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주가수익비율 (낮으면 저평가)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배당</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>회사가 주주에게 나눠주는 이익</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>ETF</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주식 묶음 상품 (분산투자)</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      초보자 투자 전략
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 소액으로 시작
                    </Heading>

                    <Text mb={4}>처음에는 10~30만원으로 시작. 잃어도 생활에 지장 없는 금액.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. ETF부터
                    </Heading>

                    <Text mb={4}>개별 주식보다 ETF가 안전하다. KODEX 200, TIGER S&P500 추천.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 적립식 매수
                    </Heading>

                    <Text mb={4}>한 번에 몰빵하지 말고, 매달 일정 금액을 나눠서 사기. 주가가 높으면 적게, 낮으면 많이 사게 된다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 장기 보유
                    </Heading>

                    <Text mb={4}>최소 1년, 권장 3~5년. 단기 매매는 수수료와 세금만 나간다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      절대 하면 안 되는 것
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>빚내서 투자 (영끌 투자)</li>
                      <li style={{marginBottom:'4px'}}>한 종목에 올인</li>
                      <li style={{marginBottom:'4px'}}>유튜버/주변 추천만 믿고 투자</li>
                      <li style={{marginBottom:'4px'}}>떨어질 때 공포에 팔기</li>
                      <li style={{marginBottom:'4px'}}>오를 때 탐욕에 추가 매수</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      세금
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>세율</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>국내 주식 양도세</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>대주주만 (일반인 비과세)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>해외 주식 양도세</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>연 250만원 초과 시 22%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배당소득세</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>15.4%</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>토스증권 계좌 만들고 → 매달 10~30만원 → S&P500 ETF 적립식 매수. 이게 주식 입문의 정석이다. 나머지는 하면서 배우면 된다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog74;
