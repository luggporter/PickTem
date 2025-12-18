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
                      어떤 집은 들어가자마자 ‘깔끔하다’는 느낌이 들고,
                      어떤 집은 비슷한 구조인데도 눅눅한 냄새, 음식 냄새, 답답한 냄새가 납니다.
                      이는 대부분 **공간별 원인**을 정확히 알지 못해 생기는 문제입니다.
                    </Text>

                    <Text>
                      이 글에서는 집안 냄새의 원인을 과학적으로 분석하고  
                      공간별로 실천 가능한 해결법을 총 **20가지**로 정리했습니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

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
                      </Box>

                      <Box>
                        <Text fontWeight="600">② 해결법</Text>
                        <Text>
                          • 신발 바닥은 항상 완전히 말린 후 넣기  
                          • 베이킹소다·숯·탈취제 배치  
                          • 신발장 문을 하루 10분 열어 습기 배출  
                          • 주 1회 신발장 내부 알코올 소독  
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
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑤ 해결법</Text>
                        <Text>
                          • 베이킹소다 + 식초 + 뜨거운 물 순서로 청소  
                          • 배수구 덮개 자주 교체  
                          • 음식물은 최대한 건더기 없이 버리기  
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑥ 쓰레기통 냄새 제거</Text>
                        <Text>
                          쓰레기통 바닥에 신문지를 깔고 베이킹소다를 뿌리면 냄새가 크게 줄어듭니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

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
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑪ 해결법</Text>
                        <Text>
                          • 제습제 필수  
                          • 서랍/행거 내부 환기  
                          • 1주 1회 문 열어두기  
                          • 향보다는 ‘탈취’ 우선  
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
                      </Box>

                      <Box>
                        <Text fontWeight="600">⑰ 제습·환기·청소의 삼각 공식</Text>
                        <Text>
                          냄새는 대부분 **습도 관리 실패**에서 시작됩니다.
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
                          냄새는 공기보다 ‘섬유’에 더 오래 남습니다.
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