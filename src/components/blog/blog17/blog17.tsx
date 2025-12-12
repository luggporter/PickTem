import {
  Box,
  Container,
  Heading,
  Text,
  Image,
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
import AdSense from '../../AdSense';

const Blog17 = () => {
  const navigate = useNavigate();
  const title = '겨울 데이트 코스 실패 없는 공식 10가지: 추위·대기·동선까지 설계하는 법';
  const description =
    '겨울 데이트는 “추위/대기/이동” 변수가 커서 코스 설계가 중요합니다. 실패 확률을 낮추는 동선 공식 10가지를 실제 예시와 함께 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/17`;
  const ogImage = `${baseUrl}/images/blog/blog17.png`;

  const publishedDate = '2024년 5월 19일';
  const author = '씩씩이';
  const category = '데이트·이벤트';
  const readTime = 9;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: '씩아픽템',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/favicon.png` },
    },
    image: [ogImage],
    datePublished: '2024-05-19',
    dateModified: '2024-05-19',
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="800"
                  lineHeight="1.3"
                  color="#1a2e1a"
                >
                  {title}
                </Heading>

                <HStack spacing={4} fontSize="14px" color="#868e96" flexWrap="wrap">
                  <HStack spacing={1}>
                    <Box as={FiUser} />
                    <Text>{author}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Box as={FiCalendar} />
                    <Text>{publishedDate}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{readTime}분 읽기</Text>
                </HStack>
              </VStack>

              <Box borderRadius="20px" overflow="hidden" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog17.png"
                  alt="겨울 밤거리에서 데이트하는 커플, 따뜻한 조명과 감성적인 분위기"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  {/* 인트로 */}
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      겨울 데이트는 “분위기”보다 “설계”가 먼저입니다
                    </Text>
                    <Text mb={4}>
                      겨울 데이트가 유독 어렵게 느껴지는 이유는 간단해요.
                      예쁜 데는 많지만, 동시에 <b>추위 + 대기줄 + 이동</b>이라는 변수가 커집니다.
                      코스가 조금만 삐끗해도 “춥다 → 짜증 → 피곤” 루트로 가기 쉬운 계절이죠.
                    </Text>
                    <Text>
                      그래서 겨울 데이트는 센스보다 <b>동선 설계</b>가 승부입니다.
                      아래 10가지 공식은 ‘어디를 가라’가 아니라
                      ‘어떤 원리로 짜면 실패 확률이 낮아지는지’를 정리한 가이드예요.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <Box py={4} display="flex" justifyContent="center">
                    <AdSense
                      adSlot="9944590930"
                      adFormat="horizontal"
                      style={{
                        display: 'block',
                        minHeight: '120px',
                        width: '100%',
                      }}
                    />
                  </Box>

                  {/* 섹션 1 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1) 겨울 데이트 코스 공식 10가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>1. “실외 1 : 실내 2” 비율로 잡기</b><br />
                        겨울엔 실외를 많이 넣으면 체력이 빨리 소모됩니다.
                        야외는 포인트만(야경/마켓/산책 20~40분) 넣고,
                        메인은 실내로 잡는 게 만족도가 높습니다.
                      </Text>

                      <Text>
                        <b>2. 첫 장소는 ‘바로 따뜻한 곳’으로 시작</b><br />
                        시작부터 추우면 컨디션이 내려가요.
                        첫 장소는 카페/전시/실내 마켓처럼 몸이 풀리는 공간이 베스트입니다.
                      </Text>

                      <Text>
                        <b>3. 이동은 “한 번만 길게”, 나머지는 짧게</b><br />
                        “여기 갔다가 저기 갔다가”가 겨울에 제일 힘듭니다.
                        핵심 지역 1곳을 정하고 그 안에서 움직이는 방식이 좋아요.
                      </Text>

                      <Text>
                        <b>4. 대기줄 많은 곳은 ‘중간’이 아니라 ‘초반 or 끝’</b><br />
                        줄 서는 시간을 코스 중간에 넣으면 흐름이 끊깁니다.
                        초반에 기다리고 시작하거나, 끝에 넣고 마무리로 쓰는 게 안정적입니다.
                      </Text>

                      <Text>
                        <b>5. “따뜻한 메뉴”를 중간중간 심어두기</b><br />
                        국물/핫초코/따뜻한 디저트는 기분을 리셋해줍니다.
                        겨울엔 메뉴 선택도 데이트 설계에 포함됩니다.
                      </Text>

                      <Text>
                        <b>6. 사진 스팟은 2개만 ‘확정’하고 나머진 유동</b><br />
                        사진 욕심이 늘면 야외 체류가 늘고 피로도가 올라가요.
                        “여기에서만 제대로 찍자” 2곳만 잡아두면 훨씬 편합니다.
                      </Text>

                      <Text>
                        <b>7. 실내 활동 1개는 ‘체험형’으로</b><br />
                        전시/보드게임/향수 만들기/원데이클래스처럼
                        “함께 하는 감각”이 들어가면 추억 밀도가 확 올라갑니다.
                      </Text>

                      <Text>
                        <b>8. 화장실/주차/환승 포인트를 ‘한 번’ 체크</b><br />
                        사소한데 결정적입니다.
                        “화장실 어디지?” “주차 어디야?”는 분위기 깨짐 트리거예요.
                      </Text>

                      <Text>
                        <b>9. 귀가 루트는 ‘체력 남을 때’ 결정</b><br />
                        막판에 피곤하면 의사결정이 둔해집니다.
                        “택시/버스/지하철 어느 쪽”을 미리 정해두면 싸움 확률이 줄어요.
                      </Text>

                      <Text>
                        <b>10. 마지막은 ‘따뜻하고 조용한 곳’으로 마무리</b><br />
                        마지막이 편하면 전체 기억이 좋아집니다.
                        시끄러운 곳보다 대화 가능한 곳(디저트/와인/티)로 마무리하는 걸 추천합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 광고 2: 중간 지점 */}
                  <Box py={4} display="flex" justifyContent="center">
                    <AdSense
                      adSlot="9944590930"
                      adFormat="horizontal"
                      style={{
                        display: 'block',
                        minHeight: '120px',
                        width: '100%',
                      }}
                    />
                  </Box>

                  {/* 섹션 2 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2) 코스 예시 3개: 그대로 써먹는 조합
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>예시 A) 감성 야경 데이트</b><br />
                        카페(시작) → 야경 산책 30분(포인트) → 따뜻한 국물/디저트(리셋) → 조용한 실내(마무리)
                      </Text>
                      <Text>
                        <b>예시 B) 체험형 데이트</b><br />
                        실내 체험(향수/클래스/전시) → 맛집(대기 짧은 곳) → 보드게임/영화(따뜻하게) → 산책 15분(짧게)
                      </Text>
                      <Text>
                        <b>예시 C) 마켓/이벤트 데이트</b><br />
                        실내 대기 적은 카페 → 마켓/축제(핵심) → 핫푸드(손 녹이기) → 포토스팟 1곳 → 귀가 루트 확정
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 마무리 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: “좋은 코스”는 사랑이 아니라 동선에서 나옵니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        겨울 데이트는 마음만 있으면 되는 계절이 아니라,
                        <b>동선을 잘 짜면 자동으로 분위기가 살아나는 계절</b>입니다.
                        오늘 공식 중에서 3개만 적용해도 "오 이거 편하다" 느낌이 확 올 거예요.
                      </Text>

                      {/* 광고 3: 마지막 섹션 전 */}
                      <Box py={4} display="flex" justifyContent="center">
                        <AdSense
                          adSlot="9944590930"
                          adFormat="horizontal"
                          style={{
                            display: 'block',
                            minHeight: '120px',
                            width: '100%',
                          }}
                        />
                      </Box>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontSize={{ base: '16px', md: '17px' }} fontWeight="600" mb={2}>
                          ❄️ 오늘의 한 줄: “겨울엔 ‘따뜻한 동선’이 최고의 매너”
                        </Text>
                        <Text color="#495057">
                          추위를 줄이고, 대기를 줄이고, 이동을 줄이면<br />
                          대화와 분위기는 자동으로 늘어납니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog17;