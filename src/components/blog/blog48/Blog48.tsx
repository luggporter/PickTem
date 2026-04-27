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

const Blog48 = () => {
  const navigate = useNavigate();
  const title = '세탁기 사용법 제대로 알기';
  const description = '세탁기를 효율적으로 사용하는 방법과 팁을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/48`;

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
    keywords: `${category}, 세탁기, 빨래, 세탁 팁, 드럼세탁기`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 세탁기, 빨래, 세탁 팁, 드럼세탁기`} />
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
                      세탁기 10년 넘게 썼는데 제대로 쓰고 있을까?
                    </Heading>

                    <Text mb={4}>세탁기는 그냥 돌리면 되는 거 아닌가? 맞다. 하지만 몇 가지만 바꾸면 옷 수명도 늘고 전기세도 아끼고 냄새도 안 난다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      많이 하는 실수
                    </Heading>

                    <Text mb={4}><b>1. 세제 너무 많이 넣기</b></Text>

                    <Text mb={4}>세제 많이 넣으면 더 깨끗해질 것 같지만, 오히려 헹굼이 안 되고 옷에 세제 찌꺼기가 남는다. 용량 표시선의 70~80%만 넣자.</Text>

                    <Text mb={4}><b>2. 빨래 너무 꽉 채우기</b></Text>

                    <Text mb={4}>드럼 용량의 70% 이하가 적당하다. 꽉 채우면 마찰이 적어져서 오히려 안 깨끗해진다.</Text>

                    <Text mb={4}><b>3. 모든 빨래 온수 세탁</b></Text>

                    <Text mb={4}>속옷/수건 외에는 찬물 세탁으로 충분하다. 온수는 색 빠짐과 옷 수축의 원인.</Text>

                    <Text mb={4}><b>4. 지퍼 열고 세탁</b></Text>

                    <Text mb={4}>지퍼가 다른 옷에 상처를 낸다. 지퍼는 반드시 잠그고, 단추는 풀고 세탁.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      세탁 모드별 가이드
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>모드</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>온도</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>표준</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>일반 옷</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>찬물/미온</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>강력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>심하게 더러운 옷</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>40~60도</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>섬세</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>니트, 실크, 속옷</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>찬물</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>급속</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>살짝 입은 옷</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>찬물</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삶음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수건, 행주</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60~90도</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      세탁기 관리법
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>월 1회 통세척 (세탁조 클리너 사용)</li>
                      <li style={{marginBottom:'4px'}}>사용 후 문 열어두기 (곰팡이 방지)</li>
                      <li style={{marginBottom:'4px'}}>세제통 정기 청소 (물로 헹구기)</li>
                      <li style={{marginBottom:'4px'}}>고무 패킹 물기 닦기 (드럼세탁기)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      빨래 냄새 안 나게 하려면
                    </Heading>

                    <Text mb={4}>1. 세탁 끝나면 바로 꺼내기 (30분 이내)</Text>

                    <Text mb={4}>2. 세탁조 정기 청소</Text>

                    <Text mb={4}>3. 세제양 적정하게</Text>

                    <Text mb={4}>4. 건조 시 통풍 좋은 곳에</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>세제 적게, 빨래 적게, 문 열어두기. 이 3가지만 지켜도 옷도 오래 입고 세탁기도 오래 쓸 수 있다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog48;
