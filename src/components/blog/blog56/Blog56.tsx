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

const Blog56 = () => {
  const navigate = useNavigate();
  const title = '수면의 질 높이는 방법 10가지';
  const description = '잠을 더 잘 자기 위한 현실적인 방법 10가지입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/56`;

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
    keywords: `${category}, 수면, 불면증, 수면 질, 숙면`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 수면, 불면증, 수면 질, 숙면`} />
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
                      6시간 자도 개운한 사람의 비밀
                    </Heading>

                    <Text mb={4}>수면 시간보다 수면 질이 중요하다. 같은 7시간을 자도 깊은 수면 비율에 따라 피로감이 달라진다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      즉시 효과 있는 방법
                    </Heading>

                    <Text mb={4}><b>1. 침실 온도 18~20도</b></Text>

                    <Text mb={4}>체온이 떨어져야 잠이 온다. 침실이 너무 따뜻하면 수면 질이 떨어진다.</Text>

                    <Text mb={4}><b>2. 잠자기 1시간 전 스마트폰 내려놓기</b></Text>

                    <Text mb={4}>블루라이트가 멜라토닌 분비를 방해한다. 아이폰 나이트시프트/안드로이드 블루라이트 필터는 효과가 제한적. 안 보는 게 최선.</Text>

                    <Text mb={4}><b>3. 카페인 오후 2시 이후 금지</b></Text>

                    <Text mb={4}>카페인 반감기는 5~6시간. 오후 3시에 마신 커피가 밤 9시에도 절반 남아있다.</Text>

                    <Text mb={4}><b>4. 규칙적인 취침 시간</b></Text>

                    <Text mb={4}>주말에도 같은 시간에 자고 일어나는 게 가장 효과적. 1시간 이상 차이 나면 시차 적응하는 것과 같다.</Text>

                    <Text mb={4}><b>5. 침대는 수면 전용</b></Text>

                    <Text mb={4}>침대에서 유튜브 보고, 일하고, 밥 먹으면 뇌가 침대를 각성 장소로 인식한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      장기적으로 효과 있는 방법
                    </Heading>

                    <Text mb={4}><b>6. 운동하기</b></Text>

                    <Text mb={4}>주 3회 이상 운동하면 깊은 수면이 증가한다. 단, 취침 2시간 전 격한 운동은 피하자.</Text>

                    <Text mb={4}><b>7. 저녁 과식 피하기</b></Text>

                    <Text mb={4}>위장이 일하느라 깊은 수면에 못 들어간다. 취침 3시간 전에 식사 마무리.</Text>

                    <Text mb={4}><b>8. 알코올 주의</b></Text>

                    <Text mb={4}>술 마시면 빨리 잠들지만 깊은 수면이 줄어든다. 새벽에 자주 깬다면 음주가 원인일 수 있다.</Text>

                    <Text mb={4}><b>9. 낮잠 20분 이하</b></Text>

                    <Text mb={4}>30분 이상 낮잠은 밤 수면을 방해한다. 피곤하면 20분 파워냅이 최적.</Text>

                    <Text mb={4}><b>10. 수면 환경 만들기</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>암막 커튼 (빛 차단)</li>
                      <li style={{marginBottom:'4px'}}>귀마개 or 백색소음</li>
                      <li style={{marginBottom:'4px'}}>좋은 베개 (경추 지지)</li>
                      <li style={{marginBottom:'4px'}}>적당한 습도 (40~60%)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>온도 낮추기 + 스마트폰 내려놓기 + 규칙적 취침. 이 3가지만 실천해도 수면 질이 확 달라진다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog56;
