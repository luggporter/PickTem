import {
  Box,
  Container,
  Heading,
  Text,
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

const Blog25 = () => {
  const navigate = useNavigate();
  const title = '2026 무선청소기 추천 가성비 TOP 5 - 실사용 기준 비교';
  const description = '2026년 가성비 무선청소기 추천 5가지를 흡입력, 배터리, 무게 기준으로 비교했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/25`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '생활용품';
  const readTime = 5;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: '씩아픽템',
      logo: { '@type': 'ImageObject', url: `${baseUrl}favicon.png` },
    },
    datePublished: '2026-04-27',
    dateModified: '2026-04-27',
    articleSection: category,
    keywords: `${category}, 무선청소기, 가성비, 추천, 다이슨, LG`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 무선청소기, 가성비, 추천, 다이슨, LG`} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="씩아픽템" />
        <meta property="og:locale" content="ko_KR" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                <Heading as="h1" fontSize={{ base: '2xl', md: '3xl' }} fontWeight="800" lineHeight="1.3" color="#1a2e1a">
                  {title}
                </Heading>
                <HStack spacing={4} fontSize="14px" color="#868e96" flexWrap="wrap">
                  <HStack spacing={1}>
                    <Box as={FiUser} />
                    <Text fontWeight="500">{author}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <Box as={FiCalendar} />
                    <Text>{publishedDate}</Text>
                  </HStack>
                  <Text>•</Text>
                  <Text>{readTime}분 읽기</Text>
                </HStack>
              </VStack>

              <Box bg="white" borderRadius="20px" boxShadow="sm" px={{ base: 5, md: 10 }} py={{ base: 8, md: 12 }}>
                <Stack spacing={8} fontSize={{ base: '15px', md: '16px' }} lineHeight="1.9" color="#1a2e1a">
                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      무선청소기, 비싼 게 무조건 좋을까?
                    </Heading>

                    <Text mb={4}>무선청소기를 사려고 검색하면 다이슨부터 LG, 삼성, 그리고 중국 브랜드까지 선택지가 너무 많다. 가격도 10만원대부터 100만원대까지. 결론부터 말하면, <b>30~50만원대에서 가성비 최고 제품을 고를 수 있다.</b></Text>

                    <Text mb={4}>100만원짜리가 10만원짜리보다 10배 잘 빨아들이는 건 아니다. 내 생활 패턴에 맞는 스펙을 기준으로 고르는 게 핵심이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      무선청소기 고를 때 꼭 봐야 할 3가지
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 흡입력 (AW, kPa)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}><b>AW (Air Watts)</b>: 실제 청소 성능 지표. 150AW 이상이면 일반 가정에서 충분</li>
                      <li style={{marginBottom:'4px'}}><b>kPa</b>: 진공 흡입력. 20kPa 이상이면 카펫도 가능</li>
                      <li style={{marginBottom:'4px'}}>광고에서 "초강력 흡입력"이라고 하면 숫자를 확인하자. 숫자 없이 말로만 하면 의심</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 배터리 (실사용 시간)
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>제조사가 말하는 "최대 60분"은 <b>최저 모드</b> 기준</li>
                      <li style={{marginBottom:'4px'}}>실제로 강모드 쓰면 15~20분 정도. 이게 현실</li>
                      <li style={{marginBottom:'4px'}}>20평 이상이면 배터리 2개 또는 40분 이상 제품 추천</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 무게
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>1.5kg 이하: 한 손으로 편하게. 여성/어르신 추천</li>
                      <li style={{marginBottom:'4px'}}>1.5~2.5kg: 표준. 대부분 이 범위</li>
                      <li style={{marginBottom:'4px'}}>2.5kg 이상: 무거움. 흡입력은 좋지만 팔 아프다</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2026 가성비 무선청소기 TOP 5
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1위. LG 코드제로 A9S (약 45만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스펙</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>210AW</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최대 60분 (실사용 25~30분)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.46kg (본체)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>특징</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>올인원 타워, 먼지 자동 비움, 물걸레 겸용</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>국산 무선청소기의 대표주자. 올인원 타워가 있어서 청소 끝나면 거치대에 올려놓기만 하면 먼지를 자동으로 비워준다. <b>귀찮은 거 싫은 사람에게 최고.</b></Text>

                    <Text mb={4}>[AFFILIATE:LG 코드제로 A9S]</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2위. 삼성 비스포크 제트 AI (약 50만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스펙</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>280AW</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최대 60분 (실사용 25분)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.58kg</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>특징</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>AI 먼지 감지, 디지털 인버터 모터, 청정 스테이션</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>흡입력이 가장 강하다. AI가 바닥 상태를 감지해서 자동으로 흡입력을 조절해주는 게 편하다. 다만 가격이 약간 높은 편.</Text>

                    <Text mb={4}>[AFFILIATE:삼성 비스포크 제트]</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3위. 샤오미 G20 (약 15만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스펙</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>150AW</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최대 45분 (실사용 15~20분)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.5kg</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>특징</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격 대비 성능 최고, LED 라이트</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>10~20만원대 가성비 끝판왕.</b> 흡입력이 국산 대비 약간 낮지만 원룸~20평대 아파트에서는 충분하다. 첫 무선청소기로 추천.</Text>

                    <Text mb={4}>[AFFILIATE:샤오미 무선청소기 G20]</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4위. 다이슨 V12 (약 65만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스펙</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>150AW</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최대 60분 (실사용 20분)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2.2kg</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>특징</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>레이저 먼지 감지, 피에조 센서, 브랜드 신뢰</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>다이슨의 장점은 레이저 조명으로 눈에 안 보이는 먼지까지 보여주는 것. 숫자상 흡입력은 삼성/LG보다 낮아 보이지만 체감 청소력은 비슷하다. 단, 무겁고 비싸다.</Text>

                    <Text mb={4}>[AFFILIATE:다이슨 V12]</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      5위. 테팔 에어포스 360 (약 25만원)
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스펙</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>100AW</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>최대 35분 (실사용 15분)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무게</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.3kg</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>특징</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초경량, 핸디+스틱 겸용, 유지비 저렴</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>가장 가벼운 모델.</b> 1.3kg이라 한 손으로 들고 천장이나 커튼도 청소할 수 있다. 흡입력은 가장 낮지만, 매일 가볍게 쓰기에 좋다.</Text>

                    <Text mb={4}>[AFFILIATE:테팔 에어포스 360]</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      비교표 정리
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>순위</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>흡입력</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>배터리</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>무게</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천 대상</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG A9S</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>45만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>210AW</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.46kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자동비움 원하는 사람</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 제트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>50만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>280AW</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.58kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>흡입력 중시</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>샤오미 G20</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>15만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>150AW</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>45분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.5kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비, 첫 구매</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>다이슨 V12</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>65만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>150AW</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2.2kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>브랜드, 레이저</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>테팔</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>25만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>100AW</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>35분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1.3kg</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>초경량 원하는 사람</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>[개인경험] 직접 무선청소기를 사용하면서 느낀 점과 선택 기준을 공유합니다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}><b>예산 넉넉 + 편의성</b>: LG 코드제로 A9S (자동 먼지 비움이 게임체인저)</li>
                      <li style={{marginBottom:'4px'}}><b>예산 넉넉 + 흡입력</b>: 삼성 비스포크 제트 AI</li>
                      <li style={{marginBottom:'4px'}}><b>가성비 최우선</b>: 샤오미 G20 (15만원인데 이 정도면 훌륭)</li>
                      <li style={{marginBottom:'4px'}}><b>가볍게 매일 쓸 용도</b>: 테팔 에어포스 360</li>
                    </Box>

                    <Text mb={4}>개인적으로는 <b>LG A9S를 가장 추천한다.</b> 자동 비움 기능이 있으면 청소기 관리 자체가 필요 없어진다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog25;
