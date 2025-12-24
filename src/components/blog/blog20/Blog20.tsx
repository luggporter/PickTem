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

const Blog20 = () => {
  const navigate = useNavigate();
  const title = '기내식에 삶은 채소와 과일이 많이 등장하는 이유는?';
  const description =
    '기내식 메뉴에 삶은 채소와 과일이 자주 등장하는 과학적인 이유를 알아봅니다. 고공에서 변화하는 후각과 미각, 식품 안전성, 식감 유지까지 기내식 메뉴 설계의 비밀을 풀어봅니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/20`;
  const ogImage = `${baseUrl}images/blog/blog20.png`;

  const publishedDate = '2024년 11월 25일';
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
    datePublished: '2024-11-25',
    dateModified: '2024-11-25',
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
                  src="/images/blog/blog20.png"
                  alt="기내식 트레이에 담긴 삶은 채소와 과일"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" mb={3}>
                      기내식 메뉴에 숨은 과학적인 비밀
                    </Text>
                    <Text mb={4}>
                      비행기를 타고 기내식을 받아보면, 왜 항상 삶은 채소와 과일이 함께 나올까요? 
                      단순한 메뉴 구성이 아니라, 고공 환경에서 변화하는 우리의 감각과 식품 안전성을 
                      고려한 과학적인 메뉴 설계의 결과입니다.
                    </Text>
                    <Text mb={4}>
                      실제로 기내식 메뉴 개발은 항공사와 식품 전문가들이 오랜 연구를 통해 
                      최적화한 결과물입니다. 고공에서 변화하는 후각과 미각 기능, 식품의 안전성, 
                      재가열 후 식감 유지, 그리고 맛의 보정까지. 모든 요소가 고려된 메뉴 설계의 
                      핵심이 바로 삶은 채소와 과일입니다.
                    </Text>
                    <Text>
                      이 글에서는 기내식에 삶은 채소와 과일이 자주 등장하는 이유를 
                      <b> 기내 환경의 변화</b>, <b>식품 안전성</b>, <b>식감 유지</b>, 
                      <b>맛의 보정</b> 측면에서 과학적으로 풀어봅니다. 
                      각 원리는 실제 기내식 메뉴 개발 과정에서 적용되는 기준들을 바탕으로 작성되었으며, 
                      식품의약품안전처의 식품 안전 가이드라인도 반영했습니다.
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
                      1) 기내 환경의 변화: 후각과 미각이 떨어지는 이유
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        비행기가 지상에서 10km 이상 오르면, 기내 환경이 급격히 변합니다. 
                        이 변화는 우리의 후각과 미각 기능에 직접적인 영향을 미칩니다. 
                        실제로 고공 환경에서는 대기압, 습도, 온도 등이 지상과 다르기 때문에 
                        우리의 감각 기관이 정상적으로 작동하지 않게 됩니다.
                      </Text>

                      <Box
                        bg="blue.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="blue.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          후각 기능이 떨어지는 이유
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>1. 기체 부피의 팽창</b><br />
                            고공에서는 기내 압력이 낮아지면서 기체의 부피가 팽창합니다. 
                            냄새 분자를 포함한 모든 기체가 부피가 커지면서, 
                            <b> 단위 부피당 냄새 분자의 수가 감소</b>하게 됩니다.
                          </Text>
                          <Text>
                            <b>2. 냄새 분자 수의 감소</b><br />
                            같은 양의 냄새 분자라도 부피가 커지면 우리의 코에 도달하는 
                            냄새 분자의 농도가 낮아집니다. 이로 인해 후각 수용체가 
                            자극을 제대로 받지 못하게 됩니다.
                          </Text>
                          <Text>
                            <b>3. 후각 기능의 저하</b><br />
                            결과적으로 우리는 기내에서 음식의 향을 지상에서보다 훨씬 약하게 느끼게 됩니다. 
                            이는 음식의 맛을 인식하는 데 중요한 역할을 하는 후각 기능이 
                            떨어졌기 때문입니다.
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
                          미각 기능이 떨어지는 이유 (특히 단맛과 짠맛)
                        </Text>
                        <Stack spacing={3}>
                          <Text>
                            <b>1. 낮은 습도의 외부 공기 순환</b><br />
                            고공의 외부 공기는 습도가 매우 낮습니다. 이 공기가 기내로 순환되면서 
                            기내의 습도도 낮아지게 됩니다. 실제로 기내 습도는 보통 10~20% 정도로, 
                            지상의 40~60%보다 훨씬 낮습니다.
                          </Text>
                          <Text>
                            <b>2. 코 점막의 건조와 침 분비 감소</b><br />
                            낮은 습도로 인해 코 점막이 마르고, 타액(침)의 분비도 감소합니다. 
                            코 점막은 냄새를 맡는 데 중요한 역할을 하며, 침은 음식의 맛 성분을 
                            미각 수용체로 운반하는 역할을 합니다.
                          </Text>
                          <Text>
                            <b>3. 물 부족과 미각 수용체의 둔화</b><br />
                            수분이 부족해지면서 미각 수용체의 작용이 둔화됩니다. 
                            특히 <b>단맛과 짠맛을 감지하는 기능</b>이 크게 떨어집니다. 
                            실제로 기내에서 음식을 먹으면 지상보다 훨씬 싱겁고 맛없게 느껴지는 것이 
                            바로 이 때문입니다.
                          </Text>
                        </Stack>
                      </Box>

                      <Text>
                        이런 기내 환경의 변화 때문에, 기내식 메뉴는 지상에서보다 더 강한 맛과 향을 가져야 합니다. 
                        그렇지 않으면 고객들이 음식을 제대로 맛볼 수 없기 때문입니다. 
                        따라서 기내식 메뉴 개발 시에는 이러한 감각 기능의 저하를 보정할 수 있는 
                        재료와 조리법을 선택하게 됩니다.
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
                      2) 삶은 채소가 기내식에 등장하는 이유
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        기내식 메뉴에 삶은 채소(브로콜리, 당근, 콩 등)가 자주 등장하는 이유는 
                        크게 두 가지입니다: <b>식중독 위험의 최소화</b>와 <b>재가열 후 식감 변화의 최소화</b>입니다.
                      </Text>

                      <Box
                        bg="green.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="green.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          식중독 위험 최소화
                        </Text>
                        <Text>
                          기내식은 지상에서 조리된 후 운반 과정을 거쳐, 기내에서 재가열하여 제공됩니다. 
                          이 과정에서 식품 안전성이 가장 중요한 고려 사항입니다.
                        </Text>
                        <Text mt={3}>
                          삶거나 찌는 가열 과정은 식품 내부의 온도를 충분히 높여 
                          <b> 병원성 미생물을 효과적으로 제거</b>합니다. 특히 브로콜리, 당근 같은 채소는 
                          내부까지 충분히 가열되어야 안전한데, 삶거나 찌는 방법이 이를 가장 확실하게 보장합니다. 
                          이는 식품의약품안전처에서도 권장하는 안전한 조리 방법입니다.
                        </Text>
                        <Text mt={3}>
                          반면 볶거나 굽는 조리법은 외부는 익었지만 내부가 충분히 가열되지 않을 수 있어 
                          식중독 위험이 있습니다. 기내식처럼 대량 조리 후 장시간 보관·운반하는 경우에는 
                          삶거나 찌는 방법이 가장 안전합니다.
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
                          재가열 후 식감의 변화 최소화
                        </Text>
                        <Text>
                          기내식은 조리 후 냉장 보관되었다가 기내에서 재가열하여 제공됩니다. 
                          이 과정에서 많은 음식들이 식감이 크게 변해버립니다. 
                          특히 신선한 채소는 재가열하면 물러지거나 맛이 변하기 쉽습니다.
                        </Text>
                        <Text mt={3}>
                          하지만 <b>삶은 채소는 수분 함량이 높아</b> 재가열 후에도 촉촉한 식감을 유지합니다. 
                          또한 삶는 과정에서 이미 충분히 익어 있기 때문에, 재가열해도 
                          맛 변화가 거의 없습니다. 이는 기내식 메뉴 개발에서 매우 중요한 고려 사항입니다.
                        </Text>
                        <Text mt={3}>
                          실제로 기내식 메뉴 테스트에서는 재가열 후에도 식감과 맛이 유지되는 재료를 선별합니다. 
                          삶은 채소는 이 조건을 만족하는 대표적인 재료이며, 
                          고객들에게 일관된 품질의 식사를 제공할 수 있게 해줍니다.
                        </Text>
                      </Box>

                      <Text>
                        이렇게 삶은 채소는 식품 안전성과 식감 유지라는 두 가지 중요한 조건을 모두 만족하기 때문에 
                        기내식 메뉴에 자주 등장합니다. 단순히 조리 편의성 때문이 아니라, 
                        과학적이고 체계적인 메뉴 설계의 결과입니다.
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
                      3) 과일이 기내식에 등장하는 이유: 과당의 특별한 단맛
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        기내식에 과일(사과, 바나나, 오렌지 등)이 자주 등장하는 이유는 
                        <b> 과당의 특별한 단맛 특성</b> 때문입니다. 기내 환경에서 떨어진 미각 기능, 
                        특히 단맛 감지 기능을 보정하는 데 과일이 최적의 재료입니다.
                      </Text>

                      <Box
                        bg="yellow.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="yellow.500"
                      >
                        <Text fontWeight="600" mb={3} fontSize={{ base: '16px', md: '17px' }}>
                          과당의 강한 단맛
                        </Text>
                        <Text>
                          과일의 주된 단맛 성분은 <b>과당(Fructose)</b>입니다. 
                          과당은 일반 설탕(자당)보다 훨씬 더 강한 단맛을 가지고 있습니다. 
                          실제로 같은 양이라면 과당의 단맛 강도가 자당보다 1.2~1.8배 정도 더 강합니다.
                        </Text>
                        <Text mt={3}>
                          기내 환경에서 미각 기능이 떨어지면, 일반적인 단맛으로는 
                          제대로 단맛을 느끼기 어렵습니다. 하지만 과당의 강한 단맛은 
                          떨어진 미각 기능을 보정할 수 있을 만큼 충분히 강합니다.
                        </Text>
                        <Text mt={3}>
                          또한 과당은 다른 당류와 달리 입안에서 빠르게 단맛을 느끼게 해주기 때문에, 
                          기내식처럼 재가열 후 제공되는 음식에서도 일관된 단맛을 제공합니다.
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
                          낮은 온도가 단맛을 증폭
                        </Text>
                        <Text>
                          과당의 또 다른 특징은 <b>온도가 낮을수록 단맛이 더 강해진다</b>는 것입니다. 
                          실제로 차가운 과일은 따뜻한 과일보다 더 달게 느껴집니다.
                        </Text>
                        <Text mt={3}>
                          기내식의 과일은 보통 냉장 보관 후 제공되기 때문에 차가운 상태입니다. 
                          이 차가운 온도가 과당의 단맛을 더욱 증폭시켜, 
                          둔화된 미각 기능을 효과적으로 보정해줍니다.
                        </Text>
                        <Text mt={3}>
                          반면 일반 설탕은 온도가 낮아져도 단맛 강도가 크게 변하지 않습니다. 
                          따라서 기내식 메뉴에서는 단맛을 보정하기 위해 과당이 풍부한 과일을 
                          선택하게 됩니다.
                        </Text>
                      </Box>

                      <Text>
                        이렇게 과일은 기내 환경에서 떨어진 미각 기능을 보정하는 최적의 재료입니다. 
                        강한 단맛을 제공하고, 차가운 온도에서 단맛이 증폭되어 
                        고객들이 음식을 제대로 맛볼 수 있게 해줍니다.
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
                      4) 기내식 메뉴 설계의 과학: 모든 요소의 조화
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        기내식에 삶은 채소와 과일이 등장하는 이유는 단순히 하나의 이유가 아니라, 
                        여러 과학적 원리가 복합적으로 작용한 결과입니다.
                      </Text>

                      <Text>
                        <b>1. 감각 기능 보정</b><br />
                        기내 환경에서 떨어진 후각과 미각 기능을 보정하기 위해 
                        강한 맛과 향을 가진 재료를 선택합니다. 과일의 강한 단맛과 
                        삶은 채소의 자연스러운 맛이 이러한 역할을 합니다.
                      </Text>

                      <Text>
                        <b>2. 식품 안전성 확보</b><br />
                        지상에서 조리 후 장시간 보관·운반·재가열하는 과정에서 
                        식중독 위험을 최소화하기 위해 충분히 가열된 재료를 선택합니다. 
                        삶은 채소는 이러한 안전 기준을 만족하는 대표적인 재료입니다.
                      </Text>

                      <Text>
                        <b>3. 식감과 품질 유지</b><br />
                        재가열 후에도 식감과 맛이 유지되는 재료를 선택합니다. 
                        삶은 채소의 높은 수분 함량과 과일의 자연스러운 식감이 
                        이러한 조건을 만족합니다.
                      </Text>

                      <Text>
                        <b>4. 영양 균형</b><br />
                        기내식은 비행 중 필요한 영양소를 제공해야 합니다. 
                        삶은 채소와 과일은 비타민, 미네랄, 식이섬유를 풍부하게 제공하여 
                        영양 균형을 맞추는 데 도움이 됩니다.
                      </Text>

                      <Text>
                        이 모든 요소들이 조화롭게 결합되어 기내식 메뉴가 완성됩니다. 
                        단순한 조리 방법의 선택이 아니라, 과학적이고 체계적인 메뉴 설계의 결과인 것입니다.
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
                      마무리: 기내식 메뉴에 숨은 과학
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        기내식에 삶은 채소와 과일이 자주 등장하는 이유는 
                        고공 환경에서 변화하는 우리의 감각과 식품의 특성을 과학적으로 분석한 결과입니다.
                      </Text>
                      <Text>
                        기내 환경에서 후각과 미각 기능이 떨어지면, 우리는 음식을 제대로 맛볼 수 없습니다. 
                        하지만 삶은 채소와 과일은 이러한 감각 기능의 저하를 보정하고, 
                        식품 안전성을 확보하며, 재가열 후에도 식감과 맛을 유지할 수 있게 해줍니다.
                      </Text>
                      <Text>
                        다음에 비행기를 타고 기내식을 받았을 때, 삶은 채소와 과일을 보면 
                        그 뒤에 숨어 있는 과학적인 원리를 생각해보세요. 
                        단순한 메뉴 구성이 아니라, 고객의 건강과 안전, 그리고 만족도를 위해 
                        과학적으로 설계된 메뉴라는 것을 알 수 있을 것입니다.
                      </Text>

                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontWeight="600" mb={2}>
                          ✈️ 오늘의 한 줄: "기내식 메뉴는 과학의 결과물"
                        </Text>
                        <Text color="#495057">
                          삶은 채소와 과일이 기내식에 등장하는 이유는 단순한 조리 편의가 아니라, 
                          고공 환경에서의 감각 변화와 식품 안전성을 고려한 과학적인 메뉴 설계의 결과입니다.
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

export default Blog20;

