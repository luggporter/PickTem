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

const Blog2 = () => {
  const navigate = useNavigate();
  const title = '쇼핑 실패 줄이는 법: 사람들이 가장 많이 후회하는 구매 10가지';
  const description =
    '충동구매, 세일에 속아 산 물건, 한 번 쓰고 방치된 제품까지. 사람들이 가장 많이 후회한 구매 유형 10가지를 정리하고, 실패 확률을 줄이는 실전 체크리스트를 소개합니다.';

  const baseUrl = window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}#/magazine/2`;
  const ogImage = `${baseUrl}images/blog/blog2.png`;

  const publishedDate = '2024년 1월 29일';
  const author = '아리';
  const category = '똑똑한 소비 가이드';
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
    datePublished: '2024-01-29',
    dateModified: '2024-01-29',
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
                  src="/images/blog/blog2.png"
                  alt="온라인 쇼핑 장바구니와 카드, 영수증이 함께 놓인 책상 위 모습"
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
                      “그때 왜 샀을까…”가 반복되는 이유
                    </Text>
                    <Text mb={4}>
                      장바구니를 비우겠다고 결심한 날, 우리는 비슷한 물건을
                      여러 개 버립니다. 거의 새 것인데도 포장만 뜯고 한 번도
                      쓰지 않은 수납함, 색이 예뻐서 샀지만 손이 잘 가지 않는
                      옷, 광고를 보고 충동적으로 주문한 생활용품들. 당시에는
                      분명 필요하다고 느꼈지만, 시간이 지나 돌아보면
                      “굳이 사지 않았어도 되는 것”이 되어버립니다.
                    </Text>
                    <Text mb={4}>
                      흥미로운 점은, 후회하는 쇼핑에는 일정한 패턴이 있다는
                      것입니다. 단순히 “운이 나빴던 소비”가 아니라, 같은
                      실수를 반복하게 만드는 감정과 상황이 존재합니다.
                      이 패턴을 이해하면, 쇼핑 실패 확률을 크게 줄일 수
                      있습니다.
                    </Text>
                    <Text>
                      이 글에서는 사람들이 가장 많이 후회하는 구매 유형 10가지를
                      정리하고, 실제로 쓸모 있는 소비만 남기는 실전 체크리스트를
                      소개합니다. 소비를 줄이자는 이야기가 아니라, 나에게
                      진짜 도움이 되는 소비를 골라내는 방법에 가깝습니다.
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
                      1. 사람들이 가장 많이 후회한 구매 10가지 유형
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        후회하는 소비의 모양은 다양하지만, 조금만 들여다보면
                        공통점이 보입니다. 아래 10가지는 많은 사람들이
                        “다시 돌아간다면 사지 않을 것 같다”고 말하는 대표적인
                        유형입니다.
                      </Text>

                      <Text fontWeight="600">
                        ① 세일 폭에 끌려 산 물건
                      </Text>
                      <Text>
                        “70% 세일”, “오늘만 이 가격” 같은 문장은 구매
                        버튼을 누르게 만드는 강력한 후킹 문장입니다.
                        문제는 가격에 시선이 쏠리는 순간, “정말 필요했는지”
                        생각할 시간이 줄어든다는 점입니다. 나중에 돌아보면
                        “싸서 산 것”이지, “필요해서 산 것”이 아닌 경우가
                        많습니다.
                      </Text>

                      <Text fontWeight="600">
                        ② 사이즈·공간을 고려하지 않은 가구/인테리어
                      </Text>
                      <Text>
                        사진으로 봤을 때는 완벽해 보였던 소파, 테이블,
                        수납장. 막상 집에 들여놓고 보면 동선이 막히거나,
                        방의 비율과 맞지 않거나, 생각보다 너무 크거나
                        작아서 애매해지는 경우가 많습니다. 줄자 한 번만
                        더 들었다면 피할 수 있었던 대표적인 쇼핑 실패
                        유형입니다.
                      </Text>

                      <Text fontWeight="600">
                        ③ 유행만 보고 고른 패션 아이템
                      </Text>
                      <Text>
                        SNS에서 자주 보이고, 셀럽이 착용했다는 이유만으로
                        고른 옷이나 신발도 후회하는 경우가 많습니다.
                        내 체형, 평소 스타일, 회사 드레스 코드와 맞지
                        않으면 특별한 날 몇 번 입고 옷장 속으로 사라지기
                        쉽습니다.
                      </Text>

                      <Text fontWeight="600">
                        ④ “언젠가 쓸지도 몰라” 하고 산 특수템
                      </Text>
                      <Text>
                        캠핑 용품, 홈트레이닝 기구, 베이킹 도구처럼
                        특정 취미에 특화된 물건들은 실제 사용 빈도와
                        상관없이 욕심이 생기기 쉬운 카테고리입니다.
                        관심이 식으면 부피만 차지하는 짐이 되고, 중고로
                        판매하려 해도 수고에 비해 얻는 금액이 적어
                        후회가 남습니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑤ 리뷰를 제대로 보지 않고 산 전자제품/가전
                      </Text>
                      <Text>
                        전자제품과 가전은 한 번 사면 오래 쓰는 물건이기
                        때문에, 작은 불편도 매일 반복해서 겪게 됩니다.
                        충전 단자가 불편한 위치에 있다거나, 소음이 예상보다
                        크거나, 설정이 복잡한 제품은 “조금 더 알아볼 걸”
                        하는 후회를 남깁니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑥ 자동 결제로 나가는 구독 서비스
                      </Text>
                      <Text>
                        OTT, 음악, 클라우드 저장공간, 각종 멤버십은
                        월 단위로 결제되기 때문에 체감이 잘 되지 않습니다.
                        막상 사용 내역을 보면 한두 번 접속하고 방치된
                        서비스가 적지 않습니다. 취소하기가 애매해
                        몇 달 동안 쭉 빠져나가는 자동 결제는 많은 사람들이
                        뒤늦게 후회하는 소비입니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑦ “세트 구성”에 혹해서 산 묶음 상품
                      </Text>
                      <Text>
                        단품보다 세트 구성이 더 경제적으로 보일 때가
                        많습니다. 하지만 실제로는 세트 중 일부만 자주 쓰고
                        나머지는 거의 사용하지 않는 경우가 많습니다.
                        세트라는 이유로 필요 이상의 양을 들이게 되면,
                        보관 공간까지 함께 점령당하게 됩니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑧ “리뷰가 좋길래” 바로 따라 산 베스트셀러
                      </Text>
                      <Text>
                        리뷰는 중요한 참고 자료이지만, 남들에게 좋은
                        제품이 나에게도 무조건 맞는 것은 아닙니다.
                        특히 피부 타입, 생활 환경, 취향이 강하게 타는
                        제품일수록 “리뷰 보고 샀는데 나랑은 안 맞네”
                        하는 실망이 생길 수 있습니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑨ 내 삶의 단계와 맞지 않는 고가의 물건
                      </Text>
                      <Text>
                        인생템, 평생템이라는 말에 이끌려 장기적인 관점에서
                        선택한 고가의 물건도, 실제 생활 패턴이나 소득
                        수준과 맞지 않으면 부담으로 돌아오기 쉽습니다.
                        좋은 물건이지만 “지금의 나”에게는 과한 선택일
                        수 있습니다.
                      </Text>

                      <Text fontWeight="600">
                        ⑩ “나를 위한 보상”이라는 명분으로 반복되는 충동구매
                      </Text>
                      <Text>
                        힘들었던 하루를 위로하기 위해, 스트레스를 풀기 위해
                        하는 보상 소비 자체는 나쁜 것이 아닙니다. 다만
                        그 방식이 항상 “물건 사기”로만 연결되면,
                        기분이 잠깐 좋아지는 대신 카드 명세서를 볼 때
                        더 큰 스트레스를 느끼게 됩니다.
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
                      2. 쇼핑 전, 딱 1분 투자하는 체크리스트
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        쇼핑 실패를 줄이기 위해 가장 효과적인 방법은
                        결제 버튼을 누르기 전에 잠깐 멈춰 서서, 몇 가지
                        질문만 던져보는 것입니다. 1분이면 충분합니다.
                      </Text>

                      <Text fontWeight="600">① 이 물건의 ‘정확한 용도’는 무엇인가요?</Text>
                      <Text>
                        막연히 “있으면 좋을 것 같아서”가 아니라,
                        구체적으로 언제, 어디서, 어떤 상황에서 사용할지
                        떠올려보는 것이 중요합니다. 머릿속에 장면이 선명하게
                        그려지지 않는다면, 아직은 살 타이밍이 아닐 수
                        있습니다.
                      </Text>

                      <Text fontWeight="600">② 지금 집에 비슷한 역할을 하는 물건이 있나요?</Text>
                      <Text>
                        같은 기능을 하는 물건이 이미 있는데, 단지 디자인이나
                        컬러가 마음에 들어서 다시 사려는 건 아닌지 점검해
                        봅니다. “지금 쓰는 것을 버리고 이걸로 완전히
                        바꿀 수 있을까?”를 기준으로 생각해보는 것도 좋습니다.
                      </Text>

                      <Text fontWeight="600">③ 최소 몇 번 이상 사용할 것 같나요?</Text>
                      <Text>
                        구매 전에 “이 물건을 최소 몇 번 사용해야 아깝지
                        않다고 느낄까?”를 생각해보세요. 사용 횟수로 나눈
                        비용을 떠올리면, 실제 체감되는 가격이 달라집니다.
                        한 번 쓸 가능성이 큰 물건이라면 대여나 중고도
                        함께 고려해볼 수 있습니다.
                      </Text>

                      <Text fontWeight="600">④ 어디에 보관할지 자리가 떠오르나요?</Text>
                      <Text>
                        집 안에 이 물건이 들어왔을 때, 정확히 어디에
                        둘지 떠오르지 않는다면 일단 멈추는 것이 좋습니다.
                        물건은 사는 순간부터 보관 공간과 관리 시간을 함께
                        요구합니다. 자리가 없는 물건은 결국 짐이 되기 쉽습니다.
                      </Text>

                      <Text fontWeight="600">⑤ 지금이 가장 좋은 타이밍인가요?</Text>
                      <Text>
                        계절, 이사 일정, 수입·지출 상황, 다른 지출 계획까지
                        함께 고려해보면 “지금 꼭 사야 하는지”가 좀 더
                        명확해집니다. 당장 필요하지 않다면, 위시리스트에
                        넣어두고 한 달 뒤에 다시 보는 것도 좋은 방법입니다.
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
                      3. 온라인 쇼핑에서 특히 주의해야 할 포인트
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        온라인 쇼핑은 편리하지만, 화면을 통해 보는 정보에
                        크게 의존할 수밖에 없습니다. 그래서 작은 정보 차이가
                        큰 실망으로 이어지기 쉽습니다.
                      </Text>

                      <Text fontWeight="600">① 실제 사이즈를 손으로 재보세요</Text>
                      <Text>
                        상품 상세페이지에 적힌 숫자는 머릿속으로만
                        떠올리면 체감이 잘 되지 않습니다. A4 용지,
                        책상 너비, 손 너비처럼 이미 알고 있는 기준과
                        비교하거나, 줄자·자를 이용해 직접 가늠해보면
                        “생각보다 크다/작다”를 미리 예상할 수 있습니다.
                      </Text>

                      <Text fontWeight="600">② 리뷰는 “불만족 리뷰”부터 보기</Text>
                      <Text>
                        별점 4~5점의 만족 리뷰보다, 1~3점의 불만 리뷰가
                        나와 잘 맞을지 판단하는 데 더 큰 도움을 줍니다.
                        반복해서 등장하는 단어가 있는지, 나도 예민하게
                        느낄 포인트인지 살펴보는 것이 좋습니다.
                      </Text>

                      <Text fontWeight="600">③ 사진보다 ‘텍스트 정보’를 믿기</Text>
                      <Text>
                        사진은 촬영 환경, 보정, 화면 밝기에 따라 다르게
                        보일 수 있습니다. 소재, 두께, 무게, 관리 방법처럼
                        텍스트로 제공되는 정보가 실제 사용감을 더 잘
                        설명해주는 경우가 많습니다.
                      </Text>

                      <Text fontWeight="600">④ 반품·교환 조건 반드시 확인하기</Text>
                      <Text>
                        특히 고가의 가전, 가구, 부피가 큰 물건은 반품 시
                        배송비나 설치 비용이 발생할 수 있습니다. 교환·반품이
                        가능한지, 가능하다면 어떤 조건과 비용이 붙는지
                        미리 확인해두면 “어쩔 수 없이 그냥 쓰자”는
                        상황을 줄일 수 있습니다.
                      </Text>

                      <Text fontWeight="600">⑤ 밤늦게 하는 쇼핑은 더 조심하기</Text>
                      <Text>
                        피곤하고 감정이 예민한 밤 시간에는 판단력이
                        떨어지기 쉽습니다. 이때는 즐겨찾기나 장바구니에만
                        담아두고, 결제는 다음 날 낮에 해보는 것도 좋은 전략입니다.
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
                      마무리: ‘좋은 소비’는 나를 후회하게 만들지 않습니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        우리가 쇼핑을 후회하는 순간은, 단순히 돈을 썼기
                        때문이 아니라 “이 돈을 다른 데 썼으면 더 좋았을 것
                        같다”는 생각이 들 때입니다. 결국 좋은 소비란
                        가격이 싸거나 비싼 문제가 아니라, 나의 삶을
                        분명하게 더 나은 방향으로 바꿔주는 소비입니다.
                      </Text>
                      <Text>
                        다음 번에 결제 버튼을 누르기 전에, 오늘 소개한
                        10가지 후회 유형과 짧은 체크리스트를 한 번만
                        떠올려보세요. 그 1분의 멈춤이, 몇 달 뒤 카드
                        명세서를 보는 나를 조금 더 편안하게 만들어 줄
                        것입니다.
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
                          💳 오늘의 한 줄: “내가 고른 물건이 아니라, 나를
                          도와줄 물건 고르기”
                        </Text>
                        <Text color="#495057">
                          소비를 완전히 줄일 필요는 없습니다. 다만 같은
                          돈을 쓸 때에도, 나를 지치게 하는 소비보다
                          나를 도와주는 소비가 더 많아졌으면 좋겠습니다.
                          장바구니를 닫는 용기만 있어도, 쇼핑은 훨씬
                          가벼운 일이 될 수 있습니다.
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

export default Blog2;