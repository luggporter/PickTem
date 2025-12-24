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

const Blog22 = () => {
  const navigate = useNavigate();
  const title = '가래떡 찍어먹을 때, 조청 VS 물엿';
  const description =
    '가래떡에 찍어먹는 조청과 물엿의 차이점을 알아봅니다. 제조 공정, 맛과 향, 용도부터 건강한 섭취 방법까지, 두 시럽을 올바르게 구별하고 선택하는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/22`;
  const ogImage = `${baseUrl}images/blog/blog22.png`;

  const publishedDate = '2024년 11월 11일';
  const author = '씩씩이';
  const category = '식품 과학';
  const readTime = 8;

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
    datePublished: '2024-11-11',
    dateModified: '2024-11-11',
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
                  src="/images/blog/blog22.png"
                  alt="조청과 물엿 비교"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      11/11 가래떡 데이, 조청과 물엿 중 어느 것을 선택할까?
                    </Text>
                    <Text mb={4}>
                      가래떡을 찍어먹을 때 조청과 물엿 중 어떤 것을 선택하시나요? 
                      많은 사람들이 두 시럽을 비슷한 것으로 생각하지만, 실제로는 
                      제조 공정, 맛과 향, 용도까지 많은 차이가 있습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 조청은 전통 방식으로 곡물에서 추출한 전통 감미료이며, 
                      물엿은 현대적인 방식으로 정제 전분에서 만든 시럽입니다. 
                      두 시럽의 차이를 정확히 알고 선택하면, 가래떡을 더 맛있게 즐길 수 있고, 
                      건강도 고려할 수 있습니다.
                    </Text>
                    <Text>
                      이 글에서는 조청과 물엿의 차이점을 <b>정의와 제조 공정</b>, 
                      <b>맛과 향의 특징</b>, <b>용도와 활용법</b>, 그리고 
                      <b>건강한 섭취 방법</b>까지 종합적으로 정리했습니다. 
                      각 정보는 식품의약품안전처의 식품 안전 가이드라인과 
                      실제 제조 공정을 바탕으로 작성되었습니다.
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
                      1) 조청, 무엇일까요?
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        조청은 한국의 전통 감미료로, 곡물의 전분을 효소로 당화하여 만든 시럽입니다. 
                        오래전부터 사용되어 온 전통적인 방식으로 제조되며, 
                        곡물 고유의 풍미를 그대로 담고 있는 것이 특징입니다.
                      </Text>

                      <Box
                        bg="orange.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="orange.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          조청의 정의
                        </Text>
                        <Text>
                          조청은 <b>곡식(쌀, 보리 등)의 전분을 엿기름 효소로 당화해 만든 전통 감미료</b>입니다. 
                          곡물에 함유된 전분을 엿기름(맥아) 효소로 자연적으로 당화시키는 방식으로 만들어집니다.
                        </Text>
                        <Text mt={3}>
                          이 과정은 곡물에 함유된 전분이 효소 작용으로 당(糖)으로 변환되는 과정으로, 
                          자연적인 발효 과정을 거칩니다. 따라서 조청은 곡물의 자연스러운 당분을 추출한 것으로, 
                          전통적인 제조 방식의 결과물입니다.
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
                          조청의 특징
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>1. 걸쭉한 점성:</b> 조청은 걸쭉하고 끈적거리는 점성을 가지고 있습니다. 
                            가래떡에 찍어먹을 때 잘 묻어나오는 특성이 있습니다.
                          </Text>
                          <Text>
                            <b>2. 갈색빛:</b> 조청은 갈색을 띠며, 불투명한 색상을 가지고 있습니다. 
                            이는 곡물에서 추출한 자연스러운 색상입니다.
                          </Text>
                          <Text>
                            <b>3. 곡물 고유의 풍미:</b> 조청은 사용된 곡물(쌀, 보리 등)의 고유한 풍미를 
                            그대로 가지고 있습니다. 곡물의 단맛과 함께 은은한 곡물 향이 느껴집니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        조청은 전통적인 방식으로 제조되기 때문에, 곡물의 자연스러운 맛과 향을 
                        그대로 담고 있습니다. 이 때문에 가래떡뿐만 아니라 다양한 전통 음식에 
                        감미료로 사용되며, 특히 단맛 외에도 곡물의 풍미를 더하고 싶을 때 사용됩니다.
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
                      2) 물엿, 무엇일까요?
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        물엿은 현대적인 방식으로 제조된 시럽으로, 정제된 전분을 가수분해하여 만든 
                        투명한 시럽입니다. 조청과 달리 산업적인 방식으로 제조되며, 
                        깔끔하고 중립적인 단맛이 특징입니다.
                      </Text>

                      <Box
                        bg="blue.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="blue.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          물엿의 정의
                        </Text>
                        <Text>
                          물엿은 <b>옥수수·감자 등 정제 전분을 가수분해한 뒤, 여과·농축하여 만든 
                          맑고 투명한 시럽</b>입니다. 정제된 전분을 산업용 효소나 산으로 가수분해하여 
                          당으로 변환하는 방식으로 만들어집니다.
                        </Text>
                        <Text mt={3}>
                          이 과정은 정제된 전분을 화학적·효소적 방법으로 가수분해하여 당으로 만드는 것으로, 
                          조청과 달리 자연 발효 과정을 거치지 않습니다. 따라서 물엿은 정제되고 
                          가공된 전분에서 추출한 당분으로, 현대적인 제조 방식의 결과물입니다.
                        </Text>
                      </Box>

                      <Box
                        bg="cyan.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="cyan.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          물엿의 특징
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>1. 맑고 투명한 색상:</b> 물엿은 맑고 투명한 색상을 가지고 있습니다. 
                            조청과 달리 불투명하지 않으며, 물처럼 투명합니다.
                          </Text>
                          <Text>
                            <b>2. 향이 없는 깔끔한 단맛:</b> 물엿은 향이 거의 없고, 깔끔한 단맛을 가집니다. 
                            곡물의 풍미가 없기 때문에 음식 본연의 맛을 해치지 않습니다.
                          </Text>
                          <Text>
                            <b>3. 점도 조절과 잡맛 제거:</b> 물엿은 음식의 점도를 높이고 
                            잡맛을 줄이는 데 활용됩니다. 단맛을 추가하면서도 음식의 맛을 해치지 않는 
                            중립적인 감미료입니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        물엿은 깔끔하고 중립적인 단맛을 제공하기 때문에, 음식 본연의 맛을 해치지 않으면서 
                        단맛을 더하고 싶을 때 사용됩니다. 특히 가래떡처럼 단맛만 필요하고 
                        다른 풍미는 원하지 않을 때 물엿이 적합합니다.
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
                      3) 제조 공정의 차이
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        조청과 물엿의 가장 큰 차이는 제조 공정입니다. 
                        조청은 전통적인 자연 발효 방식을, 물엿은 현대적인 화학적·효소적 방식을 사용합니다.
                      </Text>

                      <Box
                        bg="green.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="green.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          조청의 제조 공정
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>1단계: 원료 준비</b><br />
                            곡류 원료(쌀, 보리 등) + 엿기름 효소
                          </Text>
                          <Text>
                            <b>2단계: 자연적인 효소 당화</b><br />
                            곡물의 전분이 엿기름 효소의 작용으로 자연적으로 당으로 변환됩니다. 
                            이 과정은 자연 발효 과정을 거치며, 시간이 오래 걸립니다.
                          </Text>
                          <Text>
                            <b>3단계: 졸임(농축)</b><br />
                            당화된 액체를 졸여서 농축시켜 걸쭉한 시럽 형태로 만듭니다.
                          </Text>
                        </Stack>
                        <Text mt={3}>
                          조청의 제조 공정은 자연적인 효소 작용에 의존하기 때문에, 
                          곡물의 고유한 풍미가 그대로 살아있습니다. 
                          또한 전통적인 방식으로 제조되기 때문에 시간이 오래 걸리지만, 
                          더 자연스러운 맛과 향을 만들 수 있습니다.
                        </Text>
                      </Box>

                      <Box
                        bg="purple.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="purple.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          물엿의 제조 공정
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>1단계: 원료 준비</b><br />
                            정제 전분(옥수수, 감자 등) + 산업용 효소
                          </Text>
                          <Text>
                            <b>2단계: 가수분해</b><br />
                            정제된 전분을 산업용 효소나 산으로 가수분해하여 당으로 변환합니다. 
                            이 과정은 화학적·효소적 방법을 사용하며, 빠르게 진행됩니다.
                          </Text>
                          <Text>
                            <b>3단계: 여과·농축</b><br />
                            가수분해된 액체를 여과하여 불순물을 제거한 후, 농축시켜 시럽 형태로 만듭니다.
                          </Text>
                        </Stack>
                        <Text mt={3}>
                          물엿의 제조 공정은 산업적인 방법을 사용하기 때문에, 
                          빠르게 대량 생산할 수 있으며, 깔끔하고 투명한 시럽을 만들 수 있습니다. 
                          또한 정제된 전분을 사용하기 때문에 곡물의 풍미가 없어, 
                          중립적인 단맛을 제공합니다.
                        </Text>
                      </Box>

                      <Text>
                        제조 공정의 차이로 인해 조청은 곡물의 고유한 풍미를 가진 반면, 
                        물엿은 깔끔하고 중립적인 단맛을 가집니다. 
                        이는 두 시럽의 맛과 용도의 차이를 결정하는 중요한 요소입니다.
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
                      4) 조청과 물엿, 언제 어떤 것을 선택할까?
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        조청과 물엿은 각각의 특징이 있기 때문에, 용도에 따라 선택하는 것이 좋습니다.
                      </Text>

                      <Box
                        bg="orange.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="orange.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          조청을 선택하는 경우
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>• 곡물의 풍미를 더하고 싶을 때:</b> 조청은 곡물의 고유한 풍미를 가지고 있기 때문에, 
                            곡물의 맛을 더하고 싶을 때 사용합니다.
                          </Text>
                          <Text>
                            <b>• 전통적인 맛을 원할 때:</b> 전통 음식이나 전통적인 맛을 재현하고 싶을 때 
                            조청을 사용합니다.
                          </Text>
                          <Text>
                            <b>• 걸쭉한 질감을 원할 때:</b> 조청은 걸쭉한 점성을 가지고 있어, 
                            가래떡에 찍어먹을 때 잘 묻어나옵니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Box
                        bg="blue.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="blue.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          물엿을 선택하는 경우
                        </Text>
                        <Stack spacing={2}>
                          <Text>
                            <b>• 깔끔한 단맛만 원할 때:</b> 물엿은 향이 없는 깔끔한 단맛을 제공하기 때문에, 
                            음식 본연의 맛을 해치지 않으면서 단맛만 더하고 싶을 때 사용합니다.
                          </Text>
                          <Text>
                            <b>• 점도를 조절하고 싶을 때:</b> 물엿은 음식의 점도를 높이는 데 활용되므로, 
                            요리의 점도를 조절하고 싶을 때 사용합니다.
                          </Text>
                          <Text>
                            <b>• 잡맛을 줄이고 싶을 때:</b> 물엿은 잡맛을 줄이는 효과가 있기 때문에, 
                            음식의 잡맛을 없애고 싶을 때 사용합니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        가래떡을 찍어먹을 때는 개인의 취향에 따라 선택하면 됩니다. 
                        곡물의 풍미를 원한다면 조청을, 깔끔한 단맛만 원한다면 물엿을 선택하는 것이 좋습니다.
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
                      5) 건강한 섭취 방법
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        조청과 물엿 모두 단순당(단당류)에 해당하므로, 건강을 위해서는 적절한 섭취가 필요합니다. 
                        식품의약품안전처에서는 당류 섭취량에 대한 권장 기준을 제시하고 있습니다.
                      </Text>

                      <Box
                        bg="red.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="red.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          하루 권장 당류 섭취량
                        </Text>
                        <Text>
                          식품의약품안전처에서는 하루 총 에너지(칼로리) 섭취량의 
                          <b>10% 미만</b>을 당류로 섭취하는 것을 권장합니다.
                        </Text>
                        <Text mt={3}>
                          예를 들어, 하루 2000kcal를 섭취하는 경우 당류 섭취량은 200kcal 이하, 
                          즉 약 50g 이하로 제한하는 것이 좋습니다. 
                          조청과 물엿도 당류에 해당하므로, 이 기준을 고려하여 섭취해야 합니다.
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
                          건강한 섭취 방법 3가지
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>1. 영양성분표의 당류 함량 확인하기</b><br />
                            조청이나 물엿을 구입할 때는 영양성분표에서 당류 함량을 확인하세요. 
                            하루 권장 섭취량을 초과하지 않도록 주의해야 합니다.
                          </Text>
                          <Text>
                            <b>2. 자연 식품(과일 등)을 통한 섭취로 대체하기</b><br />
                            단순당 대신 과일 같은 자연 식품에서 당분을 섭취하는 것이 더 건강합니다. 
                            과일은 단맛뿐만 아니라 비타민, 미네랄, 식이섬유도 함께 제공하기 때문입니다.
                          </Text>
                          <Text>
                            <b>3. 다른 단맛 식품과 중복 섭취 줄이기</b><br />
                            조청이나 물엿을 섭취할 때는 다른 단맛 식품(과자, 음료 등)과 함께 
                            섭취하지 않도록 주의하세요. 중복 섭취로 인해 하루 당류 섭취량을 
                            초과할 수 있습니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        조청과 물엿은 모두 당류에 해당하므로, 건강을 위해서는 적절한 양을 섭취하는 것이 중요합니다. 
                        특히 가래떡에 찍어먹을 때도 적당한 양만 사용하고, 
                        다른 단맛 식품과 함께 섭취하지 않도록 주의해야 합니다.
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
                      마무리: 조청과 물엿, 올바르게 선택하고 건강하게 섭취하기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        조청과 물엿은 비슷해 보이지만 제조 공정, 맛과 향, 용도까지 많은 차이가 있습니다. 
                        두 시럽의 차이를 정확히 알고 선택하면, 가래떡을 더 맛있게 즐길 수 있고, 
                        건강도 고려할 수 있습니다.
                      </Text>
                      <Text>
                        조청은 곡물의 고유한 풍미를 가진 전통 감미료이며, 
                        물엿은 깔끔하고 중립적인 단맛을 가진 현대적 시럽입니다. 
                        각각의 특징을 이해하고 용도에 맞게 선택하는 것이 중요합니다.
                      </Text>
                      <Text>
                        또한 두 시럽 모두 단순당에 해당하므로, 건강을 위해서는 
                        하루 권장 당류 섭취량(총 에너지의 10% 미만)을 고려하여 
                        적절한 양을 섭취해야 합니다. 
                        다음에 가래떡을 찍어먹을 때는 조청과 물엿의 차이를 생각해보고, 
                        자신의 취향과 건강을 고려하여 선택하세요.
                      </Text>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          🍡 오늘의 한 줄: "조청과 물엿, 비슷해 보이지만 다릅니다"
                        </Text>
                        <Text color="#495057">
                          조청은 곡물의 풍미를 가진 전통 감미료이고, 물엿은 깔끔한 단맛을 가진 현대적 시럽입니다. 
                          각각의 특징을 이해하고 용도에 맞게 선택하면, 가래떡을 더 맛있게 즐길 수 있고 
                          건강도 지킬 수 있습니다.
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

export default Blog22;
