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

const Blog49 = () => {
  const navigate = useNavigate();
  const title = '다이소 꼭 사야 할 생활용품 20선';
  const description = '다이소에서 꼭 사야 할 가성비 생활용품 20가지를 추천합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/49`;

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
    keywords: `${category}, 다이소, 생활용품, 가성비, 다이소 추천`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 다이소, 생활용품, 가성비, 다이소 추천`} />
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
                      다이소에서 이건 꼭 사야 한다
                    </Heading>

                    <Text mb={4}>다이소는 가성비의 성지다. 하지만 다 싸다고 다 좋은 건 아니다. 직접 써보고 "이건 진짜다" 싶은 제품 20개를 골랐다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주방
                    </Heading>

                    <Text mb={4}><b>1. 실리콘 주걱 세트</b> (3,000원) — 긁힘 없이 깔끔하게. 후라이팬 코팅 보호.</Text>

                    <Text mb={4}><b>2. 양념통 세트</b> (2,000원) — 투명해서 내용물 보이고 크기 적당.</Text>

                    <Text mb={4}><b>3. 배수구 거름망</b> (1,000원) — 스테인리스. 매달 교체하기에 부담 없는 가격.</Text>

                    <Text mb={4}><b>4. 식기건조대 미니</b> (5,000원) — 1~2인 가구에 딱. 접이식이라 보관 편함.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      욕실
                    </Heading>

                    <Text mb={4}><b>5. 규조토 컵받침</b> (2,000원) — 칫솔꽂이 아래에 놓으면 물기 바로 흡수.</Text>

                    <Text mb={4}><b>6. 흡착식 수건걸이</b> (2,000원) — 못 안 박아도 되는 흡착식. 화장실/주방 겸용.</Text>

                    <Text mb={4}><b>7. 배수구 머리카락 거름망</b> (1,000원) — 샤워 후 머리카락 청소가 쉬워진다.</Text>

                    <Text mb={4}><b>8. 압축 여행 세트</b> (3,000원) — 샴푸/바디워시 소분 용기. 여행 필수.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      정리/수납
                    </Heading>

                    <Text mb={4}><b>9. 서랍 칸막이</b> (2,000원) — 속옷/양말 정리에 필수.</Text>

                    <Text mb={4}><b>10. 케이블 정리 클립</b> (1,000원) — 책상 위 충전 케이블 정리.</Text>

                    <Text mb={4}><b>11. 냉장고 정리 트레이</b> (2,000원) — 소스류 한데 모아두기 좋음.</Text>

                    <Text mb={4}><b>12. 리모컨 정리함</b> (2,000원) — 리모컨 + 핸드크림 보관.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      사무/학습
                    </Heading>

                    <Text mb={4}><b>13. 접착 메모보드</b> (3,000원) — 모니터 옆에 붙이는 투명 메모보드.</Text>

                    <Text mb={4}><b>14. 독서대</b> (5,000원) — 각도 조절. 레시피 보면서 요리할 때도 유용.</Text>

                    <Text mb={4}><b>15. 모니터 선반</b> (5,000원) — 모니터 높이 올리고 아래에 수납.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      생활
                    </Heading>

                    <Text mb={4}><b>16. 먼지떨이개</b> (3,000원) — 극세사. 가전/가구 먼지 제거.</Text>

                    <Text mb={4}><b>17. 다용도 후크</b> (1,000원) — 현관문 뒤, 싱크대 문 안쪽에 활용.</Text>

                    <Text mb={4}><b>18. 우산 빗물받이</b> (1,000원) — 현관 우산꽂이에 달아두면 바닥 안 젖음.</Text>

                    <Text mb={4}><b>19. 미니 빗자루 세트</b> (2,000원) — 식탁 위 부스러기 청소.</Text>

                    <Text mb={4}><b>20. LED 센서등</b> (5,000원) — 현관/복도에. 어두우면 자동 켜짐.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      총 비용
                    </Heading>

                    <Text mb={4}>20개 전부 사도 <b>약 52,000원</b>. 이 가격에 집 정리 레벨업이 가능하다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog49;
