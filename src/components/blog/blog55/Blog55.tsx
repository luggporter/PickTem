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

const Blog55 = () => {
  const navigate = useNavigate();
  const title = '식기세척기 사야 할까 솔직 후기';
  const description = '식기세척기 구매 전 알아야 할 장단점을 솔직하게 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/55`;

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
    keywords: `${category}, 식기세척기, 가전, 식기세척기 추천, 주방`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 식기세척기, 가전, 식기세척기 추천, 주방`} />
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
                      식기세척기 사면 인생이 바뀔까?
                    </Heading>

                    <Text mb={4}>결론부터 말하면 <b>설거지가 싫은 사람에게는 인생템</b>이다. 하지만 모든 사람에게 필요한 건 아니다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      장점
                    </Heading>

                    <Text mb={4}><b>1. 시간 절약</b></Text>

                    <Text mb={4}>하루 설거지 시간 30분 x 365일 = 연 180시간. 식기세척기가 이걸 대신한다.</Text>

                    <Text mb={4}><b>2. 물 절약</b></Text>

                    <Text mb={4}>손 설거지 약 40~100L vs 식기세척기 약 10~15L. 의외로 물을 더 아낀다.</Text>

                    <Text mb={4}><b>3. 더 깨끗하다</b></Text>

                    <Text mb={4}>60~70도 고온 세척이라 기름기와 세균이 확실히 제거된다. 손 설거지로는 이 온도를 못 견딘다.</Text>

                    <Text mb={4}><b>4. 손 보호</b></Text>

                    <Text mb={4}>겨울 찬물 설거지, 세제로 인한 손 건조함에서 해방.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      단점
                    </Heading>

                    <Text mb={4}><b>1. 공간 차지</b></Text>

                    <Text mb={4}>빌트인이 아니면 주방에 꽤 큰 공간을 차지한다. 설치 전에 크기 확인 필수.</Text>

                    <Text mb={4}><b>2. 모든 식기가 안 들어감</b></Text>

                    <Text mb={4}>큰 냄비, 프라이팬, 나무 도마는 손세척 해야 한다.</Text>

                    <Text mb={4}><b>3. 소음</b></Text>

                    <Text mb={4}>세척 중 소음이 있다. 오픈형 주방이면 거실까지 들린다. 취침 전에 돌리는 걸 추천.</Text>

                    <Text mb={4}><b>4. 예비 세척 필요</b></Text>

                    <Text mb={4}>음식물 찌꺼기는 미리 제거해야 한다. "그냥 넣기만 하면 된다"는 거짓말.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      추천 제품
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>제품</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>용량</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>추천</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>LG 디오스 식기세척기</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>80~120만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>12인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>빌트인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>삼성 비스포크</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>90~130만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>12인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>디자인</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>쿠쿠 3~4인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>30~40만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1~2인 가구</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>SK매직 6인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>40~60만원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6인용</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가성비</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      사야 할 사람 vs 안 사도 될 사람
                    </Heading>

                    <Text mb={4}><b>사야 할 사람:</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>맞벌이 부부</li>
                      <li style={{marginBottom:'4px'}}>설거지가 정말 싫은 사람</li>
                      <li style={{marginBottom:'4px'}}>3인 이상 가족</li>
                    </Box>

                    <Text mb={4}><b>안 사도 될 사람:</b></Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>1인 가구 (식기 적으면 손 설거지가 빠름)</li>
                      <li style={{marginBottom:'4px'}}>주방 공간이 좁은 사람</li>
                      <li style={{marginBottom:'4px'}}>외식이 많은 사람</li>
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

export default Blog55;
