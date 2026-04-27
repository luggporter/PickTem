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

const Blog70 = () => {
  const navigate = useNavigate();
  const title = '20대 재테크 시작 가이드';
  const description = '20대가 알아야 할 재테크 기초를 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/70`;

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
    keywords: `${category}, 재테크, 20대, 저축, 투자 입문`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 재테크, 20대, 저축, 투자 입문`} />
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
                      20대에 시작해야 30대가 편하다
                    </Heading>

                    <Text mb={4}>"돈을 얼마나 버느냐"보다 "돈을 어떻게 관리하느냐"가 중요하다. 20대에 습관을 만들면 30대부터 복리 효과를 누릴 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1단계: 비상금 만들기
                    </Heading>

                    <Text mb={4}><b>목표: 월급 3개월분</b></Text>

                    <Text mb={4}>비상금이 없으면 갑작스러운 지출(병원비, 수리비)에 카드론이나 대출을 쓰게 된다. 이자만 내다가 돈이 안 모인다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>파킹통장 or CMA 계좌에 보관</li>
                      <li style={{marginBottom:'4px'}}>절대 쓰면 안 되는 돈 (진짜 비상시만)</li>
                      <li style={{marginBottom:'4px'}}>월급의 20%씩 모으면 약 1년</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2단계: 적금으로 목돈 만들기
                    </Heading>

                    <Text mb={4}>비상금 완성 후, 적금으로 목돈을 만들자.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>월 30~50만원 적금 (12개월)</li>
                      <li style={{marginBottom:'4px'}}>금리 높은 인터넷은행 활용</li>
                      <li style={{marginBottom:'4px'}}>만기 후 → 3단계 투자로 이동</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3단계: 투자 시작
                    </Heading>

                    <Text mb={4}>적금 만기 + 매달 여유돈으로 투자를 시작한다.</Text>

                    <Text mb={4}><b>초보자 추천 포트폴리오:</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>S&P500 ETF: 70% (안정적 성장)</li>
                      <li style={{marginBottom:'4px'}}>한국 주식 ETF: 20% (국내 분산)</li>
                      <li style={{marginBottom:'4px'}}>현금/예금: 10% (유동성)</li>
                    </Box>

                    <Text mb={4}>매달 자동 매수 설정하고 잊어버리기. 단기 등락에 흔들리지 말 것.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      20대 재테크 실수 TOP 5
                    </Heading>

                    <Text mb={4}><b>1. 저축 안 하고 바로 주식</b></Text>

                    <Text mb={4}>비상금 없이 주식 하면 급할 때 손해 보고 팔게 된다.</Text>

                    <Text mb={4}><b>2. 코인/레버리지 투자</b></Text>

                    <Text mb={4}>큰 돈 벌겠다고 위험한 투자 → 원금 날리기 십상.</Text>

                    <Text mb={4}><b>3. 과소비 후 "다음 달부터"</b></Text>

                    <Text mb={4}>다음 달은 영원히 안 온다. 월급 들어오면 자동이체로 먼저 빼자.</Text>

                    <Text mb={4}><b>4. 보험 많이 가입</b></Text>

                    <Text mb={4}>20대는 실비 하나면 충분. 저축성 보험은 비추.</Text>

                    <Text mb={4}><b>5. 재테크 공부만 하고 실행 안 함</b></Text>

                    <Text mb={4}>유튜브 100개 봐도 적금 하나 안 만들면 의미 없다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      복리의 마법
                    </Heading>

                    <Text mb={4}>월 30만원을 연 10% 수익률로 투자하면:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>10년 후: 약 6,000만원 (원금 3,600만원)</li>
                      <li style={{marginBottom:'4px'}}>20년 후: 약 2.3억원 (원금 7,200만원)</li>
                      <li style={{marginBottom:'4px'}}>30년 후: 약 6.8억원 (원금 1.08억원)</li>
                    </Box>

                    <Text mb={4}><b>빨리 시작할수록 복리 효과가 크다.</b> 이게 20대에 시작해야 하는 이유.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog70;
