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
  const url = `${baseUrl}magazine/6`;
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
                      계절별 홈스타일링은 단순히 '인테리어 꾸미기'가 아니라,
                      우리의 **정서·습관·생활 리듬 전체를 조율하는 방식**입니다.
                    </Text>
                    <Text mb={4}>
                      실제로 계절에 따라 집의 분위기를 바꾸면 우리의 기분과 에너지도 달라집니다. 
                      예를 들어, 겨울에 따뜻한 조명과 두꺼운 담요를 사용하면 휴식과 안정감을 느끼게 되고, 
                      여름에 시원한 색감과 가벼운 소재를 사용하면 활동적인 에너지를 느끼게 됩니다. 
                      계절별 인테리어는 단순히 보기 좋은 공간을 만드는 것이 아니라, 
                      우리의 생체 리듬과 정서를 자연스럽게 조절하는 방법입니다.
                    </Text>
                    <Text>
                      이 글에서는 봄·여름·가을·겨울의 분위기와 심리를 기반으로  
                      **색감, 조명, 패브릭, 향, 소품, 공간 배치 전략**을 한 번에 정리했습니다. 
                      각 계절별로 구체적인 적용 방법과 예산을 고려한 실전 팁을 포함하여, 
                      누구나 쉽게 따라할 수 있도록 작성했습니다.
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
                      <Text>
                        봄 색감은 겨울의 무거운 분위기를 걷어내고 새로운 시작을 상징합니다. 
                        파스텔 톤은 시각적으로 가벼움을 주고, 공간을 밝고 환하게 만듭니다. 
                        특히 쿠션이나 담요, 소품 등 작은 아이템부터 파스텔 색으로 바꾸면 
                        큰 비용 없이도 봄 분위기를 만들 수 있습니다. 또한 벽면에 밝은 색의 
                        액자나 포스터를 걸어두면 공간 전체가 환해 보이는 효과가 있습니다.
                      </Text>

                      <Text fontWeight="600">② 패브릭: 얇고 부드러운 소재</Text>
                      <Text>두꺼운 겨울 러그, 니트 쿠션은 수납하고 리넨·면 소재로 교체합니다.</Text>
                      <Text>
                        봄에는 두꺼운 겨울 소재를 가볍고 통기성이 좋은 소재로 교체하는 것이 중요합니다. 
                        리넨과 면 소재는 공기 순환이 잘 되어 쾌적하고, 시각적으로도 가벼워 보입니다. 
                        특히 쿠션이나 담요는 쉽게 교체할 수 있는 아이템이므로 계절에 맞게 바꾸면 
                        즉시 봄 분위기를 만들 수 있습니다. 러그도 두꺼운 양모 대신 얇은 면 러그나 
                        매트로 교체하면 공간이 더욱 가벼워 보입니다.
                      </Text>

                      <Text fontWeight="600">③ 조명: 확산형 조명으로 밝기 확장</Text>
                      <Text>빛이 부드럽게 퍼지는 화이트 조명은 공간을 탁 트이게 만듭니다.</Text>
                      <Text>
                        봄에는 겨울의 따뜻한 전구색 조명보다는 자연광에 가까운 화이트 조명이 적합합니다. 
                        4000K 정도의 자연광 조명은 공간을 밝고 환하게 만들며, 활동적인 에너지를 줍니다. 
                        또한 커튼을 가볍게 하거나 반투명 소재로 교체하여 자연광을 최대한 받아들이는 것도 
                        봄 인테리어의 핵심입니다. 낮에는 커튼을 활짝 열어 자연광을 받고, 
                        저녁에는 확산형 조명을 사용하면 공간이 탁 트이고 밝아 보입니다.
                      </Text>

                      <Text fontWeight="600">④ 향: 신선한 플로럴·그린 계열</Text>
                      <Text>집에 '봄바람이 들어오는 느낌'을 주는 향이 좋습니다.</Text>
                      <Text>
                        봄 향은 신선하고 가벼운 느낌을 주는 것이 중요합니다. 
                        플로럴 계열(라벤더, 장미, 자스민)이나 그린 계열(민트, 유칼립투스)의 향은 
                        봄의 신선함을 잘 표현합니다. 특히 디퓨저나 캔들을 사용하면 
                        공간 전체에 봄 분위기를 만들 수 있습니다. 또한 실내에 신선한 꽃이나 
                        식물을 두면 시각적, 후각적으로 봄을 느낄 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

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
                      <Text>
                        여름에는 시원함을 주는 차가운 색감이 핵심입니다. 화이트, 블루, 그레이 같은 
                        색은 시각적으로 온도를 낮추는 효과가 있어 실내가 더욱 쾌적하게 느껴집니다. 
                        특히 벽면이나 큰 가구에 차가운 색을 사용하면 공간 전체가 시원해 보입니다. 
                        또한 무채색 계열은 시각적 피로를 줄이고, 깔끔하고 정돈된 느낌을 줍니다. 
                        여름에는 장식적인 요소를 줄이고 색감으로 시원함을 만드는 것이 중요합니다.
                      </Text>

                      <Text fontWeight="600">② 패브릭: 텍스처 최소화</Text>
                      <Text>여름은 '매끈한 표면'이 시원함을 줍니다.</Text>
                      <Text>
                        여름에는 두꺼운 텍스처나 털이 있는 소재보다는 매끈하고 가벼운 소재가 적합합니다. 
                        리넨, 면, 실크 같은 소재는 통기성이 좋고 시원하며, 시각적으로도 가벼워 보입니다. 
                        특히 쿠션이나 담요는 얇고 가벼운 소재로 교체하고, 러그도 얇은 면 매트나 
                        바닥을 그대로 드러내는 것이 여름에는 더 시원합니다. 
                        또한 침구류도 얇고 통기성이 좋은 소재로 교체하면 수면의 질도 향상됩니다.
                      </Text>

                      <Text fontWeight="600">③ 가구 배치: 통풍에 최적화</Text>
                      <Text>
                        통로를 넓히고 공기 흐름을 방해하는 배치를 줄이면 쾌적함이 크게 달라집니다.
                      </Text>
                      <Text>
                        여름에는 공기 순환이 매우 중요합니다. 가구를 벽에 붙여두거나 통로를 막는 배치는 
                        공기 흐름을 방해하여 공간을 답답하게 만듭니다. 가구를 벽에서 떼어두고, 
                        통로를 넓히면 공기 순환이 원활해져 쾌적함이 크게 향상됩니다. 
                        또한 창문 근처에 가구를 배치하지 않으면 자연 환기가 잘 되어 실내 온도가 낮아집니다. 
                        특히 선풍기나 에어컨의 바람이 잘 통하도록 가구 배치를 조정하는 것도 중요합니다.
                      </Text>

                      <Text fontWeight="600">④ 향/질감: 시트러스·프레시</Text>
                      <Text>무겁고 묵직한 향은 여름에는 피하는 것이 좋습니다.</Text>
                      <Text>
                        여름에는 가볍고 신선한 향이 적합합니다. 시트러스 계열(레몬, 오렌지, 라임)이나 
                        프레시 계열(민트, 유칼립투스, 바다)의 향은 시원하고 상쾌한 느낌을 줍니다. 
                        반대로 무겁고 묵직한 향(머스크, 우디, 바닐라)은 여름에는 답답하게 느껴질 수 있습니다. 
                        또한 여름에는 향의 강도도 약하게 하는 것이 좋으며, 디퓨저보다는 
                        가벼운 스프레이나 리프레셔를 사용하는 것이 더 적합합니다.
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
                      <Text>
                        가을 색감은 따뜻하고 깊이 있는 지구색 계열이 가장 적합합니다. 
                        브라운, 버건디, 올리브, 머스타드 같은 색은 가을의 풍요로움과 따뜻함을 잘 표현합니다. 
                        이러한 색감은 공간에 안정감과 포근함을 주며, 가을의 감성을 완벽하게 담아냅니다. 
                        특히 쿠션이나 담요, 커튼 등에 가을 색감을 적용하면 큰 비용 없이도 
                        공간 전체의 분위기를 바꿀 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 조명: 노란빛·따뜻한 광량</Text>
                      <Text>3000K 전구색은 가을 분위기를 완성하는 핵심 요소입니다.</Text>
                      <Text>
                        가을에는 따뜻한 전구색 조명이 필수입니다. 3000K 정도의 노란빛 조명은 
                        가을의 따뜻함과 포근함을 완벽하게 표현하며, 공간을 아늑하게 만듭니다. 
                        특히 저녁 시간에는 여러 개의 조명을 함께 켜서 따뜻한 빛의 밀도를 높이면 
                        가을 분위기가 더욱 깊어집니다. 스탠드나 무드등을 활용하여 
                        간접 조명을 만들면 더욱 감성적인 공간을 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">③ 패브릭: 쿠션·러그·담요의 계절</Text>
                      <Text>
                        텍스처가 있는 패브릭은 가을의 온도를 집 안에 채워줍니다.
                      </Text>
                      <Text>
                        가을은 텍스처가 있는 패브릭을 활용하는 최적의 계절입니다. 
                        니트, 벨벳, 부드러운 양모 같은 소재는 촉감이 좋고 시각적으로도 따뜻해 보입니다. 
                        특히 쿠션이나 담요를 두꺼운 소재로 교체하면 공간이 즉시 포근해 보입니다. 
                        러그도 얇은 여름 매트에서 두꺼운 양모 러그로 교체하면 
                        바닥에서 올라오는 냉기를 막고 체감 온도를 높일 수 있습니다.
                      </Text>

                      <Text fontWeight="600">④ 소품: 나무·라탄·도자기</Text>
                      <Text>
                        자연 소재는 가을 인테리어와 가장 잘 어울립니다.
                      </Text>
                      <Text>
                        가을에는 자연 소재의 소품이 가장 잘 어울립니다. 나무, 라탄, 도자기, 
                        돌 같은 소재는 가을의 자연스러움과 따뜻함을 잘 표현합니다. 
                        특히 나무 소재의 소품이나 가구는 가을 색감과 완벽하게 조화를 이루며, 
                        공간에 따뜻함과 안정감을 더합니다. 또한 가을에는 식물이나 말린 꽃을 
                        소품으로 활용하면 자연의 아름다움을 집 안에 가져올 수 있습니다.
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
                      <Text>
                        겨울 색감은 차분하고 안정감 있는 색이 적합합니다. 아이보리, 딥그린, 차콜 같은 
                        색은 겨울의 차분함과 안정감을 잘 표현하며, 공간에 고급스러움을 더합니다. 
                        특히 겨울에는 밝은 색보다는 깊이 있는 색이 더 따뜻하고 포근해 보입니다. 
                        또한 겨울에는 금속 소재(구리, 황동)를 소품으로 활용하면 
                        따뜻한 느낌을 더할 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 조명: 여러 개의 '따뜻한 조도'</Text>
                      <Text>겨울 집은 '개수'로 따뜻해지는 계절입니다.</Text>
                      <Text>
                        겨울에는 하나의 밝은 조명보다는 여러 개의 따뜻한 조명을 함께 사용하는 것이 
                        더 효과적입니다. 2700~3000K의 전구색 조명을 여러 곳에 배치하면 
                        공간 전체가 따뜻하고 아늑해 보입니다. 특히 간접 조명, 스탠드, 무드등을 
                        함께 사용하면 빛의 밀도가 높아져 시각적으로 더욱 따뜻하게 느껴집니다. 
                        또한 촛불이나 LED 캔들을 활용하면 더욱 감성적인 겨울 분위기를 만들 수 있습니다.
                      </Text>

                      <Text fontWeight="600">③ 패브릭: 니트·퍼·극세사</Text>
                      <Text>촉감 좋은 소재는 체감 온도를 크게 올립니다.</Text>
                      <Text>
                        겨울에는 촉감이 좋고 따뜻한 소재가 필수입니다. 니트, 퍼, 극세사 같은 소재는 
                        촉감이 부드럽고 보온성이 좋아 체감 온도를 크게 올립니다. 
                        특히 쿠션이나 담요를 두꺼운 소재로 교체하면 공간이 즉시 포근해 보입니다. 
                        러그도 두꺼운 양모나 극세사 소재를 사용하면 바닥 냉기를 막고 
                        발을 따뜻하게 유지할 수 있습니다. 또한 침구류도 두꺼운 소재로 교체하면 
                        수면의 질이 향상됩니다.
                      </Text>

                      <Text fontWeight="600">④ 향: 우디·머스크·스파이시</Text>
                      <Text>집 안 공기를 안정감 있게 채워주는 향입니다.</Text>
                      <Text>
                        겨울에는 따뜻하고 안정감 있는 향이 적합합니다. 우디(시더, 파인), 머스크, 
                        스파이시(시나몬, 바닐라) 계열의 향은 겨울의 따뜻함과 포근함을 잘 표현합니다. 
                        이러한 향은 공간에 안정감을 주고, 휴식과 편안함을 느끼게 해줍니다. 
                        특히 캔들이나 디퓨저를 사용하여 은은하게 향을 퍼뜨리면 
                        겨울 분위기가 더욱 깊어집니다.
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
                        '작은 교체'와 '분위기 전환'의 연속입니다.
                      </Text>
                      <Text>
                        실제로 계절별 인테리어는 큰 비용이 들지 않습니다. 
                        쿠션이나 담요, 소품, 조명 등 작은 아이템만 바꿔도 
                        공간 전체의 분위기가 완전히 달라집니다. 또한 계절에 맞는 소품을 
                        수납해두고 계절마다 교체하면 매번 새로 구매할 필요가 없어 
                        경제적입니다. 중요한 것은 큰 변화가 아니라 작은 변화의 누적입니다.
                      </Text>
                      <Text>
                        오늘 당장 전부 바꿀 필요도 없습니다.  
                        공간 하나, 조명 하나, 패브릭 하나만 바꿔도  
                        집은 계절의 새로운 장면을 만들어냅니다.
                      </Text>
                      <Text>
                        계절별 인테리어는 완벽함을 추구하는 것이 아니라, 
                        계절의 감성을 공간에 담아내는 것입니다. 작은 변화부터 시작하여 
                        점진적으로 계절에 맞는 공간을 만들어가면, 
                        어느새 집이 계절과 함께 호흡하는 살아있는 공간이 될 것입니다.
                      </Text>

                      {/* 광고 3: 하단 – 카카오 다이렉트 */}
                      <KakaoAdDirect
                        adUnitId="DAN-qRlpXvY15cfMPpl0"
                        adWidth={300}
                        adHeight={250}
                      />

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