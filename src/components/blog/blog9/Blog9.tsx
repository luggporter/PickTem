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

const Blog9 = () => {
  const navigate = useNavigate();
  const title =
    '아침 루틴 완전 가이드: 집중력·기분·생활 리듬이 달라지는 12가지 현실 루틴';
  const description =
    '아침을 어떻게 시작하느냐에 따라 하루의 밀도가 바뀝니다. 억지로 5시에 일어나는 방식이 아닌, MZ 삶에 맞는 현실적인 아침 루틴 12가지를 소개합니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/9`;
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
                      아침 루틴이라고 하면 ‘5AM 클럽’, ‘새벽형 인간’ 같은 단어가 먼저 떠오르지만,
                      모든 사람에게 맞는 한 가지 정답은 없습니다. 중요한 건 ‘일찍 일어나는 것’이 아니라,
                      **내 몸과 생활 리듬에 맞는 루틴을 만드는 것**입니다.
                    </Text>
                    <Text>
                      이번 글에서는 억지로 자신을 몰아붙이는 방식이 아니라,
                      누구나 현실적으로 적용할 수 있는 **아침 루틴 12가지**를 정리해 보았습니다.
                      한 번에 다 하지 않아도 됩니다. 마음에 드는 것 한 가지를 추가해 보는 것만으로도
                      하루의 질이 눈에 띄게 달라질 수 있습니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

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
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ② 침대에서 3분 스트레칭
                        </Text>
                        <Text>
                          목·허리·골반 주변 근육은 자는 동안 굳어 있습니다.
                          아침에 잠깐 늘려주는 것만으로도 하루 피로도가 크게 줄어듭니다.
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
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑤ 5분 독서 또는 5문장 읽기
                        </Text>
                        <Text>
                          1시간 독서는 부담스럽지만,
                          5분 독서는 누구나 할 수 있습니다.
                          아침의 짧은 독서는 집중하는 ‘모드 전환 스위치’ 역할을 합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑥ 디지털 참견 최소화
                        </Text>
                        <Text>
                          기상하자마자 휴대폰을 보면 뇌가 곧바로 ‘반응 모드’로 들어갑니다.
                          가능하면 **알림 확인은 씻고 옷 입고 난 뒤**로 미뤄보세요.
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
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑧ 아침 루틴용 음악 플레이리스트 만들기
                        </Text>
                        <Text>
                          특정 음악을 들으면 자동으로 ‘움직여야 하는 모드’로 전환돼
                          루틴이 더 쉽게 유지됩니다.
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
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={1}>
                          ⑫ 이동 루틴 만들기
                        </Text>
                        <Text>
                          출근길·등교길에 특정 음악이나 콘텐츠를 들으면 
                          자동으로 ‘일 모드’로 전환되며  
                          하루의 흐름이 훨씬 부드럽게 이어집니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

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
                        아침 루틴의 목적은 ‘대단한 사람이 되는 것’이 아니라,  
                        **하루를 내 페이스로 안정적으로 시작하는 것**입니다.
                      </Text>

                      <Text>
                        마음에 드는 하나만 골라서  
                        이번 주에 한 번 시도해 보세요.  
                        루틴의 힘은 꾸준함이 아니라,  
                        **자기에게 맞는 방식을 찾는 데서 시작됩니다.**
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