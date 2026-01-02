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

const Blog5 = () => {
  const navigate = useNavigate();
  const title =
    '미니멀 라이프 시작하기: 물건보다 마음을 가볍게 만드는 정리 심리학과 실천 전략';
  const description =
    '단순히 물건을 줄이는 것이 아니라, 마음의 여유를 되찾고 생활 루틴을 정돈하는 미니멀 라이프 실전 가이드. 정리 심리학부터 공간별 실천법까지 모두 담았습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/5`;
  const ogImage = `${baseUrl}images/blog/blog5.png`;

  const publishedDate = '2024년 2월 19일';
  const author = '씩씩이';
  const category = '라이프스타일';
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
    datePublished: '2024-02-19',
    dateModified: '2024-02-19',
    articleSection: category,
    keywords: `${category}, 미니멀 라이프, 정리 심리학`,
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
        <meta name="keywords" content={`${category}, 미니멀 라이프, 정리 심리학, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-02-19" />
        <meta property="article:modified_time" content="2024-02-19" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="미니멀 라이프" />
        <meta property="article:tag" content="정리 심리학" />

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        {/* 구조화된 데이터 - Breadcrumb */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      </Helmet>

      <Box as="main" bg="#f8faf9" minH="100vh">
        <MobileHeader title="메거진" showBack onBack={() => navigate('/magazine')} />

        <Container maxW="container.md" py={{ base: 6, md: 10 }} px={{ base: 4, md: 6 }}>
          <article>
            <VStack spacing={8} align="stretch">
              
              {/* HEADER */}
              <VStack spacing={4} align="stretch">
                <Badge
                  colorScheme="brand"
                  borderRadius="8px"
                  px={3}
                  py={1}
                  fontWeight="700"
                  fontSize="12px"
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

                <HStack spacing={4} color="#868e96" fontSize="14px" flexWrap="wrap">
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

              {/* IMAGE */}
              <Box borderRadius="20px" overflow="hidden" bg="white" boxShadow="xl">
                <Image
                  src="/images/blog/blog5.png"
                  alt="미니멀한 인테리어 공간, 화이트와 우드톤이 조화를 이루는 방"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              {/* CONTENT */}
              <Box
                bg="white"
                borderRadius="20px"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
                boxShadow="sm"
              >
                <Stack spacing={10} lineHeight="1.9" color="#1a2e1a">

                  {/* INTRO */}
                  <Box>
                    <Text fontSize="18px" fontWeight="600" mb={3}>
                      미니멀 라이프는 버림이 아니라, ‘우선순위를 다시 세우는 일’
                    </Text>

                    <Text mb={4}>
                      미니멀 라이프라고 하면 “물건을 줄이는 것”만 떠올리기 쉽지만,
                      사실 그 핵심은 ‘적게 가지는 것’이 아니라 ‘중요한 것만 남기는 것’에
                      있습니다. 물건을 비우는 과정은 단순한 정리가 아니라,  
                      **내 삶의 우선순위를 재정비하는 과정**입니다.
                    </Text>

                    <Text mb={4}>
                      우리가 물건 때문에 스트레스를 받는 이유는, 물건이 많아서가 아니라
                      그 물건들이 "어디에 속해야 하는지" 알지 못하기 때문입니다.
                      어떤 물건은 추억이라 쉽게 버릴 수 없고, 어떤 물건은 언젠가 쓸 것 같아서
                      정리 대상에서 빠집니다. 이런 모호함이 공간을 어지럽히고,
                      동시에 우리의 마음도 복잡하게 만듭니다.
                    </Text>
                    <Text mb={4}>
                      실제로 심리학 연구에 따르면, 물건이 많을수록 우리의 인지 부하가 증가하고, 
                      결정을 내리는 데 더 많은 에너지가 소모됩니다. 예를 들어, 옷장에 옷이 많을수록 
                      "오늘 뭘 입을까?"라는 결정에 더 많은 시간과 에너지가 필요하고, 
                      이는 하루의 시작을 더 피곤하게 만듭니다. 미니멀 라이프는 이런 인지 부하를 줄이고, 
                      중요한 결정에 집중할 수 있는 여유를 만드는 방법입니다.
                    </Text>
                    <Text>
                      이 글에서는 미니멀 라이프를 "삶을 정돈하는 기술"로 바라보며,  
                      **심리학–정리법–생활 루틴–실천 전략**까지 모두 아우르는
                      가장 현실적인 미니멀 라이프 가이드를 소개합니다. 각 방법은 실제로 적용해본 사람들의 
                      경험을 바탕으로 작성했으며, 특히 처음 시작하는 사람들도 쉽게 따라할 수 있는 
                      단계별 가이드로 구성했습니다.
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

                  {/* SECTION 1 — 심리학 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={6}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 정리를 방해하는 마음들은 어디서 오는가
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        물건을 쉽게 버리지 못하는 데에는 심리적 이유가 있습니다.  
                        이 감정부터 이해하면 정리가 훨씬 쉽게 풀립니다.
                      </Text>

                      <Text fontWeight="600">① '언젠가 필요할지도 몰라'라는 불안</Text>
                      <Text>
                        미래에 대한漠然 한 불안감은 물건을 붙잡게 만듭니다.  
                        하지만 통계적으로 "언젠가 쓸 것 같은 물건"의 80%는 결국 사용하지 않습니다.
                      </Text>
                      <Text>
                        이 불안감을 해소하는 가장 좋은 방법은 "박스 테스트"입니다. 
                        의심스러운 물건들을 한 달간 박스에 넣어두고, 그 기간 동안 한 번도 
                        꺼내지 않았다면 실제로 필요하지 않은 물건입니다. 또한 물건을 버릴 때는 
                        "나중에 필요하면 다시 살 수 있다"는 사실을 떠올리면 불안감이 줄어듭니다. 
                        대부분의 물건은 필요할 때 다시 구매할 수 있으며, 그 비용은 물건을 보관하는 
                        공간의 가치보다 훨씬 낮을 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② '돈이 아까워서' 버리지 못하는 감정</Text>
                      <Text>
                        이미 돈은 지불된 상태에서, 물건을 가지고 있든 버리든
                        가치가 달라지지 않습니다. 경제학에서는 이를 '매몰비용의 오류'라고 합니다.
                      </Text>
                      <Text>
                        매몰비용의 오류는 이미 지출한 비용 때문에 합리적이지 않은 결정을 내리는 것을 말합니다. 
                        예를 들어, 사용하지 않는 헬스장 회원권을 계속 유지하거나, 
                        입지 않는 비싼 옷을 계속 보관하는 것이 이에 해당합니다. 
                        이미 지출한 돈은 돌아오지 않으므로, 현재와 미래의 가치에만 집중해야 합니다. 
                        물건을 중고로 판매하거나 기부하면 공간을 확보할 수 있고, 
                        그 공간의 가치가 물건을 보관하는 비용보다 클 수 있습니다.
                      </Text>

                      <Text fontWeight="600">③ 추억과 감정이 물건에 묶여 있는 경우</Text>
                      <Text>
                        물건이 아니라, 그와 연결된 기억이 소중한 것일 때가 많습니다.  
                        그래서 버리지 않아도 됩니다. 다만 **사진으로 기록하고, 물건은 보내는 방식**은  
                        미니멀리스트들이 자주 사용하는 기술입니다.
                      </Text>
                      <Text>
                        추억이 담긴 물건을 정리할 때는 "물건이 아니라 기억이 소중하다"는 사실을 
                        명확히 인식하는 것이 중요합니다. 사진으로 기록하면 물건 없이도 기억을 
                        보존할 수 있으며, 디지털 사진은 공간을 차지하지 않습니다. 
                        특히 의미 있는 물건은 한 곳에 모아서 사진을 찍고, 
                        가장 소중한 몇 개만 선별하여 보관하는 것이 좋습니다. 
                        나머지는 사진으로 대체하고 물건은 보내면 공간을 확보하면서도 
                        기억은 보존할 수 있습니다.
                      </Text>

                      <Text fontWeight="600">④ 정리가 '귀찮아서' 미루게 되는 심리</Text>
                      <Text>
                        정리는 거대한 작업처럼 느껴져 시작하기 어렵습니다.  
                        그래서 미니멀 라이프는 "큰 정리"가 아니라  
                        **매일 10분의 작은 정리**에서 출발합니다.
                      </Text>
                      <Text>
                        정리를 미루는 가장 큰 이유는 작업이 너무 크게 느껴지기 때문입니다. 
                        이를 해결하기 위해서는 큰 작업을 작은 단계로 나누는 것이 중요합니다. 
                        예를 들어, "옷장 정리"라는 큰 목표 대신 "오늘은 티셔츠만 정리"라는 
                        작은 목표를 세우면 시작하기가 훨씬 쉬워집니다. 또한 매일 10분씩 정리하는 
                        습관을 만들면 큰 정리 없이도 집이 깔끔하게 유지됩니다. 
                        작은 습관이 쌓이면 큰 변화가 됩니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* SECTION 2 — 실전 정리법 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={6}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2. 미니멀 라이프의 핵심 기술 — ‘감정 아닌 기능 기준’ 정리법
                    </Heading>

                    <Stack spacing={6}>
                      <Text>
                        정리의 기준을 “감정”에서 “기능”으로 바꾸는 순간,  
                        물건 선택은 훨씬 선명해집니다.  
                        아래 5가지 기준은 미니멀리스트들이 공통적으로 사용하는 ‘선별 기준’입니다.
                      </Text>

                      <Text fontWeight="600">① 1년 동안 한 번도 사용하지 않았다면</Text>
                      <Text>대부분 필요 없는 물건입니다.</Text>
                      <Text>
                        이 기준은 계절성 물건(겨울 옷, 여름 옷 등)을 제외하고 적용하는 것이 좋습니다. 
                        예를 들어, 여름 옷은 겨울에 입지 않으므로 1년 기준으로는 사용하지 않았지만 
                        실제로는 필요할 수 있습니다. 하지만 계절이 바어도 입지 않는 옷이라면 
                        정리 대상입니다. 특히 전자제품이나 생활용품은 1년 동안 사용하지 않았다면 
                        앞으로도 사용할 가능성이 매우 낮습니다.
                      </Text>

                      <Text fontWeight="600">② 같은 기능을 하는 물건이 2개 이상 있다면</Text>
                      <Text>더 좋아하는 하나만 남기고, 나머지는 보내세요.</Text>
                      <Text>
                        중복 물건을 정리할 때는 "더 자주 쓰는 것", "더 좋아하는 것", "더 실용적인 것" 
                        중 하나를 기준으로 선택하는 것이 좋습니다. 예를 들어, 컵이 여러 개 있다면 
                        가장 자주 쓰는 컵 하나만 남기고 나머지는 정리합니다. 
                        "혹시 손님이 올까봐"라는 이유로 여러 개를 보관하는 것보다, 
                        손님이 올 때만큼은 일회용 컵을 사용하거나 필요한 만큼만 구매하는 것이 
                        공간 효율적입니다.
                      </Text>

                      <Text fontWeight="600">③ 고장난 채로 6개월 이상 가지고 있다면</Text>
                      <Text>수리하지 않는다는 뜻입니다. 버릴 타이밍입니다.</Text>
                      <Text>
                        고장난 물건을 오래 보관하는 것은 "언젠가 고칠 시간이 생길 것"이라는 
                        막연한 기대 때문입니다. 하지만 6개월 동안 고치지 않았다면 
                        앞으로도 고칠 가능성이 매우 낮습니다. 고장난 물건은 공간만 차지하고, 
                        보는 것마다 "고쳐야 하는데"라는 스트레스를 줍니다. 
                        정말 고치고 싶다면 구체적인 계획을 세우고, 그렇지 않다면 
                        즉시 정리하는 것이 마음의 부담을 줄입니다.
                      </Text>

                      <Text fontWeight="600">④ 공간을 차지하는데 기분이 좋아지지 않는 물건</Text>
                      <Text>미니멀 라이프에서 가장 중요합니다. 감정은 '기능'입니다.</Text>
                      <Text>
                        물건의 기능은 단순히 사용하는 것만이 아닙니다. 보는 것만으로도 
                        기분이 좋아지거나, 공간을 아름답게 만드는 것도 기능입니다. 
                        반대로 보는 것만으로도 기분이 나빠지거나 스트레스를 주는 물건은 
                        그 자체로 부정적인 기능을 하는 것입니다. 미니멀 라이프에서는 
                        이런 부정적인 기능을 하는 물건을 제거하는 것이 매우 중요합니다. 
                        물건을 볼 때마다 "이걸 언제 정리하지"라는 생각이 든다면 
                        즉시 정리하는 것이 좋습니다.
                      </Text>

                      <Text fontWeight="600">⑤ '있으면 좋겠다'가 아니라 '없으면 불편하다' 기준으로</Text>
                      <Text>필요의 기준을 좁히면 결정이 쉬워집니다.</Text>
                      <Text>
                        많은 사람들이 "있으면 좋을 것 같아서" 물건을 사고 보관합니다. 
                        하지만 미니멀 라이프에서는 "없으면 불편한가?"를 기준으로 판단합니다. 
                        예를 들어, 전기포트가 "있으면 좋겠다"는 것이 아니라 
                        "없으면 불편하다"고 느낄 때만 구매하고 보관하는 것입니다. 
                        이 기준을 적용하면 물건 구매와 정리 모두에서 더 명확한 결정을 내릴 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* SECTION 3 — 공간별 전략 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={6}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 공간별 미니멀 전략 — 가장 효과적인 순서로 줄이는 법
                    </Heading>

                    <Stack spacing={6}>
                      <Text>
                        미니멀 정리를 시작할 때는  
                        **효과가 가장 빨리 느껴지는 공간**부터 줄여야 동기부여가 유지됩니다.
                      </Text>

                      <Text fontWeight="600">① 옷장 — 30%만 줄여도 집 전체가 달라진다</Text>
                      <Text>
                        옷은 부피가 커서 줄이기만 해도 체감이 즉시 옵니다.  
                        1) 사이즈가 안 맞는 옷  
                        2) 1년간 한 번도 입지 않은 옷  
                        3) '언젠가 입을지도'인 옷  
                        → 이 세 가지만 정리해도 옷장이 가벼워집니다.
                      </Text>
                      <Text>
                        옷장 정리는 미니멀 라이프에서 가장 효과가 빠르게 나타나는 작업입니다. 
                        옷은 부피가 크고 시각적으로 눈에 잘 띄기 때문에, 조금만 줄여도 
                        공간이 넓어 보이는 효과가 즉시 나타납니다. 옷장 정리 시에는 
                        "코어 워드로브" 개념을 적용하는 것이 좋습니다. 즉, 평소에 자주 입는 
                        기본 아이템들만 남기고 나머지는 정리하는 것입니다. 
                        특히 사이즈가 안 맞는 옷은 "살이 빠지면 입을 거야"라는 막연한 기대보다는 
                        현재의 나에게 맞는 옷만 보관하는 것이 현실적입니다.
                      </Text>

                      <Text fontWeight="600">② 주방 — 중복템이 가장 많은 공간</Text>
                      <Text>
                        컵·그릇·수저·국자·도마.  
                        꼭 필요한 수량만 남기고 '세트 구성으로 산 템들'을 정리하면  
                        주방이 눈에 띄게 넓어집니다.
                      </Text>
                      <Text>
                        주방은 중복 물건이 가장 많은 공간 중 하나입니다. 
                        특히 세트로 구매한 그릇이나 컵은 실제로는 일부만 자주 사용하고 
                        나머지는 거의 사용하지 않는 경우가 많습니다. 
                        주방 정리 시에는 가족 수를 기준으로 필요한 최소 수량만 남기는 것이 좋습니다. 
                        예를 들어, 2인 가족이라면 컵 4개, 그릇 4개 정도면 충분하며, 
                        손님이 올 때를 대비해 여유분을 보관하는 것보다는 필요할 때만 
                        구매하거나 일회용을 사용하는 것이 공간 효율적입니다.
                      </Text>

                      <Text fontWeight="600">③ 욕실 — 비우면 청소가 쉬워진다</Text>
                      <Text>
                        거의 다 쓴 화장품, 묵은 스킨케어, 공병, 오래된 샤워볼 등이 대표적.  
                        욕실은 매일 쓰는 공간이기 때문에 정리 효과가 빠르게 느껴집니다.
                      </Text>
                      <Text>
                        욕실은 습도가 높고 공간이 좁아 물건이 많으면 청소가 어렵고 
                        곰팡이가 생기기 쉽습니다. 욕실 정리 시에는 유통기한이 지난 화장품, 
                        거의 다 쓴 샴푸나 바디워시 병, 오래된 수건 등을 우선적으로 정리합니다. 
                        특히 샴푸나 바디워시는 병이 거의 비어있어도 끝까지 다 쓰지 않고 
                        새로운 것을 사는 경우가 많은데, 이런 반쯤 남은 병들을 정리하면 
                        공간이 크게 넓어집니다. 또한 욕실은 매일 사용하는 공간이므로 
                        정리 효과가 즉시 체감되어 동기부여가 유지됩니다.
                      </Text>

                      <Text fontWeight="600">④ 책상·작업실 — 생산성을 올리는 정리</Text>
                      <Text>
                        작업 공간은 물건이 아닌 "집중력"이 핵심입니다.  
                        책상 위에는 **필수 3개만** 올려놓는 것이 가장 좋습니다.  
                        (노트북 / 조명 / 물)
                      </Text>
                      <Text>
                        작업 공간의 정리는 생산성과 직결됩니다. 연구에 따르면, 
                        책상 위가 어수선할수록 집중력이 떨어지고 업무 효율이 낮아집니다. 
                        책상 위에는 현재 작업에 필요한 물건만 두고, 나머지는 서랍이나 
                        옆 수납함에 정리하는 것이 좋습니다. 특히 시각적 노이즈를 줄이는 것이 
                        중요한데, 각종 케이블, 서류, 소품 등이 눈에 보이면 뇌가 계속 
                        "이것도 처리해야 하나?"라고 생각하게 되어 집중이 깨집니다. 
                        책상 위를 깔끔하게 유지하면 집중력이 향상되고 업무 효율이 높아집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 4 — 루틴 */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={6}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      4. 매일 10분 루틴으로 유지되는 미니멀 라이프
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        유지가 안 되면 정리는 다시 무너집니다.  
                        그래서 미니멀 라이프는 “한 번의 대정리”보다  
                        **매일 10분 루틴**이 훨씬 더 중요합니다.
                      </Text>

                      <Text fontWeight="600">① 귀가 후 3분 정리</Text>
                      <Text>키·지갑·가방·겉옷을 바로 제자리에 둔다.</Text>
                      <Text>
                        집에 들어오자마자 물건을 제자리에 두는 습관은 매우 중요합니다. 
                        이 습관만으로도 집이 어지러워지는 것을 80% 이상 방지할 수 있습니다. 
                        현관에 작은 선반이나 훅을 설치하여 가방, 외투, 열쇠의 고정된 자리를 
                        만들어두면 습관이 더욱 쉽게 만들어집니다. 또한 이 습관은 
                        다음날 아침 준비 시간도 단축시켜주는 부수 효과가 있습니다.
                      </Text>

                      <Text fontWeight="600">② 저녁 5분 리셋</Text>
                      <Text>책상·테이블·싱크대 등 평평한 공간만 비워두기.</Text>
                      <Text>
                        저녁 시간에 평평한 공간(책상, 테이블, 싱크대 등)만 비워두는 습관은 
                        다음날 아침을 훨씬 편하게 만들어줍니다. 이 습관은 큰 정리를 하는 것이 아니라, 
                        단순히 물건을 제자리에 되돌려놓는 것입니다. 매일 5분씩만 투자하면 
                        집이 깔끔하게 유지되고, 주말에 큰 정리를 할 필요가 없어집니다. 
                        특히 책상과 식탁은 매일 사용하는 공간이므로 이 공간만 깔끔하게 유지해도 
                        집 전체가 정돈된 느낌을 줍니다.
                      </Text>

                      <Text fontWeight="600">③ 주말 10분 체크</Text>
                      <Text>새로 쌓인 불필요한 물건을 '즉시' 정리.</Text>
                      <Text>
                        주말에 10분만 투자하여 한 주 동안 새로 들어온 물건들을 체크하고 정리하면 
                        물건이 쌓이는 것을 방지할 수 있습니다. 특히 택배 상자, 우편물, 
                        광고 전단지 등은 즉시 처리하지 않으면 어느새 쌓여있게 됩니다. 
                        주말 체크 시간에는 이런 것들을 우선적으로 정리하고, 
                        필요 없는 물건은 즉시 버리거나 보관 장소로 옮기는 것이 좋습니다. 
                        이 작은 습관만으로도 집이 다시 어지러워지는 속도를 크게 늦출 수 있습니다.
                      </Text>

                      <Text>
                        이 작은 습관만으로도 집이 다시 어지러워지는 속도가
                        눈에 띄게 느려집니다. 또한 매일 작은 정리를 하면 
                        큰 정리를 할 필요가 없어지고, 집을 유지하는 것이 
                        부담스럽지 않게 됩니다. 작은 습관이 쌓이면 큰 변화가 됩니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* FINISH */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={6}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 공간이 가벼워지면, 마음도 가벼워진다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        미니멀 라이프의 목적은 '멋진 집'을 만드는 것이 아닙니다.  
                        내가 좋아하는 것들을 중심으로 삶을 재구성하고,  
                        공간과 마음을 함께 정돈하는 과정입니다.
                      </Text>
                      <Text>
                        실제로 미니멀 라이프를 실천한 사람들의 공통점은 
                        물건이 줄어들면서 마음의 여유가 생기고, 
                        중요한 것에 집중할 수 있게 되었다는 것입니다. 
                        물건이 많을수록 우리의 인지 부하는 증가하고, 
                        결정을 내리는 데 더 많은 에너지가 소모됩니다. 
                        물건을 줄이면 이런 인지 부하가 줄어들고, 
                        하루를 살아가는 데 필요한 에너지가 절약됩니다.
                      </Text>
                      <Text>
                        물건이 줄어들면 시야가 명확해지고,  
                        마음이 덜 복잡해지고,  
                        하루를 살아갈 선택과 에너지가 조금 더 넉넉해집니다.
                      </Text>
                      <Text>
                        미니멀 라이프는 완벽한 정리를 목표로 하는 것이 아닙니다. 
                        오히려 "충분히 좋은" 상태를 유지하는 것이 더 중요합니다. 
                        작은 변화부터 시작하여 점진적으로 공간을 정돈해나가면, 
                        어느새 집이 더 편안하고 나다운 공간으로 변해있을 것입니다. 
                        오늘 한 곳만이라도 가볍게 만들어보세요.
                      </Text>

                      <Box
                        bg="brand.50"
                        borderLeft="4px solid"
                        borderColor="brand.500"
                        p={5}
                        borderRadius="12px"
                      >
                        <Text fontWeight="700" mb={2} fontSize="17px">
                          🧺 오늘의 한 줄: “정리는 물건을 버리는 일이 아니라, 나를 위한 공간을 되찾는 일이다.”
                        </Text>
                        <Text color="#495057">
                          오늘 단 한 곳만이라도 가볍게 만들어보세요.  
                          그 변화는 생각보다 크고, 오래갑니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  {/* 광고 3: 마지막 섹션 전 */}
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

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
                      article.id !== '5' && 
                      (article.category === '정리·수납' || 
                       article.category?.includes('정리') ||
                       article.category?.includes('라이프'))
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

export default Blog5;