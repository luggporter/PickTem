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

const Blog9 = () => {
  const navigate = useNavigate();
  const title =
    '아침 루틴 완전 가이드: 집중력·기분·생활 리듬이 달라지는 12가지 현실 루틴';
  const description =
    '아침을 어떻게 시작하느냐에 따라 하루의 밀도가 바뀝니다. 억지로 5시에 일어나는 방식이 아닌, MZ 삶에 맞는 현실적인 아침 루틴 12가지를 소개합니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/9`;
  const ogImage = `${baseUrl}images/blog/blog9.png`;

  const publishedDate = '2024년 3월 25일';
  const author = '씩씩이';
  const category = '라이프스타일';
  const readTime = 9;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    mainEntityOfPage: url,
    inLanguage: 'ko-KR',
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
    datePublished: '2024-03-25',
    dateModified: '2024-03-25',
  };

  return (
    <>
      {/* SEO Meta */}
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Helmet>

      <Box as="main" bg="#f8faf9" minH="100vh">
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
                <Badge colorScheme="brand" borderRadius="8px" px={3} py={1}>
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

              {/* Hero Image */}
              <Box borderRadius="20px" overflow="hidden" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog9.png"
                  alt="아침 햇살이 비치는 방에서 커피와 노트를 준비하는 모습"
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
                <Stack spacing={10} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9">
                  
                  {/* Intro */}
                  <Box>
                    <Text fontWeight="600" fontSize="18px" mb={3}>
                      “아침을 어떻게 시작하느냐가 하루의 밀도를 결정합니다.”
                    </Text>
                    <Text mb={4}>
                      아침 루틴이라고 하면 '5AM 클럽', '새벽형 인간' 같은 단어가 먼저 떠오르지만,
                      모든 사람에게 맞는 한 가지 정답은 없습니다. 중요한 건 '일찍 일어나는 것'이 아니라,
                      **내 몸과 생활 리듬에 맞는 루틴을 만드는 것**입니다.
                    </Text>
                    <Text mb={4}>
                      실제로 연구에 따르면, 사람의 생체 리듬은 유전적으로 결정되며, 
                      억지로 새벽형 인간이 되는 것은 오히려 건강에 해로울 수 있습니다. 
                      중요한 것은 자신의 생체 리듬에 맞는 시간에 일어나고, 
                      아침 시간을 효율적으로 활용하는 것입니다. 
                      아침 루틴은 완벽하게 하려고 하지 말고, 
                      자신의 생활 패턴에 맞는 작은 습관부터 시작하는 것이 중요합니다.
                    </Text>
                    <Text>
                      이번 글에서는 억지로 자신을 몰아붙이는 방식이 아니라,
                      누구나 현실적으로 적용할 수 있는 **아침 루틴 12가지**를 정리해 보았습니다.
                      한 번에 다 하지 않아도 됩니다. 마음에 드는 것 한 가지를 추가해 보는 것만으로도
                      하루의 질이 눈에 띄게 달라질 수 있습니다. 각 루틴은 실제로 적용해본 사람들의 
                      경험을 바탕으로 작성했으며, 특히 바쁜 일상 속에서도 지속할 수 있는 
                      방법들만 선별했습니다.
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

                  {/* Section 1 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 몸을 깨우는 루틴: ‘기상 직후 10분’의 힘
                    </Heading>

                    <Stack spacing={5}>
                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ① 물 한 컵으로 신진대사 깨우기
                        </Text>
                        <Text>
                          자는 동안 체내 수분은 자연스럽게 줄어듭니다.
                          기상 직후 미지근한 물 한 컵은 **순환을 깨우고 집중력을 올리는
                          가장 빠른 방법**입니다.
                        </Text>
                        <Text>
                          수면 중에는 땀과 호흡을 통해 체내 수분이 손실됩니다. 
                          기상 직후 물을 마시면 탈수를 예방하고, 신진대사를 활성화하여 
                          하루를 시작하는 데 필요한 에너지를 공급합니다. 
                          특히 미지근한 물은 위장에 부담을 주지 않으면서도 
                          체온을 조절하는 데 도움이 됩니다. 
                          물 한 컵을 마시는 간단한 습관만으로도 
                          아침 기상 후 피로감이 크게 줄어들고, 집중력이 향상됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ② 침대에서 3분 스트레칭
                        </Text>
                        <Text>
                          목·허리·골반 주변 근육은 자는 동안 굳어 있습니다.
                          아침에 잠깐 늘려주는 것만으로도 하루 피로도가 크게 줄어듭니다.
                        </Text>
                        <Text>
                          수면 중에는 같은 자세로 오래 누워있어 근육이 경직되고, 
                          특히 목과 허리, 골반 주변 근육이 뻣뻣해집니다. 
                          침대에서 간단한 스트레칭을 하면 근육의 긴장을 풀고, 
                          혈액 순환을 개선하여 하루를 시작하는 데 필요한 유연성을 회복할 수 있습니다. 
                          무리한 스트레칭이 아니라 목 돌리기, 다리 늘리기, 
                          골반 돌리기 같은 간단한 동작만으로도 충분합니다. 
                          이 습관은 하루 종일의 자세와 피로도에 큰 영향을 미칩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ③ 햇빛 보기
                        </Text>
                        <Text>
                          기상 후 30분 내에 햇빛을 보면
                          멜라토닌·코르티솔 리듬이 정리되면서
                          **밤에 쉽게 잠들고 아침에 더 잘 깰 수 있는 몸**이 됩니다.
                        </Text>
                        <Text>
                          햇빛은 우리의 생체 리듬을 조절하는 가장 강력한 신호입니다. 
                          기상 후 30분 내에 햇빛을 보면 뇌가 "낮"이라는 신호를 받아 
                          멜라토닌 분비를 멈추고 코르티솔을 분비하여 각성 상태로 전환됩니다. 
                          이렇게 하면 하루 종일 각성도가 높아지고, 
                          밤에는 멜라토닌이 정상적으로 분비되어 수면의 질이 향상됩니다. 
                          창문을 열거나 발코니에 나가서 5~10분 정도 햇빛을 보는 것만으로도 
                          충분한 효과를 얻을 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  {/* Section 2 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      mb={5}
                      w="fit-content"
                    >
                      2. 머리를 깨우는 루틴: 집중력과 창의성은 아침에 올라온다
                    </Heading>

                    <Stack spacing={5}>
                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ④ ‘오늘의 3가지’ 적어보기
                        </Text>
                        <Text>
                          해야 할 일 전부를 적으면 오히려 스트레스를 느낍니다.
                          대신 **오늘 꼭 해냈으면 하는 3가지**만 적어보세요.
                        </Text>
                        <Text>
                          할 일 목록이 너무 길면 오히려 압박감을 느끼고 시작하기 어려워집니다. 
                          대신 오늘 꼭 해야 하는 가장 중요한 3가지만 적으면 
                          집중력이 향상되고 성취감도 높아집니다. 
                          이 방법은 "3의 법칙"이라고도 불리며, 
                          하루의 우선순위를 명확히 하여 생산성을 크게 높입니다. 
                          아침에 3가지를 정하면 하루 종일 그 목표에 집중할 수 있고, 
                          완료했을 때의 성취감도 큽니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑤ 5분 독서 또는 5문장 읽기
                        </Text>
                        <Text>
                          1시간 독서는 부담스럽지만,
                          5분 독서는 누구나 할 수 있습니다.
                          아침의 짧은 독서는 집중하는 '모드 전환 스위치' 역할을 합니다.
                        </Text>
                        <Text>
                          아침 독서는 뇌를 깨우고 집중 모드로 전환하는 효과적인 방법입니다. 
                          긴 시간이 아니라 5분만 투자해도 충분하며, 
                          이 짧은 시간이 하루의 집중력과 생산성에 큰 영향을 미칩니다. 
                          독서할 내용은 책, 아티클, 뉴스레터 등 무엇이든 좋습니다. 
                          중요한 것은 매일 꾸준히 하는 것이며, 
                          아침에 독서하는 습관을 만들면 자연스럽게 학습과 성장의 시간이 확보됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑥ 디지털 참견 최소화
                        </Text>
                        <Text>
                          기상하자마자 휴대폰을 보면 뇌가 곧바로 '반응 모드'로 들어갑니다.
                          가능하면 **알림 확인은 씻고 옷 입고 난 뒤**로 미뤄보세요.
                        </Text>
                        <Text>
                          기상 직후 휴대폰을 보면 뇌가 즉시 반응 모드로 전환되어 
                          스트레스 호르몬인 코르티솔이 급격히 증가합니다. 
                          이는 하루의 시작을 불안하고 조급하게 만들며, 
                          집중력과 생산성을 저하시킵니다. 
                          대신 기상 후 최소 30분~1시간은 휴대폰을 보지 않고, 
                          자신의 루틴에 집중하는 것이 좋습니다. 
                          이 시간 동안 몸과 마음을 깨우는 활동을 하면 
                          하루 전체의 에너지와 집중력이 크게 향상됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />

                  {/* Section 3 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      mb={5}
                      w="fit-content"
                    >
                      3. 기분을 끌어올리는 루틴: 아침 감정 세팅하기
                    </Heading>

                    <Stack spacing={5}>
                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑦ ‘나를 위한 5분’ 확보하기
                        </Text>
                        <Text>
                          커피 내리기, 음악 한 곡 듣기, 창밖 보기처럼
                          **아무 성과를 내지 않아도 되는 5분**이 있으면
                          아침부터 마음이 덜 흔들립니다.
                        </Text>
                        <Text>
                          아침은 보통 바쁘고 조급한 시간입니다. 
                          하지만 아무 성과를 내지 않아도 되는 5분을 확보하면 
                          마음의 여유가 생기고 하루를 더 차분하게 시작할 수 있습니다. 
                          이 시간은 자신만의 작은 휴식이며, 
                          하루를 시작하기 전에 마음을 정리하는 시간입니다. 
                          커피를 내리거나, 좋아하는 음악을 듣거나, 
                          창밖을 보며 잠시 멍하니 있는 것만으로도 
                          충분히 의미 있는 시간이 됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑧ 아침 루틴용 음악 플레이리스트 만들기
                        </Text>
                        <Text>
                          특정 음악을 들으면 자동으로 '움직여야 하는 모드'로 전환돼
                          루틴이 더 쉽게 유지됩니다.
                        </Text>
                        <Text>
                          음악은 우리의 감정과 행동을 강력하게 자극합니다. 
                          아침 루틴용 플레이리스트를 만들면 
                          그 음악을 들을 때마다 자동으로 아침 모드로 전환되어 
                          루틴을 유지하기가 훨씬 쉬워집니다. 
                          상쾌하고 에너지 넘치는 음악을 선택하면 
                          아침 기운을 북돋울 수 있고, 
                          부드러운 음악을 선택하면 차분하게 하루를 시작할 수 있습니다. 
                          자신의 기분과 목표에 맞는 음악을 선택하는 것이 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑨ 침구 정리하기
                        </Text>
                        <Text>
                          침구를 정리하는 사람은 그렇지 않은 사람보다
                          **업무 효율이 더 좋다는 연구**도 있습니다.
                          아주 작은 성취감이지만 하루 전체 분위기를 바꿉니다.
                        </Text>
                        <Text>
                          침구 정리는 아주 작은 행동이지만, 
                          하루의 첫 번째 성취감을 만들어줍니다. 
                          이 작은 성취감이 하루 전체의 동기부여가 되고, 
                          다른 일들도 더 잘 해낼 수 있게 만듭니다. 
                          또한 정돈된 침대를 보면 마음도 정돈된 느낌이 들어 
                          하루를 더 차분하고 집중력 있게 시작할 수 있습니다. 
                          침구 정리는 1분도 걸리지 않지만, 
                          그 효과는 하루 종일 지속됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* Section 4 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      mb={5}
                      w="fit-content"
                    >
                      4. 생활 리듬을 정리하는 루틴: 하루를 ‘흐름’으로 만들기
                    </Heading>

                    <Stack spacing={5}>
                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑩ 간단한 정리·리셋 타임
                        </Text>
                        <Text>
                          어젯밤 싱크대, 책상, 거실의 작은 정리만 해도  
                          아침의 정신적 피로가 크게 줄어듭니다.
                        </Text>
                        <Text>
                          아침에 어수선한 공간을 보면 정신적 피로가 증가하고, 
                          하루를 시작하는 에너지가 소모됩니다. 
                          반대로 깨끗하고 정돈된 공간을 보면 마음이 편안해지고, 
                          집중력이 향상됩니다. 어젯밤에 사용한 물건들을 제자리에 두고, 
                          싱크대를 닦고, 책상을 정리하는 작은 행동만으로도 
                          아침의 정신적 부담이 크게 줄어듭니다. 
                          이 습관은 하루를 더 효율적으로 시작하는 데 큰 도움이 됩니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑪ 단백질 중심의 간단한 아침 식사
                        </Text>
                        <Text>
                          아침을 꼭 먹을 필요는 없지만,
                          먹는다면 당분 중심의 식사보다는  
                          **단백질 기반의 아침이 집중력 유지에 훨씬 좋습니다.**
                        </Text>
                        <Text>
                          아침 식사는 하루의 에너지와 집중력을 결정하는 중요한 요소입니다. 
                          당분이 많은 식사(빵, 시리얼 등)는 혈당을 급격히 올렸다가 
                          빠르게 떨어뜨려 오전 중에 피로감과 집중력 저하를 유발합니다. 
                          반대로 단백질 기반의 아침(계란, 그릭 요거트, 견과류 등)은 
                          혈당을 안정적으로 유지하여 오전 내내 집중력을 유지할 수 있게 해줍니다. 
                          간단한 단백질 아침만으로도 하루의 생산성이 크게 달라집니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑫ 이동 루틴 만들기
                        </Text>
                        <Text>
                          출근길·등교길에 특정 음악이나 콘텐츠를 들으면 
                          자동으로 '일 모드'로 전환되며  
                          하루의 흐름이 훨씬 부드럽게 이어집니다.
                        </Text>
                        <Text>
                          이동 시간은 하루의 전환점입니다. 
                          집에서 일 모드로 전환되는 시간이며, 
                          이 시간을 어떻게 보내느냐에 따라 하루의 분위기가 달라집니다. 
                          특정 음악이나 팟캐스트, 오디오북을 들으면 
                          자동으로 집중 모드로 전환되어 업무나 학습에 더 잘 집중할 수 있습니다. 
                          또한 이동 시간을 학습이나 자기계발에 활용하면 
                          시간을 더 효율적으로 사용할 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  {/* Outro */}
                  <Box>
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 루틴은 ‘성공’이 아니라 ‘안정감’을 만드는 도구
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        아침 루틴의 목적은 '대단한 사람이 되는 것'이 아니라,  
                        **하루를 내 페이스로 안정적으로 시작하는 것**입니다.
                      </Text>
                      <Text>
                        실제로 아침 루틴을 가진 사람들은 그렇지 않은 사람들보다 
                        스트레스가 적고, 집중력이 높으며, 하루의 만족도가 높다는 연구 결과가 있습니다. 
                        하지만 완벽한 루틴을 만들려고 하지 말고, 
                        자신의 생활 패턴에 맞는 작은 습관부터 시작하는 것이 중요합니다. 
                        작은 습관이 쌓이면 큰 변화가 되고, 
                        그 변화는 하루의 질을 크게 향상시킵니다.
                      </Text>
                      <Text>
                        마음에 드는 하나만 골라서  
                        이번 주에 한 번 시도해 보세요.  
                        루틴의 힘은 꾸준함이 아니라,  
                        **자기에게 맞는 방식을 찾는 데서 시작됩니다.**
                      </Text>
                      <Text>
                        모든 루틴을 한 번에 적용하려고 하면 부담이 커서 
                        오히려 지속하기 어려워집니다. 
                        대신 하나씩 시도해보고, 자신에게 맞는 것을 찾아 
                        점진적으로 추가하는 것이 좋습니다. 
                        작은 변화가 쌓이면 어느새 자신만의 완벽한 아침 루틴이 만들어질 것입니다.
                      </Text>

                      {/* 광고 3: 마지막 섹션 전 – 카카오 다이렉트 */}
                      <KakaoAdDirect
                        adUnitId="DAN-qRlpXvY15cfMPpl0"
                        adWidth={300}
                        adHeight={250}
                      />

                      <Box
                        bg="brand.50"
                        p={5}
                        borderRadius="12px"
                        borderLeft="4px solid"
                        borderColor="brand.500"
                      >
                        <Text fontWeight="600" mb={1}>
                          🌅 오늘의 한 줄: “좋은 하루는 아침 10분에서 시작된다.”
                        </Text>
                        <Text color="#495057">
                          작은 루틴 하나가  
                          생각보다 큰 변화를 만들어 냅니다.
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

export default Blog9;