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

const Blog15 = () => {
  const navigate = useNavigate();
  const title = '겨울철 야외활동 전 꼭 알아야 할 안전 수칙 12가지';
  const description =
    '겨울 산책, 축제, 여행, 야외 데이트 전 반드시 체크해야 할 안전 수칙 12가지. 미끄럼·저체온증·탈수·일몰 시간까지 현실적인 기준으로 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}magazine/15`;
  const ogImage = `${baseUrl}/images/blog/blog15.png`;

  const publishedDate = '2024년 5월 13일';
  const author = '씩씩이';
  const category = '야외 안전';
  const readTime = 12;

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
      name: '씩씩이',
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
                      겨울 야외활동은 '의지'보다 '준비'가 안전을 만듭니다
                    </Text>
                    <Text mb={4}>
                      겨울엔 작은 실수가 바로 사고로 이어집니다. 여름엔 그냥 넘어갈 상황도, 겨울엔 미끄러짐·저체온·탈진으로 번질 수 있습니다. 실제로 겨울 야외활동 중 발생하는 사고의 대부분은 "예상치 못한 상황"이 아니라 "준비 부족"에서 비롯됩니다.
                    </Text>
                    <Text mb={4}>
                      겨울의 위험은 단순히 "추워서"가 아닙니다. 체온이 떨어지면 판단력이 저하되고, 판단력이 저하되면 작은 실수도 큰 사고로 이어집니다. 그리고 겨울에는 회복 속도도 느려서, 한 번의 실수가 다음 날까지 영향을 미칩니다. 그래서 겨울 야외활동은 "용기"보다 "준비"가 중요합니다.
                    </Text>
                    <Text mb={4}>
                      아래 12가지는 등산, 산책, 축제, 여행, 데이트 등 <b>모든 겨울 야외활동 전에 공통으로 적용되는 현실 안전 수칙</b>입니다. 각 항목은 실제 겨울 야외활동에서 가장 자주 발생하는 문제들을 기반으로 작성되었고, "이론"보다는 "실전"에 초점을 맞췄습니다. 완벽한 준비를 하려고 하지 말고, 최소한의 안전 기준만 지키는 것에 집중하세요.
                    </Text>
                    <Text>
                      기억하세요. 겨울 야외활동의 목표는 "참는 것"이 아니라 "무사히 돌아와서 좋은 기억으로 남기는 것"입니다. 작은 준비 하나하나가 그 목표를 달성하는 데 도움이 됩니다.
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
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1. 일몰 시간을 먼저 확인하세요
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 해가 빨리 집니다. 12월에는 오후 5시 20분 전후에 해가 지는데, 이는 여름보다 2시간 이상 빠른 시간입니다. 그리고 해가 지면 시야가 급격히 떨어지고 체감 온도가 확 내려갑니다. 실제로 일몰 후 1시간이 지나면 체감 온도가 3~5도 더 떨어집니다.
                      </Text>
                      <Text>
                        야외 일정은 <b>해 지기 전 복귀 기준</b>으로 짜는 게 안전합니다. 예를 들어, 일몰이 오후 5시 20분이라면, 오후 4시 30분까지는 야외 활동을 마치고 실내로 들어가는 것이 좋습니다. 이렇게 하면 어두워지기 전에 안전한 곳에 도착할 수 있습니다.
                      </Text>
                      <Text>
                        더 중요한 것은 일몰 시간을 "대충" 말고 정확히 확인하는 것입니다. 스마트폰 날씨 앱이나 인터넷 검색으로 정확한 일몰 시간을 확인하고, 그 시간을 기준으로 일정을 계획하세요. 그리고 일몰 시간은 지역마다 다르므로, 실제 활동 지역의 일몰 시간을 확인하는 것이 중요합니다.
                      </Text>
                      <Text>
                        만약 일몰 후에도 야외에 있어야 한다면, 반드시 조명 장비(손전등, 헤드램프)를 챙기고, 가능하면 실내로 들어갈 수 있는 경로를 미리 파악해두세요. 어두운 야외에서 길을 잃으면 매우 위험합니다.
                      </Text>
                    </Stack>
                  </Box>

                  {/* 중간 AdSense 블록 제거 (상단에만 배치) */}

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2. 미끄럼은 '신발'에서 80% 결정됩니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울 사고의 대부분은 미끄러짐입니다. 실제로 겨울 야외활동 중 발생하는 부상의 60% 이상이 미끄러짐과 관련이 있습니다. 그리고 그 미끄러짐의 대부분은 신발 때문입니다.
                      </Text>
                      <Text>
                        밑창이 닳은 신발, 평평한 운동화는 눈·얼음에서 매우 위험합니다. 특히 밑창이 닳아서 패턴이 없어진 신발은 마찰력이 거의 없어서 미끄러지기 쉽습니다. 최소한 <b>고무 패턴이 깊은 신발</b>을 선택하세요. 패턴이 깊을수록 마찰력이 커져서 미끄러지기 어렵습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 겨울용 방수·방한 신발을 구비하는 것입니다. 겨울 야외활동이 자주 있다면, 투자할 가치가 있습니다. 그리고 신발을 신기 전에 밑창을 확인하는 습관을 가지세요. 밑창이 닳았거나 패턴이 없어졌다면, 겨울 야외활동에는 부적합합니다.
                      </Text>
                      <Text>
                        만약 이미 신은 신발이 미끄럽다면, 신발 밑창에 미끄럼 방지 패치를 붙이거나, 신발 밑창에 모래나 소금을 뿌리는 임시 방법도 있습니다. 하지만 이것은 임시 방법일 뿐이므로, 가능하면 적절한 신발을 신는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      3. 옷은 '두껍게'보다 '겹쳐서'
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        두꺼운 옷 한 벌보다 얇은 옷 여러 겹이 체온 유지에 훨씬 효과적입니다. 이는 "레이어링"의 원리입니다. 얇은 옷 여러 겹을 입으면 각 옷 사이에 공기층이 형성되어 보온 효과가 커집니다. 반면 두꺼운 옷 한 벌은 공기층이 적어서 보온 효과가 떨어집니다.
                      </Text>
                      <Text>
                        레이어링의 기본 구조는 다음과 같습니다: <b>내의(땀 흡수) → 중간층(보온) → 외피(바람·비 차단)</b>. 내의는 땀을 흡수하는 기능성 소재(메리노 울, 폴리에스터)가 좋고, 중간층은 보온 효과가 큰 소재(플리스, 다운)가 좋으며, 외피는 바람과 비를 차단하는 소재(패딩, 바람막이)가 좋습니다.
                      </Text>
                      <Text>
                        특히 바람을 막는 외피(패딩·바람막이)는 필수입니다. 바람은 체온을 급격히 떨어뜨립니다. 실제로 바람이 1m/s만 불어도 체감 온도가 1도 떨어지고, 바람이 5m/s만 불어도 체감 온도가 5도 이상 떨어집니다. 그래서 겨울 야외활동에서는 바람막이를 입는 것만으로도 체감 온도가 크게 달라집니다.
                      </Text>
                      <Text>
                        실전 팁: 옷을 입을 때는 "추위를 느끼기 전에" 입는 것이 좋습니다. 추워지기 시작하면 이미 체온이 떨어지기 시작한 것이므로, 미리 입어두는 것이 중요합니다. 그리고 활동량이 많아지면 옷을 벗을 수 있도록, 벗기 쉬운 구조로 입는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      4. 목·손·발이 먼저 식습니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        체온 손실은 목, 손, 발에서 가장 빠르게 시작됩니다. 이는 신체 말단부위이기 때문입니다. 심장에서 멀리 떨어진 부위일수록 혈류가 느려서 체온이 빨리 떨어집니다. 그리고 이 부위들이 시려지면 전체적인 체감 온도도 떨어집니다.
                      </Text>
                      <Text>
                        장갑·목도리·두꺼운 양말은 선택이 아니라 기본입니다. 특히 손과 발은 신체 말단이라 가장 먼저 시려지고, 시려지면 움직임도 둔해지고, 움직임이 둔해지면 사고 위험이 커집니다. 그리고 목이 시려지면 목소리 톤도 딱딱해지고, 그게 감정에도 영향을 줍니다.
                      </Text>
                      <Text>
                        실전 팁: 장갑은 두 개를 준비하는 것이 좋습니다. 얇은 장갑(터치 스크린용)과 두꺼운 장갑(보온용)을 겹쳐서 신거나, 상황에 따라 바꿔가며 신는 것입니다. 그리고 목도리는 넥워머로 대체할 수도 있지만, 목도리가 더 보온 효과가 좋습니다. 양말은 두 개를 겹쳐서 신는 것도 좋은 방법입니다.
                      </Text>
                      <Text>
                        더 중요한 것은 이 부위들을 "미리" 보온하는 것입니다. 시려지기 시작하면 이미 체온이 떨어지기 시작한 것이므로, 미리 장갑과 목도리를 착용하고, 두꺼운 양말을 신는 것이 중요합니다. 그리고 핫팩을 손목과 발목에 붙이면 체온 상승 효과가 큽니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      5. 물은 추워도 반드시 마셔야 합니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 갈증을 잘 못 느껴 탈수가 쉽게 옵니다. 여름에는 땀을 많이 흘려서 갈증을 느끼지만, 겨울에는 땀을 적게 흘려서 갈증을 느끼지 못합니다. 하지만 실제로는 겨울에도 수분이 소모됩니다. 건조한 공기로 인해 호흡을 통해 수분이 빠져나가고, 활동을 통해 수분이 소모되기 때문입니다.
                      </Text>
                      <Text>
                        탈수는 어지럼, 판단력 저하로 이어져 사고 위험을 키웁니다. 실제로 탈수가 진행되면 집중력이 떨어지고, 판단력이 저하되며, 균형 감각도 떨어집니다. 이는 겨울 야외활동에서 매우 위험합니다. 특히 미끄러운 곳에서 균형을 잃으면 큰 사고로 이어질 수 있습니다.
                      </Text>
                      <Text>
                        실전 팁: 물은 "갈증을 느낄 때"가 아니라 "정기적으로" 마시는 것이 좋습니다. 예를 들어, 30분마다 한 모금씩 마시는 것입니다. 그리고 물은 너무 차갑지 않게 마시는 것이 좋습니다. 차가운 물은 체온을 떨어뜨릴 수 있으므로, 미지근한 물이나 따뜻한 차를 마시는 것이 좋습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 보온병에 따뜻한 물이나 차를 담아가는 것입니다. 이렇게 하면 물을 마시면서 체온도 유지할 수 있습니다. 그리고 활동량이 많다면 전해질 음료를 마시는 것도 좋습니다. 땀을 통해 소금과 미네랄이 빠져나가기 때문입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      6. 배고픔은 위험 신호입니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        공복 상태에선 체온 유지가 훨씬 어려워집니다. 음식을 섭취하면 체내에서 열이 발생하는데, 이 열이 체온 유지에 도움이 됩니다. 반면 공복 상태에서는 열 발생이 적어서 체온이 빨리 떨어집니다. 실제로 공복 상태에서 추위에 노출되면 저체온증에 빠지기 쉽습니다.
                      </Text>
                      <Text>
                        간단한 간식(초콜릿, 견과류, 에너지바)을 챙겨두세요. 이 간식들은 칼로리가 높아서 빠르게 에너지를 공급하고, 체온 유지에 도움이 됩니다. 특히 초콜릿은 설탕과 지방이 많아서 빠르게 에너지를 공급하고, 견과류는 단백질과 지방이 많아서 지속적으로 에너지를 공급합니다.
                      </Text>
                      <Text>
                        실전 팁: 간식은 "배고플 때"가 아니라 "미리" 먹는 것이 좋습니다. 배고픔을 느끼기 시작하면 이미 에너지가 부족한 상태이므로, 활동을 시작하기 전에 간식을 먹고, 활동 중에도 정기적으로 간식을 먹는 것이 좋습니다. 그리고 간식은 보온이 잘 되는 곳에 보관하세요. 추위에 노출되면 간식도 딱딱해져서 먹기 어려워집니다.
                      </Text>
                      <Text>
                        더 나은 방법은 활동 전에 제대로 된 식사를 하는 것입니다. 활동량이 많다면 탄수화물과 단백질이 풍부한 식사를 하는 것이 좋습니다. 그리고 활동 중에도 간식을 먹되, 너무 많이 먹지 않도록 주의하세요. 너무 많이 먹으면 소화에 에너지가 소모되어 오히려 피로해질 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      7. 바람 세면 체감온도는 '다른 계절'
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        실제 기온보다 바람이 체감온도를 크게 떨어뜨립니다. 이는 "체감온도"의 원리입니다. 바람이 불면 피부 표면의 공기층이 빠르게 교체되어 체온이 빨리 떨어집니다. 실제로 바람이 1m/s만 불어도 체감 온도가 1도 떨어지고, 바람이 5m/s만 불어도 체감 온도가 5도 이상 떨어집니다.
                      </Text>
                      <Text>
                        예를 들어, 실제 기온이 0도인데 바람이 5m/s만 불어도 체감 온도는 -5도가 됩니다. 그리고 바람이 10m/s만 불어도 체감 온도는 -10도가 됩니다. 이는 매우 큰 차이입니다. 그래서 겨울 야외활동에서는 바람을 고려하는 것이 매우 중요합니다.
                      </Text>
                      <Text>
                        바람이 강한 날은 계획을 줄이거나 실내 비중을 늘리는 게 안전합니다. 바람이 5m/s 이상 불면 야외 활동 시간을 줄이거나, 바람이 적은 곳으로 이동하거나, 실내 활동으로 전환하는 것이 좋습니다. 그리고 바람이 강한 곳에서는 체온이 빨리 떨어지므로, 더 자주 휴식을 취하거나 따뜻한 곳으로 들어가는 것이 중요합니다.
                      </Text>
                      <Text>
                        실전 팁: 바람 예보를 미리 확인하고, 바람이 강한 날에는 바람막이를 반드시 입는 것이 좋습니다. 그리고 바람이 강한 곳에서는 바람을 등지고 서거나, 바람이 적은 곳으로 이동하는 것이 좋습니다. 그리고 바람이 강할수록 체온 유지가 어려우므로, 더 자주 간식을 먹거나 따뜻한 음료를 마시는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      8. 휴대폰 배터리는 평소보다 빨리 닳습니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        추위는 배터리를 급격히 소모시킵니다. 리튬 이온 배터리는 온도에 매우 민감합니다. 온도가 떨어지면 배터리의 화학 반응이 느려져서 용량이 줄어들고, 방전 속도가 빨라집니다. 실제로 0도 이하에서는 배터리 용량이 20~30% 줄어들고, -10도 이하에서는 배터리 용량이 50% 이상 줄어듭니다.
                      </Text>
                      <Text>
                        보조 배터리는 겨울 야외활동의 안전 장비입니다. 휴대폰은 단순히 통화나 메시지를 보내는 도구가 아니라, 지도, 응급 연락, 사진 촬영 등 다양한 용도로 사용됩니다. 특히 응급 상황에서는 휴대폰이 생명선이 될 수 있습니다. 그래서 보조 배터리는 필수입니다.
                      </Text>
                      <Text>
                        실전 팁: 보조 배터리는 몸에 가까운 곳에 보관하세요. 추위에 노출되면 보조 배터리도 방전이 빨라지므로, 주머니나 가방 안쪽에 보관하는 것이 좋습니다. 그리고 보조 배터리는 미리 충전해두고, 활동 전에 휴대폰도 완전히 충전해두는 것이 좋습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 휴대폰을 절전 모드로 설정하거나, 불필요한 앱을 종료하는 것입니다. 그리고 사진 촬영이나 영상 촬영은 배터리를 많이 소모하므로, 필요한 만큼만 촬영하는 것이 좋습니다. 그리고 가능하면 휴대폰을 몸에 가까운 곳에 보관하여 체온으로 배터리를 보온하는 것도 좋은 방법입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      9. 혼자보다 '같이' 움직이세요
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        야외 활동은 혼자보다 동행이 안전합니다. 특히 겨울에는 더욱 그렇습니다. 혼자 있으면 사고가 발생했을 때 도움을 받기 어렵고, 저체온증이나 탈진에 빠졌을 때 발견하기 어렵습니다. 그리고 겨울에는 회복 속도도 느려서, 작은 사고도 큰 문제로 이어질 수 있습니다.
                      </Text>
                      <Text>
                        특히 어두워진 이후엔 반드시 함께 이동하세요. 어두운 야외에서는 시야가 제한되어 사고 위험이 커지고, 길을 잃기 쉽습니다. 그리고 어두운 곳에서는 도움을 요청하기도 어렵습니다. 그래서 일몰 후에는 가능하면 야외 활동을 피하거나, 반드시 동행과 함께 이동하는 것이 좋습니다.
                      </Text>
                      <Text>
                        실전 팁: 동행과 함께 활동할 때는 서로의 상태를 확인하는 것이 중요합니다. "괜찮아?" "추워?" 같은 간단한 질문으로 서로의 상태를 확인하고, 이상이 있으면 즉시 휴식을 취하거나 따뜻한 곳으로 이동하는 것이 좋습니다. 그리고 동행과 함께 활동할 때는 서로의 속도에 맞춰 이동하는 것이 중요합니다.
                      </Text>
                      <Text>
                        더 나은 방법은 동행과 함께 활동 계획을 미리 공유하는 것입니다. 어디를 갈지, 언제 돌아올지, 어떤 경로로 갈지를 미리 공유하면, 만약 길을 잃거나 사고가 발생했을 때 도움을 받기 쉬워집니다. 그리고 가능하면 가족이나 지인에게도 활동 계획을 공유하는 것이 좋습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />
                  <KakaoAdDirect adUnitId="DAN-qRlpXvY15cfMPpl0" adWidth={300} adHeight={250} />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      10. 무리하면 다음 날까지 영향이 남습니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울엔 회복 속도도 느립니다. 추위에 노출되면 근육이 긴장되고, 긴장된 근육은 회복이 느립니다. 그리고 체온이 떨어지면 면역력도 떨어져서 감기에 걸리기 쉽습니다. 그래서 겨울에는 무리한 활동이 다음 날까지 영향을 미칩니다.
                      </Text>
                      <Text>
                        "조금만 더"가 아니라 "지금까지"가 안전한 기준입니다. 피로를 느끼기 시작하면 이미 체력이 많이 소모된 상태이므로, 더 활동하면 회복이 어려워집니다. 그리고 겨울에는 작은 피로도 큰 피로로 이어질 수 있으므로, 피로를 느끼기 전에 휴식을 취하는 것이 중요합니다.
                      </Text>
                      <Text>
                        실전 팁: 활동 중에는 정기적으로 자신의 상태를 확인하는 것이 중요합니다. "지금 피곤한가?", "추운가?", "배고픈가?", "목이 마른가?" 같은 질문으로 자신의 상태를 확인하고, 이상이 있으면 즉시 휴식을 취하거나 따뜻한 곳으로 이동하는 것이 좋습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 활동 계획을 여유 있게 세우는 것입니다. "이 정도면 충분하다"고 생각하는 시간보다 30분~1시간 여유를 두고 계획을 세우면, 예상치 못한 상황에도 대응할 수 있고, 무리하지 않을 수 있습니다. 그리고 활동 후에는 충분한 휴식과 따뜻한 음식, 따뜻한 목욕으로 회복하는 것이 중요합니다.
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
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      11. 응급 상황 대비 위치 공유
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        가족이나 지인에게 위치 공유를 켜두는 것만으로도 위급 상황 시 대응 속도가 달라집니다. 위치 공유를 켜두면 실시간으로 현재 위치를 확인할 수 있고, 만약 사고가 발생하거나 길을 잃었을 때 빠르게 도움을 받을 수 있습니다.
                      </Text>
                      <Text>
                        스마트폰의 위치 공유 기능(구글 맵, 카카오맵, 네이버 지도 등)을 사용하면 쉽게 위치를 공유할 수 있습니다. 그리고 위치 공유를 켜두면 가족이나 지인도 실시간으로 현재 위치를 확인할 수 있어서, 이상이 있으면 빠르게 대응할 수 있습니다.
                      </Text>
                      <Text>
                        실전 팁: 위치 공유를 켜둘 때는 신뢰할 수 있는 사람에게만 공유하는 것이 좋습니다. 그리고 위치 공유를 켜둔 후에는 배터리 소모가 늘어날 수 있으므로, 보조 배터리를 챙기는 것이 좋습니다. 그리고 가능하면 활동 계획(어디를 갈지, 언제 돌아올지)도 함께 공유하는 것이 좋습니다.
                      </Text>
                      <Text>
                        더 나은 방법은 정기적으로 "안전 신호"를 보내는 것입니다. 예를 들어, 1시간마다 "괜찮아"라는 메시지를 보내거나, 특정 지점에 도착했을 때 "도착했어"라는 메시지를 보내는 것입니다. 이렇게 하면 만약 신호가 오지 않으면 이상을 빠르게 감지할 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box as="section">
                    <Heading as="h2" fontSize="2xl" mb={5} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      12. 안전하면 추억이 됩니다
                    </Heading>
                    <Stack spacing={4}>
                      <Text>
                        겨울 야외활동의 목표는 '참는 것'이 아니라 <b>무사히 돌아와서 좋은 기억으로 남기는 것</b>입니다. 많은 사람들이 겨울 야외활동을 "참고 견디는 것"으로 생각하지만, 실제로는 그렇지 않습니다. 적절한 준비와 계획을 세우면 겨울 야외활동도 즐겁고 기억에 남는 경험이 될 수 있습니다.
                      </Text>
                      <Text>
                        안전은 추억의 기반입니다. 사고가 발생하거나 위험한 상황에 빠지면 그 경험은 좋은 추억이 아니라 나쁜 기억이 됩니다. 반면 안전하게 활동하고 무사히 돌아오면 그 경험은 좋은 추억이 됩니다. 그래서 안전을 최우선으로 생각하는 것이 중요합니다.
                      </Text>
                      <Text>
                        위의 11가지 안전 수칙은 각각이 독립적인 팁이 아니라, 서로 연결되어 있습니다. 일몰 시간을 확인하고(1번), 적절한 신발을 신고(2번), 레이어링을 하고(3번), 목·손·발을 보온하고(4번), 물을 마시고(5번), 간식을 먹고(6번), 바람을 고려하고(7번), 보조 배터리를 챙기고(8번), 동행과 함께 활동하고(9번), 무리하지 않고(10번), 위치를 공유하면(11번) 안전한 겨울 야외활동이 됩니다.
                      </Text>
                      <Text>
                        기억하세요. 겨울 야외활동은 "완벽한 준비"가 아니라 "최소한의 안전 기준"만 지키면 됩니다. 위의 12가지 수칙을 지키면 안전하고 즐거운 겨울 야외활동을 할 수 있습니다. 그리고 그 경험은 좋은 추억으로 남을 것입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider />

                  <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                    <Text fontWeight="600" mb={2}>
                      ❄️ 오늘의 한 줄: "겨울엔 용기보다 준비가 사람을 지켜준다"
                    </Text>
                    <Text color="#495057" mb={3}>
                      겨울 야외활동은 "참고 견디는 것"이 아니라 "준비하고 즐기는 것"입니다. 위의 12가지 안전 수칙을 지키면 안전하고 즐거운 겨울 야외활동을 할 수 있습니다.
                    </Text>
                    <Text color="#495057">
                      그리고 기억하세요. 겨울 야외활동의 목표는 "완벽한 하루"가 아니라 "무사히 돌아와서 좋은 기억으로 남기는 것"입니다. 작은 준비 하나하나가 그 목표를 달성하는 데 도움이 됩니다.
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