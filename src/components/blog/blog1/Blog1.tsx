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

const Blog1 = () => {
  const navigate = useNavigate();
  const title = '집콕 시대, 공간 효율 200% 만드는 정리·수납 공식 15가지';
  const description =
    '좁은 집, 자취방, 원룸에서도 숨은 수납공간을 찾아 공간 효율을 200% 높이는 정리·수납 공식 15가지를 정리한 실전 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/1`;
  const ogImage = `${baseUrl}images/blog/blog1.png`;

  const publishedDate = '2024년 1월 22일';
  const author = '씩씩이';
  const category = '공간 정리 가이드';
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
      name: '씩씩이',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/favicon.png`,
      },
    },
    image: [ogImage],
    datePublished: '2024-01-22',
    dateModified: '2024-01-22',
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

        <Container
          maxW="container.md"
          px={{ base: 4, md: 6 }}
          py={{ base: 6, md: 10 }}
        >
          <article>
            <VStack spacing={8} align="stretch">
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

              <Box
                borderRadius="20px"
                overflow="hidden"
                w="100%"
                boxShadow="xl"
                bg="white"
              >
                <Image
                  src="/images/blog/blog2.p"
                  alt="정리된 거실과 수납 공간이 잘 보이는 집 안 풍경"
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
                <Stack
                  spacing={8}
                  fontSize={{ base: '15px', md: '16px' }}
                  lineHeight="1.9"
                  color="#1a2e1a"
                >
                  <Box>
                    <Text
                      fontSize={{ base: '17px', md: '18px' }}
                      fontWeight="600"
                      color="#1a2e1a"
                      mb={3}
                    >
                      집에 있는 시간이 길어질수록 더 엉망이 되는 이유
                    </Text>
                    <Text mb={4}>
                      재택근무, 온라인 수업, 배달 음식, 넷플릭스. 집은 더
                      자주, 더 오래 머무르는 공간이 되었지만 정작 체감은
                      “점점 좁아진다”에 가깝습니다. 짐이 갑자기 많아진 것이
                      아닌데, 어느 순간 발 디딜 곳이 사라지고, 택배 상자와
                      옷가지, 각종 생활용품이 집 안을 점령하게 되죠.
                    </Text>
                    <Text mb={4}>
                      많은 사람들이 이 상황을 해결하기 위해 “버리기”부터
                      떠올립니다. 하지만 실제로는 버리는 것보다 먼저
                      해야 할 일이 있습니다. 바로 나의 생활 패턴을 기준으로
                      공간을 재설계하는 일입니다. 정리는 인내심이 아니라
                      구조의 문제에 더 가깝습니다. 구조가 잘 짜여 있으면
                      조금만 어질러져도 금방 제자리로 돌아갈 수 있습니다.
                    </Text>
                    <Text>
                      이 글에서는 좁은 집, 원룸, 자취방에서도 바로 적용할 수
                      있는 정리·수납 공식 15가지를 소개합니다. 단순히 예쁘게
                      넣어두는 요령이 아니라, 매일의 생활을 더 편하게 만드는
                      실전 팁 위주로 정리했습니다.
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
                      1. 정리는 버리기가 아니라 ‘동선 설계’입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        정리하면 대부분 “뭘 버려야 하지?”부터 떠올립니다.
                        물론 비우기는 중요하지만, 그 이전에 더 중요한 것은
                        내 생활 동선을 기준으로 물건의 자리를 정하는
                        것입니다. 사용하지 않는 물건을 치우는 것이 아니라,
                        자주 사용하는 물건이 ‘가장 편한 자리’에 오도록
                        재배치하는 것이죠.
                      </Text>
                      <Text>
                        하루를 떠올려보면 공통적인 패턴이 있습니다.
                        아침에 눈을 뜨고 나서 출근 준비를 마칠 때까지의
                        동선, 퇴근 후 집에 돌아와 씻고 쉬기까지의 동선,
                        잠들기 전까지의 루틴 말입니다. 정리는 이 동선 위에
                        물건을 올려놓는 작업에 가깝습니다.
                      </Text>
                      <Text>
                        예를 들어, 매일 사용하는 가방과 외투, 마스크, 열쇠는
                        현관 근처에 자리를 만들어주는 것이 좋습니다. 거실 한
                        귀퉁이나 의자 등에 대충 걸쳐두기 시작하면 어느새
                        집안 곳곳이 “임시 보관소”가 되어버립니다. 반대로
                        현관에 훅, 바구니, 작은 선반을 두고 고정된 자리를
                        만들면 들어올 때마다 자연스럽게 손이 그곳으로
                        가게 됩니다.
                      </Text>
                      <Text>
                        또 하나의 기준은 사용 빈도입니다. 자주 쓰는 물건은
                        허리~가슴 높이, 가끔 쓰는 물건은 무릎 아래 혹은
                        머리 위, 1년에 한 번 쓸까 말까 한 물건은
                        가장 접근성이 떨어지는 상단·구석에 두는 식입니다.
                        이 단순한 기준만 적용해도 매일 찾는 물건을 뒤적이는
                        일이 크게 줄어듭니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      2. 공간별 정리 전략: 현관 · 거실 · 주방 · 옷장 · 작업공간
                    </Heading>
                    <Stack spacing={4}>
                      <Text fontWeight="600">
                        ① 현관: “오늘 들고 나갈 것만 남기는 공간”
                      </Text>
                      <Text>
                        현관은 집 안으로 들어오는 모든 물건이 처음 거치는
                        곳입니다. 택배 상자, 장바구니, 우편물, 신발, 우산
                        등 온갖 물건이 잠깐씩 머무는 곳이기 때문에 이
                        공간을 잘 잡아두면 안쪽 방이 훨씬 덜 어질러집니다.
                        우편물과 택배 상자용 바구니, 당일에만 보관하는
                        장바구니 존, 매일 신는 신발과 가끔 신는 신발을
                        분리해 두는 것만으로도 현관이 훨씬 가벼워집니다.
                      </Text>
                      <Text fontWeight="600">② 거실: “공용 물건의 허브”</Text>
                      <Text>
                        거실은 TV, 리모컨, 보드게임, 쿠션, 담요, 충전기 등
                        온 가족의 물건이 섞이는 공간입니다. 이때 각
                        물건의 “귀가 시간”을 정해주는 것이 좋습니다.
                        주말에만 사용하는 보드게임은 한 코너에,
                        리모컨·충전기는 작은 트레이 위에, 담요와 쿠션은
                        한 바구니에 모아두면 사용 후 정리까지 한 번에
                        끝낼 수 있습니다.
                      </Text>
                      <Text fontWeight="600">③ 주방: “작업 순서대로 배치”</Text>
                      <Text>
                        주방은 정리만 잘해도 요리 시간이 절반으로 줄어드는
                        공간입니다. 가장 좋은 기준은 요리 동선입니다.
                        손 씻기 → 재료 꺼내기 → 손질하기 → 조리하기 →
                        담기 → 설거지로 이어지는 순서에 따라 물건을
                        배치해보세요. 도마·칼은 싱크대 옆, 조리도구는
                        가스레인지 옆, 양념은 조리대에서 손 뻗으면 닿는
                        곳에 두는 식입니다.
                      </Text>
                      <Text fontWeight="600">④ 옷장: “계절 + 빈도” 조합</Text>
                      <Text>
                        옷장을 열 때마다 입을 옷이 없다고 느끼는 이유는
                        실제로 옷이 부족해서가 아니라 필요한 옷을 한눈에
                        볼 수 없기 때문입니다. 옷장은 계절과 빈도를 기준으로
                        나누는 것이 좋습니다. 지금 입는 옷, 이번 계절에
                        자주 입는 옷, 다음 계절 옷, 거의 입지 않는 옷으로
                        구분한 뒤, 지금 계절 옷을 가장 보기 좋은 위치에
                        두는 것만으로도 ‘입을 옷이 없다’는 스트레스가
                        줄어듭니다.
                      </Text>
                      <Text fontWeight="600">
                        ⑤ 작업공간: “책상 위 3개 원칙”
                      </Text>
                      <Text>
                        재택근무나 공부를 위한 책상 위에는 가능한 한 세 가지
                        물건만 두는 것이 좋습니다. 노트북 또는 모니터, 필기
                        도구, 물컵. 나머지 서류, 케이블, 충전기, 각종
                        잡동사니는 서랍이나 옆 수납함으로 분리해 두면
                        집중도가 크게 올라갑니다. 눈에 보이는 정보가
                        줄어드는 것만으로도 뇌가 훨씬 덜 피곤해지기 때문입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      3. 수납 도구를 잘 고르는 것이 절반입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        정리 의욕이 생기면 가장 먼저 예쁜 수납함을 사고
                        싶어집니다. 하지만 무작정 예쁜 바구니를 먼저
                        채워 넣으면 오히려 “싱크대 안의 또 다른 창고”만
                        만들어지는 경우가 많습니다. 수납 도구는 물건을
                        정리한 뒤, 필요한 크기와 개수를 파악하고 나서
                        고르는 것이 좋습니다.
                      </Text>
                      <Text>
                        투명 박스와 라벨링은 거의 모든 공간에서 유용합니다.
                        안에 무엇이 들어 있는지 한눈에 보이기 때문에
                        “찾는 시간”을 크게 줄여줍니다. 특히 팬트리,
                        냉장고, 욕실 수납장처럼 비슷한 물건이 여러 개
                        쌓이는 공간에는 투명함이 압도적으로 편리합니다.
                      </Text>
                      <Text>
                        바구니를 선택할 때는 높이와 손잡이 유무를 함께
                        고려하세요. 너무 깊은 바구니는 맨 아래에 뭐가
                        있는지 잊어버리기 좋고, 상단 공간을 비효율적으로
                        차지합니다. 손이 자주 가는 물건일수록 얕고 넓은
                        바구니가, 자주 이동시키는 물건일수록 손잡이가 있는
                        바구니가 잘 어울립니다.
                      </Text>
                      <Text>
                        행거와 선반은 “세로 공간”을 활용하는 대표 도구입니다.
                        원룸에서 바닥을 차지하지 않고 수납량을 늘리고
                        싶다면, 바닥이 아닌 벽과 천장을 떠올려 보세요.
                        문 뒤에 걸 수 있는 훅, 위로 높게 올릴 수 있는
                        선반, 침대 밑 서랍 등은 좁은 집에서 특히 효과적인
                        수납 솔루션이 됩니다.
                      </Text>
                      <Text>
                        마지막으로, 수납 도구의 색은 최대한 통일하는 것이
                        좋습니다. 같은 물건이라도 색이 여러 가지로 섞여
                        있으면 훨씬 어수선해 보이기 때문입니다. 화이트,
                        베이지, 그레이처럼 바닥과 벽 색과 어울리는 톤을
                        선택하면 시각적으로 공간이 넓어 보이는 효과도
                        얻을 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      4. 유지 가능한 정리를 위한 5가지 습관
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        한 번 정리를 해도 금세 원래대로 돌아가는 이유는
                        “유지 습관”이 없기 때문입니다. 완벽하게 정리된
                        상태를 계속 유지하려 하지 말고, 일상에 녹일 수 있는
                        작은 규칙 다섯 가지만 만들어보세요.
                      </Text>
                      <Text>
                        첫째, 들어오는 것보다 나가는 것이 많도록 합니다.
                        새로 하나를 들이면, 비슷한 역할을 하는 물건 하나는
                        보내는 원칙입니다. 이른바 “1 in 1 out” 규칙입니다.
                      </Text>
                      <Text>
                        둘째, 하루에 5분만 정리하는 시간을 정해둡니다.
                        자기 전, 샤워 전, 저녁 식사 후 등 일과 중에
                        자연스럽게 이어지는 타이밍을 고르는 것이 좋습니다.
                        이 시간에는 새로운 정리를 시작하는 것이 아니라,
                        이미 정해둔 자리에 물건을 되돌려놓는 데만
                        집중합니다.
                      </Text>
                      <Text>
                        셋째, 바닥은 항상 비워두는 것을 목표로 합니다.
                        바닥에 물건이 올라오기 시작하는 순간부터 집이
                        어지럽혀지기 시작합니다. 바닥을 “절대 수납 금지
                        구역”으로 정해두면 자연스럽게 다른 수납 공간을
                        활용하게 됩니다.
                      </Text>
                      <Text>
                        넷째, 사용 중인 물건과 여분을 구분합니다. 세제,
                        휴지, 화장품, 식재료 등은 “지금 쓰는 것”과
                        “다음에 쓸 것”을 다른 위치에 두고, 여분은 한곳에
                        모아 재고를 관리합니다. 이 습관만으로도 중복
                        구매가 크게 줄어듭니다.
                      </Text>
                      <Text>
                        다섯째, 정리 전과 후를 사진으로 남겨보세요.
                        눈으로 차이를 확인하면 정리가 “귀찮은 일”이 아니라
                        “성과가 보이는 일”이 됩니다. 이 작은 성취감이
                        다음 정리를 계속하게 만드는 힘이 됩니다.
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
                      마무리: 정리가 시간을 돌려줍니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        잘 정리된 집은 단순히 예뻐 보이는 공간이 아닙니다.
                        필요한 물건을 찾느라 헤매는 시간이 줄고, 집에
                        들어왔을 때 느끼는 피로감이 줄어들며, 머릿속이
                        조금 더 가벼워지는 공간입니다. 결국 정리는 집을
                        꾸미는 일이 아니라, 나의 일상을 관리하는
                        방법이라고 할 수 있습니다.
                      </Text>
                      <Text>
                        오늘 당장 모든 방을 완벽하게 정리할 필요는
                        없습니다. 현관, 책상, 옷장처럼 눈에 가장 자주
                        들어오는 공간 한 곳부터 시작해보세요. 작은 변화가
                        생각보다 큰 만족감을 줄 것입니다. 그리고 그
                        만족감이 다음 공간으로, 또 그다음 공간으로
                        이어지며 집 전체의 분위기를 바꾸게 됩니다.
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
                          📦 오늘의 한 줄: “물건이 아니라 나에게 맞춘 집
                          만들기”
                        </Text>
                        <Text color="#495057">
                          완벽한 인테리어가 아니어도 괜찮습니다. 나의
                          생활 패턴에 맞게 동선을 정리하고, 자주 쓰는
                          것부터 제자리를 만들어주면 집은 조금씩
                          “살기 편한 공간”으로 변해갑니다. 집콕 시대,
                          가장 확실한 투자처는 내 집과 나의 일상일지도
                          모릅니다.
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

export default Blog1