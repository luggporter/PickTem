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

const Blog46 = () => {
  const navigate = useNavigate();
  const title = '전기요금 아끼는 방법 15가지';
  const description = '전기요금을 현실적으로 줄이는 방법 15가지를 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/46`;

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
    keywords: `${category}, 전기요금, 절약, 전기세, 에너지 절약`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 전기요금, 절약, 전기세, 에너지 절약`} />
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
                      전기요금 폭탄 안 맞으려면
                    </Heading>

                    <Text mb={4}>여름 에어컨, 겨울 난방. 전기요금 고지서 보고 놀란 적 있다면 이 방법들을 시도해보자.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      즉시 효과 있는 방법 (오늘부터)
                    </Heading>

                    <Text mb={4}><b>1. 에어컨 온도 1도 올리기</b></Text>

                    <Text mb={4}>26도에서 27도로 올리면 전기요금 약 7% 절감. 선풍기와 함께 쓰면 체감 온도는 비슷하다.</Text>

                    <Text mb={4}><b>2. TV 대기전력 차단</b></Text>

                    <Text mb={4}>TV, 셋톱박스, 게임기 대기전력만 월 2,000~5,000원. 멀티탭 스위치를 끄자.</Text>

                    <Text mb={4}><b>3. LED 교체</b></Text>

                    <Text mb={4}>형광등 하나를 LED로 바꾸면 연간 약 15,000원 절약. 집 전체 바꾸면 연 5~10만원.</Text>

                    <Text mb={4}><b>4. 세탁기 찬물 세탁</b></Text>

                    <Text mb={4}>온수 세탁 1회당 약 300원. 찬물로 바꾸면 월 9,000원 절약 가능.</Text>

                    <Text mb={4}><b>5. 냉장고 적정 온도</b></Text>

                    <Text mb={4}>냉장 3~5도, 냉동 -18도가 적정. 너무 낮추면 전기만 더 먹는다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      습관 바꾸기 (1주일 내)
                    </Heading>

                    <Text mb={4}><b>6. 밥솥 보온 끄기</b></Text>

                    <Text mb={4}>전기밥솥 보온 기능 12시간에 약 300원. 남은 밥은 소분해서 냉동하자.</Text>

                    <Text mb={4}><b>7. 에어컨 필터 청소</b></Text>

                    <Text mb={4}>필터 막히면 소비전력 30% 증가. 2주에 한 번 청소하면 효과적.</Text>

                    <Text mb={4}><b>8. 커튼/블라인드 활용</b></Text>

                    <Text mb={4}>여름에 직사광선 차단하면 실내 온도 2~3도 낮출 수 있다.</Text>

                    <Text mb={4}><b>9. 선풍기 활용</b></Text>

                    <Text mb={4}>에어컨 + 선풍기 조합이 에어컨만 쓰는 것보다 30% 절약.</Text>

                    <Text mb={4}><b>10. 전자레인지 활용</b></Text>

                    <Text mb={4}>오븐보다 전자레인지가 에너지 효율 4배 높다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      투자해서 아끼기 (장기적)
                    </Heading>

                    <Text mb={4}><b>11. 에너지 효율 1등급 가전</b></Text>

                    <Text mb={4}>1등급 냉장고는 5등급보다 연간 10만원 이상 절약.</Text>

                    <Text mb={4}><b>12. 인버터 에어컨</b></Text>

                    <Text mb={4}>일반형보다 40% 적은 전력. 교체 시 인버터형으로.</Text>

                    <Text mb={4}><b>13. 태양광 미니패널</b></Text>

                    <Text mb={4}>베란다에 설치하면 월 1만원 정도 절약. 정부 보조금 있음.</Text>

                    <Text mb={4}><b>14. 단열 강화</b></Text>

                    <Text mb={4}>문풍지, 창문 단열 필름으로 냉난방 효율 20% 향상.</Text>

                    <Text mb={4}><b>15. 심야 전력 활용</b></Text>

                    <Text mb={4}>세탁기, 식기세척기를 밤 11시 이후에 돌리면 전기요금 할인.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      월별 절약 효과
                    </Heading>

                    <Text mb={4}>위 방법 중 5가지만 실천해도 <b>월 2~5만원</b> 절약 가능하다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog46;
