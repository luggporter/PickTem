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

const Blog61 = () => {
  const navigate = useNavigate();
  const title = '월급 관리 방법 통장 쪼개기';
  const description = '월급을 효율적으로 관리하는 통장 쪼개기 방법입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/61`;

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
    keywords: `${category}, 월급 관리, 통장 쪼개기, 재테크, 저축`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 월급 관리, 통장 쪼개기, 재테크, 저축`} />
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
                      월급 들어오자마자 사라지는 이유
                    </Heading>

                    <Text mb={4}>통장 하나에 월급, 생활비, 저축을 다 넣으면 돈이 얼마나 있는지 파악이 안 된다. 결국 다 써버린다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      통장 4개 시스템
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 월급 통장 (급여 수령)
                    </Heading>

                    <Text mb={4}>월급이 들어오는 통장. 여기서 다른 통장으로 자동이체 설정.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 고정비 통장 (자동이체)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>월세/관리비</li>
                      <li style={{marginBottom:'4px'}}>보험료</li>
                      <li style={{marginBottom:'4px'}}>통신비</li>
                      <li style={{marginBottom:'4px'}}>구독 서비스</li>
                      <li style={{marginBottom:'4px'}}>교통비</li>
                    </Box>

                    <Text mb={4}><b>월급일 다음날 자동이체</b> 설정해서 고정비를 먼저 빼자.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 생활비 통장 (체크카드 연결)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>식비</li>
                      <li style={{marginBottom:'4px'}}>생활용품</li>
                      <li style={{marginBottom:'4px'}}>문화/여가</li>
                      <li style={{marginBottom:'4px'}}>용돈</li>
                    </Box>

                    <Text mb={4}><b>월 예산을 정해놓고 그 안에서만 쓰기.</b> 체크카드를 연결하면 잔액이 보여서 과소비를 막을 수 있다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 저축/투자 통장
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>비상금 (월급의 3~6개월분)</li>
                      <li style={{marginBottom:'4px'}}>저축 (적금)</li>
                      <li style={{marginBottom:'4px'}}>투자 (주식, ETF)</li>
                    </Box>

                    <Text mb={4}><b>월급의 최소 20%</b>를 자동이체로 저축. "남으면 저축하자"는 절대 안 된다. 먼저 빼고 남은 걸로 살아야 한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      자동이체 설정 예시 (월급 300만원 기준)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>금액</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>비율</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>고정비</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>80만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>생활비</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>80만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>저축</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>20%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>투자</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>40만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>13%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>비상/여유</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>40만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>13%</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      핵심 규칙
                    </Heading>

                    <Text mb={4}>1. 저축은 월급 들어오자마자 자동이체 (나중에 하면 안 함)</Text>

                    <Text mb={4}>2. 생활비 통장 잔액이 0이 되면 그달은 끝 (추가 인출 금지)</Text>

                    <Text mb={4}>3. 비상금 3개월분 모일 때까지는 투자보다 저축 우선</Text>

                    <Text mb={4}>4. 월 1회 지출 내역 확인 (5분이면 됨)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>핵심은 "자동화"다. 월급 들어오면 자동으로 쪼개지게 설정해놓으면 의지력 없이도 돈이 모인다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog61;
