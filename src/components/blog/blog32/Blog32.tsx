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

const Blog32 = () => {
  const navigate = useNavigate();
  const title = '스마트홈 입문 가이드 2026';
  const description = '스마트홈을 시작하는 방법을 단계별로 안내합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/32`;

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
    keywords: `${category}, 스마트홈, IoT, 구글홈, 알렉사, 스마트 조명`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 스마트홈, IoT, 구글홈, 알렉사, 스마트 조명`} />
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
                      스마트홈, 어디서부터 시작할까?
                    </Heading>

                    <Text mb={4}>"OK Google, 불 꺼줘"라고 말하면 조명이 꺼지는 집. 영화에서나 보던 게 이제 몇만원이면 가능하다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      스마트홈 시작 3단계
                    </Heading>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      1단계: 스마트 스피커 (2~5만원)
                    </Heading>

                    <Text mb={4}>모든 스마트홈의 시작점. 음성으로 가전을 제어하는 허브 역할을 한다.</Text>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>스피커</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>장점</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>구글 네스트 미니</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>39,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국어 지원 최고, 유튜브 연동</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>아마존 에코 닷</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>35,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>스킬 생태계 풍부</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>네이버 클로바</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>29,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>한국 서비스 연동 (배민, 멜론)</td></tr></tbody>
                      </table>
                    </Box>

                    <Text mb={4}>추천: 한국에서는 <b>구글 네스트 미니</b>가 가장 무난하다.</Text>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      2단계: 스마트 조명 (1~3만원)
                    </Heading>

                    <Text mb={4}>가장 체감이 큰 스마트 기기. "불 꺼줘"만으로도 스마트홈의 편리함을 느낄 수 있다.</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>필립스 Hue: 고급, 색상 변경, 비쌈 (4만원~)</li>
                      <li style={{marginBottom:'4px'}}>이케아 트로드프리: 가성비, 기본 기능 (1만원~)</li>
                      <li style={{marginBottom:'4px'}}>TP-Link Tapo: 가성비 최고 (8,000원~)</li>
                    </Box>

                    <Heading as="h3" fontSize={{ base: 'lg', md: 'xl' }} mb={3} fontWeight="700">
                      3단계: 스마트 플러그 (1~2만원)
                    </Heading>

                    <Text mb={4}>기존 가전을 스마트하게 만드는 가장 쉬운 방법. 선풍기, 가습기, 스탠드를 음성으로 끄고 켤 수 있다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      실용적인 자동화 예시
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>아침 7시에 조명 자동 켜기 + 커피머신 작동</li>
                      <li style={{marginBottom:'4px'}}>외출하면 모든 전등 자동 끄기</li>
                      <li style={{marginBottom:'4px'}}>"잘 자"라고 말하면 전등 끄고 + 에어컨 타이머</li>
                      <li style={{marginBottom:'4px'}}>현관문 열리면 조명 자동 켜기</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      주의사항
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>와이파이가 불안정하면 스마트홈도 불안정하다</li>
                      <li style={{marginBottom:'4px'}}>같은 생태계로 통일하자 (구글이면 구글로)</li>
                      <li style={{marginBottom:'4px'}}>초기 설정에 30분~1시간 필요</li>
                      <li style={{marginBottom:'4px'}}>인터넷 끊기면 수동 조작해야 함</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      예산별 추천
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>3만원: 스마트 플러그 2개 → 선풍기/가습기 자동화</li>
                      <li style={{marginBottom:'4px'}}>7만원: 스마트 스피커 + 스마트 조명 2개</li>
                      <li style={{marginBottom:'4px'}}>15만원: 스피커 + 조명 4개 + 플러그 2개 + 센서</li>
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

export default Blog32;
