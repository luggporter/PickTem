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

const Blog34 = () => {
  const navigate = useNavigate();
  const title = '유튜브 프리미엄 가치가 있을까';
  const description = '유튜브 프리미엄 구독 가치를 분석합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/34`;

  const publishedDate = '2026년 04월 27일';
  const author = '씩씩이';
  const category = 'AI/테크';
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
    keywords: `${category}, 유튜브 프리미엄, 구독, 광고 없는 유튜브`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 유튜브 프리미엄, 구독, 광고 없는 유튜브`} />
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
                      유튜브 프리미엄 월 14,900원, 아깝지 않을까?
                    </Heading>

                    <Text mb={4}>유튜브를 하루 1시간 이상 본다면 결론부터 말한다. <b>가치 있다.</b> 광고 없는 유튜브는 한번 경험하면 돌아갈 수 없다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      유튜브 프리미엄 혜택
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>혜택</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>내용</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>광고 제거</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>모든 영상 광고 없이 시청</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>백그라운드 재생</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>화면 꺼도 음악/팟캐스트 재생</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>오프라인 저장</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>영상 다운로드 (비행기, 지하철)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>YouTube Music</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>음악 스트리밍 포함 (멜론 대체)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Picture in Picture</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>다른 앱 쓰면서 영상 시청</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      가성비 계산
                    </Heading>

                    <Text mb={4}>유튜브 프리미엄 = 14,900원/월</Text>

                    <Text mb={4}>이걸 대체하려면:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>멜론/스포티파이: 10,900원/월</li>
                      <li style={{marginBottom:'4px'}}>광고 차단 앱: 무료지만 유튜브 앱에서 안 됨</li>
                      <li style={{marginBottom:'4px'}}>오프라인 영상: 별도 다운로더 필요</li>
                    </Box>

                    <Text mb={4}><b>유튜브 프리미엄 = 광고 없는 유튜브 + 음악 스트리밍.</b> 멜론 구독 중이라면 해지하고 프리미엄으로 바꾸는 게 이득이다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      누가 쓰면 좋을까?
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>하루 1시간+ 유튜브 시청자</li>
                      <li style={{marginBottom:'4px'}}>출퇴근 중 유튜브 듣는 사람</li>
                      <li style={{marginBottom:'4px'}}>멜론/스포티파이 구독 중인 사람</li>
                      <li style={{marginBottom:'4px'}}>아이 유튜브 광고가 걱정인 부모</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      누가 안 써도 될까?
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>유튜브 거의 안 보는 사람</li>
                      <li style={{marginBottom:'4px'}}>PC에서만 시청 (uBlock Origin으로 광고 차단 가능)</li>
                      <li style={{marginBottom:'4px'}}>음악은 다른 서비스 사용 중이고 만족하는 사람</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      팁: 가족 요금제
                    </Heading>

                    <Text mb={4}>개인 14,900원 vs 가족 23,900원 (최대 6명). 가족이나 친구 4~5명이서 나누면 <b>1인당 4,000~5,000원</b>이다. 이 가격이면 무조건 이득.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog34;
