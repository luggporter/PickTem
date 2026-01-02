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
  Link,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { FiCalendar, FiUser } from 'react-icons/fi';
import MobileHeader from '../../MobileHeader';
import AdSense from '../../AdSense';
import { KakaoAdDirect } from '../../../pages/Home';
import { articles } from '../blogList';

const Blog3 = () => {
  const navigate = useNavigate();
  const title = '겨울 난방비 아끼는 현실적인 방법 12가지: 덜 틀고도 덜 춥게 사는 법';
  const description =
    '온도만 낮추는 절약법이 아니라, 집 구조·습도·동선까지 고려해 실제 체감 온도를 올리면서 난방비를 줄이는 12가지 현실적인 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/3`;
  const ogImage = `${baseUrl}images/blog/blog3.png`;

  const publishedDate = '2024년 2월 5일';
  const author = '씩씩이';
  const category = '생활 꿀팁';
  const readTime = 9;

  // 개선된 구조화된 데이터
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: '씩아픽템',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}favicon.png`,
      },
    },
    image: [ogImage],
    datePublished: '2024-02-05',
    dateModified: '2024-02-05',
    articleSection: category,
    keywords: `${category}, 난방비 절약, 생활 꿀팁`,
    wordCount: readTime * 250,
  };

  // Breadcrumb 스키마 추가
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: '홈',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '메거진',
        item: `${baseUrl}magazine`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: url,
      },
    ],
  };

  return (
    <>
      {/* SEO 메타태그 */}
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 난방비 절약, 생활 꿀팁, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-02-05" />
        <meta property="article:modified_time" content="2024-02-05" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="난방비 절약" />
        <meta property="article:tag" content="생활 꿀팁" />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="씩아픽템" />
        <meta property="og:locale" content="ko_KR" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* 구조화된 데이터 - Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
        {/* 구조화된 데이터 - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
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
                  src="/images/blog/blog3.png"
                  alt="따뜻한 조명과 담요가 놓인 겨울 거실"
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
                  spacing={8}
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
                      “온도는 같은데, 어떤 집은 더 따뜻할까?”
                    </Text>
                    <Text mb={4}>
                      겨울만 되면 난방비 고지서를 열어보는 일이 무서워집니다.
                      똑같이 22도를 맞춰 두었는데, 어떤 집은 포근하게 느껴지고
                      어떤 집은 계속 춥기만 합니다. 단순히 온도 숫자만 높이는
                      방식으로는 체감 온도와 난방비 사이의 간극을 줄이기
                      어렵습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 실내에서 느끼는 "따뜻함"은 온도계 숫자뿐 아니라
                      습도, 공기 흐름, 바닥과 벽에서 올라오는 냉기, 조명의 색감,
                      우리가 어디에 얼마나 오래 앉아 있는지 같은 생활 패턴까지
                      함께 영향을 줍니다. 그래서 난방을 조금만 틀어도 덜 춥게
                      느끼는 집은 구조와 습관을 잘 설계해 둔 경우가 많습니다.
                    </Text>
                    <Text mb={4}>
                      예를 들어, 같은 20도라도 습도가 30%인 집과 50%인 집은 
                      체감 온도가 2~3도 차이가 납니다. 또한 바닥에서 올라오는 
                      냉기는 우리 몸의 체온을 빠르게 빼앗기 때문에, 바닥만 따뜻하게 
                      해도 보일러 온도를 1~2도 낮춰도 같은 따뜻함을 느낄 수 있습니다. 
                      이런 원리를 이해하고 적용하면, 단순히 온도를 낮추는 것보다 
                      훨씬 효과적으로 난방비를 절약할 수 있습니다.
                    </Text>
                    <Text>
                      이 글에서는 "난방 끄고 참으세요" 같은 비현실적인 조언이
                      아니라, 실제로 집에서 바로 적용해볼 수 있는
                      난방비 절약 방법 12가지를 정리했습니다. 온도는 크게
                      올리지 않아도, 체감 온도는 더 따뜻해지도록 돕는
                      생활 팁들입니다. 각 방법은 실제로 적용해본 사람들의 경험을 
                      바탕으로 작성했으며, 특히 원룸이나 작은 집에서도 효과가 
                      입증된 방법들만 선별했습니다.
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
                      1. 온도보다 중요한 건 ‘틈 막기’와 ‘동선 잡기’
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비를 줄이는 가장 단순한 공식은
                        “새는 곳을 막고, 필요한 곳만 따뜻하게 하는 것”입니다.
                        보일러 온도를 낮추기 전에, 집 안에 어디로 찬 공기가
                        들어오는지부터 체크해보는 것이 좋습니다.
                      </Text>
                      <Text>
                        가장 자주 열고 닫는 곳은 현관문과 창문입니다.
                        현관 아래 틈, 발코니와 연결된 미닫이문, 오래된
                        창틀 주변에서 찬 바람이 계속 들어오면 보일러가
                        쉴 틈 없이 돌아가게 됩니다. 문틈용 몰딩 테이프,
                        바람막이 쿠션, 문 아래 막대형 바람막이만 잘 활용해도
                        실내 온도 유지에 큰 도움이 됩니다.
                      </Text>
                      <Text>
                        틈새를 막을 때는 먼저 어디로 바람이 들어오는지 확인하는 것이 중요합니다. 
                        손을 틈새에 대보면 찬 바람이 느껴지는 곳이 바로 새는 곳입니다. 
                        특히 현관문 아래 틈은 문 아래에 바람막이 스트립을 붙이거나, 
                        두꺼운 천으로 만든 문풍을 사용하면 효과적입니다. 
                        창문 틈새는 문틈용 몰딩 테이프나 실리콘 시일링을 사용하면 
                        냉기 유입을 크게 줄일 수 있습니다. 이렇게 틈새를 막는 것만으로도 
                        난방비를 10~15% 절약할 수 있다는 연구 결과도 있습니다.
                      </Text>
                      <Text>
                        또 하나 중요한 건 동선입니다. 집 전체를 다 따뜻하게
                        만들 필요는 없습니다. 평소에 가장 오래 머무는 공간이
                        어디인지 생각해보세요. 침대, 책상, 소파 주변에
                        발매트·러그·담요를 집중 배치해서 "따뜻한 존"을
                        만드는 것이 효율적입니다.
                      </Text>
                      <Text>
                        "따뜻한 존"을 만들 때는 단순히 러그를 까는 것만으로는 부족합니다. 
                        바닥에서 올라오는 냉기를 막기 위해서는 최소 1cm 이상의 두께를 가진 
                        러그나 카펫이 필요합니다. 또한 러그 아래에 단열 매트를 깔아두면 
                        바닥 냉기를 더 효과적으로 차단할 수 있습니다. 
                        특히 원룸이나 작은 집에서는 침대와 책상 주변만 따뜻하게 만들고, 
                        나머지 공간은 상대적으로 낮은 온도를 유지하는 "존 난방" 방식이 
                        매우 효율적입니다.
                      </Text>
                      <Text>
                        거실 한 가운데보다 벽면과 창가 근처는 상대적으로
                        더 차갑습니다. 소파나 책상을 창 측에 딱 붙여두었다면,
                        벽에서 조금만 떼어놓고, 가능한 한 실내 중심부 쪽에
                        앉는 동선으로 바꿔보는 것도 체감 온도를 올리는 데
                        도움이 됩니다.
                      </Text>
                      <Text>
                        벽면과 창가 근처가 차가운 이유는 벽 자체가 외부 공기와 접촉하여 
                        열을 빼앗기기 때문입니다. 가구를 벽에서 최소 5~10cm 떼어두면 
                        공기 순환이 원활해지고, 벽의 냉기가 직접 전달되는 것을 막을 수 있습니다. 
                        또한 창가에 두꺼운 커튼을 달아두면 창문을 통한 열 손실을 크게 줄일 수 있습니다. 
                        특히 밤에는 커튼을 완전히 닫아 외부 냉기를 차단하는 것이 중요합니다.
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
                      2. 체감 온도를 올리는 숨은 요소들: 습도, 바닥, 조명
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        같은 22도라도 어떤 집은 춥고, 어떤 집은 포근한 이유는
                        “체감 온도”를 만드는 요소가 다르기 때문입니다. 그중
                        가장 중요한 것이 습도와 바닥입니다.
                      </Text>
                      <Text fontWeight="600">① 습도 40~60% 맞추기</Text>
                      <Text>
                        실내 공기가 건조하면 피부가 당기고 목이 칼칼할 뿐
                        아니라, 실제 온도보다 훨씬 더 춥게 느껴집니다.
                        가습기를 사용하거나, 젖은 수건을 널어두거나,
                        빨래를 실내에서 말리는 것만으로도 습도를
                        어느 정도 유지할 수 있습니다.
                      </Text>
                      <Text>
                        습도를 올리는 가장 경제적인 방법은 빨래를 실내에서 말리는 것입니다. 
                        특히 작은 집에서는 빨래를 말리면서 습도가 올라가고, 
                        동시에 빨래가 마르는 과정에서 수분이 증발하면서 실내 온도도 약간 올라갑니다. 
                        가습기를 사용할 때는 습도계를 함께 두고 40~60% 사이를 유지하는 것이 좋습니다. 
                        습도가 너무 높으면(70% 이상) 곰팡이가 생길 수 있고, 너무 낮으면(30% 이하) 
                        건조해서 불쾌감이 커집니다. 습도가 적절하면 같은 온도에서도 훨씬 따뜻하게 느껴지며, 
                        실제로 체감 온도가 2~3도 올라간 효과를 볼 수 있습니다.
                      </Text>
                      <Text fontWeight="600">② 발이 따뜻해야 몸이 덜 춥다</Text>
                      <Text>
                        바닥에서 올라오는 냉기는 우리가 생각하는 것보다
                        강력합니다. 두꺼운 러그나 카펫, 발매트를 깔아두면
                        보일러 온도를 1~2도 낮춰도 체감 온도는 비슷하게
                        유지되기도 합니다. 특히 책상 아래, 침대 옆, 소파 앞
                       처럼 오래 머무는 자리부터 챙겨보세요.
                      </Text>
                      <Text>
                        발이 차가우면 몸 전체가 차가워지는 이유는 우리 몸의 혈액 순환 때문입니다. 
                        발에서 차가운 공기가 올라오면 혈관이 수축하고, 이로 인해 전신의 혈액 순환이 
                        느려지면서 체온이 떨어집니다. 따라서 발을 따뜻하게 유지하는 것은 
                        난방 효율을 높이는 핵심입니다. 러그나 카펫을 선택할 때는 두께뿐만 아니라 
                        재질도 중요합니다. 양모나 플리스 소재는 공기층을 만들어 단열 효과가 좋고, 
                        합성 섬유보다 보온성이 뛰어납니다. 또한 전기 발매트나 전기 카펫을 사용하면 
                        바닥을 직접 따뜻하게 만들 수 있어 매우 효과적입니다.
                      </Text>
                      <Text fontWeight="600">③ 조명 색만 바꿔도 마음이 따뜻해진다</Text>
                      <Text>
                        형광색에 가까운 쿨톤 조명은 공간을 차갑게 보이게
                        만듭니다. 반대로 3000K 전후의 노란빛(전구색) 조명은
                        시각적으로 공간을 훨씬 따뜻하게 느껴지게 합니다.
                        실제 온도를 높이지 않고도, 조명 색만 바꾸는 것만으로
                        "아늑하다"는 느낌을 크게 올릴 수 있습니다.
                      </Text>
                      <Text>
                        조명의 색온도(Kelvin)는 우리의 감각에 큰 영향을 미칩니다. 
                        낮은 색온도(2700~3000K)는 따뜻한 느낌을 주고, 높은 색온도(5000K 이상)는 
                        차갑고 밝은 느낌을 줍니다. 겨울에는 3000K 전후의 전구색 조명을 사용하면 
                        같은 온도에서도 훨씬 따뜻하게 느껴집니다. LED 전구를 교체할 때는 
                        색온도를 확인하고, 가능하면 조명의 밝기를 조절할 수 있는 디머 스위치를 
                        설치하는 것도 좋습니다. 밝기를 낮추면 전기 사용량도 줄고, 
                        더욱 아늑한 분위기를 만들 수 있습니다.
                      </Text>
                      <Text>
                        밤에는 전체등 대신 스탠드, 무드등처럼 낮은 조도를
                        가진 조명을 켜두면 눈 피로도 줄고, 전기 사용량도
                        자연스럽게 줄어듭니다. 또한 침대나 소파 옆에 작은 조명을 두면 
                        필요한 곳만 밝히면서도 공간 전체가 따뜻해 보이는 효과를 얻을 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 두 번째 AdSense 블록 제거 (상단에만 배치) */}

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
                      3. 난방 설계를 바꾸는 습관 5가지
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비 절약은 “한 번의 대공사”보다는 “매일의 작은
                        습관”이 더 큰 영향을 미칩니다. 보일러 조작법만
                        조금 바꿔도 요금이 달라질 수 있습니다.
                      </Text>

                      <Text fontWeight="600">① ON/OFF 대신 '유지'하기</Text>
                      <Text>
                        너무 춥다고 보일러를 확 올렸다가, 답답하다고 끄는
                        방식은 에너지 소모가 큽니다. 덜 춥게 느껴지는
                        온도(예: 20~22도)에서 계속 유지하는 편이 연비가 더
                        좋을 때가 많습니다. 집을 비우는 시간이 길지
                        않다면, 완전 OFF보다는 저온 유지가 더 효율적일
                        수 있습니다.
                      </Text>
                      <Text>
                        보일러를 자주 켜고 끄는 것보다 일정한 온도를 유지하는 것이 
                        더 효율적인 이유는 보일러가 처음 가동될 때 가장 많은 에너지를 
                        소비하기 때문입니다. 집을 완전히 식혔다가 다시 데우는 것보다, 
                        약간 낮은 온도(18~20도)로 유지하면서 필요할 때만 조금 올리는 것이 
                        전반적으로 더 적은 에너지를 사용합니다. 특히 외출 시간이 4시간 이내라면 
                        보일러를 끄는 것보다 저온 유지 모드를 사용하는 것이 좋습니다. 
                        다만 외출 시간이 하루 이상이라면 완전히 끄는 것이 더 경제적입니다.
                      </Text>

                      <Text fontWeight="600">② 외출 모드·예약 기능 적극 활용</Text>
                      <Text>
                        출근·퇴근 시간이 일정하다면, 퇴근 30분~1시간 전에
                        켜지도록 예약해 두는 것이 좋습니다. 집에 도착해서
                        "너무 춥다" 싶을 정도면 다시 세게 틀게 되고,
                        그만큼 요금이 올라갑니다.
                      </Text>
                      <Text>
                        최신 보일러나 스마트 온도 조절기는 예약 기능과 외출 모드를 제공합니다. 
                        예약 기능을 사용하면 퇴근 30분~1시간 전에 자동으로 난방이 켜져서 
                        집에 도착했을 때 적당한 온도가 유지됩니다. 외출 모드는 집에 아무도 없을 때 
                        난방을 최소한으로 유지하는 기능으로, 일반 모드보다 20~30% 에너지를 절약할 수 있습니다. 
                        또한 스마트폰 앱으로 원격 제어가 가능한 보일러라면, 예상보다 일찍 집에 도착했을 때 
                        미리 켜둘 수 있어 매우 편리합니다.
                      </Text>

                      <Text fontWeight="600">③ 샤워·요리 직후의 온기를 놓치지 않기</Text>
                      <Text>
                        샤워나 요리를 하면 자연스럽게 따뜻한 공기와 습기가
                        생깁니다. 이때 욕실 문이나 주방과 거실 사이 문을
                        잠깐 열어두면, 공기 순환과 습도 유지에 도움이
                        됩니다. 다만 결로나 곰팡이를 막기 위해 이후에
                        한 번 더 환기는 꼭 해주세요.
                      </Text>
                      <Text>
                        샤워 후 욕실의 따뜻한 공기와 습기는 실내 온도를 올리고 습도를 높이는 
                        자연스러운 방법입니다. 샤워 직후 욕실 문을 10~15분 정도 열어두면 
                        따뜻한 공기가 다른 공간으로 퍼져나가 실내 온도가 1~2도 올라갈 수 있습니다. 
                        요리를 할 때도 가스레인지나 오븐에서 나오는 열기를 활용할 수 있습니다. 
                        다만 이 방법을 사용할 때는 결로와 곰팡이를 주의해야 합니다. 
                        욕실이나 주방의 습기가 너무 높아지면 벽이나 천장에 결로가 생기고, 
                        이는 곰팡이의 원인이 됩니다. 따라서 따뜻한 공기를 활용한 후에는 
                        반드시 환기를 해서 습기를 제거하는 것이 중요합니다.
                      </Text>

                      <Text fontWeight="600">④ 커튼과 창문을 '열고 닫는 타이밍'</Text>
                      <Text>
                        햇빛이 잘 드는 집이라면, 낮에는 커튼을 활짝 열어
                        자연광으로 실내 온도를 조금이라도 올려두는 것이 좋습니다.
                        해가 지기 시작하면 창밖 온도가 빠르게 떨어지므로,
                        그 전에 커튼을 닫아 창을 한 번 더 막아주는 것이
                        열 손실을 줄이는 데 도움 됩니다.
                      </Text>
                      <Text>
                        태양열은 겨울에 무료로 실내 온도를 올릴 수 있는 가장 좋은 방법입니다. 
                        특히 남향 창문이 있는 집에서는 낮 시간대에 커튼을 완전히 열어 
                        태양열을 최대한 받아들이는 것이 중요합니다. 햇빛이 직접 들어오는 시간 동안은 
                        실내 온도가 2~3도 올라갈 수 있으며, 이는 보일러를 덜 틀어도 되는 시간을 
                        만들어줍니다. 해가 지기 시작하면(보통 오후 4~5시경) 창밖 온도가 급격히 떨어지고, 
                        창문을 통한 열 손실이 커지기 시작합니다. 이때 두꺼운 커튼을 닫아 
                        창문을 단열막처럼 활용하면 열 손실을 크게 줄일 수 있습니다. 
                        특히 이중 커튼이나 단열 커튼을 사용하면 효과가 더욱 좋습니다.
                      </Text>

                      <Text fontWeight="600">⑤ 혼자 사는 집은 '존 난방'으로</Text>
                      <Text>
                        원룸이라도 항상 머무는 위치가 정해져 있습니다.
                        모든 공간을 똑같이 따뜻하게 만들기보다, 앉아 있는
                        자리 위주로 담요, 무릎담요, 전기 온열 용품 등을
                        병행하는 식으로 "미니 존 난방"을 설계하면 난방비를
                        더 효율적으로 쓸 수 있습니다.
                      </Text>
                      <Text>
                        존 난방은 집 전체를 따뜻하게 만드는 대신, 실제로 사용하는 공간만 
                        따뜻하게 만드는 방식입니다. 예를 들어, 책상에서 일할 때는 책상 아래에 
                        전기 발매트를 두고, 소파에서 쉴 때는 무릎담요와 전기 담요를 사용하는 것입니다. 
                        이렇게 하면 보일러 온도를 낮춰도(18~19도) 체감 온도는 충분히 따뜻하게 느껴집니다. 
                        전기 발매트나 전기 담요는 전력 소비가 보일러보다 훨씬 적어서 
                        경제적이며, 필요한 곳만 선택적으로 따뜻하게 만들 수 있어 매우 효율적입니다. 
                        특히 원룸이나 작은 집에서는 이 방식이 매우 효과적이며, 
                        난방비를 30~40% 절약할 수 있습니다.
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
                      마무리: 숫자는 조금 낮추고, 온기는 조금 더 높이기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비를 아낀다는 건 단순히 "덜 트는 것"이 아니라,
                        "같은 비용으로 더 따뜻하게 사는 방법"을 찾는 일에
                        가깝습니다. 집 구조와 동선을 다시 보고, 틈을 막고,
                        습도와 조명을 조정하는 것만으로도 체감 온도는
                        분명 달라질 수 있습니다.
                      </Text>
                      <Text>
                        실제로 오늘 소개한 방법들을 적용해본 사람들의 경험을 보면, 
                        틈새 막기만으로도 난방비를 10~15% 절약할 수 있고, 
                        습도 조절과 바닥 단열을 함께 적용하면 20~30% 절약이 가능합니다. 
                        특히 작은 집이나 원룸에서는 "존 난방" 방식을 적용하면 
                        난방비를 절반으로 줄일 수 있다는 사례도 있습니다. 
                        중요한 것은 한 번에 모든 것을 바꾸려 하지 말고, 
                        자신의 생활 패턴에 맞는 방법부터 하나씩 적용해보는 것입니다.
                      </Text>
                      <Text>
                        오늘 소개한 방법 중에서 한 번에 모든 걸 바꿀 필요는
                        없습니다. 현관 틈 막기, 발 밑 러그 깔기, 조명 색
                        바꾸기처럼 가장 가볍게 시작할 수 있는 것부터
                        골라보세요. 작은 변화가 쌓이면, 다음 달 난방비
                        고지서를 열어보는 마음이 조금은 덜 무거워질지도
                        모릅니다.
                      </Text>
                      <Text>
                        또한 난방비 절약은 단기적인 효과뿐만 아니라 장기적인 관점에서도 중요합니다. 
                        에너지를 절약하는 것은 환경 보호에도 도움이 되고, 
                        집의 단열과 구조를 개선하면 여름 냉방비 절약에도 도움이 됩니다. 
                        특히 틈새를 막고 단열을 개선하는 작업은 한 번만 해두면 
                        매년 반복되는 효과를 얻을 수 있어 매우 경제적입니다. 
                        이번 겨울에 작은 변화를 시작해서, 내년 겨울에는 더욱 따뜻하고 
                        경제적인 집을 만들어보세요.
                      </Text>
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
                          🔥 오늘의 한 줄: “춥지 않게 아끼는 게 진짜 절약”
                        </Text>
                        <Text color="#495057">
                          무작정 참으면서 아끼기보다는, 나에게 맞는
                          난방 습관과 집 구조를 찾는 것이 더 오래가는
                          절약입니다. 이번 겨울에는 숫자는 조금 낮추고,
                          온기는 조금 더 높게 느껴지는 집을 함께 만들어봐요.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  {/* 광고 3: 하단 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-qRlpXvY15cfMPpl0"
                    adWidth={300}
                    adHeight={250}
                  />
                </Stack>
              </Box>

              {/* 관련 블로그 추천 섹션 - SEO를 위한 내부 링크 강화 */}
              <Divider borderColor="gray.200" />
              
              <Box as="section">
                <Heading
                  as="h2"
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight="700"
                  mb={6}
                  color="#1a2e1a"
                >
                  관련 글 더보기
                </Heading>
                <VStack spacing={4} align="stretch">
                  {articles
                    .filter(article => 
                      article.id !== '3' && 
                      (article.category === category || 
                       article.category?.includes('생활') ||
                       article.category?.includes('꿀팁'))
                    )
                    .slice(0, 3)
                    .map((article) => (
                      <Box
                        key={article.id}
                        as={RouterLink}
                        to={`/magazine/${article.id}`}
                        bg="white"
                        borderRadius="16px"
                        overflow="hidden"
                        boxShadow="sm"
                        transition="all 0.3s"
                        _hover={{
                          boxShadow: 'md',
                          transform: 'translateY(-2px)',
                        }}
                        textDecoration="none"
                        display="flex"
                        flexDirection={{ base: 'column', md: 'row' }}
                      >
                        <Box
                          w={{ base: '100%', md: '200px' }}
                          h={{ base: '180px', md: 'auto' }}
                          bgImage={`url(${article.thumbnailUrl})`}
                          bgSize="cover"
                          bgPosition="center"
                          flexShrink={0}
                        />
                        <Box p={5} flex={1}>
                          <Badge
                            colorScheme="brand"
                            borderRadius="6px"
                            px={2}
                            py={1}
                            fontSize="10px"
                            fontWeight="700"
                            mb={2}
                            w="fit-content"
                          >
                            {article.category}
                          </Badge>
                          <Heading
                            as="h3"
                            fontSize={{ base: 'lg', md: 'xl' }}
                            fontWeight="700"
                            color="#1a2e1a"
                            mb={2}
                            lineHeight="1.4"
                          >
                            {article.title}
                          </Heading>
                          <Text
                            fontSize="14px"
                            color="#495057"
                            noOfLines={2}
                            lineHeight="1.6"
                            mb={3}
                          >
                            {article.description}
                          </Text>
                          <HStack spacing={2} fontSize="12px" color="#868e96">
                            <Text>{article.author}</Text>
                            <Text>·</Text>
                            <Text>
                              {new Date(article.publishedAt).toLocaleDateString('ko-KR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </Text>
                            {article.readTime && (
                              <>
                                <Text>·</Text>
                                <Text>{article.readTime}분</Text>
                              </>
                            )}
                          </HStack>
                        </Box>
                      </Box>
                    ))}
                </VStack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog3;