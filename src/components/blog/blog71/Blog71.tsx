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

const Blog71 = () => {
  const navigate = useNavigate();
  const title = '부동산 전월세 계약 시 주의할 점';
  const description = '전월세 계약할 때 꼭 확인해야 할 사항을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/71`;

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
    keywords: `${category}, 전세, 월세, 부동산, 계약, 전세사기`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 전세, 월세, 부동산, 계약, 전세사기`} />
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
                      전세사기 안 당하려면 이것만 확인하자
                    </Heading>

                    <Text mb={4}>전세사기 뉴스가 끊이지 않는다. 몇 가지만 확인하면 대부분의 사기를 피할 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      계약 전 필수 확인
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1. 등기부등본 확인 (가장 중요)
                    </Heading>

                    <Text mb={4}>인터넷등기소(iros.go.kr)에서 1,000원이면 확인 가능.</Text>

                    <Text mb={4}>확인할 것:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}><b>소유자</b>: 집주인이 맞는지 (신분증과 대조)</li>
                      <li style={{marginBottom:'4px'}}><b>근저당</b>: 대출이 얼마나 잡혀있는지</li>
                      <li style={{marginBottom:'4px'}}><b>가압류/압류</b>: 있으면 절대 계약하지 말 것</li>
                      <li style={{marginBottom:'4px'}}><b>전세권 설정</b>: 이전 세입자 보증금이 남아있는지</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2. 깡통전세 체크
                    </Heading>

                    <Text mb={4}><b>깡통전세 = 집값보다 대출+보증금이 많은 것</b></Text>

                    <Text mb={4}>계산법: 대출(근저당) + 내 보증금 &gt; 집값의 70%이면 위험</Text>

                    <Text mb={4}>예시:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>집값 3억, 대출 1.5억, 내 보증금 1억</li>
                      <li style={{marginBottom:'4px'}}>1.5억 + 1억 = 2.5억 (집값 대비 83%) → 위험!</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3. 전세보증보험 가입 가능 여부
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>HUG, SGI서울보증, HF 한국주택금융공사</li>
                      <li style={{marginBottom:'4px'}}>보증보험 가입이 안 되면 위험 신호</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      4. 전입신고 + 확정일자
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>이사 당일 전입신고 (동사무소)</li>
                      <li style={{marginBottom:'4px'}}>확정일자 받기 (동사무소 or 온라인)</li>
                      <li style={{marginBottom:'4px'}}>이 두 가지를 해야 보증금 보호 우선순위를 받는다</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      월세 계약 시 추가 확인
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>관리비에 뭐가 포함되는지 (수도, 인터넷, 주차비)</li>
                      <li style={{marginBottom:'4px'}}>옵션 가전 상태 (고장 시 누가 수리하는지)</li>
                      <li style={{marginBottom:'4px'}}>반려동물/흡연 가능 여부</li>
                      <li style={{marginBottom:'4px'}}>중개수수료 (보통 월세의 50%, 법정 상한 있음)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      계약서 작성 시
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>특약사항에 중요한 거 다 넣기 (수리 비용 부담, 옵션 목록)</li>
                      <li style={{marginBottom:'4px'}}>계약금은 집주인 계좌로 직접 (공인중개사 계좌 X)</li>
                      <li style={{marginBottom:'4px'}}>잔금은 등기부등본 당일 재확인 후 송금</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>등기부등본 확인 + 보증보험 가입 + 전입신고/확정일자. 이 3가지가 전세사기 방어의 핵심이다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog71;
