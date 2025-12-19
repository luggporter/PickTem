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

const Blog10 = () => {
  const navigate = useNavigate();

  const title =
    '집안 냄새 완전 정복: 공간별 원인과 해결법 20가지';
  const description =
    '현관·부엌·욕실·옷장·거실 등 공간별 냄새의 원인과 해결법을 과학적으로 정리한 실전 가이드. 눈에 보이지 않는 냄새의 이유를 알고 정확하게 관리하세요.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/10`;
  const ogImage = `${baseUrl}images/blog/blog10.png`;

  const publishedDate = '2024-04-03';
  const author = '아리';
  const category = '생활 꿀팁';
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
    datePublished: '2024-04-03',
    dateModified: '2024-04-03',
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Helmet>

      {/* Body */}
      <Box bg="#f8faf9" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack
          onBack={() => navigate('/magazine')}
        />

        <Container maxW="container.md" px={{ base: 4, md: 6 }} py={{ base: 6, md: 10 }}>
          <article>
            <VStack spacing={8} align="stretch">
              
              {/* Header */}
              <VStack spacing={4} align="stretch">
                <Badge
                  colorScheme="brand"
                  borderRadius="8px"
                  px={3}
                  py={1}
                  fontSize="12px"
                  fontWeight="700"
                >
                  {category}
                </Badge>

                <Heading
                  as="h1"
                  fontWeight="800"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  color="#1a2e1a"
                  lineHeight="1.3"
                >
                  {title}
                </Heading>

                <HStack spacing={4} color="#868e96" fontSize="14px" flexWrap="wrap">
                  <HStack spacing={1.5}>
                    <Box as={FiUser} />
                    <Text>{author}</Text>
                  </HStack>
                  <HStack spacing={1.5}>
                    <Box as={FiCalendar} />
                    <Text>{publishedDate}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{readTime}분 읽기</Text>
                </HStack>
              </VStack>

              {/* Main Image */}
              <Box overflow="hidden" borderRadius="20px" boxShadow="xl">
                <Image
                  src="/images/blog/blog10.png"
                  alt="집안 냄새 관리 방법을 설명하는 이미지"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              {/* Content */}
              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack spacing={10} lineHeight="1.9" color="#1a2e1a">

                  {/* Intro */}
                  <Box>
                    <Text fontWeight="600" fontSize="18px" mb={3}>
                      집 냄새는 단순한 불쾌함이 아니라 ‘공간의 건강 상태’를 알려주는 신호입니다.
                    </Text>

                    <Text mb={4}>
                      어떤 집은 들어가자마자 '깔끔하다'는 느낌이 들고,
                      어떤 집은 비슷한 구조인데도 눅눅한 냄새, 음식 냄새, 답답한 냄새가 납니다.
                      이는 대부분 **공간별 원인**을 정확히 알지 못해 생기는 문제입니다.
                    </Text>
                    <Text mb={4}>
                      냄새는 단순히 불쾌한 감각이 아니라, 공기 중에 떠다니는 분자들이 
                      우리의 후각 수용체를 자극할 때 느껴지는 것입니다. 따라서 냄새가 난다는 것은 
                      공기 중에 특정 물질이 존재한다는 신호이며, 이는 건강에도 영향을 미칠 수 있습니다. 
                      특히 곰팡이 냄새나 화학 냄새는 호흡기 질환이나 알레르기를 유발할 수 있으므로 
                      적절한 관리가 필요합니다.
                    </Text>
                    <Text>
                      이 글에서는 집안 냄새의 원인을 과학적으로 분석하고  
                      공간별로 실천 가능한 해결법을 총 **20가지**로 정리했습니다. 
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
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                      pb={2}
                      mb={5}
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      1. 현관 냄새 — 집 전체의 첫인상을 결정하는 공간
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">① 신발 냄새: 세균 + 습기</Text>
                        <Text>
                          신발장은 대부분 밀폐되어 있어 습기가 쉽게 고입니다.
                          세균 번식 → 냄새 발생 → 내부 축적 구조라 냄새가 오래갑니다.
                        </Text>
                        <Text>
                          신발 냄새의 주된 원인은 땀과 습기입니다. 발은 하루 종일 신발 안에 갇혀 있어 
                          땀을 많이 흘리며, 이 땀은 세균의 번식 환경을 만듭니다. 
                          특히 밀폐된 신발장은 공기 순환이 안 되어 습기가 고이고, 
                          세균이 번식하기 좋은 환경이 됩니다. 신발을 신발장에 넣을 때는 
                          반드시 완전히 말린 후 넣어야 하며, 신발장 내부도 정기적으로 환기시켜야 합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">② 해결법</Text>
                        <Text>
                          • 신발 바닥은 항상 완전히 말린 후 넣기  
                          • 베이킹소다·숯·탈취제 배치  
                          • 신발장 문을 하루 10분 열어 습기 배출  
                          • 주 1회 신발장 내부 알코올 소독  
                        </Text>
                        <Text>
                          신발장 냄새를 제거하는 가장 효과적인 방법은 습기 관리입니다. 
                          베이킹소다는 냄새를 흡수하고, 숯은 습기와 냄새를 동시에 제거합니다. 
                          신발장 문을 하루 10분 정도 열어두면 습기가 배출되어 
                          세균 번식을 방지할 수 있습니다. 또한 주 1회 알코올로 소독하면 
                          세균을 제거하여 냄새의 근본 원인을 해결할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">③ 안전 꿀팁</Text>
                        <Text>
                          신발 안쪽은 햇빛에서 1시간만 말려도 세균 수가 절반 이상 줄어듭니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* SECTION 2 */}
                  <Box>
                    <Heading
                      as="h2"
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                      pb={2}
                      mb={5}
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      2. 부엌 냄새 — 음식 냄새와 배수구 악취
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">④ 배수구 냄새 원인: 유기물 + 역류 공기</Text>
                        <Text>
                          음식물 찌꺼기가 배수구 내부에 달라붙어 부패하면서 냄새가 올라옵니다.
                          특히 온도가 올라가는 계절에는 냄새가 더 심해집니다.
                        </Text>
                        <Text>
                          배수구 냄새는 음식물 찌꺼기가 배수구 내부에 쌓여 부패하면서 발생합니다. 
                          특히 기름이나 지방이 배수구에 달라붙으면 세균이 번식하기 좋은 환경이 되고, 
                          이로 인해 악취가 발생합니다. 여름철에는 온도가 높아 부패 속도가 빨라져 
                          냄새가 더욱 심해집니다. 배수구를 정기적으로 청소하고, 
                          음식물을 버릴 때는 건더기를 최대한 제거하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑤ 해결법</Text>
                        <Text>
                          • 베이킹소다 + 식초 + 뜨거운 물 순서로 청소  
                          • 배수구 덮개 자주 교체  
                          • 음식물은 최대한 건더기 없이 버리기  
                        </Text>
                        <Text>
                          배수구 청소는 베이킹소다와 식초를 사용하는 것이 가장 효과적입니다. 
                          먼저 베이킹소다를 배수구에 넣고, 그 위에 식초를 부으면 
                          화학 반응이 일어나 기포가 생기면서 찌꺼기를 분해합니다. 
                          그 후 뜨거운 물을 부으면 남은 찌꺼기가 완전히 제거됩니다. 
                          이 방법은 화학 세제보다 안전하고 효과적입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑥ 쓰레기통 냄새 제거</Text>
                        <Text>
                          쓰레기통 바닥에 신문지를 깔고 베이킹소다를 뿌리면 냄새가 크게 줄어듭니다.
                        </Text>
                        <Text>
                          쓰레기통 냄새는 음식물 쓰레기에서 나오는 악취와 액체가 바닥에 스며들어 
                          발생합니다. 신문지를 깔면 액체가 스며드는 것을 막을 수 있고, 
                          베이킹소다는 냄새를 흡수합니다. 또한 쓰레기통을 정기적으로 비우고, 
                          비운 후에는 알코올로 소독하면 냄새를 완전히 제거할 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect
                    adUnitId="DAN-qRlpXvY15cfMPpl0"
                    adWidth={300}
                    adHeight={250}
                  />

                  {/* SECTION 3 */}
                  <Box>
                    <Heading
                      as="h2"
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      pb={2}
                      mb={5}
                      w="fit-content"
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      3. 욕실 냄새 — 곰팡이·습기·배수구 복합 원인
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">⑦ 변기 주변 암모니아 냄새</Text>
                        <Text>
                          눈에 보이지 않는 스플래시(소변 미세 비산)가 원인입니다.
                        </Text>
                        <Text>
                          변기 주변의 암모니아 냄새는 소변의 미세한 비산물이 바닥이나 벽에 
                          스며들어 발생합니다. 이 비산물은 눈에 보이지 않지만 시간이 지나면서 
                          암모니아 냄새를 발생시킵니다. 변기를 사용한 후에는 변기 주변을 
                          정기적으로 소독하고, 환기를 시켜야 합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑧ 해결법</Text>
                        <Text>
                          • 변기 주변 바닥·벽 30cm 높이까지 소독  
                          • 배수구 필터 세척  
                          • 샤워 후 문 닫지 말고 완전 건조  
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑨ 타일 사이 곰팡이</Text>
                        <Text>곰팡이는 습기 + 어두움 + 온기에서 번식합니다.</Text>
                        <Text>
                          곰팡이는 습도 60% 이상, 온도 20~30도, 공기 순환이 없는 곳에서 
                          잘 자랍니다. 욕실은 이 조건을 모두 만족하는 공간이므로 
                          곰팡이가 자주 발생합니다. 곰팡이를 예방하기 위해서는 
                          샤워 후 환기를 충분히 시키고, 습기를 완전히 제거해야 합니다. 
                          곰팡이가 생기면 즉시 제거하고, 원인을 해결해야 합니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 4 */}
                  <Box>
                    <Heading
                      as="h2"
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      pb={2}
                      mb={5}
                      w="fit-content"
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      4. 옷장 냄새 — 퀴퀴한 냄새의 정체는 습기
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">⑩ 옷장 냄새 원인</Text>
                        <Text>
                          세탁 후 완전히 마르지 않은 옷 + 밀폐된 공간 조합이 최악입니다.
                        </Text>
                        <Text>
                          옷장 냄새는 주로 습기 때문에 발생합니다. 세탁 후 완전히 마르지 않은 옷을 
                          옷장에 넣으면 습기가 옷장 내부에 고이고, 이로 인해 곰팡이나 세균이 번식하여 
                          냄새가 발생합니다. 또한 옷장이 밀폐되어 있어 공기 순환이 안 되면 
                          습기와 냄새가 더욱 오래 지속됩니다. 옷을 옷장에 넣을 때는 
                          반드시 완전히 말린 후 넣어야 하며, 옷장 내부도 정기적으로 환기시켜야 합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑪ 해결법</Text>
                        <Text>
                          • 제습제 필수  
                          • 서랍/행거 내부 환기  
                          • 1주 1회 문 열어두기  
                          • 향보다는 '탈취' 우선  
                        </Text>
                        <Text>
                          옷장 냄새를 제거하기 위해서는 습기 관리가 가장 중요합니다. 
                          제습제를 옷장 내부에 두면 습기를 흡수하여 곰팡이와 냄새를 예방할 수 있습니다. 
                          또한 주 1회 옷장 문을 열어 환기를 시키면 습기와 냄새가 배출됩니다. 
                          방향제로 냄새를 덮는 것보다는 근본 원인인 습기를 제거하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑫ 겨울 옷은 햇빛 소독</Text>
                        <Text>
                          햇빛 30분이면 습기 냄새가 크게 줄어듭니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 5 */}
                  <Box>
                    <Heading
                      as="h2"
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      pb={2}
                      mb={5}
                      w="fit-content"
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      5. 거실·방 냄새 — 생활 공기질 문제
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">⑬ 먼지 냄새</Text>
                        <Text>
                          먼지는 냄새를 흡착합니다. 환기 부족 + 미세먼지 축적이 원인입니다.
                        </Text>
                        <Text>
                          먼지는 공기 중의 냄새 분자를 흡착하여 냄새의 원인이 됩니다. 
                          환기를 하지 않으면 먼지가 축적되고, 이 먼지가 냄새를 흡착하여 
                          거실이나 방 전체에 냄새가 퍼집니다. 정기적인 환기와 청소를 통해 
                          먼지를 제거하면 냄새도 함께 제거됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑭ 해결법</Text>
                        <Text>
                          • 하루 2회 5분 환기  
                          • 공기청정기 필터 청소  
                          • 패브릭 세탁 주기 관리  
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑮ 반려동물 냄새</Text>
                        <Text>
                          발바닥·털·침 냄새가 카펫, 쇼파에 쉽게 스며듭니다.
                        </Text>
                        <Text>
                          반려동물 냄새는 주로 털, 침, 발바닥에서 나오는 냄새가 
                          카펫이나 소파 같은 패브릭에 스며들어 발생합니다. 
                          이 냄새는 공기 중보다 패브릭에 더 오래 남아 있어 
                          제거하기 어렵습니다. 정기적인 청소와 환기를 통해 
                          냄새를 제거하고, 패브릭은 세탁하거나 전문 청소를 받는 것이 좋습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* SECTION 6 */}
                  <Box>
                    <Heading
                      as="h2"
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      pb={2}
                      mb={5}
                      w="fit-content"
                      fontSize={{ base: 'xl', md: '2xl' }}
                    >
                      6. 집 전체 냄새를 잡는 생활 루틴 5가지
                    </Heading>

                    <Stack spacing={6}>
                      <Box>
                        <Text fontWeight="600">⑯ 향기로 덮지 말 것</Text>
                        <Text>
                          냄새의 원인을 해결하지 않으면 향은 잠시만 덮을 뿐입니다.
                        </Text>
                        <Text>
                          방향제는 냄새를 제거하는 것이 아니라 덮는 것입니다. 
                          냄새의 원인을 해결하지 않고 방향제만 사용하면 
                          여러 화학 물질이 섞여 더 복잡한 냄새가 발생할 수 있습니다. 
                          냄새의 원인을 찾아 제거하고, 그 후에 필요하다면 
                          자연스러운 향을 가볍게 사용하는 것이 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑰ 제습·환기·청소의 삼각 공식</Text>
                        <Text>
                          냄새는 대부분 **습도 관리 실패**에서 시작됩니다.
                        </Text>
                        <Text>
                          습도가 높으면 곰팡이와 세균이 번식하기 좋은 환경이 되어 냄새가 발생합니다. 
                          따라서 냄새를 예방하기 위해서는 습도를 적정 수준(40~60%)으로 유지하는 것이 중요합니다. 
                          제습기를 사용하거나, 환기를 통해 습기를 제거하고, 
                          정기적인 청소를 통해 습기의 원인을 제거하면 냄새를 예방할 수 있습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑱ 계절별 냄새 변화 이해</Text>
                        <Text>
                          여름: 음식·배수구 / 겨울: 결로·습기 / 환절기: 곰팡이  
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑲ 패브릭 관리</Text>
                        <Text>
                          냄새는 공기보다 '섬유'에 더 오래 남습니다.
                        </Text>
                        <Text>
                          냄새 분자는 패브릭(카펫, 소파, 커튼 등)에 흡착되어 오래 남습니다. 
                          공기 중의 냄새는 환기로 제거할 수 있지만, 패브릭에 스며든 냄새는 
                          세탁이나 전문 청소를 받아야 제거할 수 있습니다. 
                          따라서 패브릭을 정기적으로 세탁하거나 청소하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑳ 헌 옷·박스 정리</Text>
                        <Text>
                          오래된 종이·박스는 냄새의 원인이 됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* Outro */}
                  <Box>
                    <Heading
                      as="h2"
                      fontWeight="700"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                      pb={2}
                      mb={5}
                    >
                      마무리: 냄새 없는 집은 '청결'보다 '관리'가 만든다
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        냄새를 없애는 것은 힘든 일이 아닙니다.
                        단순한 습관과 정확한 원인 파악만으로도  
                        집안 공기는 눈에 띄게 달라집니다.
                      </Text>
                      <Text>
                        냄새 관리는 완벽하게 하려고 하지 말고, 
                        자신의 생활 패턴에 맞는 작은 습관부터 시작하는 것이 중요합니다. 
                        정기적인 환기, 습도 관리, 청소 같은 작은 습관이 쌓이면 
                        집안 냄새를 크게 개선할 수 있습니다. 
                        오늘 소개한 방법 중에서 자신에게 맞는 것부터 하나씩 시도해보세요.
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
                        <Text fontWeight="600" mb={2}>
                          🌿 오늘의 한 줄:
                        </Text>
                        <Text color="#495057">
                          “좋은 냄새가 나는 집이 아니라,  
                          냄새가 없는 집이 진짜 잘 관리되는 집입니다.”
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

export default Blog10;