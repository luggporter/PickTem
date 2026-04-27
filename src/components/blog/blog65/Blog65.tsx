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

const Blog65 = () => {
  const navigate = useNavigate();
  const title = '적금 vs 예금 차이와 추천';
  const description = '적금과 예금의 차이점을 설명하고 상황별 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/65`;

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
    keywords: `${category}, 적금, 예금, 저축, 금리, 은행`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 적금, 예금, 저축, 금리, 은행`} />
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
                      적금이 좋을까 예금이 좋을까?
                    </Heading>

                    <Text mb={4}>둘 다 은행에 돈 넣는 건데 뭐가 다를까? 핵심 차이는 <b>넣는 방식</b>이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      기본 차이
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>적금</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>예금</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>납입 방식</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매달 일정 금액</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한 번에 목돈</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>금리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통 더 높음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통 더 낮음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실제 이자</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>적음 (원금이 점차 증가)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>많음 (처음부터 전액)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>추천</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>돈 모으는 사람</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>목돈 있는 사람</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      실제 이자 비교 (금리 4% 기준)
                    </Heading>

                    <Text mb={4}><b>적금: 월 50만원 x 12개월 = 원금 600만원</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>실제 이자: 약 13만원 (세전)</li>
                      <li style={{marginBottom:'4px'}}>왜? 첫 달 50만원만 12개월 이자, 마지막 달 50만원은 1개월 이자</li>
                    </Box>

                    <Text mb={4}><b>예금: 600만원 한 번에 예치 x 12개월</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>실제 이자: 약 24만원 (세전)</li>
                      <li style={{marginBottom:'4px'}}>처음부터 600만원 전체에 이자가 붙으니까</li>
                    </Box>

                    <Text mb={4}><b>같은 금리라면 예금이 이자가 거의 2배 많다.</b></Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      그래도 적금을 해야 하는 이유
                    </Heading>

                    <Text mb={4}>목돈이 없으니까. 매달 50만원씩 모아서 600만원을 만드는 게 적금의 본질이다. 이자가 목적이 아니라 강제 저축이 목적.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      상황별 추천
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>상황</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>목돈 없음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>적금</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>강제 저축</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>목돈 있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>예금</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>이자 최대화</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>비상금</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>파킹통장</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수시 입출금 + 이자</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>장기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>CMA/MMF</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>약간 더 높은 금리</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2026년 금리 현황
                    </Heading>

                    <Text mb={4}>은행별 금리가 다르니 비교해보자:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>카카오뱅크, 토스뱅크: 인터넷 전문은행이 보통 0.2~0.5% 높음</li>
                      <li style={{marginBottom:'4px'}}>저축은행: 시중은행보다 0.5~1% 높지만 5,000만원까지만 보호</li>
                      <li style={{marginBottom:'4px'}}>특판 적금: 가끔 6~7% 나옴 (한정, 조건부)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>매달 여유돈 → 적금 (강제 저축)</li>
                      <li style={{marginBottom:'4px'}}>목돈 생겼으면 → 예금 (이자 극대화)</li>
                      <li style={{marginBottom:'4px'}}>비상금 → 파킹통장 (수시 입출금)</li>
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

export default Blog65;
