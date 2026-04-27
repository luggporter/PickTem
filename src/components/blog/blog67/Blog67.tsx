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

const Blog67 = () => {
  const navigate = useNavigate();
  const title = '중고거래 잘하는 방법 팁';
  const description = '당근마켓/번개장터에서 중고거래 잘하는 방법을 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/67`;

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
    keywords: `${category}, 중고거래, 당근마켓, 번개장터, 중고 매매`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 중고거래, 당근마켓, 번개장터, 중고 매매`} />
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
                      안 쓰는 물건이 돈이 된다
                    </Heading>

                    <Text mb={4}>옷장, 서랍, 베란다에 안 쓰는 물건이 있다면 중고로 팔자. 반대로 중고로 사면 돈도 아낀다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      잘 팔리는 법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      사진이 8할이다
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>깨끗한 배경 (흰 벽, 바닥)</li>
                      <li style={{marginBottom:'4px'}}>자연광에서 촬영</li>
                      <li style={{marginBottom:'4px'}}>정면 + 측면 + 하자 부분 촬영</li>
                      <li style={{marginBottom:'4px'}}>사진 최소 3장 이상</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      가격 책정
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>정가의 50~70% → 빠르게 팔림</li>
                      <li style={{marginBottom:'4px'}}>정가의 30~40% → 바로 팔림</li>
                      <li style={{marginBottom:'4px'}}>네고 여지 두기: 원하는 가격 +10% 올려서 등록</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      글 작성
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>구매 시기, 사용 기간, 상태 명시</li>
                      <li style={{marginBottom:'4px'}}>하자 솔직하게 공개 (분쟁 방지)</li>
                      <li style={{marginBottom:'4px'}}>"택배/직거래 모두 가능" 쓰면 더 빨리 팔림</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      잘 사는 법
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      시세 확인
                    </Heading>

                    <Text mb={4}>같은 제품 검색해서 시세 파악. 너무 싸면 사기 의심.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      확인 사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>구매 영수증/보증서 요청</li>
                      <li style={{marginBottom:'4px'}}>동작 확인 (전자기기)</li>
                      <li style={{marginBottom:'4px'}}>하자 사진 미리 요청</li>
                      <li style={{marginBottom:'4px'}}>직거래 시 공공장소에서 만남</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      사기 피하는 법
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>택배 거래 시 안전결제 사용</li>
                      <li style={{marginBottom:'4px'}}>선입금 요구하면 사기</li>
                      <li style={{marginBottom:'4px'}}>프로필/거래 후기 확인</li>
                      <li style={{marginBottom:'4px'}}>가격이 비상식적으로 싸면 의심</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      잘 팔리는 물건 TOP 10
                    </Heading>

                    <Text mb={4}>1. 전자기기 (스마트폰, 태블릿, 노트북)</Text>

                    <Text mb={4}>2. 유아용품 (유모차, 카시트)</Text>

                    <Text mb={4}>3. 운동기구 (덤벨, 요가매트)</Text>

                    <Text mb={4}>4. 가전 (공기청정기, 선풍기)</Text>

                    <Text mb={4}>5. 브랜드 의류 (아우터, 가방)</Text>

                    <Text mb={4}>6. 게임기 (닌텐도, PS5)</Text>

                    <Text mb={4}>7. 가구 (의자, 책상)</Text>

                    <Text mb={4}>8. 자전거</Text>

                    <Text mb={4}>9. 캠핑용품</Text>

                    <Text mb={4}>10. 계절 가전 (제습기, 온풍기)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>깨끗한 사진 + 솔직한 설명 + 적정 가격. 이 3가지면 대부분 1주일 안에 팔린다.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog67;
