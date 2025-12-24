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

const Blog11 = () => {
  const navigate = useNavigate();
  const title =
    '청소 루틴 설계 가이드: 매일·주간·월간 청소를 쉽게 만드는 현실 전략';
  const description =
    '매일 대청소는 불가능하지만, 루틴을 잘 설계하면 집은 충분히 깨끗하게 유지할 수 있습니다. MZ 라이프스타일에 맞춘 매일·주간·월간 청소 루틴 설계법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/11`;
  const ogImage = `${baseUrl}images/blog/blog11.png`;
  const publishedDate = '2024년 4월 10일';
  const author = '씩씩이';
  const category = '생활 꿀팁';
  const readTime = 9;

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
    datePublished: '2024-04-10',
    dateModified: '2024-04-10',
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
                  src="/images/blog/blog11.png"
                  alt="체크리스트와 청소 도구가 놓인 깔끔한 거실"
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
                      “청소는 하기 싫지만, 깨끗한 집은 포기할 수 없다.”
                    </Text>
                    <Text mb={4}>
                      많은 사람들이 청소를 떠올리면 ‘마음먹고 하루 날 잡아 하는 일’로 생각합니다.
                      그래서 평소에는 미루다가, 어느 날 집이 감당 안 될 정도로 어지러워졌을 때
                      몰아서 대청소를 하죠. 이 패턴이 반복되면 청소는 점점 더 부담스럽고,
                      “나는 원래 청소를 못 하는 사람”이라는 자책까지 따라옵니다.
                    </Text>
                    <Text mb={4}>
                      사실 **집을 깨끗하게 유지하는 핵심은 '완벽한 대청소'가 아니라
                      '가볍게 반복할 수 있는 루틴'**입니다.  
                      오늘 3시간 청소하는 것보다, 매일 10분씩 움직이는 편이
                      집 상태는 훨씬 더 좋아집니다.
                    </Text>
                    <Text mb={4}>
                      실제로 연구에 따르면, 작은 습관을 꾸준히 하는 것이 
                      큰 변화를 한 번 하고 포기하는 것보다 훨씬 효과적입니다. 
                      매일 10분씩 청소하는 습관을 만들면 집이 크게 어지러워지는 것을 방지할 수 있고, 
                      정신적 부담도 훨씬 적습니다. 또한 작은 성취감이 쌓이면서 
                      청소에 대한 부정적인 인식도 바뀌게 됩니다.
                    </Text>
                    <Text>
                      이 글에서는 **매일·주간·월간 청소 루틴을 나누어 설계**하는 방법과,
                      실제로 꾸준히 유지할 수 있는 현실적인 전략을 정리했습니다.
                      완벽주의 대신 "이 정도면 괜찮아"를 목표로 삼는 것이 포인트입니다. 
                      각 방법은 실제로 적용해본 사람들의 경험을 바탕으로 작성했으며, 
                      특히 바쁜 일상 속에서도 지속할 수 있는 방법들만 선별했습니다.
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

                  {/* 섹션 1 */}
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
                      1. 청소가 힘든 진짜 이유: 의지 부족이 아니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        청소를 힘들게 만드는 건 '의지'가 아니라,
                        <b> 작업 범위와 기준이 모호하기 때문</b>인 경우가 많습니다.
                        "청소해야지"라고 생각하면 머릿속에 동시에 떠오릅니다.
                        부엌, 욕실, 바닥, 먼지, 빨래, 정리…  
                        이 모든 걸 한 번에 처리하려다 보니 시작하기 전에 이미 지칩니다.
                      </Text>
                      <Text>
                        실제로 뇌과학 연구에 따르면, 선택의 폭이 넓을수록 
                        결정을 내리는 데 더 많은 에너지가 소모됩니다. 
                        "뭘 해야 하지?"라는 고민만으로도 에너지가 소모되어 
                        실제 청소를 시작하기 전에 이미 지치게 됩니다. 
                        따라서 명확한 기준과 범위를 정하는 것이 매우 중요합니다.
                      </Text>
                      <Text>
                        그래서 루틴 설계의 출발점은 **"무엇을 안 할 것인지 정하는 것"**입니다.
                        한 번에 집 전체를 바꾸려 하지 말고,
                        <b> 주기별로 해야 할 일을 나누고, 오늘 할 일의 범위를 줄이는 것</b>이 중요합니다.
                      </Text>
                      <Text>
                        또 한 가지 중요한 건 **'보이는 것부터 정리하는 습관'**입니다.
                        심리적으로 눈에 많이 들어오는 곳이 깨끗하면,
                        나머지 정리되지 않은 부분이 있어도 덜 지저분하게 느껴집니다.
                        그래서 루틴을 만들 때도 "눈에 잘 보이는 구역"을 우선순위에 두는 것이 좋습니다.
                      </Text>
                      <Text>
                        예를 들어, 거실 테이블이나 식탁 같은 평평한 공간만 깨끗하게 유지해도 
                        집 전체가 정돈된 느낌을 줍니다. 반대로 눈에 잘 보이지 않는 곳이 
                        조금 지저분해도 큰 문제가 되지 않습니다. 
                        이 원칙을 적용하면 청소의 부담을 크게 줄일 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* 섹션 2 */}
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
                      2. 매일 청소 루틴: 10~15분으로 집의 ‘기본선’ 지키기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        매일 하는 청소는 집을 반짝이게 만드는 것이 아니라,
                        **더 망가지지 않도록 방지하는 역할**에 가깝습니다.
                        아래는 하루 10~15분 정도로 돌릴 수 있는 기본 루틴 예시입니다.
                      </Text>

                      <Text fontWeight="600">① 거실·방: 바닥에 있는 것들 제자리 보내기</Text>
                      <Text>
                        • 옷, 가방, 택배 박스, 컵처럼 바닥이나 소파 위에 올라온 물건만 제자리를 찾아줍니다.  
                        • "먼지 제거"보다 **"물건 정리"를 우선**으로 두면 공간이 훨씬 정돈돼 보입니다.
                      </Text>
                      <Text>
                        바닥에 물건이 쌓이면 시각적으로 집이 매우 어수선해 보입니다. 
                        반대로 바닥만 깨끗하게 유지해도 집 전체가 정돈된 느낌을 줍니다. 
                        매일 저녁에 바닥에 있는 물건들을 제자리에 두는 습관만 만들어도 
                        집이 크게 어지러워지는 것을 방지할 수 있습니다. 
                        이 습관은 5분도 걸리지 않지만, 그 효과는 매우 큽니다.
                      </Text>

                      <Text fontWeight="600">② 부엌: 싱크대 리셋</Text>
                      <Text>
                        • 설거지를 당장 다 못 하겠다면,  
                          - 음식물 쓰레기 먼저 처리  
                          - 싱크대에 남은 음식 찌꺼기만 제거  
                          - 냄새 날만한 접시, 냄비만 최소한 미리 헹구기  
                        • "내일 아침에 맡고 싶지 않은 냄새"만 없애는 것이 포인트입니다.
                      </Text>
                      <Text>
                        싱크대는 부엌의 중심이며, 가장 자주 보는 공간입니다. 
                        싱크대가 지저분하면 부엌 전체가 지저분해 보이고, 
                        요리 의욕도 떨어집니다. 설거지를 다 하지 못하더라도 
                        음식물 쓰레기만 처리하고 찌꺼기만 제거하면 
                        냄새가 나지 않고 다음날 아침에 설거지하기도 쉬워집니다.
                      </Text>

                      <Text fontWeight="600">③ 욕실: 사용 후 간단 리셋</Text>
                      <Text>
                        • 샤워 후 물기 제거(와이퍼, 스퀴지)  
                        • 세면대에 남은 치약·비누 자국 물로 한번 헹구기  
                        • 배수구 덮개에 걸린 머리카락 제거하기  
                        <br />
                        이런 사소한 습관만으로도 곰팡이·물때를 크게 줄일 수 있습니다.
                      </Text>
                      <Text>
                        욕실은 습기가 많은 공간이므로 곰팡이가 생기기 쉽습니다. 
                        샤워 후 물기를 제거하고 환기를 시키면 곰팡이를 예방할 수 있습니다. 
                        또한 세면대의 치약이나 비누 자국은 물때가 되기 쉬우므로 
                        사용 후 바로 헹구는 습관을 만들면 청소 빈도를 크게 줄일 수 있습니다.
                      </Text>

                      <Text fontWeight="600">④ "나가는 동선"에 있는 물건 정리</Text>
                      <Text>
                        현관 근처, 문 옆 의자, 테이블은 가장 자주 눈에 들어오는 공간입니다.
                        이곳만 항상 깨끗하게 유지해도 "집이 너무 지저분하다"는 느낌이
                        확 줄어듭니다.
                      </Text>
                      <Text>
                        현관은 집의 첫인상을 결정하는 공간입니다. 
                        현관이 깨끗하면 집 전체가 깨끗해 보이고, 
                        현관이 지저분하면 집 전체가 지저분해 보입니다. 
                        현관 근처에 물건을 두지 않고, 신발을 정리하는 습관만 만들어도 
                        집의 분위기가 크게 달라집니다.
                      </Text>

                      <Text>
                        매일 청소의 핵심은 **깔끔함이 아니라 '리셋의 속도'**입니다.
                        어지러워졌을 때 금방 회복할 수 있느냐가 진짜 유지력입니다.
                      </Text>
                      <Text>
                        매일 청소는 집을 완벽하게 만드는 것이 아니라, 
                        어지러워지는 속도를 늦추는 것입니다. 
                        작은 습관을 꾸준히 하면 집이 크게 어지러워지는 것을 방지할 수 있고, 
                        큰 청소 없이도 집을 깨끗하게 유지할 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 3 */}
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
                      3. 주간 청소 루틴: 눈에 잘 안 보이는 곳 정리하기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        주간 청소는 ‘보이는 어지러움’이 아니라,
                        **보이지 않는 때와 먼지를 관리하는 레벨**입니다.
                        주 1회, 주말이나 비교적 여유 있는 요일을 하나 정해서
                        그날은 “집 관리 날”로 쓰는 것도 좋은 방법입니다.
                      </Text>

                      <Text fontWeight="600">① 바닥 청소(청소기 + 물걸레)</Text>
                      <Text>
                        • 평소엔 눈에 잘 띄지 않지만, 바닥 먼지는  
                          공기질과 알레르기, 발에 느껴지는 촉감에 영향을 줍니다.  
                        • 청소기를 돌린 뒤, 물걸레까지 하면 집 컨디션이 확 달라집니다.
                      </Text>
                      <Text>
                        바닥 먼지는 공기 중으로 날아올라 호흡기 건강에 영향을 미칩니다. 
                        특히 알레르기가 있는 사람이나 반려동물이 있는 집에서는 
                        정기적인 바닥 청소가 매우 중요합니다. 
                        청소기로 먼지를 제거한 후 물걸레로 마무리하면 
                        먼지가 다시 날아오르는 것을 방지할 수 있고, 
                        바닥이 깨끗해 보이는 효과도 있습니다.
                      </Text>

                      <Text fontWeight="600">② 욕실 집중 관리</Text>
                      <Text>
                        • 변기, 세면대, 샤워 부스, 배수구를 한 번에 정리하는 날로 잡습니다.  
                        • 곰팡이가 생기기 쉬운 실리콘 틈, 타일 사이를 이때 함께 점검합니다.
                      </Text>
                      <Text>
                        욕실은 습기와 세균이 많은 공간이므로 정기적인 집중 관리가 필요합니다. 
                        주 1회 욕실 전체를 청소하면 곰팡이와 세균을 예방할 수 있고, 
                        냄새 문제도 해결할 수 있습니다. 
                        특히 실리콘 틈이나 타일 사이는 곰팡이가 생기기 쉬운 곳이므로 
                        이 부분을 집중적으로 청소하는 것이 중요합니다.
                      </Text>

                      <Text fontWeight="600">③ 부엌: 가열대·후드·싱크대 주변</Text>
                      <Text>
                        • 가스레인지/인덕션 주변 기름기 닦기  
                        • 조리대·손잡이 소독  
                        • 음식물 쓰레기통, 일반 쓰레기통 전체 세척  
                        <br />
                        요리를 자주 하지 않더라도, 부엌은 냄새와 세균의 출발점이 되기 쉽습니다.
                      </Text>
                      <Text>
                        부엌은 음식을 다루는 공간이므로 위생 관리가 매우 중요합니다. 
                        가스레인지나 인덕션 주변의 기름기는 시간이 지나면 굳어서 
                        제거하기 어려워지고, 냄새의 원인이 됩니다. 
                        주 1회 부엌을 집중적으로 청소하면 위생을 유지할 수 있고, 
                        요리 의욕도 높아집니다.
                      </Text>

                      <Text fontWeight="600">④ 침구 정리</Text>
                      <Text>
                        • 이불·베개 커버 교체  
                        • 매트리스 먼지 제거(청소기, 침구 전용 브러시)  
                        <br />
                        사람은 수면 중에도 땀과 각질을 배출합니다.
                        주 1회 침구를 갈아주는 것만으로도 수면의 질이 확연히 달라질 수 있습니다.
                      </Text>
                      <Text>
                        침구는 우리가 하루 중 가장 오래 접촉하는 물건입니다. 
                        침구에 쌓인 땀, 각질, 먼지는 알레르기나 피부 트러블의 원인이 될 수 있습니다. 
                        주 1회 침구를 교체하고 매트리스를 청소하면 
                        수면의 질이 향상되고 건강도 개선됩니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 2: 중간 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-TuJyMLJV5hB5UXiO"
                    adWidth={320}
                    adHeight={100}
                  />

                  {/* 섹션 4 */}
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
                      4. 월간 청소 루틴: 구조를 정리하는 ‘리셋 타임’
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        월간 청소는 “집의 구조를 리셋하는 타이밍”입니다.
                        매일·주간 청소에서는 손대지 못했던
                        **수납, 비우기, 재배치**가 이 레벨에서 다뤄지면 좋습니다.
                      </Text>

                      <Text fontWeight="600">① 옷장·서랍 정리</Text>
                      <Text>
                        • 한 번에 모든 옷장을 뒤집기보다,  
                          - 이번 달: 상의 서랍  
                          - 다음 달: 하의 서랍  
                          처럼 세분화해서 나눠 하는 것이 좋습니다.  
                        • '6개월 이상 안 입은 옷'은 앞으로도 입지 않을 확률이 매우 높습니다.
                      </Text>
                      <Text>
                        옷장 정리는 한 번에 모든 것을 하려고 하면 부담이 커서 
                        시작하기 어려워집니다. 대신 한 달에 한 서랍씩 정리하면 
                        부담 없이 꾸준히 할 수 있습니다. 
                        또한 6개월 이상 입지 않은 옷은 앞으로도 입을 가능성이 매우 낮으므로 
                        과감하게 정리하는 것이 좋습니다. 
                        옷장이 가벼워지면 옷을 찾기도 쉬워지고, 관리도 쉬워집니다.
                      </Text>

                      <Text fontWeight="600">② 냉장고·식재료 정리</Text>
                      <Text>
                        • 유통기한 지난 식품, 한 번 쓰고 잊은 소스 정리  
                        • 냉장·냉동 내부 선반을 한 번 비우고 닦는 날로 정하기  
                        <br />
                        냉장고는 "열 때마다 의욕을 떨어뜨리는 공간"이 되기 쉽기 때문에,
                        한 달에 한 번이라도 리셋해 주면 생활 리듬에 좋은 영향을 줍니다.
                      </Text>
                      <Text>
                        냉장고는 음식을 보관하는 공간이므로 위생 관리가 매우 중요합니다. 
                        유통기한이 지난 식품이나 오래된 소스는 냄새의 원인이 되고, 
                        세균이 번식할 수 있습니다. 
                        한 달에 한 번 냉장고를 비우고 청소하면 위생을 유지할 수 있고, 
                        무엇이 있는지 파악하여 식품 낭비도 줄일 수 있습니다.
                      </Text>

                      <Text fontWeight="600">③ 창틀·블라인드·커튼</Text>
                      <Text>
                        • 창틀 먼지는 실외 먼지 + 실내 먼지가 만나는 지점이라  
                          생각보다 빨리 더러워집니다.  
                        • 블라인드, 커튼, 창틀을 같이 관리하는 날로 잡으면 효율적입니다.
                      </Text>
                      <Text>
                        창틀은 실외와 실내 먼지가 만나는 지점이므로 
                        생각보다 빨리 더러워집니다. 
                        창틀 먼지는 공기 중으로 날아올라 호흡기 건강에 영향을 미칠 수 있으므로 
                        정기적인 청소가 필요합니다. 
                        블라인드와 커튼도 먼지가 쌓이기 쉬우므로 
                        창틀 청소와 함께 관리하면 효율적입니다.
                      </Text>

                      <Text fontWeight="600">④ "안 보이는 곳" 점검</Text>
                      <Text>
                        • 침대 밑, 소파 뒤, 냉장고 옆, TV 뒤처럼  
                          평소 청소기조차 잘 닿지 않는 공간을 이때 한 번씩 체크합니다.  
                        • 먼지뿐 아니라, 벌레·곰팡이·누수 흔적 등을 빨리 발견할 수 있습니다.
                      </Text>
                      <Text>
                        안 보이는 곳은 평소 청소를 하지 않아 먼지가 쌓이고, 
                        벌레나 곰팡이가 생기기 쉬운 공간입니다. 
                        한 달에 한 번씩 이런 공간을 점검하면 
                        문제를 빨리 발견하여 해결할 수 있습니다. 
                        특히 누수 흔적이나 곰팡이는 조기에 발견하면 
                        큰 손해를 방지할 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 5 */}
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
                      5. 청소 루틴을 ‘계속’ 가져가는 현실적인 요령
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        루틴은 “한 번 잘 하는 것”보다 **“지치지 않고 계속하는 것”**이 진짜 중요합니다.
                        아래 팁들을 참고해, 내 생활 패턴에 맞게 루틴을 다듬어 보세요.
                      </Text>

                      <Text fontWeight="600">① 기준을 낮게 잡기</Text>
                      <Text>
                        "오늘은 싱크대만", "오늘은 바닥만", "오늘은 옷걸이만"처럼
                        너무 작은 목표부터 시작해야 루틴이 오래 갑니다.
                      </Text>
                      <Text>
                        작은 목표는 달성하기 쉽고, 성취감을 주어 
                        다음에도 계속하고 싶게 만듭니다. 
                        반대로 큰 목표는 달성하기 어려워 포기하게 만들고, 
                        실패 경험이 쌓이면서 청소에 대한 부정적인 인식이 강해집니다. 
                        작은 목표부터 시작하여 점진적으로 확장하는 것이 
                        루틴을 오래 유지하는 핵심입니다.
                      </Text>

                      <Text fontWeight="600">② '시간'을 정하고, 그 안에서만 하기</Text>
                      <Text>
                        "오늘 15분만 청소한다"라고 정해두면,  
                        청소가 삶 전체를 잠식하는 느낌이 줄어듭니다.
                        알람을 맞추고 그 시간이 끝나면 깔끔하게 멈추는 것도 도움이 됩니다.
                      </Text>
                      <Text>
                        시간을 정해두면 청소가 끝없는 작업이 아니라 
                        명확한 범위를 가진 작업이 됩니다. 
                        알람을 맞추고 그 시간이 끝나면 멈추면 
                        "아직 더 해야 하나?"라는 부담 없이 청소를 마칠 수 있습니다. 
                        이렇게 하면 청소에 대한 부정적인 인식이 줄어들고, 
                        다음에도 계속하고 싶게 됩니다.
                      </Text>

                      <Text fontWeight="600">③ 나만의 청소 플레이리스트 만들기</Text>
                      <Text>
                        음악은 행동에 리듬을 만들어 줍니다.
                        특정 플레이리스트를 틀면 자동으로 청소 모드가 되는 상태를
                        만들어보는 것도 좋은 전략입니다.
                      </Text>
                      <Text>
                        음악은 우리의 감정과 행동을 강력하게 자극합니다. 
                        청소용 플레이리스트를 만들면 그 음악을 들을 때마다 
                        자동으로 청소 모드로 전환되어 루틴을 유지하기가 쉬워집니다. 
                        또한 음악을 들으며 청소하면 시간이 빨리 가고, 
                        즐겁게 청소할 수 있습니다.
                      </Text>

                      <Text fontWeight="600">④ "눈에 잘 보이는 전용 바구니" 사용</Text>
                      <Text>
                        당장 자리를 정하지 못한 물건은 전부 한 바구니에 담아두는 것도
                        하나의 방법입니다.  
                        "여기 안에만 안 보이면 일단 괜찮다"라는 기준을 만드는 것이죠.
                        나중에 여유가 생기면 그 바구니 하나만 정리하면 되니, 부담도 줄어듭니다.
                      </Text>
                      <Text>
                        이 방법은 "임시 수납" 전략입니다. 
                        모든 물건을 즉시 제자리에 두는 것은 어려울 수 있지만, 
                        한 바구니에 모아두면 시각적으로는 깨끗해 보이고, 
                        나중에 여유가 생겼을 때 한 번에 정리할 수 있습니다. 
                        이렇게 하면 청소의 부담을 크게 줄일 수 있습니다.
                      </Text>

                      <Text fontWeight="600">⑤ 나에게 맞는 '게으른 방식' 찾기</Text>
                      <Text>
                        로봇청소기를 돌려두고, 그 사이 작은 정리를 한다든지,  
                        샤워 후 욕실 바닥을 30초만 밀어준다든지,
                        "어차피 하는 행동에 10초씩만 더 얹는 방식"은
                        게으른 사람도 꾸준히 할 수 있는 좋은 전략입니다.
                      </Text>
                      <Text>
                        이 방법은 "기존 행동에 청소를 결합"하는 전략입니다. 
                        별도의 시간을 내지 않고, 어차피 하는 행동에 
                        작은 청소 행동을 추가하면 부담 없이 꾸준히 할 수 있습니다. 
                        예를 들어, 샤워 후 물기를 제거하거나, 
                        로봇청소기를 돌리는 동안 작은 정리를 하는 것처럼 
                        기존 루틴에 자연스럽게 청소를 결합하는 것이 효과적입니다.
                      </Text>
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
                      마무리: 청소는 ‘완벽’이 아니라 ‘유지’의 기술
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        깨끗한 집은 "대단한 의지"가 있는 사람만 가질 수 있는 결과가 아닙니다.
                        **조금 덜어내고, 조금 나누고, 조금씩 반복하는 사람**이
                        더 오래, 덜 지치고 유지할 수 있습니다.
                      </Text>
                      <Text>
                        실제로 청소 루틴을 가진 사람들의 공통점은 
                        완벽하게 하려고 하지 않는다는 것입니다. 
                        대신 작은 습관을 꾸준히 하는 것에 집중하며, 
                        이 작은 습관들이 쌓여 큰 변화를 만들어냅니다. 
                        작은 변화가 쌓이면 어느새 집이 깨끗하게 유지되는 것을 경험할 수 있습니다.
                      </Text>
                      <Text>
                        오늘 당장 집 전체 루틴을 만들 필요는 없습니다.
                        매일 루틴에서 한 가지, 주간 루틴에서 한 가지,
                        월간 루틴에서 한 가지만 골라
                        이번 달에 시험해 본다는 마음이면 충분합니다.
                      </Text>
                      <Text>
                        모든 루틴을 한 번에 적용하려고 하면 부담이 커서 
                        오히려 지속하기 어려워집니다. 
                        대신 하나씩 시도해보고, 자신에게 맞는 것을 찾아 
                        점진적으로 추가하는 것이 좋습니다. 
                        작은 변화가 쌓이면 어느새 자신만의 완벽한 청소 루틴이 만들어질 것입니다.
                      </Text>

                      {/* 광고 3: 마지막 섹션 전 – 카카오 다이렉트 */}
                      <KakaoAdDirect
                        adUnitId="DAN-qRlpXvY15cfMPpl0"
                        adWidth={300}
                        adHeight={250}
                      />

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
                          🧽 오늘의 한 줄: “청소는 하루를 바꾸는 일이 아니라, 일상을 조금씩 정리하는 일”
                        </Text>
                        <Text color="#495057">
                          완벽하게 하지 못해도 괜찮습니다.
                          어제보다 1% 덜 어지럽게 만드는 것,
                          그게 꾸준함의 힘이고 루틴의 진짜 의미입니다.
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

export default Blog11;