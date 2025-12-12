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

const Blog16 = () => {
  const navigate = useNavigate();
  const title = '겨울 여행 전 체크리스트 25가지: 교통·숙소·짐·날씨 변수까지 한 번에';
  const description =
    '겨울 여행은 준비가 반입니다. 도로 결빙, 지연, 숙소 난방, 방한 장비, 비상약, 일정 여유까지 “실수하기 쉬운 포인트”를 체크리스트로 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/16`;
  const ogImage = `${baseUrl}/images/blog/blog16.png`;

  const publishedDate = '2024년 5월 16일';
  const author = '아리';
  const category = '겨울 여행';
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
    datePublished: '2024-05-16',
    dateModified: '2024-05-16',
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
                  src="/images/blog/blog16.png"
                  alt="겨울 여행 준비를 하는 사람과 캐리어, 눈 내리는 거리"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  {/* 인트로 */}
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      겨울 여행은 “낭만 + 변수”가 세트입니다
                    </Text>
                    <Text mb={4}>
                      겨울 여행이 유독 기억에 남는 이유는 풍경이 예뻐서이기도 하지만,
                      동시에 변수가 많기 때문입니다. 기온 급강하, 도로 결빙, 지연·결항,
                      숙소 난방 문제, 감기 기운… 이런 것들이 한 번에 겹치면 여행 만족도가
                      순식간에 떨어질 수 있습니다.
                    </Text>
                    <Text>
                      그래서 겨울 여행은 “짐을 많이 싸라”가 아니라,
                      <b>딱 필요한 걸 빠짐없이</b> 챙기는 게 핵심입니다.
                      아래 체크리스트는 실제로 겨울 여행에서 자주 터지는 문제를 기준으로
                      정리했습니다.
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
                      1) 출발 48시간 전: “일정이 무너지지 않게” 안전장치 만들기 (7가지)
                    </Heading>

                    <Stack spacing={4}>
                      <Text>1. 목적지 예보를 “기온 + 풍속 + 강수”로 확인합니다. (체감온도 차이가 큽니다)</Text>
                      <Text>2. 눈/비 예보가 있으면 이동 시간에 <b>30~60분 버퍼</b>를 넣습니다.</Text>
                      <Text>3. 대중교통이면 결항/지연 가능성을 보고 <b>대체 편</b>을 하나 정해 둡니다.</Text>
                      <Text>4. 렌트/자차면 도로 결빙 구간(고갯길·그늘길)을 피하는 루트도 하나 저장합니다.</Text>
                      <Text>5. 숙소에 “난방 방식(바닥/온풍/라디에이터)”과 “온수 시간”을 미리 확인합니다.</Text>
                      <Text>6. 체크인·체크아웃 사이 짐 보관 가능 여부를 확인해 동선을 가볍게 만듭니다.</Text>
                      <Text>7. 여행 보험/긴급 연락처(숙소, 렌트, 역/공항, 동행자)를 메모해 둡니다.</Text>
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
                      2) 짐 싸기 공식: “보온은 겹쳐서, 안전은 기본템으로” (10가지)
                    </Heading>

                    <Stack spacing={4}>
                      <Text>8. 이너는 히트텍보다 중요한 게 “땀 배출”입니다. 활동량 있으면 기능성 이너가 안정적입니다.</Text>
                      <Text>9. 중간층(니트/후리스)은 <b>한 벌로도 조절 가능</b>한 아이템을 고릅니다.</Text>
                      <Text>10. 겉옷은 보온보다 <b>방풍</b>이 우선일 때가 많습니다. 바람막이/패딩 외피 체크!</Text>
                      <Text>11. 장갑·목도리·비니(또는 귀마개)는 “있으면 좋음”이 아니라 “없으면 후회” 확률이 높습니다.</Text>
                      <Text>12. 발은 생각보다 빨리 식습니다. 두꺼운 양말 1~2켤레 + 발 핫팩은 겨울 여행 치트키입니다.</Text>
                      <Text>13. 눈 오면 바닥이 젖습니다. 여분 신발 or 방수 스프레이/방수 커버를 고려하세요.</Text>
                      <Text>14. 핫팩은 손/발만이 아니라 “허리/복부”에 붙이는 용도로도 체감이 큽니다.</Text>
                      <Text>15. 립밤·핸드크림은 사치가 아니라 생존템입니다. 건조함이 피로감을 올립니다.</Text>
                      <Text>16. 보조배터리는 필수. 추위에서 배터리 급감합니다. (휴대폰 = 지도/결제/연락)</Text>
                      <Text>17. 작은 파우치에 비상약(감기약, 소화제, 진통제, 밴드)을 묶어두면 여행이 훨씬 편해집니다.</Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 섹션 3 */}
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
                      3) 이동/현장 안전: “사고는 ‘하차 순간’에 많이 납니다” (6가지)
                    </Heading>

                    <Stack spacing={4}>
                      <Text>18. 차에서 내릴 때가 가장 위험합니다. 바닥을 한 번 보고, 발을 “작게” 옮기세요.</Text>
                      <Text>19. 눈길·빙판길에서는 보폭을 줄이고, 무게 중심은 살짝 낮추는 게 안전합니다.</Text>
                      <Text>20. 손은 주머니에 넣지 말고, 균형을 잡을 수 있게 “자유롭게” 두는 게 좋습니다.</Text>
                      <Text>21. 오르막/내리막은 가능한 한 난간·벽 쪽으로 이동하고, 급하면 돌아가도 안전이 우선입니다.</Text>
                      <Text>22. 카페/실내로 들어갈 때 “안경·카메라 렌즈 김” 생깁니다. 잠깐 적응 시간을 주세요.</Text>
                      <Text>23. 체력이 떨어지면 판단력도 떨어집니다. 따뜻한 음료/간식을 “미리” 넣어두세요.</Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 섹션 4 */}
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
                      4) 겨울 여행이 편해지는 운영 팁 (2가지)
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        24. 일정은 “2개만 확정 + 나머진 유동”이 겨울에 강합니다.
                        날씨/결빙/대기 줄이 변수로 작동하니까, 핵심만 잡고 탄력적으로 움직이시는 게 좋아요.
                      </Text>
                      <Text>
                        25. 사진 욕심이 생길수록 오래 밖에 있게 됩니다.
                        <b>15~20분마다 실내에서 몸을 한 번 데우는 루틴</b>을 만들어두면 피로가 확 줄어듭니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

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
                      마무리: 체크리스트는 “짐”이 아니라 “여유”를 만들어줍니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        겨울 여행에서 중요한 건 “참고 버티기”가 아니라,
                        <b>추위와 변수를 관리하는 시스템</b>입니다.
                        오늘 체크리스트 중에서 딱 5개만 먼저 적용해도,
                        여행 중 불안과 스트레스가 확 내려갈 거예요.
                      </Text>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontSize={{ base: '16px', md: '17px' }} fontWeight="600" mb={2}>
                          🧳 오늘의 한 줄: “겨울엔 준비가 곧 일정이다”
                        </Text>
                        <Text color="#495057">
                          변수는 막을 수 없지만, 당황은 줄일 수 있습니다.
                          이번 겨울 여행은 ‘낭만’만 남기고, ‘사고’는 체크리스트에 맡겨보세요.
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

export default Blog16;