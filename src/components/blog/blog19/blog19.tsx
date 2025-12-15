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

const Blog19 = () => {
  const navigate = useNavigate();
  const title =
    '크리스마스·연말 이벤트 200% 즐기는 체크리스트 15가지: 약속, 선물, 장소, 예산까지';
  const description =
    '크리스마스/연말에 “뭘 해야 하지?” 고민을 줄여주는 실전 체크리스트 15가지. 데이트·친구·가족 모임까지 상황별로 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/19`;
  const ogImage = `${baseUrl}/images/blog/blog19.png`;

  const publishedDate = '2024년 5월 25일';
  const author = '씩씩이';
  const category = '이벤트·데이트';
  const readTime = 10;

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
    datePublished: '2024-05-25',
    dateModified: '2024-05-25',
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
              {/* 헤더 */}
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

                <HStack spacing={4} fontSize="14px" color="#868e96" flexWrap="wrap">
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
              <Box borderRadius="20px" overflow="hidden" w="100%" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog19.png"
                  alt="야외 크리스마스 마켓의 조명과 사람들, 따뜻한 분위기"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              {/* 본문 */}
              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  {/* 인트로 */}
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      “올해는 좀 제대로 즐기고 싶은데… 왜 매번 급하게 끝날까?”
                    </Text>
                    <Text mb={4}>
                      크리스마스랑 연말은 이상하게 시간이 빨리 지나갑니다.
                      약속은 겹치고, 선물은 늦어지고, 예약은 이미 마감이고…
                      결국 “사진 몇 장 찍고 집”으로 끝나는 경우도 많죠.
                    </Text>
                    <Text mb={4}>
                      그래서 이 글은 분위기 감성 글이 아니라, <b>진짜 실전에 쓰는 체크리스트</b>입니다.
                      데이트든, 친구 모임이든, 가족 행사든 “망하지 않게” 만드는 현실 팁으로만 구성했어요.
                      (그리고 너무 빡세게 하지 마세요. 연말은 원래 변수가 많습니다.)
                    </Text>
                    <Text>
                      아래 체크리스트는 <b>1) 일정/동선</b> → <b>2) 예산</b> → <b>3) 선물</b> → <b>4) 장소/예약</b> →
                      <b>5) 당일 운영</b> 순서로 읽으면 제일 빠르게 정리됩니다.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

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
                      1. 일정·동선 체크리스트 4가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>1) “메인 이벤트 1개 + 서브 2개”만 잡기</b><br />
                        연말에 제일 흔한 실패가 “욕심”입니다. 마켓 → 카페 → 식당 → 사진 → 2차까지 다 하려다
                        동선 꼬이고 지치고 싸우는 루트가 나와요. 메인(예: 트리/마켓/공연)을 하나만 잡고,
                        나머지는 근처에서 짧게 끝나는 옵션으로 두는 게 승률이 높습니다.
                      </Text>

                      <Text>
                        <b>2) 이동은 ‘갈 때’보다 ‘돌아올 때’가 핵심</b><br />
                        크리스마스/연말 시즌엔 막차·택시·대리·주차가 변수입니다.
                        “집에 어떻게 갈지”를 미리 정하면 당일 스트레스가 확 줄어요.
                      </Text>

                      <Text>
                        <b>3) 추위 대비는 ‘예쁜 옷’보다 ‘덜 짜증나는 옷’</b><br />
                        실외에서 오래 서 있거나 걷는 일정이면, 추위가 곧 감정이 됩니다.
                        장갑/귀마개/핫팩/목도리 같은 작은 것들이 분위기를 지키는 장비예요.
                      </Text>

                      <Text>
                        <b>4) 예약은 “가능하면”이 아니라 “필수면 무조건”</b><br />
                        특별한 레스토랑/바/사진 스팟은 당일에 들어가기 어려운 경우가 많습니다.
                        꼭 가야 하는 곳이면 예약이 안전하고, 아니라면 “대체 플랜”을 같이 적어두세요.
                      </Text>
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

                  {/* 광고 넣기 좋은 구간 */}
                  <Box>
                    <Text fontSize="14px" color="#868e96">
                      ※ (여기 광고 넣기 좋음) 일정/동선 섹션 끝난 직후
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      2. 예산 스트레스 줄이는 체크리스트 4가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>5) 예산은 “총액” 말고 “카테고리 쪼개기”</b><br />
                        식사/카페/교통/선물/체험(티켓)으로 나눠서 각각 상한선을 잡으면,
                        당일에 “이거 하나 더”가 누적되는 걸 막을 수 있어요.
                      </Text>

                      <Text>
                        <b>6) 비싼 곳 1번 + 가성비 2번이 만족도가 높습니다</b><br />
                        모든 걸 고급으로 하면 지출도 크고, 기대치도 올라갑니다.
                        오히려 “한 번만 제대로”하고 나머지는 가볍게 구성하면
                        만족감이 더 오래갑니다.
                      </Text>

                      <Text>
                        <b>7) 사진/추억 비용은 “작게 자주”가 이득</b><br />
                        비싼 촬영보다, 폰으로 찍어도 좋은 스팟 2~3개를 정하는 게 현실적으로 좋습니다.
                        (중요한 건 기록이지 장비가 아니더라고요.)
                      </Text>

                      <Text>
                        <b>8) ‘서프라이즈’는 예산을 깨기 쉬운 함정</b><br />
                        깜짝 이벤트를 하려면 “얼마까지”를 먼저 정하세요.
                        서프라이즈가 성공하려면, 돈보다 동선·타이밍·상대 컨디션이 더 중요합니다.
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
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 선물 실패 안 하는 체크리스트 5가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>9) 선물은 “취향”보다 “사용 빈도”를 먼저 본다</b><br />
                        취향이 정확히 맞으면 최고지만, 틀리면 애매합니다.
                        반면 자주 쓰는 카테고리(보온/텀블러/향/장갑/소형 액세서리)는
                        실패 확률이 낮아요.
                      </Text>

                      <Text>
                        <b>10) ‘사이즈/색상’은 웬만하면 피하기</b><br />
                        옷/신발/향수는 난이도가 높습니다. 정말 확신이 없다면,
                        교환이 쉬운 형태(기프트카드/상품권/교환 가능 브랜드)가 현실적으로 좋아요.
                      </Text>

                      <Text>
                        <b>11) 배송 일정은 “하루 전”이 아니라 “3~5일 전”</b><br />
                        연말에는 배송이 밀릴 수 있습니다. 늦으면 선물도 분위기도 같이 늦어져요.
                        가능하면 미리 준비해두는 게 마음 편합니다.
                      </Text>

                      <Text>
                        <b>12) 작은 카드/메시지가 선물의 체감 가치를 올립니다</b><br />
                        가격보다 “왜 이걸 골랐는지”가 기억에 남습니다.
                        한 줄이라도 이유를 적으면 선물이 훨씬 살아나요.
                      </Text>

                      <Text>
                        <b>13) ‘내가 받고 싶은 것’이 아니라 ‘상대가 덜 불편한 것’</b><br />
                        집에 두기 부담스러운 대형 물건, 관리가 필요한 물건은
                        받는 사람에겐 스트레스가 될 수 있어요. 가볍고 실용적인 쪽이 오래 갑니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 넣기 좋은 구간 */}
                  <Box>
                    <Text fontSize="14px" color="#868e96">
                      ※ (여기 광고 넣기 좋음) 선물 파트 끝난 직후
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 4 */}
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
                      4. 당일 “분위기 지키는” 마지막 2가지
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>14) 배고픔은 갈등을 부릅니다 (진짜로)</b><br />
                        연말에 사람 많고 대기 길면, 배고픔이 곧 예민함이 됩니다.
                        작은 간식 하나(초콜릿/견과류/에너지바) 챙기면 싸움 확률이 내려가요.
                      </Text>

                      <Text>
                        <b>15) ‘기대치’를 맞추면 만족도가 올라갑니다</b><br />
                        “오늘 엄청 로맨틱할 거야!”보다, “사람 많을 수 있는데 우리 재밌게 놀자”
                        같은 기대치 조정이 더 중요해요. 연말엔 변수가 많아서,
                        기대치만 잘 맞춰도 하루가 훨씬 부드럽게 흘러갑니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      마무리: 연말은 "완벽"보다 "기억"이 남습니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        연말은 모든 게 빡빡하고, 사람도 많고, 변수도 많아요.
                        그래서 완벽하게 하려는 순간 피곤해집니다.
                        대신 체크리스트로 핵심만 잡아두면 “아쉽지 않은 하루”가 됩니다.
                      </Text>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontSize={{ base: '16px', md: '17px' }} fontWeight="600" mb={2}>
                          🎄 오늘의 한 줄: “연말은 계획보다, ‘운영’이 반이다”
                        </Text>
                        <Text color="#495057">
                          동선·예약·예산만 정리해도, 나머지는 자연스럽게 즐길 여유가 생깁니다.
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

export default Blog19;