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

const Blog7 = () => {
  const navigate = useNavigate();
  const title =
    '생활 꿀팁 20가지: 집안일이 가벼워지는 아주 현실적인 방법들';
  const description =
    '청소, 세탁, 냄새 제거, 습도 관리, 수납과 정리까지. 매일 반복되는 집안일이 조금은 덜 피곤해지고, 더 효율적으로 바뀌는 현실적인 생활 꿀팁 20가지를 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/7`;
  const ogImage = `${baseUrl}images/blog/blog7.png`;

  const publishedDate = '2024년 3월 10일';
  const author = '씩씩이';
  const category = '생활 꿀팁';
  const readTime = 11;

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
    datePublished: '2024-03-10',
    dateModified: '2024-03-10',
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
                  src="/images/blog/blog7.png"
                  alt="깔끔하게 정리된 거실과 주방, 생활 꿀팁이 느껴지는 집안 풍경"
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
                      “집안일은 끝이 없는 것 같지만, 그 안에도 ‘패턴’이 있습니다.”
                    </Text>
                    <Text mb={4}>
                      청소, 세탁, 설거지, 정리… 하루를 마칠 때면
                      “도대체 오늘 뭐 하면서 이렇게 지친 거지?”라는 생각이 들 때가 있습니다.
                      사실 우리는 눈에 보이지 않는 수많은 작은 일을
                      반복해서 처리하고 있기 때문입니다.
                    </Text>
                    <Text mb={4}>
                      집안일을 완전히 없앨 수는 없지만,
                      **조금 덜 피곤하게, 조금 더 효율적으로** 만드는 방법은 분명히 존재합니다.
                      오늘은 “대단한 인테리어”나 “큰 살림살이 팁”이 아니라,
                      **당장 오늘부터 적용할 수 있는 현실적인 생활 꿀팁 20가지**를 모아봤습니다.
                    </Text>
                    <Text>
                      크게 네 가지 영역으로 나눠 정리했습니다.
                      <br />
                      ① 청소 루틴 <br />
                      ② 세탁 & 옷 관리 <br />
                      ③ 냄새 & 습도 관리 <br />
                      ④ 수납 & 정리 동선
                      <br />
                      각자에게 필요한 부분부터 골라서 가져가 보세요.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

                  {/* 섹션 1: 청소 루틴 */}
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
                      1. 청소가 쉬워지는 루틴 꿀팁 5가지
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        청소를 싫어하게 되는 가장 큰 이유는
                        “한 번에 다 하려고 하기 때문”입니다.
                        작은 단위로 쪼개고, 루틴처럼 자동화되도록 만들면
                        생각보다 훨씬 가볍게 관리할 수 있습니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① ‘평평한 곳만 비우기’ 원칙 세우기
                        </Text>
                        <Text>
                          집이 지저분해 보이는 첫 번째 이유는 바닥보다
                          **테이블, 식탁, 책상, 서랍 위** 같은 평평한 곳에
                          온갖 물건이 쌓이기 때문입니다.
                          <br />
                          “바닥 전체 청소” 대신
                          **‘오늘은 식탁 위만 깨끗하게’** 같은 식으로
                          평평한 공간부터 비우는 습관을 들이면
                          눈에 보이는 정리 효과가 훨씬 빨리 나타납니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② “방향 청소” 대신 “구역 청소”로
                        </Text>
                        <Text>
                          집 전체를 한 번에 쓸고 닦는 방식은
                          체력도, 시간도 많이 듭니다.
                          대신 **“현관·주방·욕실·거실”**처럼
                          공간 기준으로 나누고,
                          하루에 한 구역만 담당하는 방식으로 바꿔 보세요.
                          주당 4일만 투자해도 집 전체가 꾸준히 관리됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ “지나갈 때 한 번” 원칙
                        </Text>
                        <Text>
                          물건을 가지러 방을 오가다가,
                          바닥에 눈에 띄는 머리카락이나 휴지가 보이면
                          **그때 바로 한 번 집어버리는 것**만으로도
                          청소 주기가 길어집니다.
                          청소 시간을 따로 내기보다,
                          **“지나갈 때 한 번씩”**을 습관으로 만드는 게 핵심입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 물티슈 대신 ‘행주 존’ 만들기
                        </Text>
                        <Text>
                          식탁, 싱크대, 가구 표면은
                          물티슈로 닦는 경우가 많지만,
                          자주 쓰다 보면 쓰레기도 많이 생기고 비용도 올라갑니다.
                          **주방 한 켠에 행주·타월·미니 분무기를 모아둔 ‘행주 존’을** 만들면
                          훨씬 친환경적이고 경제적으로 관리할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ 주 1회 ‘바닥 리셋 데이’ 정하기
                        </Text>
                        <Text>
                          로봇청소기를 쓰든, 빗자루·청소기를 쓰든
                          **주 1회는 꼭 바닥 전체를 리셋하는 날**을 정해두면 좋습니다.
                          이 날만큼은 바닥에 있는 짐을 최대한 치우고,
                          구석까지 한 번에 정리해 주세요.
                          더러워지기 전에 한 번씩 리셋해 주는 것이,
                          대청소를 크게 하는 것보다 훨씬 덜 힘듭니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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

                  {/* 섹션 2: 세탁 & 옷 관리 */}
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
                      2. 세탁과 옷 관리가 가벼워지는 꿀팁 5가지
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        세탁은 그냥 “돌리고, 널고, 개는 일” 같지만
                        사실은 생각보다 많은 결정을 요구하는 집안일입니다.
                        종류를 줄이고, 규칙을 만들면 한결 수월해집니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 빨래 바구니를 ‘색상/용도’별로 나누기
                        </Text>
                        <Text>
                          흰색, 색깔, 수건, 양말이 한 바구니에 섞여 있으면
                          세탁 시작할 때마다 분류부터 해야 해서 귀찮아집니다.
                          작은 빨래 바구니를 2~3개로 나누고
                          **흰색/색깔, 옷/수건** 정도만 구분해도
                          세탁 준비 단계가 훨씬 빨라집니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② ‘하루에 조금씩’이 아니라 ‘이틀에 한 번 확실하게’
                        </Text>
                        <Text>
                          매일 조금씩 빨래를 하면,
                          널고 걷는 일까지 항상 뒤에 따라옵니다.
                          차라리 **이틀에 한 번**, 세탁기 용량을 적당히 채워
                          한 번에 처리하는 편이
                          정신적으로도, 시간 관리 측면에서도 더 편할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 말릴 공간을 먼저 확보해 두기
                        </Text>
                        <Text>
                          세탁을 미루게 되는 이유 중 하나는
                          “널 공간이 없어서”인 경우도 많습니다.
                          **집 안에서 빨래 건조대 자리 하나를 ‘고정 존’으로** 확보해 두고,
                          다른 물건을 두지 않는 것이 중요합니다.
                          말릴 공간이 정해져 있으면, 세탁을 시작할 때 망설임이 줄어듭니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 수건은 ‘수량’을 줄이는 게 핵심
                        </Text>
                        <Text>
                          수건이 너무 많으면 빨래가 쌓이는 속도가 빨라지고,
                          보관 공간도 부족해집니다.
                          1인 기준으로 **샤워용 2~3장, 손수건/주방용 몇 장 정도**만 두고,
                          나머지는 과감하게 정리하는 것도 방법입니다.
                          관리 가능한 수량만 남겨두는 것이
                          깔끔한 욕실과 세탁 루틴의 출발점입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ 옷은 “장바구니 단계”에서 걸러내기
                        </Text>
                        <Text>
                          세탁과 정리에 드는 수고를 근본적으로 줄이려면
                          **옷이 들어오는 입구를 줄이는 것**이 가장 빠릅니다.
                          온라인 쇼핑 시 장바구니에 담긴 옷을
                          하루 정도 두었다가,
                          다음 날 다시 보았을 때도 여전히 사고 싶다면 그때 결제해 보세요.
                          충동구매를 줄이는 것만으로도
                          옷 수납과 세탁 부담이 눈에 띄게 줄어듭니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* 섹션 3: 냄새 & 습도 */}
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
                      3. 집 냄새와 습도 관리를 위한 꿀팁 5가지
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        집에 들어왔을 때 느껴지는 첫 인상은
                        눈에 보이는 것보다 **공기와 냄새**에서 많이 결정됩니다.
                        냄새와 습도 관리는 생각보다 작은 습관에서 시작됩니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 하루 최소 2번, 5분씩 ‘강제 환기’
                        </Text>
                        <Text>
                          겨울에는 춥고, 여름에는 덥다는 이유로
                          환기를 미루기 쉽지만,
                          **짧고 강하게 두 번**만 해도 공기 질이 확 달라집니다.
                          아침에 한 번, 저녁에 한 번,
                          5분 정도 창문을 활짝 열어 놓고
                          공기를 완전히 한 번 바꿔 주세요.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 주방 후드는 ‘요리 시작할 때’ 켜기
                        </Text>
                        <Text>
                          많은 사람들이 요리를 다 하고 나서 후드를 켜지만,
                          이미 냄새는 집 안 가구와 패브릭에 스며들기 시작한 뒤입니다.
                          **기름 사용 요리라면 불을 켜기 전에 후드를 먼저 켜는 것**이 좋습니다.
                          냄새뿐 아니라 수분과 열도 함께 배출되어
                          집 전체가 덜 답답해집니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 욕실 문은 ‘완전 마르고 나서’ 닫기
                        </Text>
                        <Text>
                          샤워 후 바로 문을 닫으면,
                          욕실 내부에 습기가 오래 머물면서
                          곰팡이와 냄새가 생기기 쉬운 환경이 됩니다.
                          샤워 후에는 **문을 열어둔 상태에서 충분히 환기**를 시키고,
                          바닥에 고인 물은 대충이라도 한 번 밀어주는 습관을 들이면
                          곰팡이 청소 빈도가 확 줄어듭니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 빨래는 가능하면 ‘하루 안에 완전 건조’ 시키기
                        </Text>
                        <Text>
                          이틀 넘게 마르지 않는 빨래는
                          특유의 꿉꿉한 냄새를 만들기 쉽습니다.
                          햇볕이 드는 시간대에 맞춰 세탁기를 돌리거나,
                          선풍기·서큘레이터를 같이 사용해
                          **최대한 당일 완전 건조**를 목표로 해 보세요.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ 쓰레기통은 ‘비울 때’가 아니라 ‘냄새 맡을 때’ 교체가 아니라는 걸 기억하기
                        </Text>
                        <Text>
                          냄새가 나기 시작했다는 건 이미 늦었다는 뜻이기도 합니다.
                          특히 음식물 쓰레기나 부엌 쓰레기통은
                          **“빈도 기준”**으로 비우는 것이 좋습니다.
                          예를 들어, “이틀에 한 번은 무조건 비운다” 같은 자신만의 주기를 정하면
                          냄새 관리가 훨씬 수월해집니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  {/* 섹션 4: 수납 & 정리 동선 */}
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
                      4. 수납과 정리가 쉬워지는 동선 꿀팁 5가지
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        정리는 “성격”이 아니라 “동선 설계”의 문제인 경우가 많습니다.
                        자주 쓰는 물건이 손이 잘 닿는 곳에 있고,
                        자주 안 쓰는 물건이 숨겨져 있으면
                        그 집은 자연스럽게 덜 어질러집니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① “쓰는 곳에 두기”가 정리의 첫 원칙
                        </Text>
                        <Text>
                          물티슈는 거실에, 가위는 서랍 깊숙한 곳에, 테이프는 방 구석에…
                          이렇게 흩어져 있으면
                          매번 찾으러 돌아다녀야 합니다.
                          **물건은 사용하는 위치 근처에 두는 것**만으로도
                          생활 동선이 훨씬 부드러워지고,
                          제자리에 놓는 습관도 자연스럽게 생깁니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 자주 쓰는 물건은 ‘허리~눈높이’에
                        </Text>
                        <Text>
                          수납할 때 자주 쓰는 물건일수록
                          **허리~눈높이 사이**에 넣는 것이 좋습니다.
                          너무 낮거나 높은 곳에 있으면
                          꺼내는 게 귀찮아지고,
                          결국 책상이나 상 위에 계속 올려두게 됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ “보관 상자”보다 “열린 바구니”를 먼저 생각하기
                        </Text>
                        <Text>
                          뚜껑이 있는 상자는 깔끔해 보이지만,
                          자주 여닫기 귀찮아서
                          결국 위에만 쌓이는 경우가 많습니다.
                          특히 자주 쓰는 물건은
                          **가볍게 넣었다 꺼낼 수 있는 열린 바구니**가 더 효율적입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ “보이는 수량”을 줄이면 청소도 줄어든다
                        </Text>
                        <Text>
                          같은 물건 수량이라도
                          바깥에 나와 있는 갯수가 적으면
                          집이 훨씬 덜 복잡해 보입니다.
                          예를 들어, 식탁 위 컵은 2개만,
                          소파 위 쿠션도 2~3개 정도만 두고,
                          나머지는 수납해 두는 식으로
                          **눈에 보이는 개수만 줄이는 것**도 좋은 전략입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ ‘나중에 정리할 박스’는 만들지 않기
                        </Text>
                        <Text>
                          이사 박스나 큰 수납함에
                          “일단 여기 다 넣어두고 나중에 정리해야지”라고 생각한 순간,
                          그 상자는 반년, 1년씩 방치되기 쉽습니다.
                          가능하면 **“지금 바로 위치를 정할 수 있는 것만 집 안으로 들이는 것”**이
                          정리 스트레스를 줄이는 가장 근본적인 방법입니다.
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
                      마무리: 집안일은 ‘완벽함’이 아니라 ‘지속 가능함’이 중요합니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        우리는 종종 인스타그램이나 유튜브 속
                        완벽하게 정리된 집을 보며
                        “나는 저렇게 못 할 것 같아”라고 생각하곤 합니다.
                        하지만 집안일은 보여주기 위한 퍼포먼스가 아니라,
                        **내가 지치지 않고 계속 이어갈 수 있는 방식**이 더 중요합니다.
                      </Text>
                      <Text>
                        오늘 소개한 20가지 중에서
                        모든 걸 다 실천할 필요도 없습니다.
                        **가장 부담이 덜 되는 것 하나만 골라**
                        이번 주에 한 번 해보세요.
                        그 작은 변화가,
                        다음 변화를 시작할 에너지를 만들어 줄지도 모릅니다.
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
                          🧽 오늘의 한 줄: “집안일의 목표는 완벽한 집이 아니라, 숨 쉴 수 있는 일상입니다.”
                        </Text>
                        <Text color="#495057">
                          내 삶의 리듬에 맞는 루틴을 찾는 것,  
                          그게 가장 현실적인 생활 꿀팁입니다.
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

export default Blog7;