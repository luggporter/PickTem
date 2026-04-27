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

const Blog54 = () => {
  const navigate = useNavigate();
  const title = '여름 냉방비 아끼는 에어컨 사용법';
  const description = '에어컨 전기요금을 줄이는 실전 사용법입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/54`;

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
    keywords: `${category}, 에어컨, 냉방비, 전기요금, 에어컨 절약`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 에어컨, 냉방비, 전기요금, 에어컨 절약`} />
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
                      에어컨 틀면서도 전기요금 아끼는 방법
                    </Heading>

                    <Text mb={4}>에어컨 안 틀 수는 없다. 대신 똑똑하게 쓰면 월 3~5만원은 아낄 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      기본 설정
                    </Heading>

                    <Text mb={4}><b>적정 온도: 26~27도</b></Text>

                    <Text mb={4}>24도와 27도의 전기요금 차이는 약 30%. 선풍기와 함께 쓰면 26~27도도 충분히 시원하다.</Text>

                    <Text mb={4}><b>풍량: 자동 모드</b></Text>

                    <Text mb={4}>강풍으로 빨리 식힌 뒤 약풍으로 유지하는 자동 모드가 가장 효율적이다. 수동으로 강풍 고정하면 전기만 더 먹는다.</Text>

                    <Text mb={4}><b>풍향: 위를 향하게</b></Text>

                    <Text mb={4}>찬 공기는 아래로 내려간다. 바람을 위로 향하게 하면 방 전체가 균일하게 시원해진다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      실전 절약 팁
                    </Heading>

                    <Text mb={4}><b>1. 에어컨 + 선풍기 조합</b></Text>

                    <Text mb={4}>에어컨은 26도, 선풍기는 미풍. 체감 온도가 2~3도 낮아져서 24도 효과를 낸다. 전기요금은 30% 절약.</Text>

                    <Text mb={4}><b>2. 외출 30분 이하면 끄지 마라</b></Text>

                    <Text mb={4}>에어컨은 시작할 때 전력을 가장 많이 쓴다. 30분 이하 외출이면 켜두는 게 오히려 절약.</Text>

                    <Text mb={4}><b>3. 커튼/블라인드 치기</b></Text>

                    <Text mb={4}>직사광선을 차단하면 실내 온도 3~5도 차이. 차광 커튼이면 효과 더 크다.</Text>

                    <Text mb={4}><b>4. 밤에는 수면 모드</b></Text>

                    <Text mb={4}>수면 모드는 자동으로 온도를 1~2도 올리고 풍량을 줄인다. 수면 중에는 체온이 낮아지니 충분하다.</Text>

                    <Text mb={4}><b>5. 필터 2주마다 청소</b></Text>

                    <Text mb={4}>필터가 막히면 같은 온도에서 전력 소비가 30% 증가한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      월 전기요금 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>사용 방식</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>예상 전기요금</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>24도 하루 10시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>약 8~12만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>26도 + 선풍기 10시간</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>약 5~7만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>27도 + 선풍기 + 절약 팁</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>약 3~5만원</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>26~27도 + 선풍기 + 커튼 + 필터 청소. 이 4가지만 지키면 여름에도 전기요금 걱정 없이 시원하게 보낼 수 있다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog54;
