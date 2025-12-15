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

const Blog4 = () => {
  const navigate = useNavigate();
  const title =
    '조명만 바꿔도 집 분위기가 달라지는 이유: 공간을 따뜻하게 만드는 조명 배치 공식';
  const description =
    '전구 하나, 조명 위치 하나만 바꿔도 공간 분위기가 완전히 달라집니다. 색온도·조도·조명 배치·심리 효과까지 모두 포함한 조명 인테리어 완전 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/4`;
  const ogImage = `${baseUrl}images/blog/blog4.png`;

  const publishedDate = '2024년 2월 12일';
  const author = '아리';
  const category = '홈 인테리어';
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
    datePublished: '2024-02-12',
    dateModified: '2024-02-12',
  };

  return (
    <>
      {/* SEO */}
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

                    <Text>
                      이 글에서는 조명 이론부터 실전 설치법, 방 종류별 권장 조명까지
                      “지금 당장 집을 예쁘게 만드는 조명 가이드”를 아주 자세하게 담았습니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

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

                      <Text fontWeight="600">② 인간의 감정은 빛의 색에 반응한다</Text>
                      <Text>
                        연구에 따르면 따뜻한 조명은 스트레스를 완화하고 안정감을 주며,
                        차가운 조명은 집중력과 각성도를 높입니다.  
                        즉 **집에서는 따뜻한 조명**, **업무 공간에서는 자연광 또는 주광색**이 가장 적합합니다.
                      </Text>

                      <Text fontWeight="600">③ 조명은 “공간의 깊이감”을 만든다</Text>
                      <Text>
                        벽 쪽에 조명이 있으면 공간이 넓어 보이고, 천장 위를 비추는 간접등을 쓰면
                        천장이 높아 보이는 효과가 있습니다. 조명이 그림자를 어떻게 만들고,
                        어떤 면을 강조하는지에 따라 공간 인상이 완전히 달라집니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

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

                      <Text fontWeight="600">② 4000K – 자연광 느낌</Text>
                      <Text>
                        노랑도 하양도 아닌 딱 중간 밝기.  
                        활동적인 느낌을 주기 때문에  
                        ✔ 주방 ✔ 옷방 ✔ 화장실 등에 적합합니다.
                      </Text>

                      <Text fontWeight="600">③ 5700K ~ 6500K – 주광색(하얀 빛)</Text>
                      <Text>
                        집중력과 각성도를 높여주는 색입니다.  
                        하지만 가정에서는 차갑고 딱딱해 보일 수 있기 때문에 과하게 사용하면 집이
                        병원처럼 보일 수 있습니다.  
                        ✔ 공부방 ✔ 작업실 ✔ 데스크 조명에서만 부분적으로 사용하세요.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

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

                      <Text fontWeight="600">② 보조 조명(Task) — 특정 동작을 위한 조명</Text>
                      <Text>독서등, 식탁등, 주방 조명 등이 여기 포함됩니다.</Text>

                      <Text fontWeight="600">③ 분위기 조명(Accent) — 공간의 감성을 완성하는 조명</Text>
                      <Text>간접등, 모서리등, 무드등, LED 바 등</Text>

                      <Text>
                        셋을 모두 갖추면 빛의 방향이 다양해져서 그림자도 부드러워지고,
                        집이 훨씬 고급스러워 보입니다.
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

                      <Text fontWeight="600">② 침실 — 휴식의 공간</Text>
                      <Text>
                        · 천장등 사용 최소화  
                        · 스탠드 or 벽부등으로 낮은 조도 유지  
                        · 2500K 부드러운 전구색 추천  
                        → 숙면을 돕는 조명 구조
                      </Text>

                      <Text fontWeight="600">③ 주방 — 기능성과 시야 확보</Text>
                      <Text>
                        · 4000K 자연광 조명  
                        · 싱크대 하부에 LED 바 설치하면 그림자 없음  
                        → 요리할 때 밝고 정확하게 보임
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
                        전구색으로 바꾸고, 간접등을 한 번 깔아보고,
                        스탠드를 하나 들여놓는 작은 변화만으로도  
                        **집이 더 따뜻하고, 편안하고, 나다운 공간**이 될 수 있습니다.
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
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog4;