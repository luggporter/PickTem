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

const Blog33 = () => {
  const navigate = useNavigate();
  const title = '아이폰 vs 갤럭시 2026 솔직 비교';
  const description = '아이폰과 갤럭시 장단점을 솔직하게 비교합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/33`;

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
    keywords: `${category}, 아이폰, 갤럭시, 스마트폰 비교, 아이폰16`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 아이폰, 갤럭시, 스마트폰 비교, 아이폰16`} />
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
                      아이폰이 좋을까 갤럭시가 좋을까
                    </Heading>

                    <Text mb={4}>결론부터 말하면 둘 다 좋다. 하지만 <b>에코시스템과 사용 습관에 따라 답이 달라진다.</b></Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      2026년 플래그십 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>아이폰 16 Pro</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>갤럭시 S26 Ultra</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>155만원~</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>160만원~</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>칩셋</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>A18 Pro</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>스냅드래곤 8 Gen 4</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>카메라</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>48MP 트리플</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>200MP 쿼드</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>배터리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하루 충분</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>하루 충분</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>AI 기능</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Apple Intelligence</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Galaxy AI</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>OS 업데이트</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>6년</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>7년</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      아이폰이 좋은 경우
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>맥북/아이패드 쓰는 사람 (에코시스템 연동)</li>
                      <li style={{marginBottom:'4px'}}>앱 품질이 중요한 사람 (iOS 앱이 보통 먼저 나오고 더 안정적)</li>
                      <li style={{marginBottom:'4px'}}>동영상 촬영이 많은 사람 (아이폰 영상 품질이 아직 최고)</li>
                      <li style={{marginBottom:'4px'}}>단순하고 직관적인 UI 선호</li>
                      <li style={{marginBottom:'4px'}}>중고 가격이 중요한 사람 (아이폰 리셀가가 높음)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      갤럭시가 좋은 경우
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>커스터마이징을 좋아하는 사람</li>
                      <li style={{marginBottom:'4px'}}>S펜이 필요한 사람 (노트 필기, 그림)</li>
                      <li style={{marginBottom:'4px'}}>파일 관리가 자유로워야 하는 사람</li>
                      <li style={{marginBottom:'4px'}}>삼성 가전 연동 (SmartThings)</li>
                      <li style={{marginBottom:'4px'}}>카메라 줌이 중요한 사람 (100배 줌)</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      솔직한 사용 후기
                    </Heading>

                    <Text mb={4}>아이폰과 갤럭시를 둘 다 써본 입장에서:</Text>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>카메라: 사진은 비슷, 영상은 아이폰이 조금 나음</li>
                      <li style={{marginBottom:'4px'}}>성능: 일상 사용에서 차이 못 느낌</li>
                      <li style={{marginBottom:'4px'}}>배터리: 둘 다 하루 충분</li>
                      <li style={{marginBottom:'4px'}}>AI: Galaxy AI가 기능은 더 많지만, Apple Intelligence가 더 자연스럽게 통합</li>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>지금 쓰는 거 계속 쓰는 게 정답이다. 아이폰 쓰다가 갤럭시로 바꾸면 적응 기간이 길고, 반대도 마찬가지. 바꿀 이유가 명확하지 않으면 같은 걸로 업그레이드하자.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog33;
