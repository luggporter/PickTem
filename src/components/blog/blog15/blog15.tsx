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

const Blog15 = () => {
  const navigate = useNavigate();
  const title = '겨울철 야외활동 전 꼭 알아야 할 안전 수칙 12가지';
  const description =
    '겨울 산책, 축제, 여행, 야외 데이트 전 반드시 체크해야 할 안전 수칙 12가지. 미끄럼·저체온증·탈수·일몰 시간까지 현실적인 기준으로 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/15`;
  const ogImage = `${baseUrl}/images/blog/blog15.png`;

  const publishedDate = '2024년 5월 13일';
  const author = '씩씩이';
  const category = '야외 안전';
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
    datePublished: '2024-05-13',
    dateModified: '2024-05-13',
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
                <Badge colorScheme="brand" px={3} py={1} borderRadius="8px" w="fit-content">
                  {category}
                </Badge>

                <Heading
                  as="h1"
                  fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
                  fontWeight="800"
                  lineHeight="1.3"
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
                  src="/images/blog/blog15.png"
                  alt="겨울철 야외 활동 중 따뜻한 복장을 입은 사람들"
                  width="100%"
                  objectFit="cover"
                />
              </Box>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} lineHeight="1.9">
                  <Box>
                    <Text fontSize="18px" fontWeight="600" mb={3}>
                      겨울 야외활동은 ‘의지’보다 ‘준비’가 안전을 만듭니다
                    </Text>
                    <Text mb={4}>
                      겨울엔 작은 실수가 바로 사고로 이어집니다.
                      여름엔 그냥 넘어갈 상황도, 겨울엔 미끄러짐·저체온·탈진으로 번질 수 있습니다.
                    </Text>
                    <Text>
                      아래 12가지는 등산, 산책, 축제, 여행, 데이트 등
                      <b>모든 겨울 야외활동 전에 공통으로 적용되는 현실 안전 수칙</b>입니다.
                    </Text>
                  </Box>

                  <Divider />

                  {/* 광고 1: 첫 번째 섹션 후 */}
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
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1. 일몰 시간을 먼저 확인하세요
                    </Heading>
                    <Text>
                      겨울엔 해가 빨리 집니다.
                      오후 5시만 넘어도 시야가 급격히 떨어지고 체감 온도가 확 내려갑니다.
                      야외 일정은 <b>해 지기 전 복귀 기준</b>으로 짜는 게 안전합니다.
                    </Text>
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
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2. 미끄럼은 '신발'에서 80% 결정됩니다
                    </Heading>
                    <Text>
                      겨울 사고의 대부분은 미끄러짐입니다.
                      밑창이 닳은 신발, 평평한 운동화는 눈·얼음에서 매우 위험합니다.
                      최소한 <b>고무 패턴이 깊은 신발</b>을 선택하세요.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3. 옷은 ‘두껍게’보다 ‘겹쳐서’
                    </Heading>
                    <Text>
                      두꺼운 옷 한 벌보다 얇은 옷 여러 겹이 체온 유지에 훨씬 효과적입니다.
                      특히 바람을 막는 외피(패딩·바람막이)는 필수입니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      4. 목·손·발이 먼저 식습니다
                    </Heading>
                    <Text>
                      체온 손실은 목, 손, 발에서 가장 빠르게 시작됩니다.
                      장갑·목도리·두꺼운 양말은 선택이 아니라 기본입니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      5. 물은 추워도 반드시 마셔야 합니다
                    </Heading>
                    <Text>
                      겨울엔 갈증을 잘 못 느껴 탈수가 쉽게 옵니다.
                      탈수는 어지럼, 판단력 저하로 이어져 사고 위험을 키웁니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      6. 배고픔은 위험 신호입니다
                    </Heading>
                    <Text>
                      공복 상태에선 체온 유지가 훨씬 어려워집니다.
                      간단한 간식(초콜릿, 견과류, 에너지바)을 챙겨두세요.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      7. 바람 세면 체감온도는 ‘다른 계절’
                    </Heading>
                    <Text>
                      실제 기온보다 바람이 체감온도를 크게 떨어뜨립니다.
                      바람이 강한 날은 계획을 줄이거나 실내 비중을 늘리는 게 안전합니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      8. 휴대폰 배터리는 평소보다 빨리 닳습니다
                    </Heading>
                    <Text>
                      추위는 배터리를 급격히 소모시킵니다.
                      보조 배터리는 겨울 야외활동의 안전 장비입니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      9. 혼자보다 ‘같이’ 움직이세요
                    </Heading>
                    <Text>
                      야외 활동은 혼자보다 동행이 안전합니다.
                      특히 어두워진 이후엔 반드시 함께 이동하세요.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      10. 무리하면 다음 날까지 영향이 남습니다
                    </Heading>
                    <Text>
                      겨울엔 회복 속도도 느립니다.
                      “조금만 더”가 아니라 “지금까지”가 안전한 기준입니다.
                    </Text>
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
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      11. 응급 상황 대비 위치 공유
                    </Heading>
                    <Text>
                      가족이나 지인에게 위치 공유를 켜두는 것만으로도
                      위급 상황 시 대응 속도가 달라집니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      12. 안전하면 추억이 됩니다
                    </Heading>
                    <Text>
                      겨울 야외활동의 목표는 ‘참는 것’이 아니라
                      <b>무사히 돌아와서 좋은 기억으로 남기는 것</b>입니다.
                    </Text>
                  </Box>

                  <Divider />

                  <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                    <Text fontWeight="600" mb={2}>
                      ❄️ 오늘의 한 줄
                    </Text>
                    <Text>
                      “겨울엔 용기보다 준비가 사람을 지켜준다”
                    </Text>
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

export default Blog15;