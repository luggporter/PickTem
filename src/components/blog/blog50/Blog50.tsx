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

const Blog50 = () => {
  const navigate = useNavigate();
  const title = '이사 체크리스트 완벽 정리';
  const description = '이사할 때 빠뜨리기 쉬운 것들을 체크리스트로 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/50`;

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
    keywords: `${category}, 이사, 이사 체크리스트, 이사 준비, 전입신고`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 이사, 이사 체크리스트, 이사 준비, 전입신고`} />
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
                      이사할 때 이것만 체크하면 된다
                    </Heading>

                    <Text mb={4}>이사는 생각보다 할 일이 많다. 여기저기 전화하고 신청하고. 시간순으로 정리해놨으니 하나씩 체크하면서 따라가면 된다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      이사 2주 전
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>이사 업체 예약 (주말이면 3주 전)</li>
                      <li style={{marginBottom:'4px'}}>불필요한 물건 정리 (중고 판매, 기부, 버리기)</li>
                      <li style={{marginBottom:'4px'}}>전입신고 준비 (주민등록 이전)</li>
                      <li style={{marginBottom:'4px'}}>인터넷/TV 이전 신청 (통신사에 연락)</li>
                      <li style={{marginBottom:'4px'}}>우편물 전송 신청 (우체국)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      이사 1주 전
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>택배 박스 확보 (마트에서 무료로 구할 수 있음)</li>
                      <li style={{marginBottom:'4px'}}>짐 싸기 시작 (안 쓰는 것부터)</li>
                      <li style={{marginBottom:'4px'}}>냉장고 정리 (식재료 소진)</li>
                      <li style={{marginBottom:'4px'}}>이사 당일 먹을 것/입을 것 따로 빼놓기</li>
                      <li style={{marginBottom:'4px'}}>아파트 관리실에 이사 날짜 알리기</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      이사 당일
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>가스/수도/전기 검침 (사진 촬영)</li>
                      <li style={{marginBottom:'4px'}}>이사 업체 도착 전 귀중품 따로 보관</li>
                      <li style={{marginBottom:'4px'}}>새 집 도착 후 청소 (입주 청소)</li>
                      <li style={{marginBottom:'4px'}}>하자 체크 (벽, 바닥, 수도, 전등)</li>
                      <li style={{marginBottom:'4px'}}>관리비 정산</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      이사 후 1주일
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>전입신고 (동사무소 or 정부24 온라인)</li>
                      <li style={{marginBottom:'4px'}}>주소 변경 (은행, 카드, 보험, 면허증)</li>
                      <li style={{marginBottom:'4px'}}>인터넷/TV 설치 확인</li>
                      <li style={{marginBottom:'4px'}}>택배 주소 변경 (쿠팡, 마켓컬리 등)</li>
                      <li style={{marginBottom:'4px'}}>아이 학교/어린이집 전학 수속 (해당 시)</li>
                      <li style={{marginBottom:'4px'}}>동네 병원/마트/편의점 파악</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      전입신고 방법
                    </Heading>

                    <Text mb={4}>온라인으로 가능하다:</Text>

                    <Text mb={4}>1. 정부24 (gov.kr) 접속</Text>

                    <Text mb={4}>2. "전입신고" 검색</Text>

                    <Text mb={4}>3. 공동인증서 로그인</Text>

                    <Text mb={4}>4. 새 주소 입력</Text>

                    <Text mb={4}>5. 완료 (즉시 처리)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      이사 비용 아끼는 팁
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>평일 이사가 주말보다 20~30% 저렴</li>
                      <li style={{marginBottom:'4px'}}>월초/월말 피하기 (수요 몰림)</li>
                      <li style={{marginBottom:'4px'}}>짐 적으면 용달 이사 (5~15만원)</li>
                      <li style={{marginBottom:'4px'}}>짐 많으면 포장 이사 (30~80만원)</li>
                      <li style={{marginBottom:'4px'}}>반셀프 이사 (직접 포장 + 이사 업체 운반)</li>
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

export default Blog50;
