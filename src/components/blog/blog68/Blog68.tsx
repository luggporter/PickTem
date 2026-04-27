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

const Blog68 = () => {
  const navigate = useNavigate();
  const title = '보험 이것만 있으면 된다';
  const description = '필수 보험과 불필요한 보험을 구분하는 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/68`;

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
    keywords: `${category}, 보험, 보험 추천, 실비보험, 보험 정리`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 보험, 보험 추천, 실비보험, 보험 정리`} />
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
                      보험 10개 들었는데 진짜 필요한 건 3개다
                    </Heading>

                    <Text mb={4}>보험설계사 말 듣고 이것저것 가입했는데, 정작 보장 내용도 모르고 매달 보험료만 나간다. 진짜 필요한 보험만 남기고 정리하자.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      필수 보험 3가지
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 실손의료보험 (실비)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>병원비 본인부담금의 80~90% 돌려받는 보험</li>
                      <li style={{marginBottom:'4px'}}>모든 보험 중 가장 중요하고 가성비 좋음</li>
                      <li style={{marginBottom:'4px'}}>이미 가입했다면 해지하지 말 것 (재가입 어려움)</li>
                      <li style={{marginBottom:'4px'}}>월 1~3만원</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 운전자보험 (운전하는 경우)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>교통사고 시 형사 합의금, 벌금 보장</li>
                      <li style={{marginBottom:'4px'}}>자동차보험과 별개 (자보는 상대방 보장, 운전자보험은 나를 보장)</li>
                      <li style={{marginBottom:'4px'}}>운전 안 하면 불필요</li>
                      <li style={{marginBottom:'4px'}}>월 1~2만원</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 종합보험/암보험 (30대 이후)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>암, 뇌혈관, 심장 질환 진단금</li>
                      <li style={{marginBottom:'4px'}}>진단금 3,000만원 이상 추천</li>
                      <li style={{marginBottom:'4px'}}>나이 들수록 보험료가 비싸지니 30대에 가입이 유리</li>
                      <li style={{marginBottom:'4px'}}>월 3~5만원</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      불필요할 수 있는 보험
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>보험</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>저축보험</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수익률이 은행 예금보다 낮음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>변액보험</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>원금 손실 위험 + 높은 수수료</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>어린이보험 (성인 가입)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보장 범위가 애매</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>중복 실비</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실비는 1개면 충분</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>단체보험 충분한데 추가 가입</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>회사 단체보험 확인 먼저</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      보험 정리하는 방법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 현재 보험 확인
                    </Heading>

                    <Text mb={4}>내보험다보여 (insure.or.kr)에서 가입 보험 전체 조회 가능 (무료).</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: 보장 내용 파악
                    </Heading>

                    <Text mb={4}>각 보험의 보장 항목을 정리하고 중복 확인.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 불필요한 보험 해지
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>저축성 보험: 해지 환급금 확인 후 판단</li>
                      <li style={{marginBottom:'4px'}}>중복 보장: 하나만 남기기</li>
                      <li style={{marginBottom:'4px'}}>특약 정리: 안 쓰는 특약 제거 (보험료 줄어듦)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      연령별 추천
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>연령</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>필수</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>선택</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>20대</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실비</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>운전자보험</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>30대</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실비 + 종합/암보험</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>운전자보험</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>40대 이상</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>실비 + 종합/암보험</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>간병보험</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>실비 하나만 있어도 기본은 된다. 거기에 종합/암보험 하나 추가하면 충분. 월 보험료 5~8만원이 적정선이다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog68;
