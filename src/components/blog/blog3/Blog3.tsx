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

const Blog3 = () => {
  const navigate = useNavigate();
  const title = '겨울 난방비 아끼는 현실적인 방법 12가지: 덜 틀고도 덜 춥게 사는 법';
  const description =
    '온도만 낮추는 절약법이 아니라, 집 구조·습도·동선까지 고려해 실제 체감 온도를 올리면서 난방비를 줄이는 12가지 현실적인 방법을 정리했습니다.';

  const baseUrl = 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}/magazine/4`;
  const ogImage = `${baseUrl}/images/blog/blog3.png`;

  const publishedDate = '2024년 2월 5일';
  const author = 'LeafTalk';
  const category = '생활 꿀팁';
  const readTime = 9;

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
      name: 'LeafTalk',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.png`,
      },
    },
    image: [ogImage],
    datePublished: '2024-02-05',
    dateModified: '2024-02-05',
  };

  return (
    <>
      {/* SEO 메타태그 */}
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
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Helmet>

      {/* 본문 */}
      <Box as="main" bg="#f8faf9" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack
          onBack={() => navigate('/magazine')}
        />

        <Container
          maxW="container.md"
          px={{ base: 4, md: 6 }}
          py={{ base: 6, md: 10 }}
        >
          <article>
            <VStack spacing={8} align="stretch">
              {/* 헤더 섹션 */}
              <VStack spacing={4} align="stretch">
                <Badge
                  colorScheme="brand"
                  borderRadius="8px"
                  px={3}
                  py={1}
                  fontSize="12px"
                  fontWeight="700"
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

                <HStack
                  spacing={4}
                  fontSize="14px"
                  color="#868e96"
                  flexWrap="wrap"
                >
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

              {/* 대표 이미지 */}
              <Box
                borderRadius="20px"
                overflow="hidden"
                w="100%"
                boxShadow="xl"
                bg="white"
              >
                <Image
                  src="/images/blog/blog3.png"
                  alt="따뜻한 조명과 담요가 놓인 겨울 거실"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              {/* 본문 콘텐츠 */}
              <Box
                bg="white"
                borderRadius="20px"
                boxShadow="sm"
                px={{ base: 5, md: 10 }}
                py={{ base: 8, md: 12 }}
              >
                <Stack
                  spacing={8}
                  fontSize={{ base: '15px', md: '16px' }}
                  lineHeight="1.9"
                  color="#1a2e1a"
                >
                  {/* 인트로 */}
                  <Box>
                    <Text
                      fontSize={{ base: '17px', md: '18px' }}
                      fontWeight="600"
                      color="#1a2e1a"
                      mb={3}
                    >
                      “온도는 같은데, 어떤 집은 더 따뜻할까?”
                    </Text>
                    <Text mb={4}>
                      겨울만 되면 난방비 고지서를 열어보는 일이 무서워집니다.
                      똑같이 22도를 맞춰 두었는데, 어떤 집은 포근하게 느껴지고
                      어떤 집은 계속 춥기만 합니다. 단순히 온도 숫자만 높이는
                      방식으로는 체감 온도와 난방비 사이의 간극을 줄이기
                      어렵습니다.
                    </Text>
                    <Text mb={4}>
                      실제로 실내에서 느끼는 “따뜻함”은 온도계 숫자뿐 아니라
                      습도, 공기 흐름, 바닥과 벽에서 올라오는 냉기, 조명의 색감,
                      우리가 어디에 얼마나 오래 앉아 있는지 같은 생활 패턴까지
                      함께 영향을 줍니다. 그래서 난방을 조금만 틀어도 덜 춥게
                      느끼는 집은 구조와 습관을 잘 설계해 둔 경우가 많습니다.
                    </Text>
                    <Text>
                      이 글에서는 “난방 끄고 참으세요” 같은 비현실적인 조언이
                      아니라, 실제로 집에서 바로 적용해볼 수 있는
                      난방비 절약 방법 12가지를 정리했습니다. 온도는 크게
                      올리지 않아도, 체감 온도는 더 따뜻해지도록 돕는
                      생활 팁들입니다.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* 섹션 1 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      1. 온도보다 중요한 건 ‘틈 막기’와 ‘동선 잡기’
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비를 줄이는 가장 단순한 공식은
                        “새는 곳을 막고, 필요한 곳만 따뜻하게 하는 것”입니다.
                        보일러 온도를 낮추기 전에, 집 안에 어디로 찬 공기가
                        들어오는지부터 체크해보는 것이 좋습니다.
                      </Text>
                      <Text>
                        가장 자주 열고 닫는 곳은 현관문과 창문입니다.
                        현관 아래 틈, 발코니와 연결된 미닫이문, 오래된
                        창틀 주변에서 찬 바람이 계속 들어오면 보일러가
                        쉴 틈 없이 돌아가게 됩니다. 문틈용 몰딩 테이프,
                        바람막이 쿠션, 문 아래 막대형 바람막이만 잘 활용해도
                        실내 온도 유지에 큰 도움이 됩니다.
                      </Text>
                      <Text>
                        또 하나 중요한 건 동선입니다. 집 전체를 다 따뜻하게
                        만들 필요는 없습니다. 평소에 가장 오래 머무는 공간이
                        어디인지 생각해보세요. 침대, 책상, 소파 주변에
                        발매트·러그·담요를 집중 배치해서 “따뜻한 존”을
                        만드는 것이 효율적입니다.
                      </Text>
                      <Text>
                        거실 한 가운데보다 벽면과 창가 근처는 상대적으로
                        더 차갑습니다. 소파나 책상을 창 측에 딱 붙여두었다면,
                        벽에서 조금만 떼어놓고, 가능한 한 실내 중심부 쪽에
                        앉는 동선으로 바꿔보는 것도 체감 온도를 올리는 데
                        도움이 됩니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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

                  {/* 섹션 2 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      2. 체감 온도를 올리는 숨은 요소들: 습도, 바닥, 조명
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        같은 22도라도 어떤 집은 춥고, 어떤 집은 포근한 이유는
                        “체감 온도”를 만드는 요소가 다르기 때문입니다. 그중
                        가장 중요한 것이 습도와 바닥입니다.
                      </Text>
                      <Text fontWeight="600">① 습도 40~60% 맞추기</Text>
                      <Text>
                        실내 공기가 건조하면 피부가 당기고 목이 칼칼할 뿐
                        아니라, 실제 온도보다 훨씬 더 춥게 느껴집니다.
                        가습기를 사용하거나, 젖은 수건을 널어두거나,
                        빨래를 실내에서 말리는 것만으로도 습도를
                        어느 정도 유지할 수 있습니다.
                      </Text>
                      <Text fontWeight="600">② 발이 따뜻해야 몸이 덜 춥다</Text>
                      <Text>
                        바닥에서 올라오는 냉기는 우리가 생각하는 것보다
                        강력합니다. 두꺼운 러그나 카펫, 발매트를 깔아두면
                        보일러 온도를 1~2도 낮춰도 체감 온도는 비슷하게
                        유지되기도 합니다. 특히 책상 아래, 침대 옆, 소파 앞
                       처럼 오래 머무는 자리부터 챙겨보세요.
                      </Text>
                      <Text fontWeight="600">③ 조명 색만 바꿔도 마음이 따뜻해진다</Text>
                      <Text>
                        형광색에 가까운 쿨톤 조명은 공간을 차갑게 보이게
                        만듭니다. 반대로 3000K 전후의 노란빛(전구색) 조명은
                        시각적으로 공간을 훨씬 따뜻하게 느껴지게 합니다.
                        실제 온도를 높이지 않고도, 조명 색만 바꾸는 것만으로
                        “아늑하다”는 느낌을 크게 올릴 수 있습니다.
                      </Text>
                      <Text>
                        밤에는 전체등 대신 스탠드, 무드등처럼 낮은 조도를
                        가진 조 명을 켜두면 눈 피로도 줄고, 전기 사용량도
                        자연스럽게 줄어듭니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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

                  {/* 섹션 3 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      3. 난방 설계를 바꾸는 습관 5가지
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비 절약은 “한 번의 대공사”보다는 “매일의 작은
                        습관”이 더 큰 영향을 미칩니다. 보일러 조작법만
                        조금 바꿔도 요금이 달라질 수 있습니다.
                      </Text>

                      <Text fontWeight="600">① ON/OFF 대신 ‘유지’하기</Text>
                      <Text>
                        너무 춥다고 보일러를 확 올렸다가, 답답하다고 끄는
                        방식은 에너지 소모가 큽니다. 덜 춥게 느껴지는
                        온도(예: 20~22도)에서 계속 유지하는 편이 연비가 더
                        좋을 때가 많습니다. 집을 비우는 시간이 길지
                        않다면, 완전 OFF보다는 저온 유지가 더 효율적일
                        수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 외출 모드·예약 기능 적극 활용</Text>
                      <Text>
                        출근·퇴근 시간이 일정하다면, 퇴근 30분~1시간 전에
                        켜지도록 예약해 두는 것이 좋습니다. 집에 도착해서
                        “너무 춥다” 싶을 정도면 다시 세게 틀게 되고,
                        그만큼 요금이 올라갑니다.
                      </Text>

                      <Text fontWeight="600">③ 샤워·요리 직후의 온기를 놓치지 않기</Text>
                      <Text>
                        샤워나 요리를 하면 자연스럽게 따뜻한 공기와 습기가
                        생깁니다. 이때 욕실 문이나 주방과 거실 사이 문을
                        잠깐 열어두면, 공기 순환과 습도 유지에 도움이
                        됩니다. 다만 결로나 곰팡이를 막기 위해 이후에
                        한 번 더 환기는 꼭 해주세요.
                      </Text>

                      <Text fontWeight="600">④ 커튼과 창문을 ‘열고 닫는 타이밍’</Text>
                      <Text>
                        햇빛이 잘 드는 집이라면, 낮에는 커튼을 활짝 열어
                        자연광으로 실내 온도를 조금이라도 올려두는 것이 좋습니다.
                        해가 지기 시작하면 창밖 온도가 빠르게 떨어지므로,
                        그 전에 커튼을 닫아 창을 한 번 더 막아주는 것이
                        열 손실을 줄이는 데 도움 됩니다.
                      </Text>

                      <Text fontWeight="600">⑤ 혼자 사는 집은 ‘존 난방’으로</Text>
                      <Text>
                        원룸이라도 항상 머무는 위치가 정해져 있습니다.
                        모든 공간을 똑같이 따뜻하게 만들기보다, 앉아 있는
                        자리 위주로 담요, 무릎담요, 전기 온열 용품 등을
                        병행하는 식으로 “미니 존 난방”을 설계하면 난방비를
                        더 효율적으로 쓸 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  {/* 마무리 */}
                  <Box as="section">
                    <Heading
                      as="h2"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      fontWeight="700"
                      mb={5}
                      color="#1a2e1a"
                      pb={2}
                      borderBottom="3px solid"
                      borderColor="brand.500"
                      w="fit-content"
                    >
                      마무리: 숫자는 조금 낮추고, 온기는 조금 더 높이기
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        난방비를 아낀다는 건 단순히 “덜 트는 것”이 아니라,
                        “같은 비용으로 더 따뜻하게 사는 방법”을 찾는 일에
                        가깝습니다. 집 구조와 동선을 다시 보고, 틈을 막고,
                        습도와 조명을 조정하는 것만으로도 체감 온도는
                        분명 달라질 수 있습니다.
                      </Text>
                      <Text>
                        오늘 소개한 방법 중에서 한 번에 모든 걸 바꿀 필요는
                        없습니다. 현관 틈 막기, 발 밑 러그 깔기, 조명 색
                        바꾸기처럼 가장 가볍게 시작할 수 있는 것부터
                        골라보세요. 작은 변화가 쌓이면, 다음 달 난방비
                        고지서를 열어보는 마음이 조금은 덜 무거워질지도
                        모릅니다.
                      </Text>
                      <Box
                        bg="brand.50"
                        borderRadius="12px"
                        p={5}
                        borderLeft="4px solid"
                        borderColor="brand.500"
                      >
                        <Text
                          fontSize={{ base: '16px', md: '17px' }}
                          fontWeight="600"
                          color="#1a2e1a"
                          mb={2}
                        >
                          🔥 오늘의 한 줄: “춥지 않게 아끼는 게 진짜 절약”
                        </Text>
                        <Text color="#495057">
                          무작정 참으면서 아끼기보다는, 나에게 맞는
                          난방 습관과 집 구조를 찾는 것이 더 오래가는
                          절약입니다. 이번 겨울에는 숫자는 조금 낮추고,
                          온기는 조금 더 높게 느껴지는 집을 함께 만들어봐요.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  {/* 광고 3: 마지막 섹션 전 */}
                  <AdRotator type="kakao" />
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog3;