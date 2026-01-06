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

const Blog17 = () => {
  const navigate = useNavigate();
  const title = '겨울 데이트 코스 실패 없는 공식 10가지: 추위·대기·동선까지 설계하는 법';
  const description =
    '겨울 데이트는 “추위/대기/이동” 변수가 커서 코스 설계가 중요합니다. 실패 확률을 낮추는 동선 공식 10가지를 실제 예시와 함께 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}magazine/17`;
  const ogImage = `${baseUrl}/images/blog/blog17.png`;

  const publishedDate = '2024년 5월 19일';
  const author = '씩씩이';
  const category = '데이트·이벤트';
  const readTime = 14;

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
    datePublished: '2024-05-19',
    dateModified: '2024-05-19',
    articleSection: category,
    keywords: `${category}, 겨울 데이트, 데이트 코스`,
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
        <meta name="keywords" content={`${category}, 겨울 데이트, 데이트 코스, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-05-19" />
        <meta property="article:modified_time" content="2024-05-19" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="겨울 데이트" />
        <meta property="article:tag" content="데이트 코스" />

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
                  src="/images/blog/blog17.png"
                  alt="겨울 밤거리에서 데이트하는 커플, 따뜻한 조명과 감성적인 분위기"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  {/* 인트로 */}
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      겨울 데이트는 "분위기"보다 "설계"가 먼저입니다
                    </Text>
                    <Text mb={4}>
                      겨울 데이트가 유독 어렵게 느껴지는 이유는 간단해요. 예쁜 데는 많지만, 동시에 <b>추위 + 대기줄 + 이동</b>이라는 변수가 커집니다. 코스가 조금만 삐끗해도 "춥다 → 짜증 → 피곤" 루트로 가기 쉬운 계절이죠.
                    </Text>
                    <Text mb={4}>
                      실제로 겨울 데이트에서 가장 자주 발생하는 문제는 "예상치 못한 추위"와 "예상치 못한 대기"입니다. 예를 들어, 야외 포토 스팟에서 사진을 찍다가 너무 오래 서있어서 손발이 시려지거나, 인기 식당에서 예상보다 오래 기다려서 배고픔과 추위가 겹치는 경우입니다. 이런 변수들이 누적되면 서로의 감정도 급격히 내려갑니다.
                    </Text>
                    <Text mb={4}>
                      그래서 겨울 데이트는 센스보다 <b>동선 설계</b>가 승부입니다. 완벽한 장소를 찾는 것보다, 추위와 대기를 최소화하는 동선을 만드는 것이 중요합니다. 아래 10가지 공식은 '어디를 가라'가 아니라 '어떤 원리로 짜면 실패 확률이 낮아지는지'를 정리한 가이드예요.
                    </Text>
                    <Text>
                      각 공식은 실제 겨울 데이트에서 가장 자주 발생하는 문제들을 기반으로 작성되었고, "이론"보다는 "실전"에 초점을 맞췄습니다. 완벽한 데이트를 만들려고 하지 말고, 변수를 최소화하는 것에 집중하세요.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 – 카카오 */}
                  <Box py={4} display="flex" justifyContent="center">
                    <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />
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
                      1) 겨울 데이트 코스 공식 10가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>1. "실외 1 : 실내 2" 비율로 잡기</b><br />
                        겨울엔 실외를 많이 넣으면 체력이 빨리 소모됩니다. 추위에 노출되면 체온이 떨어지고, 체온이 떨어지면 피로감이 올라갑니다. 야외는 포인트만(야경/마켓/산책 20~40분) 넣고, 메인은 실내로 잡는 게 만족도가 높습니다. 예를 들어, 3시간 데이트라면 야외 1시간, 실내 2시간으로 구성하는 것입니다. 이렇게 하면 추위에 오래 노출되지 않아서 체력이 유지되고, 감정도 안정적입니다.
                      </Text>

                      <Text>
                        <b>2. 첫 장소는 '바로 따뜻한 곳'으로 시작</b><br />
                        시작부터 추우면 컨디션이 내려가요. 체온이 떨어지면 뇌의 인지 기능도 저하되어, 평소에는 웃고 넘어갈 수 있는 작은 실수도 크게 느껴집니다. 첫 장소는 카페/전시/실내 마켓처럼 몸이 풀리는 공간이 베스트입니다. 이렇게 하면 데이트 시작부터 편안한 상태를 유지할 수 있고, 그 편안함이 전체 데이트의 분위기를 좌우합니다.
                      </Text>

                      <Text>
                        <b>3. 이동은 "한 번만 길게", 나머지는 짧게</b><br />
                        "여기 갔다가 저기 갔다가"가 겨울에 제일 힘듭니다. 이동 자체가 피곤하고, 이동 중에는 추위에 노출되기 때문입니다. 핵심 지역 1곳을 정하고 그 안에서 움직이는 방식이 좋아요. 예를 들어, 강남역을 중심으로 강남역 → 압구정로데오 → 청담동 → 한남동 이런 식으로 한 지역 안에서 움직이는 것입니다. 이렇게 하면 이동 시간이 줄고, 피로도도 줄어듭니다.
                      </Text>

                      <Text>
                        <b>4. 대기줄 많은 곳은 '중간'이 아니라 '초반 or 끝'</b><br />
                        줄 서는 시간을 코스 중간에 넣으면 흐름이 끊깁니다. 예를 들어, 식당에서 1시간 기다리면 그 시간 동안 추위에 노출되고, 배고픔도 누적됩니다. 초반에 기다리고 시작하거나, 끝에 넣고 마무리로 쓰는 게 안정적입니다. 초반에 기다리면 아직 체력이 있어서 견딜 수 있고, 끝에 넣으면 이미 데이트의 대부분을 즐겼기 때문에 대기 시간이 부담스럽지 않습니다.
                      </Text>

                      <Text>
                        <b>5. "따뜻한 메뉴"를 중간중간 심어두기</b><br />
                        국물/핫초코/따뜻한 디저트는 기분을 리셋해줍니다. 겨울엔 메뉴 선택도 데이트 설계에 포함됩니다. 예를 들어, 야외 활동 후에는 따뜻한 국물 요리를 먹고, 카페에서는 핫초코나 따뜻한 차를 마시는 것입니다. 이렇게 하면 체온을 회복할 수 있고, 그 회복이 감정에도 긍정적인 영향을 줍니다.
                      </Text>

                      <Text>
                        <b>6. 사진 스팟은 2개만 '확정'하고 나머진 유동</b><br />
                        사진 욕심이 늘면 야외 체류가 늘고 피로도가 올라가요. "여기에서만 제대로 찍자" 2곳만 잡아두면 훨씬 편합니다. 그리고 그 2곳에서만 제대로 된 사진을 찍고, 나머지 장소에서는 눈으로 보면서 즐기는 것입니다. 이렇게 하면 사진 찍는 데 시간을 너무 많이 쓰지 않아서 데이트를 즐기는 시간이 늘어납니다.
                      </Text>

                      <Text>
                        <b>7. 실내 활동 1개는 '체험형'으로</b><br />
                        전시/보드게임/향수 만들기/원데이클래스처럼 "함께 하는 감각"이 들어가면 추억 밀도가 확 올라갑니다. 단순히 보는 것보다 함께 무언가를 만드거나 경험하는 것이 더 깊은 인상을 남깁니다. 그리고 체험형 활동은 실내에서 하기 때문에 추위에 노출되지 않아서 편안하게 즐길 수 있습니다.
                      </Text>

                      <Text>
                        <b>8. 화장실/주차/환승 포인트를 '한 번' 체크</b><br />
                        사소한데 결정적입니다. "화장실 어디지?" "주차 어디야?"는 분위기 깨짐 트리거예요. 급할 때 화장실을 찾지 못하거나, 주차를 찾지 못하면 스트레스가 커집니다. 미리 파악해두면 당황하지 않고 대응할 수 있습니다.
                      </Text>

                      <Text>
                        <b>9. 귀가 루트는 '체력 남을 때' 결정</b><br />
                        막판에 피곤하면 의사결정이 둔해집니다. "택시/버스/지하철 어느 쪽"을 미리 정해두면 싸움 확률이 줄어요. 그리고 귀가 루트를 미리 정해두면 마지막에 당황하지 않고 편안하게 귀가할 수 있습니다.
                      </Text>

                      <Text>
                        <b>10. 마지막은 '따뜻하고 조용한 곳'으로 마무리</b><br />
                        마지막이 편하면 전체 기억이 좋아집니다. 시끄러운 곳보다 대화 가능한 곳(디저트/와인/티)로 마무리하는 걸 추천합니다. 이렇게 하면 데이트의 마지막 인상이 좋아지고, 그 좋은 인상이 전체 데이트의 기억을 좌우합니다.
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
                      2) 코스 예시 3개: 그대로 써먹는 조합
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>예시 A) 감성 야경 데이트</b><br />
                        카페(시작, 1시간) → 야경 산책 30분(포인트) → 따뜻한 국물/디저트(리셋, 1시간) → 조용한 실내(마무리, 30분~1시간)<br />
                        이 코스는 "실외 1 : 실내 2" 비율을 지키고, 첫 장소를 따뜻한 카페로 시작하며, 야외 활동 후 따뜻한 음식으로 체온을 회복하고, 마지막을 조용한 실내로 마무리하는 구조입니다. 총 소요 시간은 약 3~4시간이며, 추위에 노출되는 시간을 최소화하면서도 야경의 감성을 즐길 수 있습니다.
                      </Text>
                      <Text>
                        <b>예시 B) 체험형 데이트</b><br />
                        실내 체험(향수/클래스/전시, 1.5~2시간) → 맛집(대기 짧은 곳, 1시간) → 보드게임/영화(따뜻하게, 2시간) → 산책 15분(짧게)<br />
                        이 코스는 실내 활동을 중심으로 구성되어 있어서 추위에 거의 노출되지 않습니다. 체험형 활동으로 함께 무언가를 만들거나 경험하고, 그 경험을 바탕으로 대화를 나누면서 시간을 보내는 구조입니다. 총 소요 시간은 약 4~5시간이며, 추위 걱정 없이 편안하게 즐길 수 있습니다.
                      </Text>
                      <Text>
                        <b>예시 C) 마켓/이벤트 데이트</b><br />
                        실내 대기 적은 카페(30분) → 마켓/축제(핵심, 1~1.5시간) → 핫푸드(손 녹이기, 30분) → 포토스팟 1곳(15분) → 귀가 루트 확정<br />
                        이 코스는 야외 이벤트를 즐기되, 중간중간 따뜻한 곳으로 들어가서 체온을 회복하는 구조입니다. 마켓이나 축제는 야외에서 진행되지만, 핫푸드를 먹으면서 따뜻한 실내로 들어가고, 포토스팟은 1곳만 정해서 사진 찍는 시간을 최소화합니다. 총 소요 시간은 약 2.5~3시간이며, 야외 이벤트를 즐기면서도 추위에 오래 노출되지 않습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 광고 3: 마지막 섹션 전 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-qRlpXvY15cfMPpl0"
                    adWidth={300}
                    adHeight={250}
                  />

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
                      마무리: “좋은 코스”는 사랑이 아니라 동선에서 나옵니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        겨울 데이트는 마음만 있으면 되는 계절이 아니라, <b>동선을 잘 짜면 자동으로 분위기가 살아나는 계절</b>입니다. 완벽한 장소를 찾는 것보다, 추위와 대기를 최소화하는 동선을 만드는 것이 중요합니다. 오늘 공식 중에서 3개만 적용해도 "오 이거 편하다" 느낌이 확 올 거예요.
                      </Text>
                      <Text>
                        위의 10가지 공식은 각각이 독립적인 팁이 아니라, 서로 연결되어 있습니다. "실외 1 : 실내 2" 비율을 지키고(1번), 첫 장소를 따뜻한 곳으로 시작하고(2번), 이동을 최소화하고(3번), 대기줄을 초반이나 끝에 배치하고(4번), 따뜻한 메뉴를 중간중간 넣고(5번), 사진 스팟을 2개만 확정하고(6번), 체험형 활동을 하나 넣고(7번), 화장실/주차/환승 포인트를 체크하고(8번), 귀가 루트를 미리 정하고(9번), 마지막을 따뜻하고 조용한 곳으로 마무리하면(10번) 겨울 데이트가 성공적으로 끝납니다.
                      </Text>
                      <Text>
                        기억하세요. 겨울 데이트의 목표는 "완벽한 하루"가 아니라 "편안하게 즐기는 하루"입니다. 작은 준비 하나하나가 그 목표를 달성하는 데 도움이 됩니다.
                      </Text>
                      {/* 마지막 카카오 광고 블록 제거 (상단에만 배치) */}

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontSize={{ base: '16px', md: '17px' }} fontWeight="600" mb={2}>
                          ❄️ 오늘의 한 줄: "겨울엔 '따뜻한 동선'이 최고의 매너"
                        </Text>
                        <Text color="#495057" mb={3}>
                          추위를 줄이고, 대기를 줄이고, 이동을 줄이면 대화와 분위기는 자동으로 늘어납니다.
                        </Text>
                        <Text color="#495057">
                          그리고 기억하세요. 겨울 데이트의 성공은 "완벽한 계획"이 아니라 "편안한 동선"입니다. 위의 공식을 참고해서 자신에게 맞는 데이트 코스를 설계하시기 바랍니다.
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
                      article.id !== '17' && 
                      article.category &&
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

export default Blog17;