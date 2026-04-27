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

const Blog53 = () => {
  const navigate = useNavigate();
  const title = '반려식물 초보 가이드 TOP 10';
  const description = '키우기 쉬운 반려식물 10가지를 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/53`;

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
    keywords: `${category}, 반려식물, 실내식물, 식물 키우기, 화분`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 반려식물, 실내식물, 식물 키우기, 화분`} />
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
                      식물 매번 죽이는 사람을 위한 가이드
                    </Heading>

                    <Text mb={4}>식물을 사면 한 달 안에 죽인다고? 대부분 물을 너무 많이 줘서 그렇다. 여기 소개하는 식물은 방치해도 잘 자란다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      죽이기 어려운 식물 TOP 10
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 스투키
                    </Heading>

                    <Text mb={4}>물: 월 1~2회 / 빛: 어두운 곳 OK / 난이도: 최하</Text>

                    <Text mb={4}>공기정화 능력 최고. 밤에 산소를 방출해서 침실에 두면 좋다. 물을 안 줘도 잘 버틴다. 오히려 물을 너무 주면 죽는다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 산세베리아
                    </Heading>

                    <Text mb={4}>물: 월 1~2회 / 빛: 어디든 OK / 난이도: 최하</Text>

                    <Text mb={4}>스투키랑 비슷하지만 잎이 더 넓고 화려하다. NASA가 선정한 공기정화 식물 1위.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 포토스
                    </Heading>

                    <Text mb={4}>물: 주 1회 / 빛: 간접광 / 난이도: 하</Text>

                    <Text mb={4}>덩굴 식물이라 선반에 올려두면 줄기가 늘어지면서 예쁘다. 물에 꽂아둬도 뿌리를 내린다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 몬스테라
                    </Heading>

                    <Text mb={4}>물: 주 1회 / 빛: 밝은 간접광 / 난이도: 하</Text>

                    <Text mb={4}>큰 잎이 인테리어 효과가 크다. 잎에 구멍이 뚫리는 특이한 모양. 카페에서 많이 보는 식물.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      5. 고무나무
                    </Heading>

                    <Text mb={4}>물: 주 1회 / 빛: 밝은 곳 / 난이도: 하</Text>

                    <Text mb={4}>두꺼운 잎이 먼지를 잘 잡아준다. 성장 속도가 빨라서 키우는 재미가 있다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      6~10위
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>6. 행운목 (물만 주면 됨)</li>
                      <li style={{marginBottom:'4px'}}>7. 다육식물 (한 달에 한 번 물주기)</li>
                      <li style={{marginBottom:'4px'}}>8. 아이비 (공기정화, 덩굴)</li>
                      <li style={{marginBottom:'4px'}}>9. 스파티필럼 (꽃도 피는 공기정화 식물)</li>
                      <li style={{marginBottom:'4px'}}>10. 테이블야자 (작고 귀여움)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      초보 실수 TOP 3
                    </Heading>

                    <Text mb={4}><b>1. 물 너무 많이 주기</b></Text>

                    <Text mb={4}>뿌리가 썩는 가장 큰 원인. 흙이 마르면 그때 주자. 손가락을 2cm 넣어서 마르면 물을 준다.</Text>

                    <Text mb={4}><b>2. 직사광선에 놓기</b></Text>

                    <Text mb={4}>대부분 실내 식물은 간접광이 좋다. 직사광선은 잎이 타는 원인.</Text>

                    <Text mb={4}><b>3. 큰 화분에 옮기기</b></Text>

                    <Text mb={4}>작은 식물을 큰 화분에 넣으면 뿌리가 물에 잠겨서 죽는다. 화분은 식물보다 한 호수만 크게.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>처음이면 <b>스투키 + 포토스</b> 조합으로 시작하자. 둘 다 거의 안 죽는다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog53;
