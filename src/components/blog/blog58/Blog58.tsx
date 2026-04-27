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

const Blog58 = () => {
  const navigate = useNavigate();
  const title = '겨울 난방비 줄이는 현실적인 방법';
  const description = '겨울 난방비를 현실적으로 줄이는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/58`;

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
    keywords: `${category}, 난방비, 겨울, 보일러, 에너지 절약, 난방`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 난방비, 겨울, 보일러, 에너지 절약, 난방`} />
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
                      보일러 온도 1도 낮추면 얼마나 절약될까?
                    </Heading>

                    <Text mb={4}>난방비가 월 20만원 넘게 나온다면 몇 가지만 바꿔도 5~10만원은 줄일 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      보일러 설정
                    </Heading>

                    <Text mb={4}><b>외출 모드 활용</b></Text>

                    <Text mb={4}>장시간 외출할 때 끄지 말고 외출 모드로. 완전히 식은 집을 다시 데우는 데 더 많은 가스가 든다.</Text>

                    <Text mb={4}><b>적정 온도: 22~23도</b></Text>

                    <Text mb={4}>24도 → 22도로 낮추면 난방비 약 15% 절약. 겨울 실내 적정 온도는 20~22도다.</Text>

                    <Text mb={4}><b>예약 난방</b></Text>

                    <Text mb={4}>출근 시간 30분 전에 켜지도록 예약. 밤새 틀어놓는 것보다 효율적.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      단열 강화 (가장 효과 큰 방법)
                    </Heading>

                    <Text mb={4}><b>1. 문풍지 (2,000원)</b></Text>

                    <Text mb={4}>현관문, 베란다 문 틈새에 붙이면 찬바람 유입 차단. 가장 가성비 좋은 방법.</Text>

                    <Text mb={4}><b>2. 창문 단열 필름 (5,000원)</b></Text>

                    <Text mb={4}>에어캡(뽁뽁이)을 창문에 붙이면 단열 효과 약 30% 향상.</Text>

                    <Text mb={4}><b>3. 커튼 (두꺼운 것)</b></Text>

                    <Text mb={4}>일반 커튼 → 암막/방한 커튼으로 바꾸면 창문 단열 효과.</Text>

                    <Text mb={4}><b>4. 러그/카펫</b></Text>

                    <Text mb={4}>바닥 냉기 차단. 특히 원룸이나 오래된 아파트에서 효과적.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      보조 난방
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>기기</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>전기요금</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>효과</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>전기매트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 2~3천원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>취침 시 보일러 끄고 대체</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>온풍기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 3~5만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>부분 난방 (한 방만)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>핫팩</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>개당 500원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>외출 시</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>전기매트 + 보일러 온도 2도 낮추기</b>가 가장 현실적인 절약법이다. 전기매트 전기요금은 거의 안 나온다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      월별 절약 효과
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>방법</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>절약 금액</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>온도 2도 낮추기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 1~2만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>문풍지 + 단열필름</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 2~3만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>전기매트 활용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 2~3만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>예약 난방</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>월 1만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>**합계**</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>**월 6~9만원**</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>문풍지 + 단열필름 + 전기매트. 초기 투자 2만원으로 월 6~9만원 절약 가능하다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog58;
