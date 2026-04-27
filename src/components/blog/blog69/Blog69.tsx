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

const Blog69 = () => {
  const navigate = useNavigate();
  const title = '연말정산 환급 많이 받는 법';
  const description = '연말정산에서 환급을 최대화하는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/69`;

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
    keywords: `${category}, 연말정산, 세금 환급, 소득공제, 세액공제`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 연말정산, 세금 환급, 소득공제, 세액공제`} />
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
                      연말정산 13월의 월급 만들기
                    </Heading>

                    <Text mb={4}>같은 월급을 받아도 연말정산 결과가 다르다. 아는 만큼 돌려받는다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      소득공제 vs 세액공제
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>구분</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>소득공제</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>세액공제</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>방식</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소득에서 빼줌</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세금에서 빼줌</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>효과</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세율에 따라 다름</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>금액 그대로 차감</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>예시</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>신용카드, 전통시장</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>의료비, 교육비, 기부금</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      놓치기 쉬운 공제 항목
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 체크카드/현금영수증 공제
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>총급여 25% 초과분부터 공제</li>
                      <li style={{marginBottom:'4px'}}>신용카드 15%, <b>체크카드 30%</b>, <b>현금영수증 30%</b></li>
                      <li style={{marginBottom:'4px'}}><b>팁</b>: 25%까지는 혜택 많은 신용카드, 초과분은 체크카드로 결제</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 청약저축
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>연 240만원까지 소득공제 (총급여 7천만원 이하)</li>
                      <li style={{marginBottom:'4px'}}>월 20만원 납입이면 연 240만원 → 공제액 약 96만원</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 연금저축/IRP
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>연금저축: 연 600만원까지</li>
                      <li style={{marginBottom:'4px'}}>IRP: 연금저축 포함 900만원까지</li>
                      <li style={{marginBottom:'4px'}}>세액공제 13.2~16.5% → 최대 약 148만원 환급</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 의료비
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>총급여 3% 초과분 공제</li>
                      <li style={{marginBottom:'4px'}}>안경/콘택트렌즈 (50만원 한도)</li>
                      <li style={{marginBottom:'4px'}}>난임 시술비 (30% 세액공제)</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      5. 교육비
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>대학 등록금 (900만원 한도)</li>
                      <li style={{marginBottom:'4px'}}>학원비 (취학 전 자녀만)</li>
                      <li style={{marginBottom:'4px'}}>직업훈련비</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      6. 월세 세액공제
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>총급여 7천만원 이하 무주택자</li>
                      <li style={{marginBottom:'4px'}}>연 750만원 한도</li>
                      <li style={{marginBottom:'4px'}}>세액공제 15~17%</li>
                      <li style={{marginBottom:'4px'}}><b>월세 60만원 x 12개월 = 720만원 → 환급 약 108~122만원</b></li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      놓치지 않는 법
                    </Heading>

                    <Text mb={4}>1. <b>1월 15일</b>: 국세청 간소화 서비스 오픈 → 확인</Text>

                    <Text mb={4}>2. <b>자동 안 잡히는 것</b>: 안경점, 보청기, 교복, 기부금 → 직접 영수증 제출</Text>

                    <Text mb={4}>3. <b>맞벌이 전략</b>: 소득 높은 쪽이 공제받는 게 유리 (세율 높으니까)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>연금저축 + IRP + 체크카드 + 월세공제. 이 4개만 챙겨도 환급 100만원 이상 가능하다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog69;
