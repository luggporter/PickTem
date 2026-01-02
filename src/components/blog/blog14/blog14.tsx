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

const Blog14 = () => {
  const navigate = useNavigate();
  const title = '연말·크리스마스 데이트가 망하지 않는 12가지 체크리스트';
  const description =
    '사람 많은 날일수록 계획이 곧 안전이자 재미입니다. 예약/동선/대기/예산/사진 포인트까지 연말 데이트를 실패 없이 굴리는 12가지 체크리스트를 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}magazine/14`;
  const ogImage = `${baseUrl}/images/blog/blog14.png`;

  const publishedDate = '2024년 5월 10일';
  const author = '씩씩이';
  const category = '데이트·이벤트';
  const readTime = 12;

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
      logo: { '@type': 'ImageObject', url: `${baseUrl}/favicon.png` },
    },
    image: [ogImage],
    datePublished: '2024-05-10',
    dateModified: '2024-05-10',
    articleSection: category,
    keywords: `${category}, 크리스마스 데이트, 연말 데이트`,
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
        item: `${baseUrl}/magazine`,
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
        <meta name="keywords" content={`${category}, 크리스마스 데이트, 연말 데이트, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-05-10" />
        <meta property="article:modified_time" content="2024-05-10" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="크리스마스 데이트" />
        <meta property="article:tag" content="연말 데이트" />

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
                      연말 데이트는 "분위기"보다 "동선"이 승부입니다
                    </Text>
                    <Text mb={4}>
                      크리스마스, 연말, 불꽃축제, 야경 시즌… 다 좋죠. 문제는 그날이 되면 모든 게 동시에 벌어진다는 겁니다. 사람 많고, 줄 길고, 택시 안 잡히고, 예약은 매진이고, 추워서 예민해지고… 분위기 좋게 시작했는데 끝이 싸늘해지는 패턴이 생각보다 흔합니다.
                    </Text>
                    <Text mb={4}>
                      실제로 연말 데이트 실패의 주요 원인을 보면, "예상치 못한 대기 시간"이 1위를 차지합니다. 평소에는 10분이면 되는 식당 예약이 1시간 대기로 늘어나고, 평소에는 바로 잡히는 택시가 30분 이상 기다려야 하는 상황이 벌어집니다. 이런 변수들이 누적되면 서로의 감정도 급격히 내려갑니다.
                    </Text>
                    <Text mb={4}>
                      더 큰 문제는 연말 데이트의 "기대치"가 높다는 점입니다. SNS에 올라오는 완벽한 데이트 사진들, 로맨틱한 영화 속 장면들, 그리고 "올해 마지막 데이트"라는 압박감이 합쳐지면, 작은 실수나 지연도 크게 느껴집니다. 그래서 연말 데이트는 "감성"을 살리는 것만큼 "운영"이 중요합니다. 운영이 잘 되면 감성은 따라오고, 운영이 무너지면 감성도 같이 무너져요.
                    </Text>
                    <Text mb={4}>
                      아래 12가지는 그날을 망치지 않게 해주는 실전 체크리스트입니다. 각 항목은 실제 연말 데이트에서 가장 자주 발생하는 문제들을 기반으로 작성되었고, "예방"보다는 "대응"에 초점을 맞췄습니다. 완벽한 날을 만들려고 하지 말고, 변수를 최소화하는 것에 집중하세요.
                    </Text>
                    <Text>
                      포인트는 하나예요: <b>'기다림(대기)'과 '이동'의 스트레스를 줄이면</b> 데이트가 평화로워집니다. 연말 데이트의 성공은 화려한 장소나 비싼 선물이 아니라, 서로가 편안하게 시간을 보낼 수 있는 환경을 만드는 것입니다.
                    </Text>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 – 구글 */}
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
                      1) 예약은 '메인 1 + 서브 1'로 잡기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 변수(대기/지연/교통)가 커서 "하나만 예약"하면 리스크가 큽니다. 특히 인기 식당이나 카페는 예약 시간이 지나도 이전 손님들이 자리를 비우지 않아 대기 시간이 예상보다 길어질 수 있습니다. 메인 식당/카페/전시 중 하나는 확정하고, 근처에 <b>대안 플랜(서브 1)</b>을 준비해두세요.
                      </Text>
                      <Text>
                        대안 플랜을 준비할 때는 "메인 장소에서 도보 5분 이내" 거리를 기준으로 하세요. 너무 멀면 이동하는 것 자체가 스트레스가 됩니다. 예를 들어, 강남역 인기 식당을 예약했다면, 근처 지하상가 푸드코트나 포장 가능한 디저트 카페, 또는 따뜻한 실내 스팟(서점, 갤러리)을 서브로 정해두는 것입니다.
                      </Text>
                      <Text>
                        더 나은 방법은 서브 플랜도 미리 조사해두는 것입니다. "식당 예약이 무너지면 → 근처 푸드코트/포장 가능한 디저트/따뜻한 실내 스팟"이라고만 생각하지 말고, 구체적인 장소 이름과 위치, 영업 시간까지 확인해두세요. 급한 상황에서 "어디 갈까?"를 고민하는 시간 자체가 스트레스입니다.
                      </Text>
                      <Text>
                        '대안'이 있으면 둘 다 마음이 급해지지 않습니다. 예약이 무너져도 "괜찮아, 다른 곳 가면 되지"라는 여유가 생기고, 그 여유가 데이트의 분위기를 좌우합니다. 실제로 연말 데이트에서 가장 큰 감정 소모는 "예상치 못한 상황"이 아니라 "대안이 없어서 당황하는 순간"입니다.
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
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2) 동선은 "한 방향"으로, 되돌아가기 금지
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 이동 자체가 피곤합니다. 사람이 많아서 걸음이 느려지고, 신호등 대기 시간도 길어지고, 계단이나 엘리베이터도 대기가 길어집니다. 여기 갔다 저기 갔다 하면 다리도, 감정도 지쳐요. 특히 "아, 그쪽도 가야 하는데" 하면서 되돌아가면 체력 소모가 배가 됩니다.
                      </Text>
                      <Text>
                        동선은 지도 위에서 <b>한 방향으로 쭉</b> 가는 구조가 최고입니다. 예를 들어, 강남역에서 시작해서 압구정로데오 → 청담동 → 한남동 → 용산 → 귀가 이런 식으로 한 방향으로 흐르는 동선을 만드는 것입니다. 되돌아가는 구간이 없으면 이동 시간도 줄고, 피로도도 줄어듭니다.
                      </Text>
                      <Text>
                        더 중요한 것은 <b>"온도 밸런스"</b>입니다. "A(따뜻한 실내) → B(야외 포토) → C(따뜻한 실내) → 귀가" 이렇게 온도 밸런스를 섞어주세요. 야외만 연속으로 가면 체력 급락합니다. 특히 겨울에는 야외에서 30분만 서있어도 손발이 시려지고, 그게 감정에도 영향을 줍니다.
                      </Text>
                      <Text>
                        실전 팁: 동선을 계획할 때는 각 장소 사이의 이동 시간을 실제보다 1.5배로 계산하세요. 연말에는 평소보다 이동이 느려지기 때문입니다. 그리고 각 장소에서 머무를 시간도 여유 있게 잡아두세요. "빠르게 둘러보고 다음 장소로"라는 계획은 대부분 지켜지지 않습니다.
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
                      3) "대기 시간"을 이벤트로 바꾸기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        줄을 완전히 피하기는 어렵습니다. 연말에는 인기 장소마다 대기 줄이 생기고, 그 시간이 30분, 1시간으로 늘어나기도 합니다. 문제는 그 대기 시간 동안 서로가 할 말이 없어지거나, 각자 폰만 보게 되면서 분위기가 식는다는 점입니다. 대신 대기 시간을 '짜증'이 아니라 '콘텐츠'로 바꿔보세요.
                      </Text>
                      <Text>
                        가장 쉬운 건 작은 게임/질문 카드/사진 미션 같은 거예요. 예를 들어, "오늘 서로 사진 3장씩 찍어주기(컨셉: 영화 포스터)" 같은 미션을 주면 대기 시간 동안 자연스럽게 대화가 시작되고, 사진을 찍으면서 웃음도 나고, 결과물도 남게 됩니다. 또는 "올해 고마웠던 일 3개 말하기", "내년에 함께 하고 싶은 일 3가지" 같은 질문 카드를 미리 준비해두는 것도 좋습니다.
                      </Text>
                      <Text>
                        더 간단한 방법도 있습니다. "지금 보이는 사람 중 가장 재밌는 옷 입은 사람 찾기", "이 장소에서 가장 예쁜 조명 찾기", "지금까지 오늘 데이트에서 가장 좋았던 순간 말하기" 같은 즉석 미션들입니다. 중요한 것은 대기 시간이 '우리만의 시간'이 되도록 만드는 것입니다.
                      </Text>
                      <Text>
                        실제로 연말 데이트에서 가장 기억에 남는 순간들은 종종 "예상치 못한 대기 시간"에서 나옵니다. 계획대로만 흘러가는 데이트보다, 변수를 즐기면서 함께 시간을 보낸 데이트가 더 깊은 인상을 남기기 때문입니다. 대기 시간이 '우리만의 시간'이 되면 분위기가 살아납니다.
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
                        크리스마스 데이트 망하는 큰 원인은 "배고픔"과 "추위"입니다. 특히 손발이 차가워지면 말투도 딱딱해지고, 서로 예민해집니다. 실제로 체온이 떨어지면 뇌의 인지 기능도 저하되어, 평소에는 웃고 넘어갈 수 있는 작은 실수도 크게 느껴집니다.
                      </Text>
                      <Text>
                        핫팩은 '비상템'이 아니라 '분위기템'입니다. 장갑/목도리/넥워머/두꺼운 양말 같은 기본이 갖춰져야 야외 스팟이 즐거워져요. 특히 손과 발은 신체 말단이라 체온이 가장 먼저 떨어지는 부위입니다. 손이 시려지면 손을 잡는 것도 불편해지고, 발이 시려지면 걸음도 느려지고, 목이 시려지면 목소리 톤도 딱딱해집니다.
                      </Text>
                      <Text>
                        실전 팁: 핫팩은 손목과 발목에 붙이는 것이 가장 효과적입니다. 이 부위는 혈관이 가까이 있어서 체온 상승 효과가 큽니다. 그리고 핫팩은 미리 준비해두되, 너무 일찍 붙이지 마세요. 핫팩의 지속 시간은 보통 6~8시간인데, 너무 일찍 붙이면 나중에 효과가 떨어집니다. 야외 활동 전에 붙이는 것이 좋습니다.
                      </Text>
                      <Text>
                        더 중요한 것은 "예방"입니다. 추워지기 전에 미리 따뜻하게 입는 것이 핫팩보다 효과적입니다. 특히 목과 손목, 발목을 보온하면 체감 온도가 크게 달라집니다. 그리고 옷은 여러 겹으로 입되, 땀을 흡수할 수 있는 내의를 입는 것이 좋습니다. 땀이 나면 오히려 체온이 더 빨리 떨어지기 때문입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      5) 사진은 "포인트 2곳만" 찍고, 나머지는 눈으로 보기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        사진을 너무 많이 찍으면 계속 멈추게 되고, 계속 멈추면 추워지고, 계속 추우면 짜증이 납니다. 특히 연말 데이트에서는 "여기서도 한 장", "저기서도 한 장" 하면서 사진 찍는 데 시간을 너무 많이 쓰면, 실제로 데이트를 즐기는 시간이 줄어듭니다.
                      </Text>
                      <Text>
                        포토 스팟은 "정말 좋은 곳" 2군데만 정해두세요. 미리 조사해서 조명이 좋고, 배경이 예쁘고, 사람이 적은 시간대를 파악해두는 것이 좋습니다. 그리고 그 2곳에서만 제대로 된 사진을 찍고, 나머지 장소에서는 눈으로 보면서 즐기세요.
                      </Text>
                      <Text>
                        대신 사진 퀄리티는 올리기: 빛 좋은 곳(조명 아래), 안전한 발밑, 3초 멈추고 찍기. 특히 연말에는 조명이 중요한데, 트리 조명이나 거리 조명 아래에서 찍으면 훨씬 예쁘게 나옵니다. 그리고 발밑을 확인하는 것도 중요합니다. 미끄러운 곳이나 위험한 곳에서 사진을 찍다가 넘어지면 데이트가 망칩니다.
                      </Text>
                      <Text>
                        실전 팁: 사진을 찍을 때는 "3초 룰"을 지키세요. 즉, 자리를 잡고 3초간 멈춘 다음에 찍는 것입니다. 이렇게 하면 흔들림도 줄고, 표정도 자연스러워집니다. 그리고 사진을 찍는 사람도 "1, 2, 3"을 세면서 찍으면 더 좋습니다. 적게 찍어도 만족도가 커집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Box bg="gray.50" borderRadius="14px" p={6} border="1px solid" borderColor="gray.200" textAlign="center">
                    <Text fontSize="14px" color="gray.500">광고 슬롯</Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      6) 예산은 "세트 예산"으로: 식사+카페+이동+이벤트
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        연말엔 가격이 전체적으로 올라갑니다. 식당은 특별 메뉴로 가격이 올라가고, 카페는 시즌 한정 메뉴로 가격이 올라가고, 택시는 심야 할증이 붙고, 전시나 이벤트 입장료도 시즌 할증이 붙습니다. 그래서 항목별로 따로따로 쓰면 "생각보다 많이 썼네?"가 발생해요.
                      </Text>
                      <Text>
                        식사, 카페, 이동, 이벤트(전시/영화/입장료)를 한 묶음으로 보고 예산을 잡으면 스트레스가 줄어듭니다. 예를 들어, "오늘 데이트 예산 15만원"이라고 정해두고, 그 안에서 식사 8만원, 카페 3만원, 이동 2만원, 이벤트 2만원 이런 식으로 배분하는 것입니다. 이렇게 하면 각 항목에서 조금씩 초과하더라도 전체 예산을 벗어나지 않아서 마음이 편합니다.
                      </Text>
                      <Text>
                        팁: "오늘은 이벤트에 돈 쓰자" vs "오늘은 맛집에 돈 쓰자"처럼 메인을 하나 정하고, 나머지는 가볍게 가면 균형이 좋아요. 예를 들어, 오늘의 메인이 "크리스마스 마켓 입장료 + 체험"이라면, 식사는 가볍게 포장 음식이나 간단한 식당으로 가는 것입니다. 반대로 오늘의 메인이 "맛집 데이트"라면, 카페는 간단하게 가는 것입니다.
                      </Text>
                      <Text>
                        더 나은 방법은 예산을 미리 정해두고, 그 예산 안에서 선택지를 준비해두는 것입니다. "식사 예산 8만원"이라고 정해두면, 그 안에서 선택할 수 있는 식당 목록을 미리 조사해두는 것입니다. 이렇게 하면 현장에서 "여기 비싸네, 저기 가볼까?" 하면서 고민하는 시간이 줄어듭니다.
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
                        연말 밤은 택시가 정말 안 잡힐 수 있어요. 특히 크리스마스 이브나 연말 파티가 있는 날에는 택시 앱에서도 대기 시간이 30분 이상으로 나오는 경우가 많습니다. 그리고 택시가 잡혀도 심야 할증이 붙어서 예상보다 비쌀 수 있습니다.
                      </Text>
                      <Text>
                        귀가 루트는 "대중교통 + 택시"처럼 2개로 준비해두세요. 막차 시간도 '대충' 말고 정확히. 예를 들어, 지하철 막차가 12시라면, 그 전에 지하철로 갈 수 있는 루트를 하나 정해두고, 그 이후라면 택시나 심야 버스를 이용할 수 있는 루트를 또 하나 정해두는 것입니다.
                      </Text>
                      <Text>
                        더 나은 방법은 귀가 루트를 미리 조사해두는 것입니다. 현재 위치에서 집까지 가는 방법을 여러 개 조사해두고, 각 방법의 소요 시간과 비용을 비교해두는 것입니다. 이렇게 하면 현장에서 "어떻게 갈까?" 하면서 고민하는 시간이 줄어듭니다.
                      </Text>
                      <Text>
                        귀가 스트레스는 데이트의 마지막 인상을 망칩니다. 하루 종일 좋은 시간을 보냈는데, 마지막에 택시를 잡지 못해서 서로 초조해지고, 그 초조함이 데이트의 전체 기억을 망칠 수 있습니다. 마지막 30분을 편하게 만들면 전체 만족도가 올라갑니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      8) 소음 많은 곳 다음엔 '조용한 곳'을 끼우기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        축제/번화가/시장 같은 곳은 재밌지만 에너지가 빨리 소모됩니다. 사람이 많고, 소음이 크고, 시각적 자극이 많아서 뇌가 계속 활성화되기 때문입니다. 실제로 이런 곳에서 2~3시간만 있어도 정신적으로 피곤해집니다.
                      </Text>
                      <Text>
                        다음 코스에 조용한 카페, 산책로, 전망대처럼 "회복 스팟"을 하나 넣으면 데이트가 길게 갑니다. 예를 들어, 크리스마스 마켓에서 2시간을 보낸 다음, 근처 조용한 카페에서 30분~1시간 정도 쉬는 것입니다. 이렇게 하면 에너지를 회복할 수 있고, 그동안 대화도 나눌 수 있습니다.
                      </Text>
                      <Text>
                        회복 스팟을 선택할 때는 "소음이 적고, 앉을 수 있고, 따뜻한 곳"을 기준으로 하세요. 특히 겨울에는 따뜻한 실내 공간이 중요합니다. 그리고 회복 스팟에서는 각자 폰을 보지 말고, 대화를 나누거나 조용히 쉬는 것이 좋습니다.
                      </Text>
                      <Text>
                        사람 많은 곳만 연속으로 돌면 "우리가 왜 여기 있지?" 모드가 쉽게 옵니다. 처음에는 재밌었던 것도, 계속 사람이 많고 시끄러운 곳에 있으면 피로가 누적되어서 데이트의 재미가 떨어집니다. 회복 스팟을 중간중간 끼워넣으면 데이트의 질이 달라집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      9) 선물은 비싸게가 아니라 "상황 맞춤"이 최고
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        선물은 가격보다 '상황 맞춤'이 기억에 남습니다. 상대방이 실제로 필요로 하는 것, 또는 지금 당장 쓸 수 있는 것을 주는 것이 비싼 선물보다 훨씬 의미 있습니다. 예를 들어, 손이 잘 트는 사람에게 핸드크림+장갑, 추위 많이 타면 넥워머, 커피 좋아하면 원두/텀블러 같은 것입니다.
                      </Text>
                      <Text>
                        선물을 고를 때는 "상대방이 평소에 말했던 것"을 기억해두는 것이 좋습니다. "손이 트네", "추워 죽겠다", "커피 맛있네" 같은 일상적인 말들 속에 선물 힌트가 숨어있습니다. 그리고 선물은 "데이트 중에 바로 쓸 수 있는 것"이면 더 좋습니다. 예를 들어, 데이트 중에 바로 입을 수 있는 장갑이나 넥워머 같은 것입니다.
                      </Text>
                      <Text>
                        연말엔 물건이 넘치기 쉬워서, "바로 쓰는 것"이 만족도가 훨씬 높습니다. 선물을 받아도 집에 가서 쌓아두게 되면 기억에서도 희미해지지만, 데이트 중에 바로 쓰면 그 순간이 기억에 남습니다. 그리고 "지금 당장 필요한 것"을 주는 것이 "나중에 쓸 것"을 주는 것보다 훨씬 실용적입니다.
                      </Text>
                      <Text>
                        더 나은 방법은 선물을 미리 준비해두되, 데이트 중에 자연스럽게 주는 것입니다. 예를 들어, 추워 보일 때 "이거 입어봐" 하면서 넥워머를 주는 것입니다. 이렇게 하면 선물이 "의무"가 아니라 "배려"로 느껴집니다.
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
                        현실 꿀팁: 연말 데이트는 화장실/충전/실내 대피처가 있으면 승리합니다. 특히 야외 행사가 포함되면 더더욱요. 연말 데이트에서 가장 스트레스 받는 순간 중 하나는 "화장실이 급한데 찾을 수 없을 때", "폰 배터리가 떨어져서 연락이 안 될 때", "너무 추워서 들어갈 곳이 없을 때"입니다.
                      </Text>
                      <Text>
                        화장실 위치는 미리 조사해두세요. 특히 야외 행사장이나 번화가에서는 화장실이 생각보다 적거나, 줄이 길 수 있습니다. 근처 쇼핑몰이나 카페의 화장실 위치를 미리 파악해두면 급할 때 당황하지 않습니다.
                      </Text>
                      <Text>
                        폰 충전도 미리 해두세요. 연말 데이트는 사진을 많이 찍고, 지도를 자주 확인하고, 택시 앱을 사용하기 때문에 배터리 소모가 큽니다. 보조 배터리를 챙기거나, 충전 가능한 카페나 쇼핑몰의 위치를 미리 파악해두는 것이 좋습니다.
                      </Text>
                      <Text>
                        "추울 때 들어갈 곳"을 알고 있으면 마음이 느긋해지고, 느긋하면 말투가 부드러워집니다. 특히 야외에서 오래 있으면 체온이 떨어지고, 그게 감정에도 영향을 줍니다. 근처 따뜻한 실내 공간(카페, 쇼핑몰, 전시관)을 미리 파악해두면, 추워질 때 바로 들어갈 수 있어서 스트레스가 줄어듭니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      11) 약속 시간은 10~20분 '완충'이 필요합니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 이동이 늦어지기 쉬워요(눈/빙판/대중교통 지연/택시 대기). 특히 연말에는 사람이 많아서 대중교통도 지연되고, 택시도 잡기 어렵고, 도보 이동도 느려집니다. 평소에는 30분이면 가는 거리가 50분이 걸릴 수도 있습니다.
                      </Text>
                      <Text>
                        딱 맞춰 움직이면 서로 초조해집니다. "늦으면 어떡하지?", "약속 시간에 못 가면 어떡하지?" 하면서 불안해지고, 그 불안함이 데이트의 분위기를 망칠 수 있습니다. 10~20분 완충 시간을 넣으면 데이트 톤이 달라져요.
                      </Text>
                      <Text>
                        예를 들어, 식당 예약이 7시라면, 6시 40분~6시 50분 사이에 도착할 수 있도록 계획을 세우는 것입니다. 이렇게 하면 약간 늦어져도 여유가 있고, 일찍 도착하면 근처 카페에서 잠시 쉴 수 있습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 각 장소 사이의 이동 시간을 실제보다 1.5배로 계산하는 것입니다. 예를 들어, 평소에는 20분이면 가는 거리라면, 연말 데이트에서는 30분으로 계산하는 것입니다. 이렇게 하면 예상치 못한 지연에도 대응할 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      12) '한 문장'으로 마무리하면 기억이 좋아집니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        데이트가 끝날 때 "오늘 어땠어?" 대신 한 문장으로 마무리해보세요. "오늘 어땠어?"는 너무 일반적인 질문이라서, 상대방도 "좋았어" 같은 일반적인 답변을 하게 됩니다. 대신 구체적인 한 문장으로 마무리하면 그 순간이 기억에 남습니다.
                      </Text>
                      <Text>
                        예를 들어, "오늘 제일 좋았던 순간은 너랑 트리 앞에서 웃었던 거." 같은 것입니다. 이렇게 하면 상대방도 그 순간을 떠올리게 되고, 그 순간의 감정이 다시 살아납니다. 그리고 다음에 만날 때도 그 순간을 기억하게 됩니다.
                      </Text>
                      <Text>
                        한 문장 마무리의 핵심은 "구체적"이고 "긍정적"이어야 한다는 것입니다. "오늘 좋았어"보다는 "오늘 너랑 카페에서 이야기한 시간이 좋았어"가 더 기억에 남습니다. 그리고 가능하면 "우리"가 함께 한 순간을 언급하는 것이 좋습니다.
                      </Text>
                      <Text>
                        이 한 문장이 다음 데이트도 부드럽게 만듭니다. 다음에 만날 때 "저번에 트리 앞에서 웃었던 거 기억나?" 하면서 자연스럽게 대화를 시작할 수 있고, 그 순간의 긍정적인 감정이 다시 살아납니다. 데이트의 마무리는 그날의 인상을 좌우합니다.
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
                        연말엔 사람이 많아서 '완벽한 날'이 되기 어렵습니다. 예상치 못한 대기, 지연, 변수들이 생기기 마련입니다. 하지만 완벽하지 않아도 "운영을 잘해서 좋은 날"은 만들 수 있어요. 예약/동선/대기/추위/귀가만 잡아도, 분위기는 자연스럽게 따라옵니다.
                      </Text>
                      <Text>
                        실제로 연말 데이트의 성공은 화려한 장소나 비싼 선물이 아니라, 서로가 편안하게 시간을 보낼 수 있는 환경을 만드는 것입니다. 그리고 그 환경은 미리 준비하고, 변수에 대응할 수 있는 계획을 세우는 것에서 나옵니다.
                      </Text>
                      <Text>
                        위의 12가지 체크리스트는 각각이 독립적인 팁이 아니라, 서로 연결되어 있습니다. 예약을 잘 잡고(1번), 동선을 한 방향으로 계획하고(2번), 대기 시간을 즐기고(3번), 추위를 대비하고(4번), 사진은 적게 찍고(5번), 예산을 세트로 잡고(6번), 귀가 루트를 준비하고(7번), 회복 스팟을 끼워넣고(8번), 선물은 상황 맞춤으로 하고(9번), 화장실/충전/대피처를 체크하고(10번), 완충 시간을 넣고(11번), 한 문장으로 마무리하면(12번) 연말 데이트가 성공적으로 끝납니다.
                      </Text>
                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          🎄 오늘의 한 줄: "기다림을 줄이면, 웃음이 늘어난다"
                        </Text>
                        <Text color="#495057" mb={3}>
                          연말은 바쁘고 북적이지만, 그만큼 기억도 강하게 남는 시즌입니다. 체크리스트 12가지만 챙기고, 서로에게 조금 더 친절한 하루로 만들어보세요.
                        </Text>
                        <Text color="#495057">
                          그리고 기억하세요. 연말 데이트의 목적은 "완벽한 하루"가 아니라 "함께 좋은 시간을 보내는 것"입니다. 작은 실수나 변수가 있어도, 서로에게 친절하고 여유롭게 대하면 그 하루는 성공입니다.
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
                      article.id !== '14' && 
                      (article.category === category || 
                       article.category.includes('데이트') ||
                       article.category.includes('이벤트'))
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

export default Blog14;