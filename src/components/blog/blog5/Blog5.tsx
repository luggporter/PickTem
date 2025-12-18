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

const Blog5 = () => {
  const navigate = useNavigate();
  const title =
    '미니멀 라이프 시작하기: 물건보다 마음을 가볍게 만드는 정리 심리학과 실천 전략';
  const description =
    '단순히 물건을 줄이는 것이 아니라, 마음의 여유를 되찾고 생활 루틴을 정돈하는 미니멀 라이프 실전 가이드. 정리 심리학부터 공간별 실천법까지 모두 담았습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}/magazine/6`;
  const ogImage = `${baseUrl}/images/blog/blog5.png`;

  const publishedDate = '2024년 2월 19일';
  const author = '씩씩이';
  const category = '라이프스타일';
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
    datePublished: '2024-02-19',
    dateModified: '2024-02-19',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
                      그 물건들이 “어디에 속해야 하는지” 알지 못하기 때문입니다.
                      어떤 물건은 추억이라 쉽게 버릴 수 없고, 어떤 물건은 언젠가 쓸 것 같아서
                      정리 대상에서 빠집니다. 이런 모호함이 공간을 어지럽히고,
                      동시에 우리의 마음도 복잡하게 만듭니다.
                    </Text>

                    <Text>
                      이 글에서는 미니멀 라이프를 “삶을 정돈하는 기술”로 바라보며,  
                      **심리학–정리법–생활 루틴–실천 전략**까지 모두 아우르는
                      가장 현실적인 미니멀 라이프 가이드를 소개합니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

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

                      <Text fontWeight="600">① ‘언젠가 필요할지도 몰라’라는 불안</Text>
                      <Text>
                        미래에 대한漠然 한 불안감은 물건을 붙잡게 만듭니다.  
                        하지만 통계적으로 “언젠가 쓸 것 같은 물건”의 80%는 결국 사용하지 않습니다.
                      </Text>

                      <Text fontWeight="600">② ‘돈이 아까워서’ 버리지 못하는 감정</Text>
                      <Text>
                        이미 돈은 지불된 상태에서, 물건을 가지고 있든 버리든
                        가치가 달라지지 않습니다. 경제학에서는 이를 ‘매몰비용의 오류’라고 합니다.
                      </Text>

                      <Text fontWeight="600">③ 추억과 감정이 물건에 묶여 있는 경우</Text>
                      <Text>
                        물건이 아니라, 그와 연결된 기억이 소중한 것일 때가 많습니다.  
                        그래서 버리지 않아도 됩니다. 다만 **사진으로 기록하고, 물건은 보내는 방식**은  
                        미니멀리스트들이 자주 사용하는 기술입니다.
                      </Text>

                      <Text fontWeight="600">④ 정리가 ‘귀찮아서’ 미루게 되는 심리</Text>
                      <Text>
                        정리는 거대한 작업처럼 느껴져 시작하기 어렵습니다.  
                        그래서 미니멀 라이프는 “큰 정리”가 아니라  
                        **매일 10분의 작은 정리**에서 출발합니다.
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

                      <Text fontWeight="600">② 같은 기능을 하는 물건이 2개 이상 있다면</Text>
                      <Text>더 좋아하는 하나만 남기고, 나머지는 보내세요.</Text>

                      <Text fontWeight="600">③ 고장난 채로 6개월 이상 가지고 있다면</Text>
                      <Text>수리하지 않는다는 뜻입니다. 버릴 타이밍입니다.</Text>

                      <Text fontWeight="600">④ 공간을 차지하는데 기분이 좋아지지 않는 물건</Text>
                      <Text>미니멀 라이프에서 가장 중요합니다. 감정은 ‘기능’입니다.</Text>

                      <Text fontWeight="600">⑤ ‘있으면 좋겠다’가 아니라 ‘없으면 불편하다’ 기준으로</Text>
                      <Text>필요의 기준을 좁히면 결정이 쉬워집니다.</Text>
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
                        3) ‘언젠가 입을지도’인 옷  
                        → 이 세 가지만 정리해도 옷장이 가벼워집니다.
                      </Text>

                      <Text fontWeight="600">② 주방 — 중복템이 가장 많은 공간</Text>
                      <Text>
                        컵·그릇·수저·국자·도마.  
                        꼭 필요한 수량만 남기고 ‘세트 구성으로 산 템들’을 정리하면  
                        주방이 눈에 띄게 넓어집니다.
                      </Text>

                      <Text fontWeight="600">③ 욕실 — 비우면 청소가 쉬워진다</Text>
                      <Text>
                        거의 다 쓴 화장품, 묵은 스킨케어, 공병, 오래된 샤워볼 등이 대표적.  
                        욕실은 매일 쓰는 공간이기 때문에 정리 효과가 빠르게 느껴집니다.
                      </Text>

                      <Text fontWeight="600">④ 책상·작업실 — 생산성을 올리는 정리</Text>
                      <Text>
                        작업 공간은 물건이 아닌 “집중력”이 핵심입니다.  
                        책상 위에는 **필수 3개만** 올려놓는 것이 가장 좋습니다.  
                        (노트북 / 조명 / 물)
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

                      <Text fontWeight="600">② 저녁 5분 리셋</Text>
                      <Text>책상·테이블·싱크대 등 평평한 공간만 비워두기.</Text>

                      <Text fontWeight="600">③ 주말 10분 체크</Text>
                      <Text>새로 쌓인 불필요한 물건을 ‘즉시’ 정리.</Text>

                      <Text>
                        이 작은 습관만으로도 집이 다시 어지러워지는 속도가
                        눈에 띄게 느려집니다.
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
                        미니멀 라이프의 목적은 ‘멋진 집’을 만드는 것이 아닙니다.  
                        내가 좋아하는 것들을 중심으로 삶을 재구성하고,  
                        공간과 마음을 함께 정돈하는 과정입니다.
                      </Text>

                      <Text>
                        물건이 줄어들면 시야가 명확해지고,  
                        마음이 덜 복잡해지고,  
                        하루를 살아갈 선택과 에너지가 조금 더 넉넉해집니다.
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
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog5;