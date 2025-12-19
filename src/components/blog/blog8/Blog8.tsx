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
import { KakaoAdDirect } from '../../../pages/Home';

const Blog8 = () => {
  const navigate = useNavigate();
  const title =
    '집 안 공기정화 완전 가이드: 환기, 습도, 미세먼지, 곰팡이까지 한 번에 정리';
  const description =
    '집 안 공기질을 결정하는 요소와 환기·습도·미세먼지·곰팡이·냄새 관리까지, 생활 속에서 실천할 수 있는 실내 공기정화 방법을 단계별로 정리한 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/8`;
  const ogImage = `${baseUrl}images/blog/blog8.png`;

  const publishedDate = '2024년 3월 18일';
  const author = '아리';
  const category = '생활 꿀팁';
  const readTime = 10;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: url,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: '씩씩이',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.png`,
      },
    },
    image: [ogImage],
    datePublished: '2024-03-18',
    dateModified: '2024-03-18',
  };

  return (
    <>
      {/* SEO 메타태그 */}
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
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Helmet>

      {/* 본문 */}
      <Box as="main" bg="#f8faf9" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack
          onBack={() => navigate('/magazine')}
        />

        <Container
          maxW="container.md"
          px={{ base: 4, md: 6 }}
          py={{ base: 6, md: 10 }}
        >
          <article>
            <VStack spacing={8} align="stretch">
              {/* 헤더 섹션 */}
              <VStack spacing={4} align="stretch">
                <Badge
                  colorScheme="brand"
                  borderRadius="8px"
                  px={3}
                  py={1}
                  fontSize="12px"
                  fontWeight="700"
                  w="fit-content"
                >
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

                <HStack
                  spacing={4}
                  fontSize="14px"
                  color="#868e96"
                  flexWrap="wrap"
                >
                  <HStack spacing={1.5}>
                    <Box as={FiUser} />
                    <Text fontWeight="500">{author}</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Box as={FiCalendar} />
                    <Text>{publishedDate}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{readTime}분 읽기</Text>
                </HStack>
              </VStack>

              {/* 대표 이미지 */}
              <Box
                borderRadius="20px"
                overflow="hidden"
                w="100%"
                boxShadow="xl"
                bg="white"
              >
                <Image
                  src="/images/blog/blog8.png"
                  alt="창문과 식물이 있는 거실, 공기정화와 환기가 잘 되는 집의 모습"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              {/* 본문 콘텐츠 */}
              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack
                  spacing={10}
                  fontSize={{ base: '15px', md: '16px' }}
                  lineHeight="1.9"
                  color="#1a2e1a"
                >
                  {/* 인트로 */}
                  <Box>
                    <Text
                      fontSize={{ base: '17px', md: '18px' }}
                      fontWeight="600"
                      color="#1a2e1a"
                      mb={3}
                    >
                      “집 안 공기가 좋아지면, 생각보다 많은 게 같이 좋아집니다.”
                    </Text>
                    <Text mb={4}>
                      잠에서 깼는데 머리가 무겁고, 집에 있는데도 코가 막히거나
                      집중이 잘 안 되는 느낌이 든 적이 있으신가요?
                      실내 공기질이 좋지 않을 때, 몸은 작게 신호를 보내고 있습니다.
                    </Text>
                    <Text mb={4}>
                      우리는 하루 24시간 중 대부분을 실내에서 보내고,
                      집은 그중에서도 가장 오래 머무는 공간입니다.
                      그래서 **집 안 공기질을 관리하는 일은 건강 관리이자,
                      생활의 기본 인프라를 정비하는 일**에 가깝습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 세계보건기구(WHO)에 따르면, 실내 공기 오염은 
                      전 세계 사망 원인 중 4위를 차지하며, 실내 공기질이 
                      건강에 미치는 영향은 생각보다 큽니다. 특히 알레르기, 
                      천식, 두통, 집중력 저하 등은 실내 공기질과 밀접한 관련이 있습니다. 
                      따라서 집 안 공기질을 관리하는 것은 단순한 편의가 아니라 
                      건강을 지키는 필수적인 일입니다.
                    </Text>
                    <Text>
                      이 글에서는 단순히 공기청정기를 추천하는 것을 넘어서,
                      <br />
                      ① 실내 공기질을 결정하는 요소 <br />
                      ② 환기와 공기 흐름 설계 <br />
                      ③ 미세먼지 & 공기청정기 활용법 <br />
                      ④ 습도·곰팡이 관리 <br />
                      ⑤ 냄새·VOC(휘발성 유기화합물) & 향 관리
                      <br />
                      까지, **집 안 공기를 건강하게 유지하는 전체 그림**을
                      차근차근 정리해 봅니다. 각 방법은 실제로 적용해본 사람들의 
                      경험을 바탕으로 작성했으며, 특히 예산이 부족한 상황에서도 
                      효과적으로 적용할 수 있는 방법들만 선별했습니다.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 1: 상단 – 구글 */}
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

                  {/* 섹션 1: 공기질 요소 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 실내 공기질을 결정하는 5가지 요소
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        “공기가 좋다/나쁘다”는 느낌은 막연해 보이지만,
                        실제로는 몇 가지 요소로 나누어 생각할 수 있습니다.
                        이 요소들을 이해하면 집 안 공기를
                        **“감”이 아니라 “설계”의 대상으로 볼 수 있게 됩니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 산소·이산화탄소 농도
                        </Text>
                        <Text>
                          좁은 방에 오래 있으면 머리가 멍해지는 이유 중 하나는
                          공기 중 이산화탄소 비율이 높아지기 때문입니다.
                          사람이 오래 머무는 공간일수록
                          **정기적인 환기**가 필수입니다.
                        </Text>
                        <Text>
                          이산화탄소 농도가 높아지면 두통, 피로, 집중력 저하 등의 증상이 나타납니다. 
                          일반적으로 실내 이산화탄소 농도는 1000ppm 이하가 적정하며, 
                          2000ppm을 넘으면 건강에 영향을 미칠 수 있습니다. 
                          특히 밀폐된 공간이나 여러 사람이 함께 있는 공간에서는 
                          이산화탄소 농도가 빠르게 상승하므로, 
                          정기적인 환기가 매우 중요합니다. 
                          환기를 통해 이산화탄소를 배출하고 신선한 산소를 공급하면 
                          집중력과 생산성이 크게 향상됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 미세먼지·초미세먼지
                        </Text>
                        <Text>
                          창문 틈, 환풍구, 외부와 연결된 작은 틈을 통해
                          외부 미세먼지가 실내로 들어옵니다.
                          도로 근처, 공사장 주변, 대로변 건물은
                          특히 실내 미세먼지 관리가 중요합니다.
                        </Text>
                        <Text>
                          미세먼지(PM10)와 초미세먼지(PM2.5)는 호흡기를 통해 
                          폐까지 침투하여 건강에 심각한 영향을 미칠 수 있습니다. 
                          특히 도로 근처나 공사장 주변에 사는 경우, 
                          외부 미세먼지가 실내로 유입되는 것을 최소화하는 것이 중요합니다. 
                          창문 틈새를 막고, 환기 시에는 미세먼지가 적은 시간대를 선택하며, 
                          공기청정기를 적절히 활용하면 실내 미세먼지 농도를 크게 줄일 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 습도
                        </Text>
                        <Text>
                          습도가 너무 낮으면 건조함, 코막힘, 피부 트러블이,
                          너무 높으면 곰팡이·진드기·냄새 문제가 생깁니다.
                          **40~60% 정도의 중간 습도**를 유지하는 것이
                          가장 쾌적한 상태입니다.
                        </Text>
                        <Text>
                          습도는 체감 온도와 건강에 직접적인 영향을 미칩니다. 
                          습도가 30% 이하로 낮아지면 피부가 건조해지고, 
                          호흡기 점막이 마르면서 감기에 걸리기 쉬워집니다. 
                          반대로 습도가 70% 이상으로 높아지면 곰팡이와 진드기가 번식하기 좋은 
                          환경이 되어 알레르기나 호흡기 질환의 원인이 됩니다. 
                          습도계를 사용하여 실내 습도를 모니터링하고, 
                          필요에 따라 가습기나 제습기를 사용하여 적정 습도를 유지하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 냄새(악취·조리 냄새·곰팡이 냄새 등)
                        </Text>
                        <Text>
                          냄새는 단순한 '불쾌감'뿐 아니라,
                          보이지 않는 산화물·가스·유기 화합물이 공기 중에 떠 있다는 신호이기도 합니다.
                          제거보다는 **발생 지점 관리 + 빠른 배출**이 핵심입니다.
                        </Text>
                        <Text>
                          냄새는 공기 중에 떠다니는 분자들이 우리의 후각 수용체를 자극할 때 
                          느껴지는 것입니다. 따라서 냄새가 난다는 것은 
                          공기 중에 특정 물질이 존재한다는 신호입니다. 
                          방향제로 냄새를 덮는 것은 근본적인 해결책이 아니며, 
                          오히려 여러 화학 물질이 섞여 더 복잡한 공기 오염을 만들 수 있습니다. 
                          냄새의 원인을 찾아 제거하고, 환기를 통해 빠르게 배출하는 것이 
                          가장 효과적인 방법입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ VOC(휘발성 유기화합물)·가스
                        </Text>
                        <Text>
                          새 가구, 페인트, 접착제, 방향제, 세제 등에서
                          휘발성 유기화합물이 공기 중으로 배출될 수 있습니다.
                          새로 인테리어를 했거나,
                          새 가구·매트를 들였다면
                          **초기에 환기량을 크게 늘려주는 것**이 좋습니다.
                        </Text>
                        <Text>
                          VOC는 두통, 어지러움, 메스꺼움, 눈·코·목의 자극 등을 유발할 수 있으며, 
                          장기적으로는 호흡기 질환이나 알레르기를 일으킬 수 있습니다. 
                          새 가구나 인테리어 자재를 들였을 때는 최소 2주~1개월 동안 
                          환기를 자주 해주는 것이 중요합니다. 특히 침실에 새 가구를 들였다면, 
                          처음 며칠은 다른 방에서 자는 것이 좋습니다. 
                          또한 저VOC 제품을 선택하거나, 친환경 인증 제품을 사용하면 
                          VOC 노출을 줄일 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* 섹션 2: 환기 & 공기 흐름 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2. 환기와 공기 흐름: “언제, 어떻게” 여는지가 중요하다
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        공기질 관리의 출발점은 항상 **환기**입니다.
                        창문을 여는 것만으로도,
                        집 안 공기 상태가 완전히 달라질 수 있습니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 하루 최소 2번, 5~10분 ‘강제 환기’
                        </Text>
                        <Text>
                          날씨와 계절과 상관없이,
                          **아침 기상 후 / 저녁 활동 전** 등
                          하루 두 번 정도는
                          창문을 활짝 열어 공기를 바꾸는 것이 좋습니다.
                          환기는 "한 번에 오래"보다
                          **짧고 강하게, 자주**가 더 효과적입니다.
                        </Text>
                        <Text>
                          강제 환기는 대류 환기라고도 불리며, 창문을 반대편에 열어 
                          공기가 통과하도록 하는 것이 가장 효과적입니다. 
                          겨울에는 난방을 잠시 끄고 5~10분 정도만 환기하면 
                          실내 온도가 크게 떨어지지 않으면서도 공기 질을 크게 개선할 수 있습니다. 
                          여름에는 아침 일찍이나 저녁 늦게 환기하면 
                          시원한 공기를 받아들일 수 있습니다. 
                          또한 환기 후에는 공기청정기를 켜면 
                          유입된 미세먼지를 제거할 수 있어 더욱 효과적입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② ‘맞바람’ 구조 만들기
                        </Text>
                        <Text>
                          한 곳만 열어두면 공기가 충분히 순환되지 않습니다.
                          가능한 한 **서로 마주보는 방향의 창문이나 문 두 곳 이상**을 동시에 열어
                          공기가 "통과"할 수 있는 길을 만들어 주세요.
                          환기의 효율이 눈에 띄게 증가합니다.
                        </Text>
                        <Text>
                          맞바람 구조는 공기 순환의 핵심입니다. 
                          한 곳만 열어두면 공기가 들어오지만 충분히 순환되지 않아 
                          환기 효과가 떨어집니다. 반대로 서로 마주보는 창문을 열면 
                          공기가 통과하면서 실내 공기가 빠르게 교체됩니다. 
                          창문이 한 면에만 있는 경우에는 문을 열어 
                          다른 방의 창문과 연결하면 맞바람 효과를 만들 수 있습니다. 
                          이렇게 하면 환기 시간을 단축하면서도 효과적으로 공기를 교체할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 미세먼지 많은 날의 환기 요령
                        </Text>
                        <Text>
                          대기질이 나쁜 날이라고 해서,
                          환기를 완전히 막는 것도 좋은 방법은 아닙니다.
                          대신 **미세먼지가 상대적으로 낮은 시간대(이른 오전, 늦은 밤 등)**를 선택해
                          짧게 환기하고,
                          나머지 시간에는 공기청정기를 활용하는 식으로
                          "조합 전략"을 사용하는 것이 좋습니다.
                        </Text>
                        <Text>
                          미세먼지가 많은 날에도 완전히 환기를 막으면 
                          이산화탄소 농도가 높아지고 실내 공기질이 악화됩니다. 
                          따라서 미세먼지 농도가 상대적으로 낮은 시간대(보통 오전 6~8시, 
                          밤 10시 이후)에 짧게 환기하고, 나머지 시간에는 공기청정기를 
                          사용하는 것이 좋습니다. 또한 미세먼지 농도를 확인할 수 있는 
                          앱이나 웹사이트를 활용하여 최적의 환기 시간을 선택하는 것도 
                          효과적인 방법입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 창을 열기 어려운 구조라면?
                        </Text>
                        <Text>
                          창이 한 면에만 있거나 반지하처럼 환기가 어려운 구조라면,
                          선풍기·서큘레이터를 활용해 공기 흐름을 만들어 줄 수 있습니다.
                          창 방향을 향해 선풍기를 돌려
                          **실내 공기가 밖으로 밀려 나가도록** 만드는 것도 작은 팁입니다.
                        </Text>
                        <Text>
                          선풍기나 서큘레이터를 사용하면 자연 환기가 어려운 구조에서도 
                          공기 순환을 만들 수 있습니다. 창문을 열고 선풍기를 창문 쪽을 향해 
                          돌리면 실내 공기가 밖으로 밀려나가고, 반대로 창문 쪽에서 
                          실내를 향해 돌리면 외부 공기가 들어옵니다. 
                          또한 천장 선풍기를 사용하면 공기가 위아래로 순환하여 
                          환기 효과를 높일 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />
                  {/* 섹션 3: 미세먼지 & 공기청정기 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 미세먼지와 공기청정기, 어떻게 써야 효과적일까?
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        미세먼지 많은 날에는 공기청정기의 역할이 커집니다.
                        다만 “켜두기만 하면 된다”는 생각보다,
                        공간에 맞게 사용하는 것이 더 중요합니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 방 크기와 CADR(정화 능력) 맞추기
                        </Text>
                        <Text>
                          작은 방에 지나치게 큰 공기청정기를 둘 필요는 없지만,
                          큰 거실에 너무 약한 제품을 쓰면
                          체감 효과가 적을 수 있습니다.
                          대략 **실제 방 크기보다 조금 여유 있는 정화 면적**을 가진 제품을
                          사용하는 것이 좋습니다.
                        </Text>
                        <Text>
                          CADR(Clean Air Delivery Rate)은 공기청정기의 정화 능력을 나타내는 지표입니다. 
                          방 크기에 맞는 CADR을 가진 제품을 선택하면 효율적으로 공기를 정화할 수 있습니다. 
                          일반적으로 방 크기(㎡) × 2.8 = 필요한 CADR(㎥/h)로 계산합니다. 
                          예를 들어, 20㎡ 방이라면 약 56 ㎥/h의 CADR이 필요합니다. 
                          실제 방 크기보다 조금 여유 있는 제품을 선택하면 
                          더 빠르게 정화할 수 있고, 효과도 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 현관·창가 쪽에 두기보다, 실제로 머무는 공간 쪽에
                        </Text>
                        <Text>
                          "먼지가 들어오는 방향"에만 두는 것보다,
                          **가장 오래 머무는 곳**(소파 주변, 침대 근처, 책상 옆)에 두는 편이
                          실제 체감에 더 도움이 됩니다.
                          거실에 하나, 침실 근처에 하나 등
                          동선을 기준으로 배치해 보세요.
                        </Text>
                        <Text>
                          공기청정기는 벽에서 최소 30cm 이상 떨어뜨려 두는 것이 좋습니다. 
                          벽에 너무 가까이 두면 공기 순환이 원활하지 않아 정화 효과가 떨어집니다. 
                          또한 가구 뒤나 구석에 두지 말고, 공기가 잘 순환하는 곳에 두는 것이 중요합니다. 
                          여러 개의 공기청정기를 사용할 때는 각 방에 하나씩 두는 것보다, 
                          큰 공간에 하나를 두는 것이 더 효율적일 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 필터 관리 주기 지키기
                        </Text>
                        <Text>
                          필터 교체 시기를 지나 오래 사용하면
                          정화 기능이 떨어질 뿐 아니라,
                          오히려 필터에 먼지가 쌓여
                          냄새나 오염원이 될 수 있습니다.
                          제조사 권장 주기를 기준으로 하되,
                          **미세먼지 많은 지역·도로변이라면 조금 더 짧게** 잡는 것도 좋습니다.
                        </Text>
                        <Text>
                          필터는 공기청정기의 핵심 부품입니다. 필터가 먼지로 막히면 
                          정화 능력이 떨어지고, 전력 소비도 증가합니다. 
                          또한 필터에 쌓인 먼지가 다시 공기 중으로 날아올 수 있어 
                          오히려 공기 오염의 원인이 될 수 있습니다. 
                          일반적으로 HEPA 필터는 6개월~1년마다 교체하는 것이 좋지만, 
                          미세먼지가 많은 지역이나 공기청정기를 자주 사용하는 경우에는 
                          더 자주 교체하는 것이 좋습니다. 필터를 교체할 때는 
                          제조사에서 권장하는 정품 필터를 사용하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 공기청정기만으로는 부족한 영역도 있다
                        </Text>
                        <Text>
                          공기청정기는 먼지·입자 제거에 강하지만,
                          **이산화탄소, 산소 농도, 습도, 냄새, VOC**까지 완전히 해결해 주지는 않습니다.
                          환기·습도 관리·청소와 함께 사용할 때
                          비로소 최대 효과를 낼 수 있다는 점을 기억해 두면 좋습니다.
                        </Text>
                        <Text>
                          공기청정기는 미세먼지나 꽃가루 같은 입자성 오염물질을 제거하는 데 효과적이지만, 
                          이산화탄소나 VOC 같은 가스성 오염물질은 제거하지 못합니다. 
                          따라서 공기청정기만으로는 부족하며, 정기적인 환기와 함께 사용해야 합니다. 
                          또한 공기청정기는 공기 중의 먼지만 제거할 뿐, 
                          가구나 바닥에 쌓인 먼지는 제거하지 못하므로 
                          정기적인 청소도 함께 해야 합니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  {/* 섹션 4: 습도 & 곰팡이 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      4. 습도와 곰팡이: “습한 구역”부터 찾아보자
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        공기질 이야기를 할 때 습도와 곰팡이는 빼놓을 수 없습니다.
                        눈에 잘 띄지 않지만, 곰팡이와 과도한 습기는
                        호흡기·피부 건강과 직접적으로 연결됩니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 집 안에서 가장 습한 구역 찾기
                        </Text>
                        <Text>
                          보통 욕실, 주방, 드럼세탁기 주변, 창가 하단, 옷장 안쪽이
                          습기가 쉽게 고이는 공간입니다.
                          곰팡이 냄새가 난다면
                          **이 지점들을 먼저 집중적으로 확인**해 보세요.
                        </Text>
                        <Text>
                          곰팡이는 습도 60% 이상, 온도 20~30도, 공기 순환이 없는 곳에서 
                          잘 자랍니다. 특히 욕실이나 주방처럼 수분이 많은 공간과, 
                          창가 하단처럼 결로가 생기기 쉬운 곳, 옷장 안쪽처럼 
                          공기 순환이 안 되는 곳에서 곰팡이가 자주 발생합니다. 
                          곰팡이를 발견하면 즉시 제거하고, 원인을 해결해야 합니다. 
                          곰팡이 포자는 호흡기 질환이나 알레르기를 유발할 수 있으므로 
                          주의가 필요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 제습은 “공간 전체”가 아니라 “문제 구역” 위주로
                        </Text>
                        <Text>
                          제습기를 쓸 때는
                          집 전체를 건조하게 만들기보다,
                          특히 습한 구역 위주로 돌리는 것이 효율적입니다.
                          문을 닫고 작은 공간에서 돌리면
                          전기 사용량 대비 효과가 훨씬 높습니다.
                        </Text>
                        <Text>
                          제습기는 공간이 작을수록 효율적입니다. 
                          큰 공간에서 돌리면 습도가 천천히 떨어지지만, 
                          작은 공간에서 돌리면 빠르게 습도를 낮출 수 있습니다. 
                          특히 욕실이나 옷장 같은 습한 구역에 집중적으로 사용하면 
                          곰팡이 예방에 매우 효과적입니다. 
                          제습기를 사용할 때는 문을 닫고 사용하면 더욱 효율적이며, 
                          습도계를 사용하여 목표 습도(40~60%)에 도달하면 끄는 것이 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 욕실은 ‘건조 모드’까지 포함해서 사용하기
                        </Text>
                        <Text>
                          샤워 후 바닥에 고인 물을 간단히 밀어내고,
                          환풍기를 10~20분 정도 더 돌려 주는 것만으로도
                          곰팡이 발생 가능성을 크게 낮출 수 있습니다.
                          가능하면 **욕실 문은 완전히 마른 뒤에 닫는 것**을 목표로 해 보세요.
                        </Text>
                        <Text>
                          욕실은 곰팡이가 가장 잘 생기는 공간 중 하나입니다. 
                          샤워 후에는 바닥에 고인 물을 스퀴지나 걸레로 제거하고, 
                          환풍기를 최소 20분 이상 돌려 습기를 완전히 제거해야 합니다. 
                          욕실 문은 습기가 완전히 제거될 때까지 열어두는 것이 좋으며, 
                          가능하면 창문도 함께 열어 환기를 시키면 더욱 효과적입니다. 
                          이 습관만으로도 욕실 곰팡이를 80% 이상 예방할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 옷장 안쪽까지 공기가 통하게 만들기
                        </Text>
                        <Text>
                          옷이 빽빽하게 채워진 옷장은
                          공기가 거의 돌지 않습니다.
                          옷 사이에 손이 들어갈 정도의 여유를 남겨두고,
                          계절이 지난 옷은 박스에 담아 상단이나 다른 공간으로 옮기면
                          곰팡이·냄새를 줄이는 데 도움이 됩니다.
                        </Text>
                        <Text>
                          옷장은 공기 순환이 잘 안 되는 공간이므로 습기가 쉽게 고입니다. 
                          옷을 너무 빽빽하게 넣으면 공기 순환이 안 되어 곰팡이가 생기기 쉽습니다. 
                          옷 사이에 여유 공간을 두고, 옷장 문을 가끔 열어 환기를 시키면 
                          습기와 곰팡이를 예방할 수 있습니다. 
                          또한 옷장 안에 제습제나 습도 조절제를 두면 
                          습도 관리에 도움이 됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 5: 냄새·VOC·향 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      5. 냄새·VOC·향까지 포함한 ‘공기 분위기’ 만들기
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        같은 공기여도 “기분 좋게 느껴지는 공기”가 있습니다.
                        마지막 단계는 **집 안 공기의 분위기를 세팅하는 일**입니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 방향제보다 ‘원인 차단’이 먼저
                        </Text>
                        <Text>
                          음식물 쓰레기, 하수구, 신발장, 애완동물 용품 등에서 오는 냄새는
                          방향제로 덮기보다
                          **발생 지점을 줄이고, 빨리 배출하는 것**이 중요합니다.
                          향은 그 이후에 더해지는 "마무리 작업"에 가깝습니다.
                        </Text>
                        <Text>
                          냄새의 원인을 제거하는 것이 가장 중요합니다. 
                          음식물 쓰레기는 자주 비우고, 하수구는 정기적으로 청소하며, 
                          신발장은 환기를 시키고 제습제를 두는 것이 좋습니다. 
                          방향제는 냄새를 덮을 뿐 근본적인 해결책이 아니며, 
                          오히려 여러 화학 물질이 섞여 더 복잡한 공기 오염을 만들 수 있습니다. 
                          냄새의 원인을 제거한 후, 필요하다면 자연스러운 향(식물, 에센셜 오일 등)을 
                          가볍게 사용하는 것이 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 새 가구·새 매트리스는 ‘적응 기간’이 필요하다
                        </Text>
                        <Text>
                          새로 들인 가구와 매트리스에서는
                          초기 몇 주 동안 다양한 휘발성 물질이 나올 수 있습니다.
                          이 기간 동안에는
                          **환기 빈도를 늘리고, 문을 활짝 여는 시간대를 따로 확보**해 주는 것이 좋습니다.
                          가능하다면 처음 며칠은 사람이 오래 머물지 않는 방에 두는 것도 방법입니다.
                        </Text>
                        <Text>
                          새 가구나 매트리스에서 나오는 VOC는 건강에 해로울 수 있으므로 
                          충분한 환기가 필요합니다. 최소 2주~1개월 동안은 
                          환기를 자주 해주고, 가능하면 창문을 열어두는 것이 좋습니다. 
                          특히 침실에 새 가구를 들였다면, 처음 며칠은 다른 방에서 자는 것이 안전합니다. 
                          또한 저VOC 제품을 선택하거나, 친환경 인증 제품을 사용하면 
                          VOC 노출을 줄일 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 향은 ‘공기 마무리’ 정도로 가볍게
                        </Text>
                        <Text>
                          디퓨저·룸 스프레이·향초·인센스 등은
                          집 안 분위기를 완성해 주는 역할을 합니다.
                          다만 너무 강한 향은 머리가 아플 수 있으므로,
                          **은은하게 느껴지는 정도**를 기준으로 선택해 보세요.
                          침실은 과한 향보다는
                          부드러운 허브·우디 계열이 더 안정감을 줄 수 있습니다.
                        </Text>
                        <Text>
                          향은 공기 분위기를 만드는 마지막 단계입니다. 
                          너무 강한 향은 두통이나 알레르기를 유발할 수 있으므로, 
                          은은하게 느껴지는 정도로 사용하는 것이 좋습니다. 
                          침실에서는 라벤더, 카모마일 같은 부드러운 향이 수면에 도움이 되며, 
                          거실에서는 시트러스나 우디 계열의 향이 상쾌한 분위기를 만듭니다. 
                          또한 천연 에센셜 오일을 사용하면 합성 향료보다 건강에 좋습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 마무리 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 눈에 보이지 않는 것을 관리할수록, 삶의 밀도가 달라진다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        집 안 공기는 눈에 보이지 않아서
                        뒤로 밀리기 쉬운 영역입니다.
                        하지만 실제로는 우리가 가장 많이 마주치는
                        “환경”이자, 건강과 집중력, 수면의 질까지
                        모두 연결되는 중요한 요소입니다.
                      </Text>
                      <Text>
                        오늘 소개한 내용 중에서
                        모든 것을 다 실천할 필요는 없습니다.
                        **하루 두 번 환기하기, 욕실 완전히 말리고 문 닫기,
                        공기청정기 위치 한 번 바꿔보기**처럼
                        가장 쉬운 것 하나부터 시작해 보세요.
                      </Text>
                      <Text>
                        공기질 관리는 작은 습관의 누적입니다. 
                        하루 두 번 환기하기, 욕실 습기 제거하기, 
                        공기청정기 위치 조정하기 같은 작은 습관부터 시작하면 
                        점진적으로 공기질이 개선됩니다. 
                        완벽하게 하려고 하지 말고, 자신의 생활 패턴에 맞는 
                        방법부터 하나씩 적용해보세요. 작은 변화가 쌓이면 
                        큰 변화가 됩니다.
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

                      <Box
                        bg="brand.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="brand.500"
                      >
                        <Text
                          fontSize={{ base: '16px', md: '17px' }}
                          fontWeight="600"
                          color="#1a2e1a"
                          mb={2}
                        >
                          🌿 오늘의 한 줄: “깨끗한 공기는 보이지 않지만, 분명히 느껴집니다.”
                        </Text>
                        <Text color="#495057">
                          공기 관리에 한 번만 신경 써도  
                          집의 분위기, 몸의 피로도, 집중하는 시간까지  
                          조금씩 달라지기 시작할 거예요.
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

export default Blog8;