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

const Blog73 = () => {
  const navigate = useNavigate();
  const title = '쿠팡파트너스 시작 가이드';
  const description = '쿠팡파트너스로 부수입을 만드는 방법을 단계별로 설명합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/73`;

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
    keywords: `${category}, 쿠팡파트너스, 제휴마케팅, 부수입, 블로그 수익`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 쿠팡파트너스, 제휴마케팅, 부수입, 블로그 수익`} />
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
                      쿠팡파트너스로 월 10만원 벌기
                    </Heading>

                    <Text mb={4}>쿠팡 상품 링크를 공유하고, 누군가 그 링크로 구매하면 수수료 3%를 받는 구조. 가장 쉬운 부업 중 하나다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      시작 방법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 가입 (5분)
                    </Heading>

                    <Text mb={4}>쿠팡파트너스 사이트에서 가입. 블로그/SNS URL 입력 필요. 승인은 보통 1~3일.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: 링크 생성 (1분)
                    </Heading>

                    <Text mb={4}>쿠팡에서 추천할 상품을 찾고, 쿠팡파트너스에서 제휴 링크를 생성한다. 이 링크로 24시간 내 구매하면 수수료 발생.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 콘텐츠 작성 (30분~1시간)
                    </Heading>

                    <Text mb={4}>블로그에 상품 추천 글을 쓰고 링크를 삽입한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      수수료 구조
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>카테고리</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>수수료</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>대부분 상품</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>로켓직구</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>일부 카테고리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~3%</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>예시</b>: 100만원 노트북이 팔리면 → 3만원 수수료</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      잘 되는 콘텐츠 유형
                    </Heading>

                    <Text mb={4}><b>1. 비교/추천 글</b></Text>

                    <Text mb={4}>"2026 공기청정기 추천 TOP 5" → 5개 상품 각각에 링크</Text>

                    <Text mb={4}><b>2. 사용 후기</b></Text>

                    <Text mb={4}>"OO 1개월 사용 후기" → 구매 링크</Text>

                    <Text mb={4}><b>3. 할인 정보</b></Text>

                    <Text mb={4}>"오늘만 쿠팡 로켓 특가" → 시의성 있는 딜</Text>

                    <Text mb={4}><b>4. 문제 해결형</b></Text>

                    <Text mb={4}>"원룸 곰팡이 제거 방법" → 곰팡이 제거제 링크</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      현실적인 수익
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>일 방문자</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>예상 클릭</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>예상 구매</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>월 수익</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>100명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>10명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1건</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~3만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>500명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>50명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5건</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5~15만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2,000명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>200명</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>20건</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>20~60만원</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      핵심 팁
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>고단가 상품 추천 (가전, 전자기기, 가구)</li>
                      <li style={{marginBottom:'4px'}}>계절 상품 노리기 (여름: 선풍기/에어컨, 겨울: 히터/전기매트)</li>
                      <li style={{marginBottom:'4px'}}>글 100개 이상 쌓이면 유입이 눈에 띄게 늘어남</li>
                      <li style={{marginBottom:'4px'}}>네이버 블로그보다 워드프레스/티스토리가 장기적으로 유리 (SEO)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>링크 클릭 후 24시간 내 구매만 인정</li>
                      <li style={{marginBottom:'4px'}}>직접 구매는 수수료 안 됨</li>
                      <li style={{marginBottom:'4px'}}>광고임을 표시해야 함 (공정거래위원회 규정)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>블로그 글 하루 1개씩 3개월 = 90개. 이때부터 수익이 보이기 시작한다. 가장 현실적인 부수입 방법.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog73;
