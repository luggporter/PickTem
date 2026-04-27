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

const Blog51 = () => {
  const navigate = useNavigate();
  const title = '올바른 분리수거 방법 가이드';
  const description = '헷갈리는 분리수거 방법을 확실하게 정리했습니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/51`;

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
    keywords: `${category}, 분리수거, 재활용, 쓰레기 분류, 환경`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 분리수거, 재활용, 쓰레기 분류, 환경`} />
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
                      분리수거 제대로 하고 있을까?
                    </Heading>

                    <Text mb={4}>분리수거함에 넣으면 다 재활용될까? 안타깝지만 아니다. 잘못 분류하면 오히려 재활용이 안 된다. 헷갈리는 것들을 확실히 정리해봤다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      기본 분류
                    </Heading>

                    <Box overflowX="auto">
                      <table style={{width:"100%",borderCollapse:"collapse"}}>
                        <thead><tr><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>분류</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>넣는 것</th><th style={{padding:"8px",borderBottom:"2px solid #e2e8f0",textAlign:"left"}}>안 되는 것</th></tr></thead>
                        <tbody><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>플라스틱</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>페트병, 세제통, 요구르트 병</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>장난감, 칫솔, 볼펜</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>비닐</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>과자봉지, 택배 비닐</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>이물질 묻은 비닐</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>캔</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>음료캔, 통조림</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>부탄가스 (구멍 뚫고)</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>유리</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>음료병, 소주병</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>거울, 도자기, 전구</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>종이</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>박스, 신문, 책</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>영수증, 기름 묻은 종이</td></tr><tr><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>스티로폼</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>택배 포장재</td><td style={{padding:"8px",borderBottom:"1px solid #e2e8f0"}}>컵라면 용기 (일반쓰레기)</td></tr></tbody>
                      </table>
                    </Box>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      자주 헷갈리는 것
                    </Heading>

                    <Text mb={4}><b>택배 박스 테이프</b>: 떼야 한다. 테이프 붙은 채로 내면 재활용 불가.</Text>

                    <Text mb={4}><b>치킨 박스</b>: 기름 묻었으면 일반쓰레기. 깨끗한 부분만 종이류.</Text>

                    <Text mb={4}><b>우유팩</b>: 종이류가 아니다. 씻어서 벌려서 말린 후 우유팩 전용.</Text>

                    <Text mb={4}><b>영수증</b>: 감열지라서 재활용 안 됨. 일반쓰레기.</Text>

                    <Text mb={4}><b>페트병 라벨</b>: 떼야 한다. 뚜껑도 분리.</Text>

                    <Text mb={4}><b>비닐 랩</b>: 재활용 안 됨. 일반쓰레기.</Text>

                    <Text mb={4}><b>거울</b>: 유리류가 아님. 일반쓰레기.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      페트병 올바른 배출법
                    </Heading>

                    <Text mb={4}>1. 내용물 비우고 물로 헹구기</Text>

                    <Text mb={4}>2. 라벨 떼기</Text>

                    <Text mb={4}>3. 찌그러뜨려서 부피 줄이기</Text>

                    <Text mb={4}>4. 뚜껑 닫기 (뚜껑도 재활용 가능)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      음식물 쓰레기 vs 일반 쓰레기
                    </Heading>

                    <Text mb={4}><b>음식물</b>: 동물이 먹을 수 있는 것 (과일 껍질, 야채, 밥)</Text>

                    <Text mb={4}><b>일반</b>: 동물이 못 먹는 것 (뼈, 조개껍데기, 호두껍질, 양파/마늘 껍질, 파인애플 껍질)</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>완벽할 필요 없다. 이것만 기억하자:</Text>

                    <Text mb={4}>1. 내용물 비우고 헹구기</Text>

                    <Text mb={4}>2. 라벨/테이프 떼기</Text>

                    <Text mb={4}>3. 헷갈리면 일반쓰레기 (잘못 분류보다 낫다)</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog51;
