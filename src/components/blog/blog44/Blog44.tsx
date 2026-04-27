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

const Blog44 = () => {
  const navigate = useNavigate();
  const title = '2026 키보드 추천 사무용 TOP 5';
  const description = '사무실/재택에서 쓰기 좋은 키보드 추천입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/44`;

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
    keywords: `${category}, 키보드 추천, 기계식 키보드, 사무용 키보드, 무선 키보드`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 키보드 추천, 기계식 키보드, 사무용 키보드, 무선 키보드`} />
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
                      타이핑이 편해야 일도 잘 된다
                    </Heading>

                    <Text mb={4}>하루 8시간 쓰는 키보드인데 번들 키보드로 버티고 있다면 바꿀 때가 됐다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      TOP 5 추천
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>순위</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>종류</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천 이유</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>로지텍 MX Keys S</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>139,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>멤브레인</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>정숙, 타건감 최고</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>키크론 K3 Pro</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>99,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기계식 (저소음)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>슬림 기계식, 맥 호환</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한성 GK898B</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>69,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기계식</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비 무선 기계식</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>로지텍 K380</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>39,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>멤브레인</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초소형, 멀티 페어링</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>레오폴드 FC900R</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>129,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기계식</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>타이핑 끝판왕</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      사무실에서 쓴다면
                    </Heading>

                    <Text mb={4}><b>소음이 가장 중요하다.</b> 기계식 청축을 사무실에서 쓰면 민폐다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>무소음: 로지텍 MX Keys S (키를 눌러도 거의 소리 없음)</li>
                      <li style={{marginBottom:'4px'}}>조용한 기계식: 키크론 K3 Pro (저소음 적축/갈축)</li>
                      <li style={{marginBottom:'4px'}}>초조용 기계식: 한성 GK898B (저소음 스위치 선택)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      재택에서 쓴다면
                    </Heading>

                    <Text mb={4}>소음 걱정 없으니 타건감을 즐기자.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>타이핑 쾌감: 레오폴드 FC900R (체리 갈축)</li>
                      <li style={{marginBottom:'4px'}}>슬림하게: 키크론 K3 Pro</li>
                      <li style={{marginBottom:'4px'}}>범용: 로지텍 MX Keys S</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      맥 유저라면
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>키크론 K3 Pro (맥 레이아웃 지원, 핫스왑)</li>
                      <li style={{marginBottom:'4px'}}>로지텍 MX Keys S (맥용 버전 있음)</li>
                      <li style={{marginBottom:'4px'}}>애플 매직 키보드 (149,000원, 가장 얇음)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>소음 걱정 없으면: 레오폴드 FC900R (12.9만원)</Text>

                    <Text mb={4}>사무실용: 로지텍 MX Keys S (13.9만원)</Text>

                    <Text mb={4}>가성비: 한성 GK898B (6.9만원)</Text>

                    <Text mb={4}>휴대용: 로지텍 K380 (3.9만원)</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog44;
