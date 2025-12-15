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

const Blog8 = () => {
  const navigate = useNavigate();
  const title =
    '집 안 공기정화 완전 가이드: 환기, 습도, 미세먼지, 곰팡이까지 한 번에 정리';
  const description =
    '집 안 공기질을 결정하는 요소와 환기·습도·미세먼지·곰팡이·냄새 관리까지, 생활 속에서 실천할 수 있는 실내 공기정화 방법을 단계별로 정리한 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/8`;
  const ogImage = `${baseUrl}images/blog/blog8.png`;

  const publishedDate = '2024년 3월 18일';
  const author = '아리';
  const category = '생활 꿀팁';
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
    datePublished: '2024-03-18',
    dateModified: '2024-03-18',
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
                  src="/images/blog/blog9.png"
                  alt="창문과 식물이 있는 거실, 공기정화와 환기가 잘 되는 집의 모습"
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
                  spacing={10}
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
                      “집 안 공기가 좋아지면, 생각보다 많은 게 같이 좋아집니다.”
                    </Text>
                    <Text mb={4}>
                      잠에서 깼는데 머리가 무겁고, 집에 있는데도 코가 막히거나
                      집중이 잘 안 되는 느낌이 든 적이 있으신가요?
                      실내 공기질이 좋지 않을 때, 몸은 작게 신호를 보내고 있습니다.
                    </Text>
                    <Text mb={4}>
                      우리는 하루 24시간 중 대부분을 실내에서 보내고,
                      집은 그중에서도 가장 오래 머무는 공간입니다.
                      그래서 **집 안 공기질을 관리하는 일은 건강 관리이자,
                      생활의 기본 인프라를 정비하는 일**에 가깝습니다.
                    </Text>
                    <Text>
                      이 글에서는 단순히 공기청정기를 추천하는 것을 넘어서,
                      <br />
                      ① 실내 공기질을 결정하는 요소 <br />
                      ② 환기와 공기 흐름 설계 <br />
                      ③ 미세먼지 & 공기청정기 활용법 <br />
                      ④ 습도·곰팡이 관리 <br />
                      ⑤ 냄새·VOC(휘발성 유기화합물) & 향 관리
                      <br />
                      까지, **집 안 공기를 건강하게 유지하는 전체 그림**을
                      차근차근 정리해 봅니다.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

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

                  {/* 섹션 1: 공기질 요소 */}
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
                      1. 실내 공기질을 결정하는 5가지 요소
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        “공기가 좋다/나쁘다”는 느낌은 막연해 보이지만,
                        실제로는 몇 가지 요소로 나누어 생각할 수 있습니다.
                        이 요소들을 이해하면 집 안 공기를
                        **“감”이 아니라 “설계”의 대상으로 볼 수 있게 됩니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 산소·이산화탄소 농도
                        </Text>
                        <Text>
                          좁은 방에 오래 있으면 머리가 멍해지는 이유 중 하나는
                          공기 중 이산화탄소 비율이 높아지기 때문입니다.
                          사람이 오래 머무는 공간일수록
                          **정기적인 환기**가 필수입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 미세먼지·초미세먼지
                        </Text>
                        <Text>
                          창문 틈, 환풍구, 외부와 연결된 작은 틈을 통해
                          외부 미세먼지가 실내로 들어옵니다.
                          도로 근처, 공사장 주변, 대로변 건물은
                          특히 실내 미세먼지 관리가 중요합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 습도
                        </Text>
                        <Text>
                          습도가 너무 낮으면 건조함, 코막힘, 피부 트러블이,
                          너무 높으면 곰팡이·진드기·냄새 문제가 생깁니다.
                          **40~60% 정도의 중간 습도**를 유지하는 것이
                          가장 쾌적한 상태입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 냄새(악취·조리 냄새·곰팡이 냄새 등)
                        </Text>
                        <Text>
                          냄새는 단순한 ‘불쾌감’뿐 아니라,
                          보이지 않는 산화물·가스·유기 화합물이 공기 중에 떠 있다는 신호이기도 합니다.
                          제거보다는 **발생 지점 관리 + 빠른 배출**이 핵심입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ⑤ VOC(휘발성 유기화합물)·가스
                        </Text>
                        <Text>
                          새 가구, 페인트, 접착제, 방향제, 세제 등에서
                          휘발성 유기화합물이 공기 중으로 배출될 수 있습니다.
                          새로 인테리어를 했거나,
                          새 가구·매트를 들였다면
                          **초기에 환기량을 크게 늘려주는 것**이 좋습니다.
                        </Text>
                      </Box>
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

                  {/* 섹션 2: 환기 & 공기 흐름 */}
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
                      2. 환기와 공기 흐름: “언제, 어떻게” 여는지가 중요하다
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        공기질 관리의 출발점은 항상 **환기**입니다.
                        창문을 여는 것만으로도,
                        집 안 공기 상태가 완전히 달라질 수 있습니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 하루 최소 2번, 5~10분 ‘강제 환기’
                        </Text>
                        <Text>
                          날씨와 계절과 상관없이,
                          **아침 기상 후 / 저녁 활동 전** 등
                          하루 두 번 정도는
                          창문을 활짝 열어 공기를 바꾸는 것이 좋습니다.
                          환기는 “한 번에 오래”보다
                          **짧고 강하게, 자주**가 더 효과적입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② ‘맞바람’ 구조 만들기
                        </Text>
                        <Text>
                          한 곳만 열어두면 공기가 충분히 순환되지 않습니다.
                          가능한 한 **서로 마주보는 방향의 창문이나 문 두 곳 이상**을 동시에 열어
                          공기가 “통과”할 수 있는 길을 만들어 주세요.
                          환기의 효율이 눈에 띄게 증가합니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 미세먼지 많은 날의 환기 요령
                        </Text>
                        <Text>
                          대기질이 나쁜 날이라고 해서,
                          환기를 완전히 막는 것도 좋은 방법은 아닙니다.
                          대신 **미세먼지가 상대적으로 낮은 시간대(이른 오전, 늦은 밤 등)**를 선택해
                          짧게 환기하고,
                          나머지 시간에는 공기청정기를 활용하는 식으로
                          “조합 전략”을 사용하는 것이 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 창을 열기 어려운 구조라면?
                        </Text>
                        <Text>
                          창이 한 면에만 있거나 반지하처럼 환기가 어려운 구조라면,
                          선풍기·서큘레이터를 활용해 공기 흐름을 만들어 줄 수 있습니다.
                          창 방향을 향해 선풍기를 돌려
                          **실내 공기가 밖으로 밀려 나가도록** 만드는 것도 작은 팁입니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 3: 미세먼지 & 공기청정기 */}
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
                      3. 미세먼지와 공기청정기, 어떻게 써야 효과적일까?
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        미세먼지 많은 날에는 공기청정기의 역할이 커집니다.
                        다만 “켜두기만 하면 된다”는 생각보다,
                        공간에 맞게 사용하는 것이 더 중요합니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 방 크기와 CADR(정화 능력) 맞추기
                        </Text>
                        <Text>
                          작은 방에 지나치게 큰 공기청정기를 둘 필요는 없지만,
                          큰 거실에 너무 약한 제품을 쓰면
                          체감 효과가 적을 수 있습니다.
                          대략 **실제 방 크기보다 조금 여유 있는 정화 면적**을 가진 제품을
                          사용하는 것이 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 현관·창가 쪽에 두기보다, 실제로 머무는 공간 쪽에
                        </Text>
                        <Text>
                          “먼지가 들어오는 방향”에만 두는 것보다,
                          **가장 오래 머무는 곳**(소파 주변, 침대 근처, 책상 옆)에 두는 편이
                          실제 체감에 더 도움이 됩니다.
                          거실에 하나, 침실 근처에 하나 등
                          동선을 기준으로 배치해 보세요.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 필터 관리 주기 지키기
                        </Text>
                        <Text>
                          필터 교체 시기를 지나 오래 사용하면
                          정화 기능이 떨어질 뿐 아니라,
                          오히려 필터에 먼지가 쌓여
                          냄새나 오염원이 될 수 있습니다.
                          제조사 권장 주기를 기준으로 하되,
                          **미세먼지 많은 지역·도로변이라면 조금 더 짧게** 잡는 것도 좋습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 공기청정기만으로는 부족한 영역도 있다
                        </Text>
                        <Text>
                          공기청정기는 먼지·입자 제거에 강하지만,
                          **이산화탄소, 산소 농도, 습도, 냄새, VOC**까지 완전히 해결해 주지는 않습니다.
                          환기·습도 관리·청소와 함께 사용할 때
                          비로소 최대 효과를 낼 수 있다는 점을 기억해 두면 좋습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 4: 습도 & 곰팡이 */}
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
                      4. 습도와 곰팡이: “습한 구역”부터 찾아보자
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        공기질 이야기를 할 때 습도와 곰팡이는 빼놓을 수 없습니다.
                        눈에 잘 띄지 않지만, 곰팡이와 과도한 습기는
                        호흡기·피부 건강과 직접적으로 연결됩니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 집 안에서 가장 습한 구역 찾기
                        </Text>
                        <Text>
                          보통 욕실, 주방, 드럼세탁기 주변, 창가 하단, 옷장 안쪽이
                          습기가 쉽게 고이는 공간입니다.
                          곰팡이 냄새가 난다면
                          **이 지점들을 먼저 집중적으로 확인**해 보세요.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 제습은 “공간 전체”가 아니라 “문제 구역” 위주로
                        </Text>
                        <Text>
                          제습기를 쓸 때는
                          집 전체를 건조하게 만들기보다,
                          특히 습한 구역 위주로 돌리는 것이 효율적입니다.
                          문을 닫고 작은 공간에서 돌리면
                          전기 사용량 대비 효과가 훨씬 높습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 욕실은 ‘건조 모드’까지 포함해서 사용하기
                        </Text>
                        <Text>
                          샤워 후 바닥에 고인 물을 간단히 밀어내고,
                          환풍기를 10~20분 정도 더 돌려 주는 것만으로도
                          곰팡이 발생 가능성을 크게 낮출 수 있습니다.
                          가능하면 **욕실 문은 완전히 마른 뒤에 닫는 것**을 목표로 해 보세요.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ④ 옷장 안쪽까지 공기가 통하게 만들기
                        </Text>
                        <Text>
                          옷이 빽빽하게 채워진 옷장은
                          공기가 거의 돌지 않습니다.
                          옷 사이에 손이 들어갈 정도의 여유를 남겨두고,
                          계절이 지난 옷은 박스에 담아 상단이나 다른 공간으로 옮기면
                          곰팡이·냄새를 줄이는 데 도움이 됩니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 섹션 5: 냄새·VOC·향 */}
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
                      5. 냄새·VOC·향까지 포함한 ‘공기 분위기’ 만들기
                    </Heading>
                    <Stack spacing={5}>
                      <Text>
                        같은 공기여도 “기분 좋게 느껴지는 공기”가 있습니다.
                        마지막 단계는 **집 안 공기의 분위기를 세팅하는 일**입니다.
                      </Text>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ① 방향제보다 ‘원인 차단’이 먼저
                        </Text>
                        <Text>
                          음식물 쓰레기, 하수구, 신발장, 애완동물 용품 등에서 오는 냄새는
                          방향제로 덮기보다
                          **발생 지점을 줄이고, 빨리 배출하는 것**이 중요합니다.
                          향은 그 이후에 더해지는 “마무리 작업”에 가깝습니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ② 새 가구·새 매트리스는 ‘적응 기간’이 필요하다
                        </Text>
                        <Text>
                          새로 들인 가구와 매트리스에서는
                          초기 몇 주 동안 다양한 휘발성 물질이 나올 수 있습니다.
                          이 기간 동안에는
                          **환기 빈도를 늘리고, 문을 활짝 여는 시간대를 따로 확보**해 주는 것이 좋습니다.
                          가능하다면 처음 며칠은 사람이 오래 머물지 않는 방에 두는 것도 방법입니다.
                        </Text>
                      </Box>

                      <Box>
                        <Text fontWeight="600" mb={2}>
                          ③ 향은 ‘공기 마무리’ 정도로 가볍게
                        </Text>
                        <Text>
                          디퓨저·룸 스프레이·향초·인센스 등은
                          집 안 분위기를 완성해 주는 역할을 합니다.
                          다만 너무 강한 향은 머리가 아플 수 있으므로,
                          **은은하게 느껴지는 정도**를 기준으로 선택해 보세요.
                          침실은 과한 향보다는
                          부드러운 허브·우디 계열이 더 안정감을 줄 수 있습니다.
                        </Text>
                      </Box>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      마무리: 눈에 보이지 않는 것을 관리할수록, 삶의 밀도가 달라진다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        집 안 공기는 눈에 보이지 않아서
                        뒤로 밀리기 쉬운 영역입니다.
                        하지만 실제로는 우리가 가장 많이 마주치는
                        “환경”이자, 건강과 집중력, 수면의 질까지
                        모두 연결되는 중요한 요소입니다.
                      </Text>
                      <Text>
                        오늘 소개한 내용 중에서
                        모든 것을 다 실천할 필요는 없습니다.
                        **하루 두 번 환기하기, 욕실 완전히 말리고 문 닫기,
                        공기청정기 위치 한 번 바꿔보기**처럼
                        가장 쉬운 것 하나부터 시작해 보세요.
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
                          🌿 오늘의 한 줄: “깨끗한 공기는 보이지 않지만, 분명히 느껴집니다.”
                        </Text>
                        <Text color="#495057">
                          공기 관리에 한 번만 신경 써도  
                          집의 분위기, 몸의 피로도, 집중하는 시간까지  
                          조금씩 달라지기 시작할 거예요.
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

export default Blog8;