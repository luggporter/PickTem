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
import AdRotator from '../../ads/AdRotator';
import { KakaoAdDirect } from '../../../pages/Home';

const Blog14 = () => {
  const navigate = useNavigate();
  const title = '연말·크리스마스 데이트가 망하지 않는 12가지 체크리스트';
  const description =
    '사람 많은 날일수록 계획이 곧 안전이자 재미입니다. 예약/동선/대기/예산/사진 포인트까지 연말 데이트를 실패 없이 굴리는 12가지 체크리스트를 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/14`;
  const ogImage = `${baseUrl}/images/blog/blog14.png`;

  const publishedDate = '2024년 5월 10일';
  const author = '아리';
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
    datePublished: '2024-05-10',
    dateModified: '2024-05-10',
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
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

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

              <Box borderRadius="20px" overflow="hidden" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog14.png"
                  alt="크리스마스 조명이 켜진 거리에서 따뜻한 옷을 입고 걷는 커플"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      연말 데이트는 “분위기”보다 “동선”이 승부입니다
                    </Text>
                    <Text mb={4}>
                      크리스마스, 연말, 불꽃축제, 야경 시즌… 다 좋죠.
                      문제는 그날이 되면 모든 게 동시에 벌어진다는 겁니다. 사람 많고, 줄 길고, 택시 안 잡히고,
                      예약은 매진이고, 추워서 예민해지고… 분위기 좋게 시작했는데 끝이 싸늘해지는 패턴이
                      생각보다 흔합니다.
                    </Text>
                    <Text mb={4}>
                      그래서 연말 데이트는 “감성”을 살리는 것만큼 “운영”이 중요합니다.
                      운영이 잘 되면 감성은 따라오고, 운영이 무너지면 감성도 같이 무너져요.
                      아래 12가지는 그날을 망치지 않게 해주는 실전 체크리스트입니다.
                    </Text>
                    <Text>
                      포인트는 하나예요: <b>‘기다림(대기)’과 ‘이동’의 스트레스를 줄이면</b> 데이트가 평화로워집니다.
                    </Text>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1) 예약은 '메인 1 + 서브 1'로 잡기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 변수(대기/지연/교통)가 커서 “하나만 예약”하면 리스크가 큽니다.
                        메인 식당/카페/전시 중 하나는 확정하고, 근처에 <b>대안 플랜(서브 1)</b>을 준비해두세요.
                      </Text>
                      <Text>
                        예: 식당 예약이 무너지면 → 근처 푸드코트/포장 가능한 디저트/따뜻한 실내 스팟.
                        ‘대안’이 있으면 둘 다 마음이 급해지지 않습니다.
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

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2) 동선은 "한 방향"으로, 되돌아가기 금지
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 이동 자체가 피곤합니다. 여기 갔다 저기 갔다 하면 다리도, 감정도 지쳐요.
                        동선은 지도 위에서 <b>한 방향으로 쭉</b> 가는 구조가 최고입니다.
                      </Text>
                      <Text>
                        “A(따뜻한 실내) → B(야외 포토) → C(따뜻한 실내) → 귀가”
                        이렇게 온도 밸런스를 섞어주세요. 야외만 연속으로 가면 체력 급락합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3) “대기 시간”을 이벤트로 바꾸기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        줄을 완전히 피하기는 어렵습니다. 대신 대기 시간을 ‘짜증’이 아니라 ‘콘텐츠’로 바꿔보세요.
                        가장 쉬운 건 작은 게임/질문 카드/사진 미션 같은 거예요.
                      </Text>
                      <Text>
                        예: “오늘 서로 사진 3장씩 찍어주기(컨셉: 영화 포스터)”, “올해 고마웠던 일 3개 말하기”.
                        대기 시간이 ‘우리만의 시간’이 되면 분위기가 살아납니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      4) 추위는 감정도 차갑게 만듭니다: 손·발·목부터 챙기기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        크리스마스 데이트 망하는 큰 원인은 “배고픔”과 “추위”입니다.
                        특히 손발이 차가워지면 말투도 딱딱해지고, 서로 예민해집니다.
                      </Text>
                      <Text>
                        핫팩은 ‘비상템’이 아니라 ‘분위기템’입니다. 장갑/목도리/넥워머/두꺼운 양말
                        같은 기본이 갖춰져야 야외 스팟이 즐거워져요.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      5) 사진은 “포인트 2곳만” 찍고, 나머지는 눈으로 보기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        사진을 너무 많이 찍으면 계속 멈추게 되고, 계속 멈추면 추워지고, 계속 추우면 짜증이 납니다.
                        포토 스팟은 “정말 좋은 곳” 2군데만 정해두세요.
                      </Text>
                      <Text>
                        대신 사진 퀄리티는 올리기: 빛 좋은 곳(조명 아래), 안전한 발밑, 3초 멈추고 찍기.
                        적게 찍어도 만족도가 커집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      6) 예산은 “세트 예산”으로: 식사+카페+이동+이벤트
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 가격이 전체적으로 올라갑니다. 그래서 항목별로 따로따로 쓰면 “생각보다 많이 썼네?”가
                        발생해요. 식사, 카페, 이동, 이벤트(전시/영화/입장료)를 한 묶음으로 보고 예산을 잡으면
                        스트레스가 줄어듭니다.
                      </Text>
                      <Text>
                        팁: “오늘은 이벤트에 돈 쓰자” vs “오늘은 맛집에 돈 쓰자”처럼 메인을 하나 정하고,
                        나머지는 가볍게 가면 균형이 좋아요.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      7) 택시가 안 잡힐 수 있습니다: 귀가 루트를 2개 만들기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말 밤은 택시가 정말 안 잡힐 수 있어요. 귀가 루트는 “대중교통 + 택시”처럼 2개로 준비해두세요.
                        막차 시간도 ‘대충’ 말고 정확히.
                      </Text>
                      <Text>
                        귀가 스트레스는 데이트의 마지막 인상을 망칩니다. 마지막 30분을 편하게 만들면 전체 만족도가 올라갑니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      8) 소음 많은 곳 다음엔 ‘조용한 곳’을 끼우기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        축제/번화가/시장 같은 곳은 재밌지만 에너지가 빨리 소모됩니다.
                        다음 코스에 조용한 카페, 산책로, 전망대처럼 “회복 스팟”을 하나 넣으면
                        데이트가 길게 갑니다.
                      </Text>
                      <Text>
                        사람 많은 곳만 연속으로 돌면 “우리가 왜 여기 있지?” 모드가 쉽게 옵니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      9) 선물은 비싸게가 아니라 “상황 맞춤”이 최고
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        선물은 가격보다 ‘상황 맞춤’이 기억에 남습니다.
                        예: 손이 잘 트는 사람에게 핸드크림+장갑, 추위 많이 타면 넥워머, 커피 좋아하면 원두/텀블러.
                      </Text>
                      <Text>
                        연말엔 물건이 넘치기 쉬워서, “바로 쓰는 것”이 만족도가 훨씬 높습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      10) 화장실/충전/따뜻한 실내는 미리 체크
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        현실 꿀팁: 연말 데이트는 화장실/충전/실내 대피처가 있으면 승리합니다.
                        특히 야외 행사가 포함되면 더더욱요.
                      </Text>
                      <Text>
                        “추울 때 들어갈 곳”을 알고 있으면 마음이 느긋해지고, 느긋하면 말투가 부드러워집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      11) 약속 시간은 10~20분 ‘완충’이 필요합니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 이동이 늦어지기 쉬워요(눈/빙판/대중교통 지연/택시 대기).
                        딱 맞춰 움직이면 서로 초조해집니다. 10~20분 완충 시간을 넣으면 데이트 톤이 달라져요.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      12) ‘한 문장’으로 마무리하면 기억이 좋아집니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        데이트가 끝날 때 “오늘 어땠어?” 대신 한 문장으로 마무리해보세요.
                        예: “오늘 제일 좋았던 순간은 너랑 트리 앞에서 웃었던 거.”
                        이 한 문장이 다음 데이트도 부드럽게 만듭니다.
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

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      마무리: 연말 데이트는 '감성 + 운영' 둘 다입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 사람이 많아서 '완벽한 날'이 되기 어렵습니다. 대신 "운영을 잘해서 좋은 날"은 만들 수 있어요.
                        예약/동선/대기/추위/귀가만 잡아도, 분위기는 자연스럽게 따라옵니다.
                      </Text>
                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          🎄 오늘의 한 줄: “기다림을 줄이면, 웃음이 늘어난다”
                        </Text>
                        <Text color="#495057">
                          연말은 바쁘고 북적이지만, 그만큼 기억도 강하게 남는 시즌입니다.
                          체크리스트 12가지만 챙기고, 서로에게 조금 더 친절한 하루로 만들어보세요.
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

export default Blog14;