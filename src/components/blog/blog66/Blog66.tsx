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

const Blog66 = () => {
  const navigate = useNavigate();
  const title = '생활비 절약 실전 방법 20가지';
  const description = '실제로 효과가 있는 생활비 절약 방법 20가지입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/66`;

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
    keywords: `${category}, 절약, 생활비, 돈 모으기, 알뜰`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 절약, 생활비, 돈 모으기, 알뜰`} />
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
                      월 200만원으로 사는 사람들의 비밀
                    </Heading>

                    <Text mb={4}>절약은 "안 쓰는 것"이 아니라 "똑똑하게 쓰는 것"이다. 삶의 질을 유지하면서 줄일 수 있는 곳만 줄이자.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      식비 (월 5~10만원 절약)
                    </Heading>

                    <Text mb={4}><b>1. 배달 주 1회로 줄이기</b> — 배달비+팁 1회 5,000원 x 줄인 횟수</Text>

                    <Text mb={4}><b>2. 텀블러 들고 다니기</b> — 카페 커피 주 5회 → 주 2회 = 월 6만원 절약</Text>

                    <Text mb={4}><b>3. 장보기 전 냉장고 확인</b> — 중복 구매 방지</Text>

                    <Text mb={4}><b>4. 점심 도시락</b> — 주 2~3회만 해도 월 5~8만원</Text>

                    <Text mb={4}><b>5. 물 사먹지 않기</b> — 정수기 or 수돗물 (서울 수돗물은 안전함)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      교통비 (월 2~5만원 절약)
                    </Heading>

                    <Text mb={4}><b>6. 기후동행카드/K-Pass</b> — 대중교통 할인 카드 활용</Text>

                    <Text mb={4}><b>7. 자전거/전동킥보드</b> — 2~3km 거리는 대중교통보다 빠르고 무료</Text>

                    <Text mb={4}><b>8. 카풀</b> — 출퇴근 카풀 앱으로 기름값 반으로</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주거비 (월 3~10만원 절약)
                    </Heading>

                    <Text mb={4}><b>9. 전기요금 절약</b> — 대기전력 차단, LED 교체</Text>

                    <Text mb={4}><b>10. 관리비 절약</b> — 수도, 가스 사용량 체크</Text>

                    <Text mb={4}><b>11. 통신비 알뜰폰</b> — 월 3~5만원 → 1~2만원</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      쇼핑 (충동구매 방지)
                    </Heading>

                    <Text mb={4}><b>12. 24시간 룰</b> — 사고 싶은 게 있으면 24시간 기다리기. 다음날도 사고 싶으면 구매</Text>

                    <Text mb={4}><b>13. 위시리스트 관리</b> — 충동구매 대신 리스트에 적고, 세일할 때 구매</Text>

                    <Text mb={4}><b>14. 중고 거래 활용</b> — 가전, 가구는 중고가 50% 저렴</Text>

                    <Text mb={4}><b>15. 쿠폰/적립 활용</b> — 네이버페이, 카카오페이 포인트 적립</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      구독 (월 2~5만원 절약)
                    </Heading>

                    <Text mb={4}><b>16. 안 쓰는 구독 해지</b> — 넷플릭스, 멜론, 헬스장 다 쓰고 있나?</Text>

                    <Text mb={4}><b>17. 가족/친구 공유</b> — 유튜브 프리미엄, 넷플릭스 가족요금제</Text>

                    <Text mb={4}><b>18. 무료 대안 찾기</b> — 스포티파이 무료, 네이버 바이브 무료곡</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      금융 (장기 절약)
                    </Heading>

                    <Text mb={4}><b>19. 신용카드 → 체크카드</b> — 과소비 방지 + 소득공제 혜택</Text>

                    <Text mb={4}><b>20. 보험 리모델링</b> — 중복 보험 해지, 불필요한 특약 제거</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      현실적 절약 금액
                    </Heading>

                    <Text mb={4}>5가지만 실천해도: 월 <b>10~20만원</b> 절약 = 연 <b>120~240만원</b></Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog66;
