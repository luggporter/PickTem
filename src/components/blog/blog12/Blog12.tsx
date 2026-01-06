// Blog12.tsx  식물 별 분갈이 시기 & 분갈이 방법 완벽 가이드
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

import { KakaoAdDirect } from '../../../pages/Home';
import { articles } from '../blogList';

const Blog12 = () => {
  const navigate = useNavigate();
  const title = '식물 별 분갈이 시기 & 분갈이 방법 완벽 가이드';
  const description =
    '반려식물 종류별로 언제 분갈이를 해줘야 하는지, 초보자도 실패 없이 따라 할 수 있는 단계별 분갈이 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/12`;
  const ogImage = `${baseUrl}images/blog/blog12.png`;
  
  

  const publishedDate = '2024년 3월 25일';
  const author = '아리';
  const category = '분갈이 가이드';
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
    datePublished: '2024-03-25',
    dateModified: '2024-03-25',
    articleSection: category,
    keywords: `${category}, 식물 관리, 분갈이`,
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
        <meta name="keywords" content={`${category}, 식물 관리, 분갈이, ${title}`} />
        <link rel="canonical" href={url} />

        {/* Article 메타 태그 */}
        <meta property="article:author" content={author} />
        <meta property="article:published_time" content="2024-03-25" />
        <meta property="article:modified_time" content="2024-03-25" />
        <meta property="article:section" content={category} />
        <meta property="article:tag" content={category} />
        <meta property="article:tag" content="식물 관리" />
        <meta property="article:tag" content="분갈이" />

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
                <Badge colorScheme="brand" px={3} py={1} borderRadius="8px">
                  {category}
                </Badge>
                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="800"
                  color="#1a2e1a"
                >
                  {title}
                </Heading>
                <HStack spacing={4} fontSize="14px" color="#868e96">
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
                  src="/images/blog/blog12.png"
                  alt="분갈이를 준비하는 화분과 도구들"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9">
                  <Box>
                    <Text fontSize="18px" fontWeight="600" mb={3}>
                      “분갈이 언제 해줘야 하죠?”라는 질문부터 정리해봅시다
                    </Text>
                    <Text mb={4}>
                      화분이 답답해 보이는 것 같기도 하고, 뿌리가 꽉 찬 것 같기도 한데
                      정확히 언제, 어떻게 분갈이를 해줘야 할지 헷갈리는 경우가 많습니다.
                    </Text>
                    <Text mb={4}>
                      분갈이는 식물이 건강하게 자라기 위해 필요한 중요한 작업입니다. 
                      화분이 작아지면 뿌리가 자랄 공간이 부족해지고, 
                      흙의 영양분이 고갈되어 식물이 제대로 자라지 못합니다. 
                      적절한 시기에 분갈이를 해주면 식물이 더 건강하게 자라고, 
                      새로운 잎도 잘 나옵니다. 반대로 분갈이를 너무 자주 하거나 
                      잘못된 방법으로 하면 오히려 식물에 스트레스를 줄 수 있으므로 
                      올바른 시기와 방법을 아는 것이 중요합니다.
                    </Text>
                    <Text>
                      이 글에서는 <b>분갈이가 필요한 시기 신호</b>와
                      <b>식물 타입별 적절한 분갈이 주기</b>,
                      그리고 초보자도 따라 할 수 있는 단계별 분갈이 방법까지 정리했습니다. 
                      각 방법은 실제로 적용해본 사람들의 경험을 바탕으로 작성했으며, 
                      특히 처음 분갈이를 하는 사람들도 쉽게 따라할 수 있도록 
                      단계별로 상세히 설명했습니다.
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
                      분갈이가 필요하다는 신호 5가지
                    </Heading>
                    <Stack spacing={4}>
                      <Box>
                        <Text fontWeight="600" mb={1}>1. 배수구 구멍으로 뿌리가 삐져나온다.</Text>
                        <Text>
                          이는 뿌리가 화분을 가득 채워 더 이상 자랄 공간이 없다는 명확한 신호입니다. 
                          뿌리가 배수구로 나오면 배수가 제대로 되지 않아 뿌리가 썩을 수 있으므로 
                          즉시 분갈이를 해야 합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>2. 물을 줘도 너무 빨리 말라버린다.</Text>
                        <Text>
                          화분이 작아지면 흙의 양이 줄어들어 수분을 보관할 수 있는 공간이 부족해집니다. 
                          또한 뿌리가 화분을 가득 채우면 흙이 거의 없어져 물을 주어도 
                          금방 말라버립니다. 이는 분갈이가 필요한 신호입니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>3. 흙이 많이 내려앉아 화분 위 공간이 비어 보인다.</Text>
                        <Text>
                          흙이 오래되면 부식되어 내려앉고, 뿌리가 화분을 가득 채우면서 
                          흙이 줄어듭니다. 화분 위 공간이 비어 보이면 
                          흙을 보충하거나 분갈이를 해야 합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>4. 예전만큼 새 잎이 잘 나오지 않는다.</Text>
                        <Text>
                          식물이 자라려면 충분한 공간과 영양분이 필요합니다. 
                          화분이 작아지면 뿌리가 자랄 공간이 부족하고, 
                          흙의 영양분도 고갈되어 새 잎이 잘 나오지 않습니다. 
                          이는 분갈이를 해야 할 시점입니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>5. 흙이 오래되어 냄새가 나거나 하얀 염분 자국이 생겼다.</Text>
                        <Text>
                          흙이 오래되면 영양분이 고갈되고, 염분이 쌓여 식물에 해로울 수 있습니다. 
                          하얀 염분 자국은 물에 녹은 염분이 증발하면서 남은 것으로, 
                          이는 흙을 교체해야 한다는 신호입니다.
                        </Text>
                      </Box>
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
                      식물 타입별 추천 분갈이 주기
                    </Heading>
                    <Stack spacing={4}>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 관엽식물(몬스테라, 고무나무 등): <b>1.5~2년</b>에 한 번</Text>
                        <Text>
                          관엽식물은 성장 속도가 보통이며, 뿌리도 적당히 자랍니다. 
                          1.5~2년에 한 번 분갈이를 하면 충분합니다. 
                          너무 자주 분갈이를 하면 오히려 스트레스를 줄 수 있으므로 
                          분갈이 신호가 나타날 때만 하는 것이 좋습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 산세베리아, 금전수 등 건조를 좋아하는 식물: <b>2~3년</b>에 한 번</Text>
                        <Text>
                          이런 식물들은 성장 속도가 느리고, 뿌리도 천천히 자랍니다. 
                          또한 좁은 화분에서도 잘 자라므로 2~3년에 한 번 분갈이를 해도 충분합니다. 
                          오히려 화분이 너무 크면 과습이 될 수 있으므로 주의가 필요합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 다육·선인장: 성장 속도에 따라 <b>1~3년</b> 간격</Text>
                        <Text>
                          다육식물과 선인장은 성장 속도가 다양합니다. 
                          빠르게 자라는 종은 1년에 한 번, 느리게 자라는 종은 3년에 한 번 
                          분갈이를 해도 됩니다. 각 식물의 성장 속도를 관찰하여 
                          적절한 시기를 결정하는 것이 중요합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 빠르게 크는 어린 식물: 첫 1~2년은 <b>1년에 한 번</b>까지도 가능</Text>
                        <Text>
                          어린 식물은 성장 속도가 빠르므로 첫 1~2년은 1년에 한 번 
                          분갈이를 해주는 것이 좋습니다. 식물이 성장하면서 
                          화분이 작아지면 즉시 분갈이를 해주어야 합니다.
                        </Text>
                      </Box>
                      <Text>
                        분갈이 시기는 보통 <b>봄~초여름</b>이 가장 좋습니다.
                        겨울에는 뿌리가 손상될 경우 회복이 더디기 때문에 웬만하면 피하는 것이 좋습니다.
                      </Text>
                      <Text>
                        봄과 초여름은 식물이 활발하게 자라는 시기이므로, 
                        이 시기에 분갈이를 하면 뿌리가 빠르게 회복하고 적응할 수 있습니다. 
                        반대로 겨울은 식물이 휴면기에 들어가는 시기이므로 
                        뿌리가 손상되면 회복이 어렵습니다. 
                        따라서 분갈이는 봄~초여름에 하는 것이 가장 안전하고 효과적입니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 카카오 광고 블록 제거 (상단에만 배치) */}

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
                      준비물 체크: 분갈이 전 꼭 준비해야 할 것들
                    </Heading>
                    <Stack spacing={4}>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 새 화분 (기존 화분보다 1~2단계 큰 사이즈)</Text>
                        <Text>
                          새 화분은 기존 화분보다 1~2단계만 큰 것이 좋습니다. 
                          너무 큰 화분을 사용하면 과습이 될 수 있고, 
                          뿌리가 충분히 자라지 못해 오히려 식물에 해로울 수 있습니다. 
                          예를 들어, 직경 10cm 화분이었다면 12~13cm 화분으로 바꾸는 것이 적당합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 배수구멍을 막을 망 또는 숨구멍 막힘 방지용 조각</Text>
                        <Text>
                          배수구멍이 막히면 물이 빠지지 않아 뿌리가 썩을 수 있습니다. 
                          망이나 조각을 배수구멍 위에 깔아두면 흙이 빠지는 것을 막으면서도 
                          물은 잘 빠지게 할 수 있습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 식물에 맞는 전용 흙 (관엽/다육/선인장 등)</Text>
                        <Text>
                          각 식물 종류에 맞는 흙을 사용하는 것이 중요합니다. 
                          관엽식물은 보통 배양토를, 다육식물은 배수가 잘 되는 모래가 많이 섞인 흙을, 
                          선인장은 더욱 배수가 잘 되는 흙을 사용합니다. 
                          잘못된 흙을 사용하면 식물이 제대로 자라지 못할 수 있습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 흙을 뜨고 정리할 작은 삽, 장갑</Text>
                        <Text>
                          작은 삽은 흙을 옮기고 정리하는 데 필요하며, 
                          장갑은 손을 보호하고 위생을 유지하는 데 도움이 됩니다. 
                          특히 가시가 있는 식물이나 흙에 직접 손을 대기 싫을 때 유용합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>• 바닥 보호용 신문지 또는 방수 매트</Text>
                        <Text>
                          분갈이를 하면 흙이 흘러내릴 수 있으므로 
                          바닥을 보호하는 것이 중요합니다. 신문지나 방수 매트를 깔아두면 
                          청소가 쉬워지고, 작업 공간도 깨끗하게 유지할 수 있습니다.
                        </Text>
                      </Box>
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
                      단계별 분갈이 방법: 초보자도 따라 하기 쉽게
                    </Heading>
                    <Stack spacing={4}>
                      <Box>
                        <Text fontWeight="600" mb={1}>1. <b>물 주기는 분갈이 하루 전</b>에 가볍게 해둡니다.</Text>
                        <Text>
                          흙이 너무 마른 상태보다 약간 촉촉한 편이 뿌리를 빼내기 쉽습니다. 
                          흙이 완전히 마르면 뿌리가 화분에 달라붙어 빼내기 어렵고, 
                          뿌리가 손상될 수 있습니다. 반대로 너무 젖으면 무거워져 
                          작업하기 어려우므로, 하루 전에 가볍게 물을 주는 것이 좋습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>2. 화분 옆을 가볍게 두드리면서 식물을 천천히 빼냅니다.</Text>
                        <Text>
                          힘으로 잡아당기기보다, 화분을 눕힌 상태에서 살살 흔들어 주세요. 
                          화분 옆을 두드리면 흙과 화분 사이에 공간이 생겨 
                          식물을 쉽게 빼낼 수 있습니다. 식물의 줄기를 잡고 잡아당기면 
                          뿌리가 손상될 수 있으므로 주의해야 합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>3. 뿌리 주변의 오래된 흙을 손으로 가볍게 털어냅니다.</Text>
                        <Text>
                          썩은 뿌리나 지나치게 긴 뿌리는 살짝 잘라 정리해 줍니다. 
                          오래된 흙은 영양분이 고갈되어 있으므로 제거하는 것이 좋습니다. 
                          썩은 뿌리는 검은색이나 갈색으로 변색되어 있으며, 
                          만지면 부드럽게 느껴집니다. 이런 뿌리는 제거해야 
                          건강한 뿌리가 자랄 수 있습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>4. 새 화분 바닥에 망을 깔고, 배수용 마사토나 굵은 입자의 흙을 1층 정도 깔아 배수가 잘 되게 만들어 줍니다.</Text>
                        <Text>
                          배수층을 만들면 물이 잘 빠져나가 뿌리가 썩는 것을 방지할 수 있습니다. 
                          마사토나 굵은 입자의 흙은 배수가 잘 되므로 화분 바닥에 깔아두면 
                          효과적입니다. 배수층의 두께는 화분 크기의 10% 정도가 적당합니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>5. 식물을 중앙에 두고, 가장자리를 새 흙으로 채우며 가볍게 눌러 고정합니다.</Text>
                        <Text>
                          너무 세게 누르면 뿌리가 눌릴 수 있으니 주의합니다. 
                          식물을 중앙에 두고 주변을 새 흙으로 채운 후, 
                          가볍게 눌러 고정하면 됩니다. 흙을 너무 세게 누르면 
                          공기 순환이 안 되어 뿌리에 해로울 수 있습니다.
                        </Text>
                      </Box>
                      <Box>
                        <Text fontWeight="600" mb={1}>6. 분갈이 직후에는 흙이 자리 잡도록 충분히 물을 한 번 주고, 직사광선이 아닌 밝은 그늘에서 며칠 쉬게 해 줍니다.</Text>
                        <Text>
                          분갈이 직후에는 식물이 스트레스를 받은 상태이므로 
                          직사광선을 피하고 밝은 그늘에서 쉬게 해야 합니다. 
                          충분히 물을 주면 흙이 자리 잡고, 뿌리가 새 흙에 적응할 수 있습니다. 
                          약 1주일 정도 지나면 정상적인 위치로 옮겨도 됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* 광고 3: 마지막 섹션 전 */}
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
                      분갈이 후 관리: 바로 비료는 금지
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        분갈이는 식물에게 큰 수술과도 같습니다.
                        뿌리가 상처 난 상태에서 비료를 주면, 오히려 뿌리에 자극이 되어
                        스트레스를 더 키울 수 있습니다.
                      </Text>
                      <Text>
                        분갈이를 하면 뿌리가 손상되고, 식물은 회복에 집중합니다. 
                        이 시기에 비료를 주면 뿌리가 화학적 자극을 받아 
                        더 큰 스트레스를 받을 수 있습니다. 
                        따라서 분갈이 직후에는 비료를 주지 않는 것이 좋습니다.
                      </Text>
                      <Text>
                        최소 3~4주 정도는 <b>물 관리에만 집중</b>하고,
                        식물이 새 잎을 내거나 안정을 되찾은 후에
                        소량의 비료를 사용하는 것이 좋습니다.
                      </Text>
                      <Text>
                        식물이 새 잎을 내거나 기존 잎이 건강하게 유지되면 
                        뿌리가 회복하고 새 흙에 적응했다는 신호입니다. 
                        이때부터 소량의 비료를 주기 시작하면 식물이 더 건강하게 자랄 수 있습니다. 
                        비료는 처음에는 권장량의 절반 정도만 주고, 
                        식물의 반응을 보면서 점진적으로 늘리는 것이 좋습니다.
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
                      마무리: 분갈이는 “리셋”이 아니라 “레벨업”입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        분갈이는 식물을 다시 처음으로 되돌리는 작업이 아니라,
                        <b>지금까지 잘 자라준 만큼 한 단계 더 키워주는 과정</b>입니다.
                      </Text>
                      <Text>
                        분갈이를 하면 식물이 더 큰 공간에서 자랄 수 있고, 
                        새로운 영양분을 공급받아 더 건강하게 자랄 수 있습니다. 
                        또한 뿌리가 자랄 공간이 확보되어 식물 전체가 더 크게 자랄 수 있습니다. 
                        분갈이는 식물을 키우는 과정에서 자연스러운 단계이며, 
                        올바른 시기와 방법으로 하면 식물과 더 가까워질 수 있는 좋은 경험이 됩니다.
                      </Text>
                      <Box
                        bg="brand.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="brand.500"
                      >
                        <Text fontWeight="600" mb={2}>
                          💚 “분갈이 한 번 해보니, 더 가까워진 느낌”
                        </Text>
                        <Text color="#495057">
                          직접 뿌리를 보고 흙을 갈아주다 보면,
                          이 식물이 지금까지 얼마나 자라 왔는지도 함께 느끼게 됩니다.
                          조금은 귀찮을 수 있지만, 분갈이만큼 식물과 친해지는 경험도 드물 거예요.
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
                      article.id !== '12' && 
                      (article.category === category || 
                       article.category?.includes('식물') ||
                       article.category?.includes('생활'))
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

export default Blog12;