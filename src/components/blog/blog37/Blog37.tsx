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

const Blog37 = () => {
  const navigate = useNavigate();
  const title = '2026 무선 이어폰 추천 가성비 TOP 5';
  const description = '가성비 무선 이어폰 추천 5가지를 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/37`;

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
    keywords: `${category}, 무선 이어폰, 에어팟, 갤럭시 버즈, 이어폰 추천`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 무선 이어폰, 에어팟, 갤럭시 버즈, 이어폰 추천`} />
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
                      무선 이어폰 뭐 살까?
                    </Heading>

                    <Text mb={4}>에어팟이 좋은 건 알지만 비싸다. 5~15만원대에서 에어팟 부럽지 않은 이어폰을 찾아봤다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      TOP 5 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>순위</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>노이즈캔슬링</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>배터리</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 갤럭시 버즈 FE</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>79,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>갤럭시 유저</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소니 WF-C700N</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>99,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>7.5시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>음질 중시</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>QCY T20</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>29,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>없음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>극가성비</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>샤오미 Buds 4 Pro</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>89,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6.5시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비 노캔</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>JBL Tune 230NC</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>69,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리 중시</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1위. 갤럭시 버즈 FE
                    </Heading>

                    <Text mb={4}>갤럭시 폰 쓴다면 이게 정답이다. ANC(노이즈캔슬링) 성능이 10만원 이하에서 최고 수준. 통화 품질도 좋고, 삼성 기기 간 자동 전환이 편하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2위. 소니 WF-C700N
                    </Heading>

                    <Text mb={4}>음질이 가장 좋다. 소니 특유의 따뜻한 저음이 좋은 사람에게 추천. LDAC 코덱 지원으로 고음질 스트리밍도 가능하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3위. QCY T20
                    </Heading>

                    <Text mb={4}>3만원 이하에서 이 정도면 놀랍다. 노이즈캔슬링은 없지만 기본 음질이 가격 대비 훌륭하다. 잃어버려도 부담 없는 가격이 장점.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      고르는 기준
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>아이폰 → 에어팟 (연동 최고)</li>
                      <li style={{marginBottom:'4px'}}>갤럭시 → 갤럭시 버즈 FE (연동 + 가성비)</li>
                      <li style={{marginBottom:'4px'}}>음질 최우선 → 소니 WF-C700N</li>
                      <li style={{marginBottom:'4px'}}>예산 3만원 → QCY T20</li>
                      <li style={{marginBottom:'4px'}}>배터리 중요 → JBL Tune 230NC (8시간)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      에어팟은?
                    </Heading>

                    <Text mb={4}>에어팟 4 (249,000원), 에어팟 프로 2 (349,000원). 아이폰 쓰면 연동이 최고이지만, 순수 음질/가성비로는 위 제품들이 낫다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog37;
