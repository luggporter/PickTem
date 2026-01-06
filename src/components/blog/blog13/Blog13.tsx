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
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { FiCalendar, FiUser } from 'react-icons/fi';
import MobileHeader from '../../MobileHeader';

import { KakaoAdDirect } from '../../../pages/Home';
import { articles } from '../blogList';

const Blog13 = () => {
  const navigate = useNavigate();
  const title = '겨울철 야외활동 전 꼭 알아야 할 안전 수칙 12가지';
  const description =
    '빙판길 낙상부터 저체온증, 배터리 방전, 차량 고립까지. 겨울 야외활동에서 실제로 자주 발생하는 위험을 예방하는 12가지 안전 수칙을 실전형으로 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/13`;
  const ogImage = `${baseUrl}images/blog/blog13.png`;

  const publishedDate = '2024년 5월 7일';
  const author = '씩씩이';
  const category = '겨울 안전';
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
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: '씩아픽템',
      logo: { '@type': 'ImageObject', url: `${baseUrl}favicon.png` },
    },
    image: [ogImage],
    datePublished: '2024-05-07',
    dateModified: '2024-05-07',
    articleSection: category,
    keywords: `${category}, 겨울 안전, 야외활동 안전`,
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
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 겨울 안전, 야외활동 안전, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-05-07" />
        <meta property="article:modified_time" content="2024-05-07" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="겨울 안전" />
        <meta property="article:tag" content="야외활동 안전" />

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
                  src="/images/blog/blog13.png"
                  alt="눈 내리는 겨울 거리에서 방한복을 입은 사람이 조심스럽게 걷는 장면"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      겨울 야외활동은 “추억”이 될 수도, “사고”가 될 수도 있습니다
                    </Text>
                    <Text mb={4}>
                      겨울은 밖으로 나가면 오히려 기분이 좋아지는 계절이기도 합니다. 조용한 공기, 맑은 하늘,
                      반짝이는 야경, 눈 오는 날 특유의 분위기까지. 그런데 겨울은 동시에 위험이 ‘자연스럽게’
                      섞여 있는 계절이기도 합니다. 미끄러짐, 저체온, 손발 동상, 배터리 방전, 눈길 운전 등
                      사고가 나는 방식이 너무 다양합니다.
                    </Text>
                    <Text mb={4}>
                      중요한 건 "겁내고 안 나가기"가 아니라, 위험을 미리 알고 '준비한 상태로' 나가는 것입니다.
                      겨울철 안전은 노력 대비 효과가 큰 편이에요. 장갑 하나, 양말 하나, 작은 파우치 하나로
                      사고를 크게 줄일 수 있습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 겨울 사고의 대부분은 예방 가능한 사고입니다. 
                      적절한 복장, 신발, 준비물만 챙겨도 대부분의 사고를 예방할 수 있습니다. 
                      특히 미끄러짐 사고는 적절한 신발과 걸음걸이만 바꿔도 
                      80% 이상 예방할 수 있으며, 저체온증은 적절한 복장으로 
                      거의 완전히 예방할 수 있습니다.
                    </Text>
                    <Text>
                      아래 12가지는 등산·산책·데이트·축제·야경·스키장 등 겨울 야외활동 전이라면 어떤 상황에도
                      적용 가능한 실전 안전 수칙입니다. 한 번만 체크리스트처럼 읽어두면, 겨울 밖 생활이 훨씬
                      편하고 안전해집니다. 각 수칙은 실제로 발생한 사고 사례를 바탕으로 작성했으며, 
                      특히 예방 가능한 사고에 집중했습니다.
                    </Text>
                  </Box>

                  <Box
                    bg="gray.50"
                    borderRadius="14px"
                    p={6}
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Text fontSize="14px" color="gray.500">
                      광고 슬롯
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 – 카카오 */}
                  <Box py={4} display="flex" justifyContent="center">
                    <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />
                  </Box>

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1) '미끄럼'이 1순위 위험: 신발 바닥부터 확인
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울 사고의 대부분은 "빙판에서 미끄러졌다"로 시작합니다. 넘어지는 순간 손목을 짚고,
                        손목·팔꿈치·어깨가 동시에 다치기 쉬워요. 그래서 겨울 야외활동에서 가장 먼저 볼 건
                        옷이 아니라 '신발 바닥'입니다.
                      </Text>
                      <Text>
                        실제로 겨울 낙상 사고의 70% 이상이 미끄러운 바닥에서 발생하며, 
                        이 중 대부분은 적절한 신발만 신었어도 예방할 수 있었습니다. 
                        넘어질 때 손목을 짚으면 손목 골절이 발생할 수 있고, 
                        이는 회복에 오랜 시간이 걸리는 부상입니다.
                      </Text>
                      <Text>
                        밑창이 매끈하거나 오래되어 마모된 신발은 눈·비가 살짝만 섞여도 위험해집니다.
                        바닥이 닳았다면 교체가 답이고, 당장 어렵다면 미끄럼 방지 덧신(아이젠/스파이크)을
                        준비하는 편이 낫습니다. "오늘 눈 안 오는데?" 싶어도, 그늘진 골목이나 다리 아래는
                        이미 얼어있는 경우가 많습니다.
                      </Text>
                      <Text>
                        미끄럼 방지 덧신은 가볍고 휴대하기 쉬우며, 
                        필요할 때만 신어서 사용할 수 있어 매우 실용적입니다. 
                        특히 등산이나 장거리 이동 시에는 필수적으로 챙기는 것이 좋습니다.
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

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2) 레이어링 기본 공식: '바람 막기'가 핵심
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울에 춥다고 느끼는 이유는 단순히 온도 때문이 아니라, 바람이 열을 빼앗아가기 때문입니다.
                        그래서 레이어링의 핵심은 "두껍게"가 아니라 "바람을 막는 구조"예요.
                      </Text>
                      <Text>
                        실제로 바람이 불 때 체감 온도는 실제 온도보다 5~10도 낮아질 수 있습니다. 
                        따라서 바람을 막는 것이 보온의 핵심이며, 
                        두꺼운 옷 한 벌보다 얇은 옷을 여러 겹 입는 것이 더 효과적입니다.
                      </Text>
                      <Text>
                        기본은 3겹이 가장 무난합니다. 안쪽은 땀을 빠르게 말려주는 이너, 중간은 보온(니트/후리스),
                        바깥은 바람을 막는 아우터. 특히 활동량이 있는 날(걷기·등산·데이트 이동 많음)은
                        안쪽이 젖으면 체온이 급격히 떨어져서 훨씬 더 위험해집니다.
                      </Text>
                      <Text>
                        땀이 옷에 스며들면 옷의 보온 기능이 떨어지고, 
                        증발할 때 체온을 빼앗아가므로 저체온증의 원인이 될 수 있습니다. 
                        따라서 활동량이 많은 날에는 땀을 빠르게 배출하는 기능성 이너웨어가 필수입니다.
                      </Text>
                      <Text>
                        목·귀·손·발은 열 손실이 큰 부위입니다. 체감상 "목만 막아도" 겨울이 덜 춥게 느껴지는 이유가
                        여기 있어요. 목도리나 넥워머는 안전 장비에 가깝습니다.
                      </Text>
                      <Text>
                        목은 큰 혈관이 지나가는 부위이므로, 목을 막으면 
                        전체 체온 유지에 큰 도움이 됩니다. 또한 귀는 노출된 부위 중 
                        가장 빨리 동상에 걸릴 수 있는 부위이므로 귀마개나 후드를 사용하는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    bg="gray.50"
                    borderRadius="14px"
                    p={6}
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Text fontSize="14px" color="gray.500">
                      광고 슬롯
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3) 손발 저림은 경고 신호: “따뜻함”보다 “건조함”
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 손발이 차가워지는 걸 "그냥 겨울이라서"라고 넘기기 쉽지만,
                        손발 저림과 통증은 실제로 위험 신호일 수 있습니다. 특히 장갑 안이 젖거나,
                        발이 땀으로 축축해지면 체온 방어가 무너집니다.
                      </Text>
                      <Text>
                        손발이 차가워지면 혈액 순환이 원활하지 않아 동상에 걸릴 수 있고, 
                        손이 저리면 물건을 잡거나 균형을 유지하기 어려워져 사고 위험이 증가합니다. 
                        특히 손을 주머니에 넣고 걸으면 균형을 잃기 쉬워 미끄러짐 사고가 발생할 수 있습니다.
                      </Text>
                      <Text>
                        양말은 두꺼운 것 하나보다, 땀을 잡아주는 얇은 기능성 + 보온 양말 조합이 더 편한 경우가 많습니다.
                        장갑도 마찬가지로, 안쪽 장갑(이너 글러브)을 두면 손이 훨씬 오래 따뜻해요.
                        "손이 차가워서 주머니에 넣는다 → 균형 잃고 미끄러진다" 사고도 꽤 흔합니다.
                      </Text>
                      <Text>
                        이너 글러브와 아우터 장갑을 함께 사용하면 보온 효과가 크게 향상됩니다. 
                        이너 글러브는 땀을 배출하고, 아우터 장갑은 바람과 추위를 막아 
                        손을 오래 따뜻하게 유지할 수 있습니다. 
                        또한 손이 차가워지면 핫팩을 사용하는 것도 효과적입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      4) 저체온증은 ‘떨림’부터 시작합니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        저체온증은 "산에서 조난" 같은 극단적인 이야기만이 아닙니다.
                        도심에서도 얇게 입고 오래 밖에 있으면 충분히 발생할 수 있어요.
                        초반 신호는 '몸이 떨린다'입니다. 그리고 떨림이 멈추면 더 위험할 수 있습니다.
                      </Text>
                      <Text>
                        저체온증은 체온이 35도 이하로 떨어질 때 발생하며, 
                        도심에서도 바람이 강하거나 비가 오는 날 얇게 입고 오래 있으면 
                        충분히 발생할 수 있습니다. 특히 젖은 옷을 입고 있으면 
                        체온이 빠르게 떨어져 위험합니다.
                      </Text>
                      <Text>
                        떨림, 손이 말을 안 듣는 느낌, 말이 느려짐, 판단이 둔해짐 같은 변화가 느껴지면
                        실내로 들어가서 체온을 회복해야 합니다. 따뜻한 음료와 함께,
                        젖은 옷(특히 양말)을 바로 갈아주는 게 회복에 큰 도움이 됩니다.
                      </Text>
                      <Text>
                        저체온증의 초기 증상이 나타나면 즉시 따뜻한 곳으로 이동하고, 
                        젖은 옷을 벗고 건조한 옷으로 갈아입어야 합니다. 
                        따뜻한 음료를 마시면 체온 회복에 도움이 되지만, 
                        알코올은 오히려 체온을 떨어뜨릴 수 있으므로 피해야 합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      5) “길이 얼었는지”는 눈이 아니라 ‘그늘’을 보세요
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        눈이 안 보여도 길이 얼어있을 수 있습니다. 특히 건물 그림자, 교량 아래, 골목,
                        횡단보도 앞, 인도 경계석 근처는 얇게 얼어 "유리판"처럼 미끄럽습니다.
                      </Text>
                      <Text>
                        그늘진 곳은 햇빛을 받지 못해 온도가 낮아지고, 
                        물이 고인 곳은 쉽게 얼어 빙판이 됩니다. 
                        특히 횡단보도 앞이나 인도 경계석 근처는 물이 고이기 쉬운 곳이므로 
                        주의가 필요합니다. 겨울에는 눈이 보이지 않아도 
                        그늘진 곳을 피하고, 물이 고인 곳을 주의하는 것이 좋습니다.
                      </Text>
                      <Text>
                        겨울엔 걸음걸이도 바뀌어야 합니다. 보폭을 줄이고, 발을 높게 들지 않고,
                        중심을 낮추고, 손은 주머니에서 빼는 게 기본입니다. "천천히 걷는 것"이 아니라
                        "넘어지지 않게 걷는 방식"이 따로 있다는 느낌으로 바꿔보세요.
                      </Text>
                      <Text>
                        겨울 걸음걸이는 "펭귩 걸음"이라고도 불립니다. 
                        보폭을 줄이고, 발을 바닥에 붙인 채로 미끄러지듯 걷으면 
                        미끄러짐을 방지할 수 있습니다. 또한 손을 주머니에서 빼고 
                        팔을 살짝 벌리면 균형을 유지하기 쉬워집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    bg="gray.50"
                    borderRadius="14px"
                    p={6}
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Text fontSize="14px" color="gray.500">
                      광고 슬롯
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      6) 스마트폰 배터리 방전은 안전 리스크입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 배터리가 빨리 닳습니다. 그리고 배터리가 없으면 길 찾기, 연락, 결제, 택시 호출이
                        한꺼번에 막혀버립니다. 특히 낯선 곳(축제/여행/산책 코스)이라면 작은 보조배터리가
                        사실상 안전 장비예요.
                      </Text>
                      <Text>
                        배터리는 낮은 온도에서 성능이 크게 떨어집니다. 
                        특히 영하의 온도에서는 배터리 용량이 절반 이하로 떨어질 수 있으며, 
                        방전 속도도 빨라집니다. 따라서 겨울에는 보조배터리를 필수적으로 챙기는 것이 좋습니다.
                      </Text>
                      <Text>
                        보조배터리는 "가방 깊숙이"보다 몸 가까운 곳(안주머니/가방 안쪽)에서 보관하면
                        추위 영향을 덜 받습니다. 케이블이 부러지거나 접촉이 불안정해지는 경우도 있으니
                        짧은 케이블 하나를 여분으로 챙겨두면 마음이 편합니다.
                      </Text>
                      <Text>
                        보조배터리를 몸 가까운 곳에 보관하면 체온으로 보온되어 
                        성능 저하를 방지할 수 있습니다. 또한 케이블은 추위에 취약하므로 
                        여분을 챙기는 것이 좋으며, 특히 USB-C나 라이트닝 케이블은 
                        추위에 부러지기 쉬우므로 주의가 필요합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      7) 음주 후 야외활동은 체감 추위가 늦게 옵니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        술을 마시면 순간적으로 몸이 따뜻해지는 느낌이 들 수 있지만,
                        실제로는 열 손실이 커지고 판단력이 흐려집니다. "괜찮겠지" 하다가
                        장시간 밖에 있는 상황이 생기면 위험해질 수 있어요.
                      </Text>
                      <Text>
                        알코올은 혈관을 확장시켜 체온이 빠르게 떨어지게 만듭니다. 
                        또한 판단력을 흐리게 하여 위험한 상황을 인지하지 못하게 만들 수 있습니다. 
                        따라서 겨울 야외활동 전에는 음주를 피하거나, 
                        음주 후에는 실내에서만 활동하는 것이 안전합니다.
                      </Text>
                      <Text>
                        연말·크리스마스·축제 시즌엔 특히 흔한 패턴이 "2차 가자"입니다.
                        이때 장시간 이동하거나, 야외에서 대기하거나, 얇게 입고 사진 찍다가
                        체온이 급격히 떨어지는 일이 자주 생깁니다. '실내로 들어갈 타이밍'을
                        미리 정해두는 것도 안전 전략입니다.
                      </Text>
                      <Text>
                        연말 시즌에는 분위기에 취해 얇게 입고 야외에서 오래 있게 되는 경우가 많습니다. 
                        이때는 실내로 들어갈 시간을 미리 정해두고, 
                        그 시간이 되면 무조건 실내로 들어가는 것이 안전합니다. 
                        또한 음주 후에는 체온이 빠르게 떨어질 수 있으므로 
                        더욱 주의가 필요합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      8) 자동차 이동이면 “비상 키트”가 생존력을 올립니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        눈길 고립은 "뉴스에 나오는 일" 같지만, 출퇴근이나 근교 이동에서도 충분히 발생합니다.
                        겨울엔 사고가 나서 막히는 것도 빠르고, 제설이 늦는 구간도 생깁니다.
                      </Text>
                      <Text>
                        눈길에서는 차량이 미끄러져 사고가 발생하거나, 
                        눈이 많이 쌓여 차량이 고립될 수 있습니다. 
                        특히 산길이나 지방 도로에서는 제설이 늦어 
                        몇 시간 동안 고립될 수 있으므로 비상 준비물이 필수입니다.
                      </Text>
                      <Text>
                        최소 구성으로는 담요 1장, 핫팩, 물, 간단한 간식, 장갑, 손전등(또는 휴대용 조명),
                        휴대폰 충전 수단이 있어야 합니다. 타이어 공기압이나 와이퍼 상태, 워셔액도
                        겨울엔 정말 중요합니다. 사소해 보이지만 "잘 보이는 것"이 안전의 절반입니다.
                      </Text>
                      <Text>
                        비상 키트는 차량에 항상 보관해두는 것이 좋습니다. 
                        담요는 저체온증을 예방하고, 핫팩은 체온 유지에 도움이 됩니다. 
                        물과 간식은 고립되었을 때 생존에 필수적이며, 
                        손전등은 어둠 속에서 도움을 요청하거나 주변을 확인하는 데 필요합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      9) 응급 상황 대비: “연락 루트”를 하나만 정해두기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울 야외활동에서 사고가 나면, 당황해서 연락이 엉킬 때가 많습니다.
                        그래서 출발 전에 '누구에게 먼저 연락할지'를 정해두면 대응이 빨라집니다.
                      </Text>
                      <Text>
                        사고가 발생하면 당황하여 연락을 제대로 하지 못하거나, 
                        연락할 사람을 찾지 못하는 경우가 많습니다. 
                        따라서 출발 전에 연락할 사람을 정해두고, 
                        동선과 예상 귀가 시간을 공유하는 것이 중요합니다.
                      </Text>
                      <Text>
                        친구/연인/가족 중 한 명에게 "오늘 어디 갔다가 몇 시쯤 들어갈 예정" 정도만 공유해도 충분합니다.
                        등산이나 장거리 이동이면, 대략적인 동선(코스 이름/도착지)을 함께 공유하면 더 좋습니다.
                      </Text>
                      <Text>
                        동선을 공유하면 사고가 발생했을 때 구조대가 
                        어디를 찾아야 할지 알 수 있어 구조 시간을 단축할 수 있습니다. 
                        또한 예상 귀가 시간이 지나도 연락이 없으면 
                        연락을 취하거나 구조를 요청할 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box
                    bg="gray.50"
                    borderRadius="14px"
                    p={6}
                    border="1px solid"
                    borderColor="gray.200"
                    textAlign="center"
                  >
                    <Text fontSize="14px" color="gray.500">
                      광고 슬롯
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      10) “사진 찍을 때”가 사고가 가장 많이 납니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울에는 사진 찍는 순간이 많습니다. 야경, 조명, 눈길, 트리, 축제.
                        그런데 사고도 그 순간에 많이 납니다. 이유는 간단해요.
                        시선이 화면으로 내려가고, 발밑을 안 보고, 균형이 무너집니다.
                      </Text>
                      <Text>
                        사진을 찍을 때는 시선이 스마트폰 화면에 집중되어 
                        발밑을 보지 못하게 됩니다. 이때 미끄러운 곳을 밟거나, 
                        계단을 놓치거나, 균형을 잃어 넘어질 수 있습니다. 
                        특히 겨울에는 바닥이 미끄러워 사고 위험이 더욱 높습니다.
                      </Text>
                      <Text>
                        사진 찍을 땐 먼저 "발밑이 안전한 자리"를 찾고 멈춰서 찍는 게 기본입니다.
                        특히 계단, 경사로, 인도 가장자리, 물이 고인 자리 위는 위험합니다.
                        폼보다 안전이 먼저입니다. 넘어지면 그날의 모든 일정이 끝나버릴 수 있어요.
                      </Text>
                      <Text>
                        안전한 자리를 찾아 멈춰서 사진을 찍으면 
                        사고 위험을 크게 줄일 수 있습니다. 
                        또한 사진을 찍을 때는 한 손으로 찍거나, 
                        다른 사람에게 부탁하는 것도 좋은 방법입니다. 
                        두 손을 모두 사용하면 균형을 유지하기 어려워 
                        넘어질 위험이 증가합니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      11) 피부·눈 보호도 안전의 일부입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 피부가 트고, 눈이 시리고, 입술이 갈라지는 일이 흔합니다.
                        이게 단순 불편함으로 끝나면 괜찮지만, 장시간 야외활동에서는 컨디션이 급격히 떨어집니다.
                      </Text>
                      <Text>
                        겨울에는 습도가 낮아 피부가 건조해지고, 
                        바람이 불면 피부가 더욱 손상됩니다. 
                        특히 입술이 갈라지면 통증이 생기고, 
                        손이 트면 물건을 잡기 어려워져 사고 위험이 증가합니다.
                      </Text>
                      <Text>
                        립밤, 핸드크림, 작은 로션은 '기분템'이 아니라 컨디션 유지템입니다.
                        눈이 예민한 분은 바람이 강한 날 안구 건조가 더 심해질 수 있어
                        인공눈물이나 보습 안약을 챙기는 것도 도움이 됩니다.
                      </Text>
                      <Text>
                        피부 보호는 겨울 야외활동에서 매우 중요합니다. 
                        립밤은 입술이 갈라지는 것을 방지하고, 
                        핸드크림은 손이 트는 것을 예방합니다. 
                        또한 안구 건조는 시야를 흐리게 만들어 사고 위험을 증가시키므로, 
                        인공눈물을 사용하는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      12) 귀가 후 체크: “멍·통증·저림”은 하루 지나서 더 아픕니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 넘어졌을 때 바로 통증이 크지 않을 수 있습니다. 두꺼운 옷 때문에 충격이
                        순간적으로 덜 느껴지기도 하고, 추위 때문에 통증 감각이 둔해지기도 해요.
                      </Text>
                      <Text>
                        두꺼운 옷은 충격을 흡수하여 순간적인 통증을 줄이지만, 
                        실제로는 뼈나 관절에 손상이 있을 수 있습니다. 
                        또한 추위는 통증 감각을 둔하게 만들어 
                        부상을 인지하지 못하게 만들 수 있습니다.
                      </Text>
                      <Text>
                        귀가 후 손목, 무릎, 발목, 허리 쪽에 통증이 올라오면 무리하지 말고 상태를 체크해야 합니다.
                        붓기, 멍, 움직일 때 찌릿한 통증이 있다면 안정이 먼저입니다.
                        "괜찮겠지"로 넘겼다가 다음 날 더 크게 고생하는 경우가 정말 많습니다.
                      </Text>
                      <Text>
                        부상은 시간이 지나면서 증상이 악화될 수 있습니다. 
                        특히 골절이나 인대 손상은 초기에는 통증이 크지 않지만, 
                        시간이 지나면서 심해질 수 있습니다. 
                        따라서 통증이나 부종이 있으면 즉시 병원을 방문하는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 겨울 야외 안전은 “완벽”보다 “준비”
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울을 즐기는 사람들은 더 강해서가 아니라, 준비가 습관이 된 경우가 많습니다.
                        신발, 목, 손발, 배터리, 동선만 챙겨도 겨울 밖 생활은 훨씬 편해집니다.
                      </Text>
                      <Text>
                        겨울 안전은 완벽한 준비보다는 기본적인 준비만 해도 
                        대부분의 사고를 예방할 수 있습니다. 
                        신발, 목 보호, 손발 보온, 배터리, 동선 공유 같은 
                        기본적인 준비만으로도 겨울 야외활동을 안전하게 즐길 수 있습니다. 
                        작은 준비가 큰 차이를 만듭니다.
                      </Text>

                      {/* 광고 3: 마지막 섹션 전 */}
                      <Box py={4} display="flex" justifyContent="center">
                    <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />
                  </Box>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          ❄️ 오늘의 한 줄: “춥다고 집에만 있지 말고, 준비하고 나가자”
                        </Text>
                        <Text color="#495057">
                          겨울은 위험이 섞여 있지만, 그만큼 분위기와 추억도 강한 계절입니다.
                          안전 수칙 12가지만 기억하면, 겨울의 좋은 순간을 더 오래 즐길 수 있습니다.
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
                      article.id !== '13' && 
                      article.category &&
                      (article.category === category || 
                       article.category.includes('안전') ||
                       article.category.includes('겨울'))
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

export default Blog13;