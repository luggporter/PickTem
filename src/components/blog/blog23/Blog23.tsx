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

const Blog23 = () => {
  const navigate = useNavigate();
  const title = '2026년 1인 사업자 종합소득세 신고 방법 - 홈택스로 직접 하는 완벽 가이드';
  const description = '2026년 1인 사업자 종합소득세 신고 방법을 단계별로 정리했습니다. 홈택스 셀프 신고부터 절세 팁까지.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/23`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = '재테크';
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
    keywords: `${category}, 종합소득세, 1인 사업자, 세금 신고, 홈택스, 절세`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 종합소득세, 1인 사업자, 세금 신고, 홈택스, 절세`} />
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
                      5월은 종합소득세의 달, 1인 사업자라면 꼭 알아야 할 것들
                    </Heading>

                    <Text mb={4}>매년 5월이면 찾아오는 종합소득세 신고 시즌. 1인 사업자에게는 가장 부담스러운 시기다. 세무사에게 맡기자니 비용이 아깝고, 직접 하자니 뭐가 뭔지 모르겠고.</Text>

                    <Text mb={4}>결론부터 말하면, <b>매출 4,800만원 이하 1인 사업자는 홈택스에서 직접 신고해도 충분하다.</b> 이 글에서는 2026년 기준 종합소득세 신고를 처음부터 끝까지 정리한다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      종합소득세, 누가 내야 하나?
                    </Heading>

                    <Text mb={4}>다음 중 하나라도 해당되면 5월에 종합소득세를 신고해야 한다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>사업소득이 있는 개인사업자 (스마트스토어, 프리랜서, 유튜버 등)</li>
                      <li style={{marginBottom:'4px'}}>근로소득 외에 기타소득이 300만원 초과</li>
                      <li style={{marginBottom:'4px'}}>2곳 이상에서 근로소득을 받은 경우</li>
                      <li style={{marginBottom:'4px'}}>금융소득(이자+배당)이 2,000만원 초과</li>
                    </Box>

                    <Text mb={4}><b>신고 기간</b>: 2026년 5월 1일 ~ 5월 31일</Text>

                    <Text mb={4}><b>납부 기한</b>: 2026년 5월 31일 (분납 가능)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      홈택스 셀프 신고 5단계
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 홈택스 접속 및 로그인
                    </Heading>

                    <Text mb={4}>국세청 홈택스(hometax.go.kr) 접속 후 공동인증서 또는 간편인증으로 로그인한다. 모바일은 손택스 앱에서도 가능하다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: 신고 유형 확인
                    </Heading>

                    <Text mb={4}>홈택스에서 "종합소득세 신고" 메뉴에 들어가면 자동으로 신고 유형이 표시된다.</Text>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>유형</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>대상</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>특징</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>**단순경비율**</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매출 4,800만원 이하 (서비스업 기준)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가장 간단, 증빙 불필요</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>**기준경비율**</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>단순경비율 초과~복식부기 미만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>주요경비 증빙 필요</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>**복식부기**</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매출 1.5억 초과 (서비스업)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세무사 필요</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>대부분의 1인 사업자, 특히 시작한 지 얼마 안 된 경우 <b>단순경비율</b>에 해당된다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 소득금액 입력
                    </Heading>

                    <Text mb={4}>홈택스에 미리 채워져 있는 수입금액을 확인한다. 스마트스토어는 네이버 정산 내역, 프리랜서는 원천징수 영수증이 자동 반영된다.</Text>

                    <Text mb={4}><b>확인 포인트:</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>사업소득 수입금액이 맞는지 확인</li>
                      <li style={{marginBottom:'4px'}}>3.3% 원천징수된 프리랜서 소득 반영 여부</li>
                      <li style={{marginBottom:'4px'}}>기타소득 (강연료, 원고료 등) 포함 여부</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4단계: 경비 처리 및 공제
                    </Heading>

                    <Text mb={4}>단순경비율 적용 시 경비율은 업종마다 다르다.</Text>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>업종</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>단순경비율</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>전자상거래 (스마트스토어)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>86.6%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>소프트웨어 개발</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>64.1%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>프리랜서 (인적용역)</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>60.7%</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>유튜버/크리에이터</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>64.1%</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>예를 들어 스마트스토어 매출 2,000만원이면:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>경비: 2,000만 × 86.6% = 1,732만원</li>
                      <li style={{marginBottom:'4px'}}>소득금액: 2,000만 - 1,732만 = <b>268만원</b></li>
                    </Box>

                    <Text mb={4}>여기에 추가 공제:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>기본공제: 150만원 (본인)</li>
                      <li style={{marginBottom:'4px'}}>국민연금 공제: 납부액 전액</li>
                      <li style={{marginBottom:'4px'}}>건강보험 공제: 납부액 전액</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      5단계: 세액 계산 및 납부
                    </Heading>

                    <Text mb={4}>소득금액에서 공제를 빼면 <b>과세표준</b>이 나온다. 여기에 세율을 적용한다.</Text>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>과세표준</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>세율</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>누진공제</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,400만원 이하</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>0</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,400~5,000만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>15%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>126만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5,000~8,800만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>24%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>576만원</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8,800만~1.5억</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>35%</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,544만원</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>[개인경험] 직접 홈택스로 종합소득세를 신고해본 경험과 느낀 점을 공유합니다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      1인 사업자가 놓치기 쉬운 절세 팁 5가지
                    </Heading>

                    <Text mb={4}><b>1. 노란우산공제 가입</b></Text>

                    <Text mb={4}>연 최대 500만원까지 소득공제. 매달 자동이체 설정해두면 연말에 큰 절세 효과.</Text>

                    <Text mb={4}><b>2. 사업용 신용카드 등록</b></Text>

                    <Text mb={4}>홈택스에 사업용 신용카드를 등록하면 경비 증빙이 자동 처리된다. 개인카드와 반드시 분리.</Text>

                    <Text mb={4}><b>3. 간이과세자 부가세 면제 확인</b></Text>

                    <Text mb={4}>연매출 8,000만원 이하 간이과세자는 부가세 납부 면제. 종소세와 별개지만 함께 체크.</Text>

                    <Text mb={4}><b>4. 기장 세액공제</b></Text>

                    <Text mb={4}>복식부기 의무자가 아닌데 자발적으로 복식부기를 하면 산출세액의 20% 공제.</Text>

                    <Text mb={4}><b>5. 성실신고확인제 해당 여부</b></Text>

                    <Text mb={4}>매출 5억 이상이면 세무사의 성실신고확인서가 필요하다. 대부분의 1인 사업자는 해당 없음.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      세무사에게 맡겨야 하는 경우
                    </Heading>

                    <Text mb={4}>아래에 해당하면 세무사 기장을 추천한다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>연매출 4,800만원 초과</li>
                      <li style={{marginBottom:'4px'}}>경비 증빙이 복잡한 경우</li>
                      <li style={{marginBottom:'4px'}}>직원이 있는 경우</li>
                      <li style={{marginBottom:'4px'}}>부동산 임대소득이 함께 있는 경우</li>
                    </Box>

                    <Text mb={4}>세무사 비용은 기장료 월 10~15만원, 종소세 신고 대행 30~50만원 수준.</Text>

                    <Text mb={4}>[개인경험] 세무사에게 맡겼을 때와 직접 했을 때의 비용 차이와 경험.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      정리
                    </Heading>

                    <Text mb={4}>1인 사업자 종합소득세 핵심만 정리하면:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}><b>5월 1~31일</b> 안에 신고·납부</li>
                      <li style={{marginBottom:'4px'}}>매출 4,800만원 이하면 <b>홈택스 셀프 신고</b> 충분</li>
                      <li style={{marginBottom:'4px'}}><b>단순경비율</b> 적용으로 간단 계산</li>
                      <li style={{marginBottom:'4px'}}>노란우산공제 + 사업용카드로 <b>절세</b></li>
                      <li style={{marginBottom:'4px'}}>헷갈리면 <b>세무서 무료 상담</b> 활용 (5월 한정)</li>
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

export default Blog23;
