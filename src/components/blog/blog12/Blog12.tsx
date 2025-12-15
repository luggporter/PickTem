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
} from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { FiCalendar, FiUser } from 'react-icons/fi';
import MobileHeader from '../../MobileHeader';
import AdSense from '../../AdSense';
import AdRotator from '../../ads/AdRotator';

const Blog12 = () => {
  const navigate = useNavigate();
  const title = '식물 별 분갈이 시기 & 분갈이 방법 완벽 가이드';
  const description =
    '반려식물 종류별로 언제 분갈이를 해줘야 하는지, 초보자도 실패 없이 따라 할 수 있는 단계별 분갈이 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/12`;
  const ogImage = `${baseUrl}images/blog/blog12.png`;
  
  

  const publishedDate = '2024년 3월 25일';
  const author = '아리';
  const category = '분갈이 가이드';
  const readTime = 8;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: '씩씩이' },
    publisher: {
      '@type': 'Organization',
      name: '씩씩이',
      logo: { '@type': 'ImageObject', url: `${baseUrl}/favicon.png` },
    },
    image: [ogImage],
    datePublished: '2024-03-25',
    dateModified: '2024-03-25',
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
        <meta property="og:image" content={ogImage} />
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
                    <Text>
                      이 글에서는 <b>분갈이가 필요한 시기 신호</b>와
                      <b>식물 타입별 적절한 분갈이 주기</b>,
                      그리고 초보자도 따라 할 수 있는 단계별 분갈이 방법까지 정리했습니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
                  <AdRotator type="auto" />

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
                    <Stack spacing={3}>
                      <Text>1. 배수구 구멍으로 뿌리가 삐져나온다.</Text>
                      <Text>2. 물을 줘도 너무 빨리 말라버린다.</Text>
                      <Text>3. 흙이 많이 내려앉아 화분 위 공간이 비어 보인다.</Text>
                      <Text>4. 예전만큼 새 잎이 잘 나오지 않는다.</Text>
                      <Text>5. 흙이 오래되어 냄새가 나거나 하얀 염분 자국이 생겼다.</Text>
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
                      식물 타입별 추천 분갈이 주기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        • 관엽식물(몬스테라, 고무나무 등): <b>1.5~2년</b>에 한 번<br />
                        • 산세베리아, 금전수 등 건조를 좋아하는 식물: <b>2~3년</b>에 한 번<br />
                        • 다육·선인장: 성장 속도에 따라 <b>1~3년</b> 간격<br />
                        • 빠르게 크는 어린 식물: 첫 1~2년은 <b>1년에 한 번</b>까지도 가능
                      </Text>
                      <Text>
                        분갈이 시기는 보통 <b>봄~초여름</b>이 가장 좋습니다.
                        겨울에는 뿌리가 손상될 경우 회복이 더디기 때문에 웬만하면 피하는 것이 좋습니다.
                      </Text>
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
                    <Stack spacing={3}>
                      <Text>• 새 화분 (기존 화분보다 1~2단계 큰 사이즈)</Text>
                      <Text>• 배수구멍을 막을 망 또는 숨구멍 막힘 방지용 조각</Text>
                      <Text>• 식물에 맞는 전용 흙 (관엽/다육/선인장 등)</Text>
                      <Text>• 흙을 뜨고 정리할 작은 삽, 장갑</Text>
                      <Text>• 바닥 보호용 신문지 또는 방수 매트</Text>
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
                      <Text>
                        1. <b>물 주기는 분갈이 하루 전</b>에 가볍게 해둡니다. 흙이 너무 마른 상태보다
                        약간 촉촉한 편이 뿌리를 빼내기 쉽습니다.
                      </Text>
                      <Text>
                        2. 화분 옆을 가볍게 두드리면서 식물을 천천히 빼냅니다.
                        힘으로 잡아당기기보다, 화분을 눕힌 상태에서 살살 흔들어 주세요.
                      </Text>
                      <Text>
                        3. 뿌리 주변의 오래된 흙을 손으로 가볍게 털어냅니다.
                        썩은 뿌리나 지나치게 긴 뿌리는 살짝 잘라 정리해 줍니다.
                      </Text>
                      <Text>
                        4. 새 화분 바닥에 망을 깔고, 배수용 마사토나 굵은 입자의 흙을
                        1층 정도 깔아 배수가 잘 되게 만들어 줍니다.
                      </Text>
                      <Text>
                        5. 식물을 중앙에 두고, 가장자리를 새 흙으로 채우며
                        가볍게 눌러 고정합니다. 너무 세게 누르면 뿌리가 눌릴 수 있으니 주의합니다.
                      </Text>
                      <Text>
                        6. 분갈이 직후에는 흙이 자리 잡도록 충분히 물을 한 번 주고,
                        직사광선이 아닌 밝은 그늘에서 며칠 쉬게 해 줍니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

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
                        최소 3~4주 정도는 <b>물 관리에만 집중</b>하고,
                        식물이 새 잎을 내거나 안정을 되찾은 후에
                        소량의 비료를 사용하는 것이 좋습니다.
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
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog12;