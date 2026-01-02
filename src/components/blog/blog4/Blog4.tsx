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

const Blog4 = () => {
  const navigate = useNavigate();
  const title =
    '조명만 바꿔도 집 분위기가 달라지는 이유: 공간을 따뜻하게 만드는 조명 배치 공식';
  const description =
    '전구 하나, 조명 위치 하나만 바꿔도 공간 분위기가 완전히 달라집니다. 색온도·조도·조명 배치·심리 효과까지 모두 포함한 조명 인테리어 완전 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/4`;
  const ogImage = `${baseUrl}images/blog/blog4.png`;

  const publishedDate = '2024년 2월 12일';
  const author = '아리';
  const category = '홈 인테리어';
  const readTime = 10;

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
    datePublished: '2024-02-12',
    dateModified: '2024-02-12',
    articleSection: category,
    keywords: `${category}, 조명 인테리어, 생활 꿀팁`,
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
      {/* SEO */}
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 조명 인테리어, 생활 꿀팁, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-02-12" />
        <meta property="article:modified_time" content="2024-02-12" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="조명 인테리어" />
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

      {/* BODY */}
      <Box as="main" bg="#f8faf9" minH="100vh">
        <MobileHeader title="메거진" showBack onBack={() => navigate('/magazine')} />

        <Container maxW="container.md" px={{ base: 4, md: 6 }} py={{ base: 6, md: 10 }}>
          <article>
            <VStack spacing={8} align="stretch">
              
              {/* HEADER */}
              <VStack spacing={4} align="stretch">
                <Badge
                  colorScheme="brand"
                  px={3}
                  py={1}
                  borderRadius="8px"
                  fontWeight="700"
                  w="fit-content"
                >
                  {category}
                </Badge>

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="800"
                  color="#1a2e1a"
                  lineHeight="1.3"
                >
                  {title}
                </Heading>

                <HStack spacing={4} color="#868e96" fontSize="14px">
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

              {/* THUMBNAIL */}
              <Box borderRadius="20px" overflow="hidden" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog4.png"
                  alt="따뜻한 조명이 켜진 감성적인 거실 인테리어"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              {/* CONTENT */}
              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack spacing={10} lineHeight="1.9" color="#1a2e1a">
                  
                  {/* INTRO */}
                  <Box>
                    <Text fontSize="18px" fontWeight="600" mb={3}>
                      조명이 바뀌면 같은 공간도 전혀 다른 집이 됩니다
                    </Text>

                    <Text mb={4}>
                      집 분위기가 어딘가 밋밋하고 차갑게 느껴질 때, 대부분 사람들은
                      가구를 바꾸거나 인테리어 소품을 사고 싶어합니다. 하지만 전문가들은
                      입을 모아 말합니다. “진짜 먼저 바꿔야 하는 건 조명이다.”
                    </Text>

                    <Text mb={4}>
                      조명은 집의 전체 분위기를 결정하는 요소입니다. 같은 공간도 어떤 조명을
                      쓰느냐에 따라 따뜻하고 아늑한 카페같이 변하기도 하고, 호텔 스위트룸처럼
                      고급스럽게 보이기도 합니다. 조명은 색온도, 밝기, 위치, 그림자, 반사광,
                      그리고 사람이 느끼는 심리적 안정감까지 함께 좌우합니다.
                    </Text>
                    <Text mb={4}>
                      실제로 인테리어 전문가들이 강조하는 것은 "조명이 인테리어의 70%를 결정한다"는 것입니다. 
                      비싼 가구와 소품을 사도 조명이 잘못되면 공간이 밋밋하고 차갑게 보이지만, 
                      조명만 잘 배치하면 저렴한 가구로도 고급스러운 분위기를 만들 수 있습니다. 
                      특히 작은 집이나 원룸에서는 조명이 공간의 깊이감과 넓이감을 만들어주는 
                      핵심 요소가 됩니다. 조명의 방향, 강도, 색상만 바꿔도 같은 공간이 
                      완전히 다른 느낌으로 변하는 것을 경험할 수 있습니다.
                    </Text>
                    <Text>
                      이 글에서는 조명 이론부터 실전 설치법, 방 종류별 권장 조명까지
                      "지금 당장 집을 예쁘게 만드는 조명 가이드"를 아주 자세하게 담았습니다. 
                      각 방법은 실제로 적용해본 사람들의 경험을 바탕으로 작성했으며, 
                      특히 예산이 부족한 상황에서도 효과적으로 적용할 수 있는 방법들만 선별했습니다.
                    </Text>
                  </Box>

                  <Divider />

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

                  {/* SECTION 1 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={6}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 조명이 집 분위기를 좌우하는 진짜 이유
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        조명은 단순히 밝히는 도구가 아닙니다. 조명은 감정, 시간, 분위기,
                        집중력까지 조절하는 “공간의 언어”입니다. 인테리어에서 조명을
                        ‘제4의 가구’라고 부르는 이유도 그 때문입니다.
                      </Text>

                      <Text fontWeight="600">① 조명은 실내의 모든 색을 다시 칠한다</Text>
                      <Text>
                        벽지 색, 가구 색, 소품 색이 마음에 안 드는 이유는 색 자체가 아니라
                        조명 때문일 때가 많습니다. 쿨톤 조명은 청색 계열을 강조하고,
                        전구색 조명은 베이지·우드·브라운 계열을 더욱 따뜻하게 비춥니다.
                      </Text>
                      <Text>
                        예를 들어, 같은 베이지색 벽지도 주광색(6500K) 조명 아래에서는 차갑고 
                        회색빛이 도는 것처럼 보이지만, 전구색(3000K) 조명 아래에서는 따뜻하고 
                        크림색처럼 보입니다. 이는 조명의 색온도가 물체의 색을 왜곡시키기 때문입니다. 
                        따라서 인테리어를 할 때는 가구나 벽지 색을 선택하기 전에 
                        어떤 조명을 사용할지 먼저 결정하는 것이 좋습니다. 
                        특히 나무 가구나 천 소재는 조명의 영향을 크게 받기 때문에 
                        조명 색온도를 신중하게 선택해야 합니다.
                      </Text>

                      <Text fontWeight="600">② 인간의 감정은 빛의 색에 반응한다</Text>
                      <Text>
                        연구에 따르면 따뜻한 조명은 스트레스를 완화하고 안정감을 주며,
                        차가운 조명은 집중력과 각성도를 높입니다.  
                        즉 **집에서는 따뜻한 조명**, **업무 공간에서는 자연광 또는 주광색**이 가장 적합합니다.
                      </Text>
                      <Text>
                        실제로 뇌과학 연구에 따르면, 따뜻한 조명(2700~3000K)은 멜라토닌 분비를 
                        촉진하여 휴식과 수면을 돕고, 스트레스 호르몬인 코르티솔 수치를 낮춥니다. 
                        반면 차가운 조명(5000K 이상)은 각성도를 높이고 집중력을 향상시키지만, 
                        장시간 노출되면 눈의 피로와 불안감을 증가시킬 수 있습니다. 
                        따라서 거실이나 침실 같은 휴식 공간에는 따뜻한 조명을, 
                        책상이나 작업 공간에는 자연광 색온도(4000K)나 주광색을 사용하는 것이 
                        건강과 효율성 측면에서 가장 좋습니다. 또한 하루 중 시간대에 따라 
                        조명 색온도를 조절할 수 있는 스마트 조명을 사용하면 더욱 효과적입니다.
                      </Text>

                      <Text fontWeight="600">③ 조명은 "공간의 깊이감"을 만든다</Text>
                      <Text>
                        벽 쪽에 조명이 있으면 공간이 넓어 보이고, 천장 위를 비추는 간접등을 쓰면
                        천장이 높아 보이는 효과가 있습니다. 조명이 그림자를 어떻게 만들고,
                        어떤 면을 강조하는지에 따라 공간 인상이 완전히 달라집니다.
                      </Text>
                      <Text>
                        조명의 방향과 위치는 공간의 시각적 깊이를 결정합니다. 예를 들어, 
                        벽면을 비추는 월 워셔(wall washer) 조명을 사용하면 벽이 밝아 보여 
                        공간이 넓어 보이는 효과가 있습니다. 반면 천장을 비추는 간접등은 
                        천장이 높아 보이게 만들고, 바닥을 비추는 조명은 공간을 더욱 안정적으로 보이게 합니다. 
                        또한 여러 조명을 조합하여 사용하면 그림자가 부드럽게 만들어져 
                        공간이 더욱 입체적이고 고급스럽게 보입니다. 특히 작은 집에서는 
                        조명의 배치만 잘해도 공간이 훨씬 넓어 보이는 효과를 얻을 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 광고 2: 중간 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-TuJyMLJV5hB5UXiO"
                    adWidth={320}
                    adHeight={100}
                  />

                  {/* SECTION 2 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={6}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2. 색온도 완전 정복 — 내 집에 맞는 조명 고르는 법
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        조명의 기본은 색온도입니다. 색온도가 달라지면 분위기, 식욕, 집중도까지
                        다 달라집니다. 색온도는 간단히 말해 "빛의 색"이라고 보면 됩니다.
                      </Text>

                      <Text fontWeight="600">① 2700K ~ 3000K – 따뜻한 전구색</Text>
                      <Text>
                        카페, 호텔, 레스토랑에서 많이 쓰는 색입니다.  
                        따뜻함, 안정감, 아늑함을 주고 **집 분위기를 가장 예쁘게 만드는 조명**입니다.  
                        ✔ 거실 ✔ 침실 ✔ 식탁 ✔ 독서등에 최적.
                      </Text>
                      <Text>
                        2700~3000K 범위의 전구색 조명은 가장 따뜻하고 편안한 느낌을 주는 조명입니다. 
                        이 색온도는 일몰 직후 하늘의 색과 비슷하여 우리 뇌가 자연스럽게 휴식 모드로 전환되도록 돕습니다. 
                        특히 거실에서는 3000K 조명을 사용하면 공간이 따뜻하고 아늑하게 보이며, 
                        침실에서는 2700K 정도의 더 따뜻한 조명을 사용하면 수면에 도움이 됩니다. 
                        식탁 위 펜던트 조명에도 3000K를 사용하면 음식이 더욱 맛있어 보이고, 
                        식사 분위기가 따뜻해집니다. 다만 이 색온도는 색 구분이 필요한 작업에는 
                        부적합하므로 주방이나 작업 공간에는 사용하지 않는 것이 좋습니다.
                      </Text>

                      <Text fontWeight="600">② 4000K – 자연광 느낌</Text>
                      <Text>
                        노랑도 하양도 아닌 딱 중간 밝기.  
                        활동적인 느낌을 주기 때문에  
                        ✔ 주방 ✔ 옷방 ✔ 화장실 등에 적합합니다.
                      </Text>
                      <Text>
                        4000K는 자연광과 가장 가까운 색온도로, 색 구분이 정확하고 
                        활동적인 느낌을 줍니다. 주방에서는 요리할 때 재료의 색을 정확하게 
                        구분할 수 있어 매우 중요하며, 화장실에서는 화장이나 면도 시 
                        자연스러운 피부 톤을 확인할 수 있습니다. 또한 옷방에서는 옷의 색을 
                        정확하게 구분할 수 있어 코디에 도움이 됩니다. 4000K 조명은 
                        집중력과 각성도를 높이면서도 너무 차갑지 않아 가정용으로 매우 적합합니다. 
                        특히 아침 시간대에 4000K 조명을 사용하면 하루를 시작하는 데 도움이 됩니다.
                      </Text>

                      <Text fontWeight="600">③ 5700K ~ 6500K – 주광색(하얀 빛)</Text>
                      <Text>
                        집중력과 각성도를 높여주는 색입니다.  
                        하지만 가정에서는 차갑고 딱딱해 보일 수 있기 때문에 과하게 사용하면 집이
                        병원처럼 보일 수 있습니다.  
                        ✔ 공부방 ✔ 작업실 ✔ 데스크 조명에서만 부분적으로 사용하세요.
                      </Text>
                      <Text>
                        5700~6500K 주광색은 태양광과 가장 가까운 색온도로, 집중력과 각성도를 
                        크게 높여줍니다. 하지만 가정에서는 차갑고 딱딱해 보일 수 있어 
                        전체 조명으로 사용하기보다는 작업용 조명으로만 사용하는 것이 좋습니다. 
                        공부방이나 작업실에서는 6500K 조명을 사용하면 집중력이 향상되고 
                        눈의 피로도 줄어듭니다. 다만 장시간 노출되면 눈이 피로해질 수 있으므로, 
                        작업 후에는 따뜻한 조명으로 전환하는 것이 좋습니다. 또한 주광색 조명은 
                        색 구분이 매우 정확하여 디자인 작업이나 정밀한 작업에 적합합니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* SECTION 3 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={6}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 조명 배치의 공식 — 3단 조명법(Three Layer Lighting)
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        인테리어 전문가들이 가장 많이 쓰는 방식이 바로 **3단 조명법**입니다.
                        하나의 조명만 켜진 집은 밋밋하고 차갑습니다.  
                        레이어를 나누면 입체적이고 호텔 같은 분위기를 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">① 기본 조명(Ambient) — 방 전체를 비추는 빛</Text>
                      <Text>천장등, 펜던트 등이 이에 해당합니다.</Text>
                      <Text>
                        기본 조명은 공간 전체를 밝히는 주 조명으로, 천장등이나 펜던트 등이 이에 해당합니다. 
                        기본 조명만으로는 공간이 밋밋하고 그림자가 거칠게 생기기 때문에, 
                        항상 다른 조명과 함께 사용하는 것이 좋습니다. 기본 조명의 밝기는 
                        공간의 크기에 따라 달라지는데, 일반적으로 거실(15~20㎡)에는 3000~4000루멘, 
                        침실(10~15㎡)에는 2000~3000루멘이 적당합니다. 또한 기본 조명은 
                        디머 스위치를 설치하여 밝기를 조절할 수 있으면 더욱 효과적입니다. 
                        밝은 낮에는 밝게, 저녁에는 어둡게 조절하여 분위기를 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 보조 조명(Task) — 특정 동작을 위한 조명</Text>
                      <Text>독서등, 식탁등, 주방 조명 등이 여기 포함됩니다.</Text>
                      <Text>
                        보조 조명은 특정 작업을 할 때 필요한 조명으로, 독서등, 식탁등, 주방 조명 등이 여기에 포함됩니다. 
                        보조 조명은 작업하는 영역만 밝게 비추어 눈의 피로를 줄이고 집중력을 높입니다. 
                        독서등은 책상 위에서만 밝게 비추어 주변은 어둡게 유지하고, 식탁등은 식탁 위만 
                        밝게 비추어 식사 분위기를 만듭니다. 주방 조명은 싱크대나 조리대 위에 
                        직접 비추는 조명이 필요하며, 그림자가 생기지 않도록 여러 방향에서 비추는 것이 좋습니다. 
                        보조 조명의 색온도는 작업의 특성에 따라 달라지는데, 독서등은 3000K, 
                        주방 조명은 4000K가 적합합니다.
                      </Text>

                      <Text fontWeight="600">③ 분위기 조명(Accent) — 공간의 감성을 완성하는 조명</Text>
                      <Text>간접등, 모서리등, 무드등, LED 바 등</Text>
                      <Text>
                        분위기 조명은 공간의 감성을 완성하는 조명으로, 간접등, 모서리등, 무드등, LED 바 등이 여기에 포함됩니다. 
                        분위기 조명은 직접적으로 밝게 비추기보다는 벽이나 천장을 비추어 
                        부드러운 빛을 만들어냅니다. 간접등은 천장과 벽 사이의 틈에 LED 바를 설치하여 
                        부드러운 빛을 만들어내고, 무드등은 은은한 빛으로 공간에 따뜻함을 더합니다. 
                        분위기 조명은 주로 2700~3000K의 따뜻한 색온도를 사용하며, 
                        밝기는 기본 조명의 30~50% 정도가 적당합니다. 분위기 조명을 추가하면 
                        공간이 훨씬 고급스럽고 아늑해 보이며, 저녁 시간에만 분위기 조명을 켜면 
                        전기 사용량도 절약할 수 있습니다.
                      </Text>

                      <Text>
                        셋을 모두 갖추면 빛의 방향이 다양해져서 그림자도 부드러워지고,
                        집이 훨씬 고급스러워 보입니다. 실제로 호텔이나 고급 레스토랑에서는 
                        이 3단 조명법을 기본으로 사용하며, 이를 통해 공간의 깊이감과 
                        분위기를 동시에 만들어냅니다. 집에서도 이 방법을 적용하면 
                        비용이 많이 들지 않으면서도 전문가가 만든 것 같은 인테리어를 
                        만들 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 4 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={6}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      4. 공간별 추천 조명 세팅(거실·침실·주방)
                    </Heading>

                    <Stack spacing={5}>
                      <Text fontWeight="600">① 거실 — 가장 많은 시간을 보내는 공간</Text>
                      <Text>
                        · 천장등은 3000K 전구색  
                        · 소파 뒤 간접등 설치(필립스 휴, LED바 추천)  
                        · TV 주변은 낮은 조도로 은은하게  
                        → 눈 피로도 줄고, 분위기 부드러움 +10
                      </Text>
                      <Text>
                        거실은 가족이 가장 많은 시간을 보내는 공간이므로, 따뜻하고 편안한 분위기를 만드는 것이 중요합니다. 
                        천장등은 3000K 전구색을 사용하여 공간 전체를 따뜻하게 비추고, 
                        소파 뒤에 간접등을 설치하면 벽면이 밝아져 공간이 넓어 보이는 효과가 있습니다. 
                        TV를 볼 때는 주변 조명을 어둡게 하되 완전히 어둡지 않게 하면 눈의 피로를 줄일 수 있습니다. 
                        TV 뒤에 LED 바를 설치하여 TV 주변을 은은하게 비추면 화면과 주변의 밝기 차이가 줄어들어 
                        눈이 편안해집니다. 또한 거실 한쪽에 스탠드를 두어 필요할 때만 켜면 
                        분위기를 더욱 아늑하게 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 침실 — 휴식의 공간</Text>
                      <Text>
                        · 천장등 사용 최소화  
                        · 스탠드 or 벽부등으로 낮은 조도 유지  
                        · 2500K 부드러운 전구색 추천  
                        → 숙면을 돕는 조명 구조
                      </Text>
                      <Text>
                        침실은 휴식과 수면을 위한 공간이므로, 밝고 강한 조명보다는 
                        부드럽고 따뜻한 조명이 적합합니다. 천장등은 거의 사용하지 않고, 
                        침대 옆 스탠드나 벽부등을 사용하여 낮은 조도로 은은하게 비추는 것이 좋습니다. 
                        2500K 정도의 부드러운 전구색을 사용하면 멜라토닌 분비가 촉진되어 
                        수면에 도움이 됩니다. 또한 침대 아래나 옷장 아래에 LED 바를 설치하여 
                        밤에 일어날 때 부드러운 빛을 제공하면 눈이 부시지 않습니다. 
                        아침에는 자연광이 들어오도록 커튼을 열어두고, 저녁에는 조명을 점차 어둡게 하면 
                        생체 리듬에 도움이 됩니다.
                      </Text>

                      <Text fontWeight="600">③ 주방 — 기능성과 시야 확보</Text>
                      <Text>
                        · 4000K 자연광 조명  
                        · 싱크대 하부에 LED 바 설치하면 그림자 없음  
                        → 요리할 때 밝고 정확하게 보임
                      </Text>
                      <Text>
                        주방은 요리라는 작업을 하는 공간이므로, 색 구분이 정확하고 
                        그림자가 생기지 않는 조명이 필요합니다. 4000K 자연광 조명을 사용하면 
                        재료의 색을 정확하게 구분할 수 있고, 요리할 때 밝고 정확하게 보입니다. 
                        싱크대나 조리대 위에는 직접 비추는 조명이 필요하며, 
                        싱크대 하부에 LED 바를 설치하면 그림자가 생기지 않아 매우 효과적입니다. 
                        또한 찬장 내부에도 LED 조명을 설치하면 어두운 곳의 물건도 쉽게 찾을 수 있습니다. 
                        주방 조명은 밝기를 충분히 확보하는 것이 중요하며, 
                        일반적으로 주방 면적의 10배 정도의 루멘이 적당합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 5 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={6}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 조명이 바뀌면, 집의 감정이 바뀐다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        가구를 바꾸지 않아도, 벽지를 다시 바르지 않아도,
                        조명 하나만 바꿔도 공간의 분위기는 극적으로 달라집니다.
                      </Text>
                      <Text>
                        실제로 많은 사람들이 조명만 바꾸고도 집이 완전히 다른 느낌이 되었다고 말합니다. 
                        특히 전구색 조명으로 바꾸는 것만으로도 공간이 훨씬 따뜻하고 아늑해 보이며, 
                        간접등을 추가하면 전문가가 만든 것 같은 고급스러운 분위기를 만들 수 있습니다. 
                        조명은 인테리어에서 가장 비용 대비 효과가 큰 투자 중 하나입니다. 
                        비싼 가구를 사는 것보다 조명을 잘 배치하는 것이 공간의 분위기를 
                        만드는 데 훨씬 더 효과적입니다.
                      </Text>
                      <Text>
                        전구색으로 바꾸고, 간접등을 한 번 깔아보고,
                        스탠드를 하나 들여놓는 작은 변화만으로도  
                        **집이 더 따뜻하고, 편안하고, 나다운 공간**이 될 수 있습니다.
                      </Text>
                      <Text>
                        조명 개선은 한 번에 모든 것을 바꿀 필요가 없습니다. 
                        가장 많이 사용하는 공간부터 시작하여 하나씩 적용해보는 것이 좋습니다. 
                        예를 들어, 거실 천장등의 전구만 전구색으로 바꾸는 것부터 시작하고, 
                        효과를 확인한 후 간접등이나 스탠드를 추가하는 방식입니다. 
                        또한 스마트 조명을 사용하면 시간대에 따라 색온도와 밝기를 자동으로 조절할 수 있어 
                        더욱 편리하고 효과적입니다. 작은 변화가 쌓이면 집 전체의 분위기가 
                        완전히 달라지는 것을 경험할 수 있을 것입니다.
                      </Text>

                      {/* 광고 3: 하단 – 카카오 다이렉트 */}
                      <KakaoAdDirect
                        adUnitId="DAN-qRlpXvY15cfMPpl0"
                        adWidth={300}
                        adHeight={250}
                      />

                      <Box
                        bg="brand.50"
                        borderLeft="4px solid"
                        borderColor="brand.500"
                        p={5}
                        borderRadius="12px"
                      >
                        <Text fontWeight="700" fontSize="17px" mb={2}>
                          💡 오늘의 한 줄: “좋은 조명은 집의 분위기를, 나의 기분까지 바꾼다.”
                        </Text>
                        <Text color="#495057">
                          조명은 사치가 아니라 일상의 질을 바꾸는 투자입니다.  
                          오늘도 따뜻한 빛 아래에서 조금 더 편안한 하루가 되길 바라요.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

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
                      article.id !== '4' && 
                      (article.category === '인테리어' || 
                       article.category?.includes('인테리어') ||
                       article.category?.includes('생활'))
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

export default Blog4;