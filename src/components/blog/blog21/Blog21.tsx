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

const Blog21 = () => {
  const navigate = useNavigate();
  const title = '시나몬과 계피, 무엇이 다른가요?';
  const description =
    '시나몬과 계피의 차이점을 알아봅니다. 나무 품종, 향미 성분, 외관, 보관법부터 쿠마린 함량과 건강 주의사항까지, 두 향신료를 올바르게 구별하고 사용하는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/21`;
  const ogImage = `${baseUrl}images/blog/blog21.png`;

  const publishedDate = '2024년 11월 10일';
  const author = '씩씩이';
  const category = '식품 과학';
  const readTime = 8;

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
    datePublished: '2024-11-10',
    dateModified: '2024-11-10',
    articleSection: category,
    keywords: `${category}, 시나몬, 계피, 향신료`,
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
        <meta name="keywords" content={`${category}, 시나몬, 계피, 향신료, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-11-10" />
        <meta property="article:modified_time" content="2024-11-10" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="시나몬" />
        <meta property="article:tag" content="계피" />

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
                  src="/images/blog/blog21.png"
                  alt="시나몬과 계피 비교"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      시나몬과 계피, 혼동하기 쉬운 두 향신료
                    </Text>
                    <Text mb={4}>
                      많은 사람들이 시나몬과 계피를 같은 것으로 생각하지만, 실제로는 다른 식물에서 나오는 
                      별개의 향신료입니다. 둘 다 '녹나무속(Cinnamomum)'에 속하지만, 품종, 향미, 외관, 
                      그리고 건강에 미치는 영향까지 많은 차이가 있습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 한국에서 일반적으로 사용되는 계피 가루는 대부분 '계피(Cassia)' 계열이며, 
                      진짜 시나몬(Ceylon Cinnamon)은 상대적으로 고가이고 구하기 어렵습니다. 
                      이 두 향신료의 차이를 정확히 알고 사용하면, 요리의 맛과 건강 모두에 도움이 됩니다.
                    </Text>
                    <Text>
                      이 글에서는 시나몬과 계피의 차이점을 <b>나무 품종</b>, <b>향미 성분</b>, 
                      <b>외관 특징</b>, <b>보관법과 구입 요령</b>, 그리고 <b>쿠마린 함량과 건강 주의사항</b>까지 
                      종합적으로 정리했습니다. 각 정보는 식품의약품안전처의 식품 안전 가이드라인과 
                      실제 시장에서 사용되는 용어를 바탕으로 작성되었습니다.
                    </Text>
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
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1) 나무 품종의 차이: 같은 속이지만 다른 종
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피는 모두 <b>'녹나무속(Cinnamomum)'</b>에 속하지만, 
                        실제로는 다른 종(種)에 해당하는 식물입니다. 이는 사과와 배가 모두 장미과에 속하지만 
                        다른 과일인 것과 같은 원리입니다.
                      </Text>

                      <Box
                        bg="blue.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="blue.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          시나몬 (Cinnamon / Ceylon Cinnamon)
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>학명:</b> 실론계피나무 (Cinnamomum verum)
                          </Text>
                          <Text>
                            <b>다른 이름:</b> 실론 시나몬, 서양 계피, 진짜 시나몬
                          </Text>
                          <Text>
                            <b>주요 생산지:</b> 스리랑카, 인도 남부, 마다가스카르 등
                          </Text>
                          <Text>
                            <b>특징:</b> 고급 향신료로 분류되며, 부드럽고 달콤한 향미로 유명합니다. 
                            가격이 상대적으로 비싸고, 한국에서는 일반적으로 구하기 어려운 편입니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Box
                        bg="orange.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="orange.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          계피 (Cassia / Chinese Cinnamon)
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>학명:</b> 육계나무 (Cinnamomum cassia)
                          </Text>
                          <Text>
                            <b>다른 이름:</b> 중국계피, 계피, 카시아
                          </Text>
                          <Text>
                            <b>주요 생산지:</b> 중국, 인도네시아, 베트남 등
                          </Text>
                          <Text>
                            <b>특징:</b> 한국에서 일반적으로 사용되는 계피 가루는 대부분 이 계열입니다. 
                            강하고 자극적인 향미를 가지며, 시나몬보다 저렴하고 구하기 쉽습니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        두 식물이 같은 속에 속하기 때문에 외관이 비슷해 보일 수 있지만, 
                        실제로는 생물학적으로 다른 종이며, 향미와 건강에 미치는 영향도 다릅니다. 
                        특히 한국 시장에서 '계피'라고 불리는 것은 대부분 'Cassia' 계열이므로, 
                        구입 시 혼동하지 않도록 주의해야 합니다.
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
                      2) 향미 성분과 맛의 차이
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피의 가장 큰 차이는 향미와 맛입니다. 
                        같은 요리에 사용해도 완전히 다른 맛과 향을 만들어냅니다.
                      </Text>

                      <Box
                        bg="green.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="green.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          시나몬의 향미: 청량감, 단맛, 고급진 향미
                        </Text>
                        <Text>
                          시나몬(실론 시나몬)은 부드럽고 달콤한 향미를 가지고 있습니다. 
                          <b>청량감이 느껴지며, 단맛이 강하고 고급스러운 향</b>이 특징입니다.
                        </Text>
                        <Text mt={3}>
                          실제로 시나몬을 맛보면 계피보다 훨씬 부드럽고 달콤한 느낌을 받을 수 있습니다. 
                          이 때문에 디저트나 음료에 사용하기 적합하며, 특히 빵, 초콜릿, 커피 등에 
                          많이 사용됩니다.
                        </Text>
                        <Text mt={3}>
                          시나몬 스틱을 보면 껍질이 얇고 여러 겹으로 쌓여 있는 모양이며, 
                          쉽게 부서지는 특징이 있습니다. 이는 시나몬의 부드러운 향미를 상징하기도 합니다.
                        </Text>
                      </Box>

                      <Box
                        bg="red.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="red.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          계피의 향미: 거칠고 자극적인 매운 향미
                        </Text>
                        <Text>
                          계피(Cassia)는 <b>거칠고 자극적인 매운 향미</b>를 가지고 있습니다. 
                          시나몬보다 향이 강하고, 맛도 맵고 강렬합니다.
                        </Text>
                        <Text mt={3}>
                          실제로 계피를 맛보면 시나몬보다 훨씬 강하고 자극적인 느낌을 받을 수 있습니다. 
                          이 때문에 한국 전통 음식인 수정과나 계피차, 그리고 따뜻한 와인(mulled wine) 등에 
                          주로 사용됩니다.
                        </Text>
                        <Text mt={3}>
                          계피 스틱을 보면 껍질이 두껍고 단단하며, 단면이 자홍색을 띠는 특징이 있습니다. 
                          이는 계피의 강한 향미를 상징하기도 합니다.
                        </Text>
                      </Box>

                      <Text>
                        요리 목적에 따라 두 향신료를 선택하는 것이 중요합니다. 
                        부드럽고 달콤한 맛이 필요하다면 시나몬을, 강하고 자극적인 맛이 필요하다면 계피를 
                        선택하는 것이 좋습니다.
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
                      3) 외관과 형태의 차이
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피는 외관에서도 명확한 차이를 보입니다. 
                        스틱 형태나 가루 형태로 구입할 때 이 차이를 확인하면 구별이 가능합니다.
                      </Text>

                      <Box
                        bg="yellow.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="yellow.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          시나몬의 외관 특징
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>색상:</b> 연한 황갈색 (light yellowish-brown)
                          </Text>
                          <Text>
                            <b>껍질 두께:</b> 얇음 (thin bark)
                          </Text>
                          <Text>
                            <b>구조:</b> 여러 겹으로 쌓여 있는 형태 (layered structure)
                          </Text>
                          <Text>
                            <b>견고함:</b> 쉽게 부서짐 (easily breakable)
                          </Text>
                          <Text>
                            <b>가루 형태:</b> 쉽게 바스라지는 편이므로 가루 형태가 일반적이며, 
                            부드러운 질감을 가집니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Box
                        bg="purple.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="purple.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          계피의 외관 특징
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>색상:</b> 진한 갈색 (dark brown)
                          </Text>
                          <Text>
                            <b>껍질 두께:</b> 두껍고 단단함 (thick and hard bark)
                          </Text>
                          <Text>
                            <b>단면:</b> 자홍색 (purplish-red cross-section)
                          </Text>
                          <Text>
                            <b>형태:</b> 크고 두꺼운 형태
                          </Text>
                          <Text>
                            <b>향기:</b> 강한 향 (strong aroma)
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        시나몬 스틱은 얇고 부서지기 쉬운 반면, 계피 스틱은 두껍고 단단합니다. 
                        또한 시나몬은 연한 황갈색이고 여러 겹으로 쌓인 모양인 반면, 
                        계피는 진한 갈색에 단면이 자홍색을 띱니다. 이러한 외관 차이를 통해 
                        두 향신료를 구별할 수 있습니다.
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
                      4) 보관법과 구입 요령
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피 모두 향신료이므로, 맛과 향을 유지하기 위한 올바른 보관법이 중요합니다. 
                        또한 구입 시에도 품질을 확인하는 요령이 있습니다.
                      </Text>

                      <Box
                        bg="cyan.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="cyan.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          보관법
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>시나몬:</b><br />
                            • 쉽게 바스라지는 편이므로 가루 형태가 일반적<br />
                            • 가루는 맛과 향 유지를 위해 <b>유리 밀폐용기에 보관</b><br />
                            • 직사광선과 습기를 피하고 서늘한 곳에 보관
                          </Text>
                          <Text>
                            <b>계피:</b><br />
                            • <b>습기가 없는 건조한 곳에 보관</b><br />
                            • 가루는 건냉한 곳에 밀봉하여 보관<br />
                            • 향기가 빠르게 날아가지 않도록 밀폐 용기 사용
                          </Text>
                        </Stack>
                      </Box>

                      <Box
                        bg="pink.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="pink.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          구입 요령 (계피)
                        </Text>
                        <Text>
                          계피 스틱을 구입할 때는 다음 사항을 확인하는 것이 좋습니다:
                        </Text>
                        <Stack spacing={2} mt={3}>
                          <Text>
                            <b>1. 형태:</b> 육안으로 보아 형태가 크고 두꺼울 것
                          </Text>
                          <Text>
                            <b>2. 단면:</b> 단면이 자홍색으로 향기가 강한 것
                          </Text>
                          <Text>
                            <b>3. 향기:</b> 강하고 진한 향이 나는 것
                          </Text>
                        </Stack>
                        <Text mt={3}>
                          이러한 특징을 가진 계피는 품질이 좋고, 요리에 사용했을 때도 
                          향미를 제대로 낼 수 있습니다.
                        </Text>
                      </Box>

                      <Text>
                        올바른 보관법을 지키면 향신료의 맛과 향을 오래 유지할 수 있습니다. 
                        특히 가루 형태의 경우 밀폐 용기에 보관하는 것이 중요하며, 
                        습기와 직사광선을 피하는 것이 필수입니다.
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
                      5) 쿠마린 함량과 건강 주의사항
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피를 구별할 때 가장 중요한 이유 중 하나는 
                        <b>쿠마린(Coumarin) 함량</b>의 차이입니다. 
                        쿠마린은 간 및 신장에 대한 독성을 가지고 있어 주의가 필요합니다.
                      </Text>

                      <Box
                        bg="red.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="red.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          쿠마린이란?
                        </Text>
                        <Text>
                          쿠마린(coumarin)은 계피와 같은 식물에서 발견되는 성분으로, 
                          <b>간 및 신장에 대한 독성이 높습니다</b>. 
                          또한 특정인에게서 알러지 반응을 유발하기도 합니다.
                        </Text>
                        <Text mt={3}>
                          식품의약품안전처에서는 쿠마린 섭취량에 대한 안전 기준을 제시하고 있으며, 
                          과도한 섭취는 건강에 해로울 수 있습니다. 특히 간 질환이 있거나 
                          신장 기능이 약한 사람은 더욱 주의해야 합니다.
                        </Text>
                      </Box>

                      <Box
                        bg="orange.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="orange.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          시나몬과 계피의 쿠마린 함량 차이
                        </Text>
                        <Text>
                          <b>시나몬보다 계피에 훨씬 더 많은 쿠마린이 함유되어 있습니다</b>. 
                          실제로 계피(Cassia)의 쿠마린 함량은 시나몬(Ceylon Cinnamon)보다 
                          63배 이상 높을 수 있습니다.
                        </Text>
                        <Text mt={3}>
                          이는 시나몬을 사용하는 것이 건강상 더 안전하다는 의미입니다. 
                          특히 계피를 자주 사용하는 사람은 쿠마린 섭취량을 줄이기 위해 
                          <b>소량씩 섭취</b>해야 합니다.
                        </Text>
                        <Text mt={3}>
                          한국에서 일반적으로 사용되는 계피 가루는 대부분 Cassia 계열이므로, 
                          건강을 위해 과하지 않게 소량씩 섭취하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box
                        bg="yellow.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="yellow.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          안전한 섭취 방법
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>1. 소량 섭취:</b> 계피를 과하지 않게 소량씩 섭취하기
                          </Text>
                          <Text>
                            <b>2. 시나몬 선택:</b> 가능하면 쿠마린 함량이 낮은 시나몬 선택하기
                          </Text>
                          <Text>
                            <b>3. 건강 상태 확인:</b> 간 질환이나 신장 질환이 있는 경우 의사와 상담하기
                          </Text>
                          <Text>
                            <b>4. 알러지 반응 주의:</b> 특정인에게 알러지 반응을 유발할 수 있으므로 
                            처음 섭취할 때는 소량부터 시작하기
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        건강을 위해서는 쿠마린 함량이 낮은 시나몬을 선택하거나, 
                        계피를 사용할 때는 과하지 않게 소량씩 섭취하는 것이 중요합니다. 
                        특히 계피를 자주 사용하는 사람은 쿠마린 섭취량에 주의해야 합니다.
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
                      마무리: 시나몬과 계피, 올바르게 구별하고 사용하기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        시나몬과 계피는 비슷해 보이지만 나무 품종, 향미, 외관, 그리고 건강에 미치는 영향까지 
                        많은 차이가 있습니다. 두 향신료의 차이를 정확히 알고 사용하면, 
                        요리의 맛을 더 좋게 만들고 건강도 지킬 수 있습니다.
                      </Text>
                      <Text>
                        한국 시장에서 일반적으로 '계피'라고 불리는 것은 대부분 'Cassia' 계열이며, 
                        쿠마린 함량이 높습니다. 건강을 위해서는 쿠마린 함량이 낮은 시나몬을 선택하거나, 
                        계피를 사용할 때는 과하지 않게 소량씩 섭취하는 것이 중요합니다.
                      </Text>
                      <Text>
                        다음에 시나몬이나 계피를 구입할 때는 나무 품종, 향미, 외관, 그리고 쿠마린 함량을 
                        고려하여 선택하세요. 요리 목적에 맞는 향신료를 선택하면, 
                        더 좋은 맛과 향을 낼 수 있고, 건강도 지킬 수 있습니다.
                      </Text>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          🍂 오늘의 한 줄: "시나몬과 계피, 같아 보이지만 다릅니다"
                        </Text>
                        <Text color="#495057">
                          시나몬은 부드럽고 달콤한 향미를, 계피는 강하고 자극적인 향미를 가집니다. 
                          또한 계피에 더 많은 쿠마린이 함유되어 있으므로, 건강을 위해 소량씩 섭취하는 것이 중요합니다.
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
                      article.id !== '21' && 
                      (article.category === category || 
                       article.category.includes('식품') ||
                       article.category.includes('과학'))
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

export default Blog21;

