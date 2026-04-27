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

const Blog64 = () => {
  const navigate = useNavigate();
  const title = '프리랜서 세금 신고 가이드';
  const description = '프리랜서/N잡러를 위한 세금 신고 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/64`;

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
    keywords: `${category}, 프리랜서, 세금, 종합소득세, 3.3%`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 프리랜서, 세금, 종합소득세, 3.3%`} />
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
                      3.3% 떼였으면 5월에 신고해야 한다
                    </Heading>

                    <Text mb={4}>프리랜서로 일하면 보통 3.3%를 원천징수 당한다. 이건 "세금을 미리 낸 것"이다. 5월에 종합소득세 신고를 하면 더 낸 세금을 돌려받을 수도 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      누가 신고해야 하나?
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>3.3% 원천징수 받은 프리랜서</li>
                      <li style={{marginBottom:'4px'}}>블로그/유튜브 수익이 있는 사람</li>
                      <li style={{marginBottom:'4px'}}>투잡/N잡으로 근로소득 외 소득이 있는 사람</li>
                      <li style={{marginBottom:'4px'}}>쿠팡파트너스/구글 애드센스 수익자</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      신고 방법 (홈택스)
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 소득 확인
                    </Heading>

                    <Text mb={4}>홈택스 → "근로/사업/기타소득 지급명세서 조회"에서 내 소득을 확인한다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: 경비 정리
                    </Heading>

                    <Text mb={4}>프리랜서는 경비를 빼면 세금이 줄어든다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>장비 구매 (노트북, 카메라, 소프트웨어)</li>
                      <li style={{marginBottom:'4px'}}>교통비 (업무 관련)</li>
                      <li style={{marginBottom:'4px'}}>통신비 (업무 비율만큼)</li>
                      <li style={{marginBottom:'4px'}}>사무용품, 교육비</li>
                      <li style={{marginBottom:'4px'}}>홈오피스 임차료 (업무 비율)</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 신고 유형 선택
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>유형</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>대상</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>경비 처리</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>단순경비율</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수입 2,400만원 미만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>자동 계산 (간편)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>기준경비율</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수입 2,400만원 이상</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>직접 증빙 필요</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>간편장부</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수입 7,500만원 미만</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>장부 작성</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>복식부기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>수입 7,500만원 이상</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>세무사 필요</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}><b>수입 2,400만원 미만이면 단순경비율</b>로 하면 된다. 홈택스에서 알아서 경비를 계산해준다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4단계: 세액 계산
                    </Heading>

                    <Text mb={4}>종합소득세 = (총소득 - 경비 - 공제) x 세율 - 기납부세액(3.3%)</Text>

                    <Text mb={4}>이미 3.3% 냈으니까, 계산 결과 세금이 더 적으면 <b>환급</b>받는다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      환급 받는 경우
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>연 수입 1,500만원 이하: 대부분 환급</li>
                      <li style={{marginBottom:'4px'}}>경비가 많은 경우: 환급 가능</li>
                      <li style={{marginBottom:'4px'}}>기본공제(150만원) + 의료비/교육비 공제 합산 시</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>5월 31일까지 반드시 신고 (안 하면 가산세)</li>
                      <li style={{marginBottom:'4px'}}>환급은 신고 후 2~4주 소요</li>
                      <li style={{marginBottom:'4px'}}>3.3% 원천징수 안 당한 수입도 신고해야 함</li>
                      <li style={{marginBottom:'4px'}}>연 수입이 높으면 세무사 상담 추천</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>수입 2,400만원 미만이면 홈택스에서 30분이면 끝난다. 환급 가능성이 높으니 꼭 신고하자.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog64;
