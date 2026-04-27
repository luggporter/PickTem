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

const Blog39 = () => {
  const navigate = useNavigate();
  const title = '클라우드 저장소 비교 2026';
  const description = '구글 드라이브, 원드라이브, 아이클라우드 비교 가이드입니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/39`;

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
    keywords: `${category}, 클라우드, 구글 드라이브, 원드라이브, 아이클라우드`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 클라우드, 구글 드라이브, 원드라이브, 아이클라우드`} />
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
                      클라우드 뭐 쓸까? 3대장 비교
                    </Heading>

                    <Text mb={4}>구글 드라이브, 원드라이브, 아이클라우드. 무료 용량이 다 다르고 장단점도 다르다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      한눈에 비교
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>항목</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>구글 드라이브</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>원드라이브</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>아이클라우드</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>무료 용량</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>15GB</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5GB</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>5GB</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>100GB 가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2,400원/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2,000원/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>1,100원/월</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>2TB 가격</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>13,000원/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>13,900원/월</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>11,000원/월</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>오피스</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Google Docs</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Office 365</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>iWork</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>연동</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Android, 웹</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Windows</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>Apple 기기</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      구글 드라이브
                    </Heading>

                    <Text mb={4}>무료 15GB로 가장 넉넉하다. Gmail, Google Photos 용량을 공유하는 게 단점이지만, 구글 독스/시트/슬라이드를 많이 쓴다면 이게 최선. 안드로이드 폰과 연동 완벽.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      원드라이브
                    </Heading>

                    <Text mb={4}>MS Office를 쓴다면 원드라이브가 좋다. Office 365 개인 구독(8,900원/월) 하면 1TB + Word/Excel/PowerPoint가 포함된다. 회사에서 Office 쓰는 사람에게 추천.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      아이클라우드
                    </Heading>

                    <Text mb={4}>아이폰/맥 쓰면 가장 편하다. 사진, 메모, 연락처가 자동 동기화되고 가격도 가장 저렴하다. 단점은 Windows에서 쓰기 불편하다는 것.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Box as="ul" pl={6}>
                      <li style={{marginBottom:'4px'}}>안드로이드 + 구글 → 구글 드라이브</li>
                      <li style={{marginBottom:'4px'}}>윈도우 + 오피스 → 원드라이브 (Office 365 번들)</li>
                      <li style={{marginBottom:'4px'}}>애플 기기 → 아이클라우드</li>
                      <li style={{marginBottom:'4px'}}>무료로 최대한 → 구글 드라이브 (15GB)</li>
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

export default Blog39;
