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

const Blog57 = () => {
  const navigate = useNavigate();
  const title = '1인 가구 장보기 가이드';
  const description = '1인 가구가 식비를 아끼면서 장보는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/57`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '생활용품';
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
    keywords: `${category}, 장보기, 1인가구, 식비 절약, 자취`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 장보기, 1인가구, 식비 절약, 자취`} />
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
                      혼자 살면서 식비 월 30만원 이하로 줄이기
                    </Heading>

                    <Text mb={4}>자취하면 배달 시켜 먹다가 식비가 월 50~70만원 나가기 쉽다. 장보기 방식만 바꾸면 월 20~30만원으로 충분하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      장보기 기본 원칙
                    </Heading>

                    <Text mb={4}><b>1. 주 1회 대형마트, 주 1~2회 편의점</b></Text>

                    <Text mb={4}>대형마트에서 일주일치 식재료를 사고, 부족한 건 편의점/동네 마트에서 보충.</Text>

                    <Text mb={4}><b>2. 장보기 전 냉장고 체크</b></Text>

                    <Text mb={4}>뭐가 있는지 확인 안 하면 같은 거 또 산다. 사진 찍어가기.</Text>

                    <Text mb={4}><b>3. 식단 대충이라도 계획</b></Text>

                    <Text mb={4}>"이번 주 저녁: 월 카레, 화 볶음밥, 수 라면, 목 돈까스, 금 외식"</Text>

                    <Text mb={4}>이 정도만 정해도 장보기가 훨씬 효율적이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1인가구 추천 식재료
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      항상 냉장고에 있어야 할 것
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>계란 (30개입, 5~6천원) — 만능 식재료</li>
                      <li style={{marginBottom:'4px'}}>파 (1단, 1천원) — 거의 모든 요리에 필요</li>
                      <li style={{marginBottom:'4px'}}>양파 (3개, 2천원) — 볶음/조림/국 필수</li>
                      <li style={{marginBottom:'4px'}}>마늘 (다진마늘 1팩, 2천원) — 시간 절약</li>
                      <li style={{marginBottom:'4px'}}>밥 (즉석밥 10개, 만원) — 자취 필수</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      냉동실에 있으면 좋은 것
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>냉동밥 (직접 소분) — 즉석밥보다 저렴</li>
                      <li style={{marginBottom:'4px'}}>냉동 야채믹스 (3천원) — 볶음밥/라면에 넣기</li>
                      <li style={{marginBottom:'4px'}}>냉동 닭가슴살 (1kg, 만원) — 단백질</li>
                      <li style={{marginBottom:'4px'}}>만두 (30개, 5천원) — 간편식</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1주일 식단 예시 (식비 5만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>요일</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>아침</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>점심</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>저녁</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>계란토스트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>도시락</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>카레</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>화</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>시리얼</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>도시락</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>볶음밥</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>계란프라이</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>편의점</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>라면+밥</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>목</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>토스트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>도시락</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>제육볶음</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>금</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>생략</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>회사근처</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>외식</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>토</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>브런치</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>생략</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>요리 도전</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>일</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>생략</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>외식</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>남은것 정리</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      마트별 특징
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>이마트/홈플러스: 대용량 저렴, 주차 편리</li>
                      <li style={{marginBottom:'4px'}}>쿠팡 로켓프레시: 새벽배송, 소포장 다양</li>
                      <li style={{marginBottom:'4px'}}>마켓컬리: 품질 좋지만 비쌈</li>
                      <li style={{marginBottom:'4px'}}>동네 마트: 채소/과일 소량 구매에 적합</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>핵심은 계란+파+양파+밥만 있으면 대부분 해결된다. 여기에 주 메뉴 식재료 2~3개만 추가 구매하면 된다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog57;
