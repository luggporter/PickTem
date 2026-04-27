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

const Blog31 = () => {
  const navigate = useNavigate();
  const title = 'VPN 추천 2026 무료 유료 비교';
  const description = '2026년 VPN 서비스 추천과 무료/유료 차이를 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/31`;

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
    keywords: `${category}, VPN, VPN 추천, 보안, 넷플릭스 VPN`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, VPN, VPN 추천, 보안, 넷플릭스 VPN`} />
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
                      VPN이 왜 필요할까?
                    </Heading>

                    <Text mb={4}>해외 넷플릭스 보기, 공공 와이파이 보안, 해외 직구 사이트 접속. VPN은 이제 필수 도구가 됐다. 하지만 VPN이 100개가 넘으니 뭘 골라야 할지 모르겠다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      VPN 추천 TOP 5
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>순위</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>이름</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>월 가격</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>속도</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>서버 수</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>넷플릭스</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>NordVPN</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4,500원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>매우 빠름</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6,000+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가능</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>ExpressVPN</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>8,000원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>빠름</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3,000+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가능</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Surfshark</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3,500원</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>빠름</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>3,200+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가능</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>4</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>ProtonVPN</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료 있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,900+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>유료만</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Windscribe</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료 있음</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>보통</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>110+</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>제한적</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      무료 VPN 괜찮을까?
                    </Heading>

                    <Text mb={4}>쓸 수는 있지만 한계가 명확하다:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>속도가 느리다 (유료의 30~50% 수준)</li>
                      <li style={{marginBottom:'4px'}}>데이터 제한 (월 10GB 정도)</li>
                      <li style={{marginBottom:'4px'}}>서버 선택 제한</li>
                      <li style={{marginBottom:'4px'}}>넷플릭스 등 스트리밍 안 되는 경우 많음</li>
                      <li style={{marginBottom:'4px'}}>일부 무료 VPN은 개인정보를 수집해서 판매 (주의!)</li>
                    </Box>

                    <Text mb={4}><b>추천 무료 VPN</b>: ProtonVPN (데이터 무제한, 스위스 기반으로 프라이버시 강함)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      어떤 VPN을 고를까?
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>넷플릭스/유튜브 해외 콘텐츠 → NordVPN (가성비 최고)</li>
                      <li style={{marginBottom:'4px'}}>보안이 최우선 → ProtonVPN (스위스 법률 보호)</li>
                      <li style={{marginBottom:'4px'}}>가족/친구 공유 → Surfshark (기기 무제한)</li>
                      <li style={{marginBottom:'4px'}}>돈 아끼고 싶으면 → ProtonVPN 무료</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}><b>가성비</b>: NordVPN (2년 결제 시 월 4,500원)</Text>

                    <Text mb={4}><b>무료</b>: ProtonVPN (데이터 무제한)</Text>

                    <Text mb={4}><b>보안</b>: ProtonVPN 유료 (가장 신뢰할 수 있는 회사)</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog31;
