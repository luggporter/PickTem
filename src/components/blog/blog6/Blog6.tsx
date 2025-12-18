import {
  Badge,
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { FiCalendar, FiUser } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { KakaoAdDirect } from '../../../pages/Home';
import AdSense from '../../AdSense';
import MobileHeader from '../../MobileHeader';

const Blog6 = () => {
  const navigate = useNavigate();

  const title =
    '계절별 집 꾸미기 공식: 봄·여름·가을·겨울 인테리어가 달라지면 삶의 리듬도 달라진다';
  const description =
    '계절의 심리와 분위기를 반영해 공간을 전환하는 홈스타일링 가이드. 봄·여름·가을·겨울 각각의 색감·조명·패브릭·소품 활용법을 깊이 있게 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/6`;
  const ogImage = `${baseUrl}images/blog/blog6.png`;

  const publishedDate = '2024년 3월 2일';
  const author = '아리';
  const category = '인테리어';
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
    datePublished: '2024-03-02',
    dateModified: '2024-03-02',
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

              {/* MAIN IMAGE */}
              <Box overflow="hidden" borderRadius="20px" bg="white" boxShadow="xl">
                <Image
                  src="/images/blog/blog6.png"
                  alt="계절에 따라 분위기가 변화하는 거실 인테리어"
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
                <Stack spacing={10} color="#1a2e1a" lineHeight="1.9">

                  {/* INTRO */}
                  <Box>
                    <Text fontSize="18px" fontWeight="600" mb={3}>
                      계절을 맞이하는 집은, 삶의 리듬을 조절해 주는 자연의 확장입니다.
                    </Text>

                    <Text mb={4}>
                      우리는 계절이 바뀔 때마다 자연스럽게 옷을 갈아입고 음식 취향이 바뀝니다.
                      그런데 집은 어떨까요?  
                      **집 역시 계절의 변화에 따라 ‘호흡’을 맞춰주는 것이 중요합니다.**
                    </Text>

                    <Text mb={4}>
                      계절별 홈스타일링은 단순히 ‘인테리어 꾸미기’가 아니라,
                      우리의 **정서·습관·생활 리듬 전체를 조율하는 방식**입니다.
                    </Text>

                    <Text>
                      이 글에서는 봄·여름·가을·겨울의 분위기와 심리를 기반으로  
                      **색감, 조명, 패브릭, 향, 소품, 공간 배치 전략**을 한 번에 정리했습니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* SPRING */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={5}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 봄 ― 가벼움을 채우는 시즌
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        봄 인테리어의 핵심은 “가벼움”과 “새로움”입니다.  
                        묵은겨울의 무거운 분위기를 걷어내고, 공기까지 환해 보이도록 만드는 것이죠.
                      </Text>

                      <Text fontWeight="600">① 색감: 파스텔·라이트톤 중심</Text>
                      <Text>
                        연노랑·라벤더·아이보리·민트 같은 밝은 톤이 봄을 가장 잘 표현합니다.
                      </Text>

                      <Text fontWeight="600">② 패브릭: 얇고 부드러운 소재</Text>
                      <Text>두꺼운 겨울 러그, 니트 쿠션은 수납하고 리넨·면 소재로 교체합니다.</Text>

                      <Text fontWeight="600">③ 조명: 확산형 조명으로 밝기 확장</Text>
                      <Text>빛이 부드럽게 퍼지는 화이트 조명은 공간을 탁 트이게 만듭니다.</Text>

                      <Text fontWeight="600">④ 향: 신선한 플로럴·그린 계열</Text>
                      <Text>집에 ‘봄바람이 들어오는 느낌’을 주는 향이 좋습니다.</Text>
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

                  {/* SUMMER */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={5}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2. 여름 ― 시원함과 정돈됨
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        여름 인테리어는 **시각적으로 온도를 낮추는 것**이 핵심입니다.  
                        무겁고 장식적인 요소는 여름을 더 덥고 답답하게 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">① 색감: 화이트·블루·그레이</Text>
                      <Text>
                        차가운 색감은 실내 체감 온도를 1~2도 낮춰 보이게 합니다.
                      </Text>

                      <Text fontWeight="600">② 패브릭: 텍스처 최소화</Text>
                      <Text>여름은 ‘매끈한 표면’이 시원함을 줍니다.</Text>

                      <Text fontWeight="600">③ 가구 배치: 통풍에 최적화</Text>
                      <Text>
                        통로를 넓히고 공기 흐름을 방해하는 배치를 줄이면 쾌적함이 크게 달라집니다.
                      </Text>

                      <Text fontWeight="600">④ 향/질감: 시트러스·프레시</Text>
                      <Text>무겁고 묵직한 향은 여름에는 피하는 것이 좋습니다.</Text>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  {/* AUTUMN */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={5}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 가을 ― 따뜻함과 깊이
                    </Heading>

                    <Stack spacing={6}>
                      <Text>
                        가을은 ‘집이 가장 아늑해지는 계절’입니다.  
                        포근함, 따뜻함, 깊이가 인테리어의 키워드입니다.
                      </Text>

                      <Text fontWeight="600">① 색감: 브라운·버건디·올리브</Text>
                      <Text>지구색(Earth tone)이 가장 잘 어울립니다.</Text>

                      <Text fontWeight="600">② 조명: 노란빛·따뜻한 광량</Text>
                      <Text>3000K 전구색은 가을 분위기를 완성하는 핵심 요소입니다.</Text>

                      <Text fontWeight="600">③ 패브릭: 쿠션·러그·담요의 계절</Text>
                      <Text>
                        텍스처가 있는 패브릭은 가을의 온도를 집 안에 채워줍니다.
                      </Text>

                      <Text fontWeight="600">④ 소품: 나무·라탄·도자기</Text>
                      <Text>
                        자연 소재는 가을 인테리어와 가장 잘 어울립니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* WINTER */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      pb={2}
                      mb={5}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      4. 겨울 ― 포근함·안정감·빛의 밀도 높이기
                    </Heading>

                    <Stack spacing={6}>
                      <Text>
                        겨울 인테리어의 핵심은  
                        **“춥지 않은 분위기를 만드는 것”**입니다.  
                        온도뿐 아니라 시각적 온기도 중요합니다.
                      </Text>

                      <Text fontWeight="600">① 색감: 아이보리·딥그린·차콜</Text>
                      <Text>겨울은 차분하면서도 안정감을 주는 색이 좋습니다.</Text>

                      <Text fontWeight="600">② 조명: 여러 개의 ‘따뜻한 조도’</Text>
                      <Text>겨울 집은 ‘개수’로 따뜻해지는 계절입니다.</Text>

                      <Text fontWeight="600">③ 패브릭: 니트·퍼·극세사</Text>
                      <Text>촉감 좋은 소재는 체감 온도를 크게 올립니다.</Text>

                      <Text fontWeight="600">④ 향: 우디·머스크·스파이시</Text>
                      <Text>집 안 공기를 안정감 있게 채워주는 향입니다.</Text>
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
                      mb={5}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 계절은 바뀌지만, 우리의 집은 더 풍부해진다
                    </Heading>

                    <Stack spacing={5}>
                      <Text>
                        계절별 홈스타일링은 돈을 많이 들이는 일이 아닙니다.  
                        집 안에서 계절의 공기와 리듬을 느끼게 해주는  
                        ‘작은 교체’와 ‘분위기 전환’의 연속입니다.
                      </Text>

                      <Text>
                        오늘 당장 전부 바꿀 필요도 없습니다.  
                        공간 하나, 조명 하나, 패브릭 하나만 바꿔도  
                        집은 계절의 새로운 장면을 만들어냅니다.
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
                        <Text fontWeight="700" mb={2}>
                          🍂 오늘의 한 줄: “계절이 바뀌는 것은, 집이 새로운 이야기를 시작하는 순간입니다.”
                        </Text>
                        <Text color="#495057">
                          집이 계절과 함께 호흡하도록 만들어보세요.  
                          삶의 리듬도 자연스럽게 가벼워지고 깊어집니다.
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

export default Blog6;