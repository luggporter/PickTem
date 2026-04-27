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

const Blog63 = () => {
  const navigate = useNavigate();
  const title = '신용점수 올리는 방법 정리';
  const description = '신용점수를 올리는 현실적인 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/63`;

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
    keywords: `${category}, 신용점수, 신용등급, 대출, 금융`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 신용점수, 신용등급, 대출, 금융`} />
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
                      신용점수가 중요한 이유
                    </Heading>

                    <Text mb={4}>신용점수 700점과 900점의 차이: 대출 금리가 1~3% 달라진다. 1억 대출 시 연 이자 100~300만원 차이.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      신용점수 올리는 방법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      즉시 효과
                    </Heading>

                    <Text mb={4}><b>1. 체크카드/신용카드 사용</b></Text>

                    <Text mb={4}>금융 이력이 없으면 점수가 낮다. 매달 30~50만원 이상 카드 사용하고 연체 없이 납부하면 점수가 오른다.</Text>

                    <Text mb={4}><b>2. 통신비 자동이체</b></Text>

                    <Text mb={4}>통신비를 6개월 이상 연체 없이 납부하면 가점.</Text>

                    <Text mb={4}><b>3. 적금/보험 유지</b></Text>

                    <Text mb={4}>6개월 이상 유지한 적금이나 보험이 있으면 금융 거래 이력으로 가점.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3~6개월 효과
                    </Heading>

                    <Text mb={4}><b>4. 대출 줄이기</b></Text>

                    <Text mb={4}>사용 중인 대출을 줄이면 점수 상승. 특히 카드론, 현금서비스는 감점 요인.</Text>

                    <Text mb={4}><b>5. 카드 한도 대비 사용률 30% 이하</b></Text>

                    <Text mb={4}>카드 한도 300만원에 매달 250만원 쓰면 감점. 한도의 30% 이하로 유지하자.</Text>

                    <Text mb={4}><b>6. 연체 절대 금지</b></Text>

                    <Text mb={4}>1일이라도 연체하면 점수 급락. 자동이체 설정이 필수.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      장기 효과
                    </Heading>

                    <Text mb={4}><b>7. 금융 거래 다양화</b></Text>

                    <Text mb={4}>은행 적금 + 카드 사용 + 보험 = 다양한 금융 거래 이력이 점수에 유리.</Text>

                    <Text mb={4}><b>8. 조회 횟수 줄이기</b></Text>

                    <Text mb={4}>대출 비교 사이트에서 여러 곳 조회하면 점수 하락. 한 번에 몰아서 비교하자.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      신용점수 확인 방법 (무료)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>서비스</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>기관</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>방법</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>토스</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>NICE</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>앱에서 바로 확인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>카카오페이</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>KCB</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>앱에서 바로 확인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>올크레딧</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>KCB</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>연 1회 무료</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>NICE 지킴이</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>NICE</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>연 1회 무료</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      점수별 의미
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>점수</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>등급</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>대출 가능성</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>900~1000</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1등급</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최우대 금리</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>800~899</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2~3등급</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>우대 금리</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>700~799</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4~5등급</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>일반 금리</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>600~699</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6~7등급</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>금리 높음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>600 미만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8~10등급</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>대출 어려움</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>카드 쓰고 + 연체 안 하고 + 대출 줄이기. 이 3가지만 6개월 하면 50~100점 올릴 수 있다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog63;
