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

const Blog18 = () => {
  const navigate = useNavigate();
  const title = '겨울철 야외활동 전 꼭 알아야 할 안전 수칙 12가지';
  const description =
    '빙판길·저체온증·일산화탄소·야간 시야 등 겨울 야외활동에서 자주 발생하는 위험을 줄이는 실전 안전 수칙 12가지를 체크리스트로 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost' ? 'http://localhost:3001' : 'https://ssikapicktem.co.kr';
  const url = `${baseUrl}#/magazine/18`;
  const ogImage = `${baseUrl}/images/blog/blog18.png`;

  const publishedDate = '2024년 5월 22일';
  const author = '씩씩이';
  const category = '야외 안전';
  const readTime = 15;

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
    datePublished: '2024-05-22',
    dateModified: '2024-05-22',
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

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

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
              {/* 헤더 */}
              <VStack spacing={4} align="stretch">
                <Badge colorScheme="brand" borderRadius="8px" px={3} py={1} fontSize="12px" fontWeight="700" w="fit-content">
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

              {/* 대표 이미지 */}
              <Box borderRadius="20px" overflow="hidden" w="100%" boxShadow="xl" bg="white">
                <Image
                  src="/images/blog/blog18.png"
                  alt="겨울 산책로에서 방한복을 입고 걷는 사람들과 눈 덮인 풍경"
                  width="100%"
                  height="auto"
                  objectFit="cover"
                />
              </Box>

              {/* 본문 */}
              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                  {/* 인트로 */}
                  <Box>
                    <Text fontSize={{ base: '17px', md: '18px' }} fontWeight="600" color="#1a2e1a" mb={3}>
                      겨울 야외활동은 "즐거움" 앞에 "안전 설계"가 먼저입니다
                    </Text>
                    <Text mb={4}>
                      겨울에는 걷기·등산·캠핑·스키·축제 방문처럼 밖에서 할 게 많지만, 동시에 사고도 늘어납니다. 특히 <b>빙판길 낙상</b>, <b>저체온증</b>, <b>시야 저하</b>, 그리고 캠핑/차박에서 은근히 치명적인 <b>일산화탄소</b> 같은 위험은 "조금만 방심해도" 바로 문제가 될 수 있어요.
                    </Text>
                    <Text mb={4}>
                      실제로 겨울 야외활동에서 발생하는 사고의 대부분은 "예상치 못한 상황"이 아니라 "준비 부족"에서 비롯됩니다. 예를 들어, 빙판길에서 미끄러져서 다치는 경우는 적절한 신발을 신지 않았거나, 보행 방법을 모르기 때문입니다. 그리고 저체온증은 적절한 옷차림을 하지 않았거나, 체온 유지 방법을 모르기 때문입니다.
                    </Text>
                    <Text>
                      이 글은 "겁주기"가 아니라, 겨울 야외에서 실제로 도움이 되는 <b>현실 체크리스트</b>입니다. 출발 전 5분만 확인해도 사고 확률이 확 내려가도록 16가지로 정리해드릴게요. 각 항목은 실제 겨울 야외활동에서 가장 자주 발생하는 문제들을 기반으로 작성되었고, "이론"보다는 "실전"에 초점을 맞췄습니다.
                    </Text>
                  </Box>

                  <Divider borderColor="gray.200" />

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
                      1) 출발 전 체크 4가지: 여기서 절반이 갈립니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>1. 날씨를 "기온"만 보지 말고 '체감 + 바람 + 강수'까지</b><br />
                        같은 영하 2도라도 바람이 강하면 체감은 훨씬 낮아집니다. 실제로 바람이 5m/s만 불어도 체감 온도가 5도 이상 떨어지고, 바람이 10m/s만 불어도 체감 온도가 10도 이상 떨어집니다. 그리고 눈/비 예보가 있으면 길 상태가 급격히 위험해져요(블랙아이스 가능성). 블랙아이스는 눈이 녹았다가 다시 얼어서 투명하게 얼은 얼음인데, 눈에 잘 띄지 않아서 매우 위험합니다. 날씨 예보를 확인할 때는 기온뿐만 아니라 풍속과 강수량도 함께 확인하는 것이 중요합니다.
                      </Text>

                      <Text>
                        <b>2. 동선은 '짧게'가 아니라 '탈출 가능하게'</b><br />
                        무리한 코스보다, 중간에 빠질 수 있는 동선이 안전합니다. 예를 들어, 등산로에서 정상까지 가는 코스보다, 중간에 내려올 수 있는 지점이 있는 코스가 안전합니다. 그리고 해가 빨리 지는 겨울엔 "돌아오는 길"이 특히 위험해요. 어두워지면 시야가 제한되어 사고 위험이 커지고, 체온도 더 빨리 떨어집니다. 동선을 계획할 때는 "돌아오는 시간"도 충분히 고려해야 합니다.
                      </Text>

                      <Text>
                        <b>3. 배터리/통신: 폰이 꺼지면 안전이 꺼집니다</b><br />
                        추위에서는 배터리가 빨리 닳습니다. 리튬 이온 배터리는 온도에 매우 민감해서, 0도 이하에서는 배터리 용량이 20~30% 줄어듭니다. 보조배터리를 챙기고, 산/외곽이라면 지도 오프라인 저장도 추천드립니다. 통신이 안 되는 곳에서는 오프라인 지도가 생명선이 될 수 있습니다. 그리고 보조배터리는 몸에 가까운 곳에 보관하여 체온으로 보온하는 것이 좋습니다.
                      </Text>

                      <Text>
                        <b>4. 약속 하나만: '연락 체크 시간' 정하기</b><br />
                        혼자 움직이거나 외곽 이동이면 "몇 시쯤 연락"만 정해도 사고 대응이 훨씬 빨라집니다. 예를 들어, "오후 3시에 연락하겠다"고 정해두고, 그 시간에 연락이 오지 않으면 이상을 빠르게 감지할 수 있습니다. 그리고 가능하면 위치 공유도 켜두는 것이 좋습니다. 위치 공유를 켜두면 실시간으로 현재 위치를 확인할 수 있어서, 사고가 발생했을 때 빠르게 도움을 받을 수 있습니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 2: 중간 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-TuJyMLJV5hB5UXiO"
                    adWidth={320}
                    adHeight={100}
                  />

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
                      2) 겨울 야외 안전 수칙 12가지: 실전 버전
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        <b>5. 레이어드 3층 공식</b><br />
                        1층(흡습/건조): 땀을 빨아들이고 마르게 - 기능성 이너(메리노 울, 폴리에스터)가 좋습니다. 땀이 배출되지 않으면 옷이 젖어서 오히려 체온이 떨어집니다.<br />
                        2층(보온): 공기층을 만들어 따뜻하게 - 플리스나 다운 같은 보온 소재가 좋습니다. 여러 겹을 입으면 각 옷 사이에 공기층이 형성되어 보온 효과가 커집니다.<br />
                        3층(방풍/방수): 바람과 눈/비를 막기 - 바람막이나 방수 재킷이 좋습니다. 바람은 체온을 급격히 떨어뜨리므로, 바람을 막는 것이 매우 중요합니다.
                      </Text>

                      <Text>
                        <b>6. 손·발·귀는 "따뜻함"이 아니라 "기능"입니다</b><br />
                        손이 굳으면 넘어질 때 반응이 느리고, 발이 시리면 보폭이 망가져요. 귀/목을 보호하면 체감이 확 달라집니다. 이 부위들은 신체 말단이라 가장 먼저 시려지고, 시려지면 움직임이 둔해져서 사고 위험이 커집니다. 장갑, 두꺼운 양말, 귀마개, 목도리는 선택이 아니라 필수입니다.
                      </Text>

                      <Text>
                        <b>7. 빙판길 보행은 '작은 보폭 + 무게중심 아래'</b><br />
                        보폭을 줄이고, 발바닥 전체로 디디는 느낌으로 걷습니다. 보폭이 크면 미끄러질 때 균형을 잡기 어렵습니다. 그리고 무게 중심을 낮추면(약간 앞으로 기울이기) 미끄러질 때 넘어지기 어렵습니다. 주머니에 손 넣고 걷는 습관은 낙상 위험을 올려요. 손을 자유롭게 두면 미끄러질 때 팔을 벌려서 균형을 잡을 수 있습니다.
                      </Text>

                      <Text>
                        <b>8. "땀 나는 순간"이 저체온증 시작점</b><br />
                        겨울에는 땀이 식는 속도가 빠릅니다. 활동량이 많아져 땀이 나기 시작하면 잠깐 멈춰서 지퍼를 열거나 중간층을 조절해 과열을 막는 게 핵심입니다. 땀이 나면 옷이 젖고, 옷이 젖으면 체온이 빨리 떨어집니다. 그래서 땀이 나기 시작하면 즉시 옷을 벗거나 지퍼를 열어서 체온을 조절하는 것이 중요합니다.
                      </Text>

                      <Text>
                        <b>9. 야간 이동은 반사/라이트가 곧 생존률</b><br />
                        해가 지면 운전자는 사람을 훨씬 늦게 봅니다. 어두운 옷을 입으면 거의 보이지 않아서 매우 위험합니다. 밝은 상의, 반사 요소, 작은 라이트만 있어도 위험이 크게 줄어요. 반사 테이프나 반사 재킷을 입으면 차량의 헤드라이트에 반사되어 운전자가 쉽게 발견할 수 있습니다.
                      </Text>

                      <Text>
                        <b>10. 스키/썰매/빙상: 헬멧은 '실력자일수록' 씁니다</b><br />
                        숙련자도 속도가 올라가면 사고는 한순간입니다. 그리고 겨울 스포츠에서는 넘어질 때 머리를 부딪힐 위험이 높습니다. 무릎/손목 보호대는 특히 넘어짐이 많은 초반에 도움이 됩니다. 보호 장비는 "초보자용"이 아니라 "안전용"입니다.
                      </Text>

                      <Text>
                        <b>11. 차박/캠핑은 일산화탄소를 "가정"하고 설계</b><br />
                        텐트/차 안에서 불을 쓰면 환기가 부족해질 수 있습니다. 일산화탄소는 무색무취라서 감지하기 어렵지만, 매우 위험합니다. 환기는 "춥더라도" 반드시 확보해야 합니다. 텐트나 차 안에서 난로를 사용할 때는 반드시 환기를 시키고, 일산화탄소 경보기를 설치하는 것이 좋습니다.
                      </Text>

                      <Text>
                        <b>12. 음주는 체온을 올리는 게 아니라 '잃게' 만듭니다</b><br />
                        술은 순간 따뜻하게 느끼게 하지만 실제로는 열 손실을 키울 수 있어요. 알코올은 혈관을 확장시켜서 체온이 더 빨리 떨어집니다. 그리고 판단력도 저하되어 사고 위험이 커집니다. 추운 야외에서의 음주는 위험 변수를 늘립니다.
                      </Text>

                      <Text>
                        <b>13. 당 떨어지면 판단력이 떨어집니다</b><br />
                        겨울엔 몸이 열을 내느라 에너지를 더 씁니다. 혈당이 떨어지면 집중력이 떨어지고, 판단력도 저하됩니다. 가벼운 간식(초콜릿/견과류/에너지바)을 챙기면 컨디션 유지에 좋아요. 그리고 간식은 "배고플 때"가 아니라 "미리" 먹는 것이 좋습니다.
                      </Text>

                      <Text>
                        <b>14. "돌아갈 여유"를 남겨두기</b><br />
                        가장 큰 사고는 "조금만 더"에서 나옵니다. 겨울엔 체력이 급격히 떨어지므로, 목적지의 70~80%에서 돌아오는 선택이 더 안전합니다. 피로를 느끼기 시작하면 이미 체력이 많이 소모된 상태이므로, 더 활동하면 회복이 어려워집니다.
                      </Text>

                      <Text>
                        <b>15. 응급 신호: 말이 어눌해지거나 손이 심하게 떨리면 즉시 중단</b><br />
                        저체온/저혈당 신호일 수 있습니다. 따뜻한 곳으로 이동하고, 가능하면 동행/주변 도움을 요청하는 게 우선입니다. 저체온증은 생명을 위협할 수 있으므로, 이상 증상이 나타나면 즉시 활동을 중단하고 따뜻한 곳으로 이동해야 합니다.
                      </Text>

                      <Text>
                        <b>16. "예상보다 더 춥다" 싶으면 계획을 바꾸는 게 정상</b><br />
                        계획 변경은 실패가 아니라 안전한 선택입니다. 겨울엔 특히 그렇습니다. 날씨가 예상보다 추우면 무리하지 말고 계획을 수정하거나 취소하는 것이 안전합니다. 안전이 우선입니다.
                      </Text>
                    </Stack>
                  </Box>

                  <Divider borderColor="gray.200" />

                  {/* 광고 3: 마지막 섹션 전 – 카카오 다이렉트 */}
                  <KakaoAdDirect
                    adUnitId="DAN-qRlpXvY15cfMPpl0"
                    adWidth={300}
                    adHeight={250}
                  />

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
                      마무리: 겨울엔 "재미 + 안전"이 같이 가야 오래 갑니다
                    </Heading>

                    <Stack spacing={4}>
                      <Text>
                        겨울 야외활동은 준비를 조금만 더 하면 만족도가 확 올라갑니다. 반대로 준비가 부족하면, 작은 불편이 빠르게 큰 위험으로 이어질 수 있어요. 위의 16가지 안전 수칙은 각각이 독립적인 팁이 아니라, 서로 연결되어 있습니다. 출발 전 체크(1~4번)를 잘 하면, 안전 수칙(5~16번)이 효과적으로 작동합니다.
                      </Text>
                      <Text>
                        기억하세요. 겨울 야외활동의 목표는 "참고 버티기"가 아니라 "안전하게 즐기기"입니다. 완벽한 준비를 하려고 하지 말고, 최소한의 안전 기준만 지키는 것에 집중하세요. 그리고 안전은 "겁주기"가 아니라 "준비"입니다. 작은 준비 하나하나가 안전을 보장합니다.
                      </Text>
                      <Box bg="brand.50" borderRadius="12px" p={5} borderLeft="4px solid" borderColor="brand.500">
                        <Text fontSize={{ base: '16px', md: '17px' }} fontWeight="600" mb={2}>
                          🧊 오늘의 한 줄: "겨울엔 '추위'보다 '방심'이 더 위험"
                        </Text>
                        <Text color="#495057" mb={3}>
                          나가서 즐겁게 놀려면, 돌아오는 길까지 안전하게 설계하는 게 진짜 센스입니다.
                        </Text>
                        <Text color="#495057">
                          그리고 기억하세요. 안전은 "완벽한 준비"가 아니라 "최소한의 안전 기준"만 지키는 것입니다. 위의 체크리스트를 참고해서 자신에게 맞는 안전 준비를 하시기 바랍니다.
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

export default Blog18;