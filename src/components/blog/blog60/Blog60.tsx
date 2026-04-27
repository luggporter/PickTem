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

const Blog60 = () => {
  const navigate = useNavigate();
  const title = '택배 박스 활용법 10가지';
  const description = '버리기 아까운 택배 박스 활용법 10가지를 소개합니다.';

  const baseUrl = window.location.hostname === 'localhost'
    ? 'http://localhost:3001/'
    : 'https://ssikapicktem.co.kr/';
  const url = `${baseUrl}magazine/60`;

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
    keywords: `${category}, 택배 박스, 재활용, DIY, 수납`,
    wordCount: readTime * 250,
  };

  return (
    <>
      <Helmet>
        <title>{title} | 씩아픽템</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${category}, 택배 박스, 재활용, DIY, 수납`} />
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
                      택배 박스 바로 버리지 마세요
                    </Heading>

                    <Text mb={4}>쿠팡 시키면 매일 택배 박스가 쌓인다. 바로 버려도 되지만, 의외로 쓸모가 많다.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      수납용
                    </Heading>

                    <Text mb={4}><b>1. 서랍 칸막이</b></Text>

                    <Text mb={4}>박스를 잘라서 서랍 안에 넣으면 양말/속옷 칸막이가 된다. 다이소 제품보다 크기 맞추기 쉽다.</Text>

                    <Text mb={4}><b>2. 케이블 정리함</b></Text>

                    <Text mb={4}>멀티탭과 케이블을 박스 안에 넣고 구멍만 뚫으면 케이블 정리 끝.</Text>

                    <Text mb={4}><b>3. 책상 위 수납함</b></Text>

                    <Text mb={4}>작은 박스를 잘라서 펜꽂이, 메모지함으로 활용.</Text>

                    <Text mb={4}><b>4. 옷장 수납 박스</b></Text>

                    <Text mb={4}>시즌 지난 옷을 박스에 담아 옷장 위에 보관.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      생활용
                    </Heading>

                    <Text mb={4}><b>5. 고양이 집</b></Text>

                    <Text mb={4}>큰 박스에 구멍 뚫어주면 고양이가 좋아한다.</Text>

                    <Text mb={4}><b>6. 이사/정리 시 보관</b></Text>

                    <Text mb={4}>깨지기 쉬운 물건 포장용으로 보관해두면 유용.</Text>

                    <Text mb={4}><b>7. 아이 놀이</b></Text>

                    <Text mb={4}>아이들에게 큰 박스는 최고의 장난감. 집, 자동차, 로봇 등 만들기.</Text>

                    <Text mb={4}><b>8. 택배 재사용</b></Text>

                    <Text mb={4}>중고 거래로 물건 보낼 때 깨끗한 박스 재사용.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      기타
                    </Heading>

                    <Text mb={4}><b>9. 분리수거 분류함</b></Text>

                    <Text mb={4}>큰 박스를 2~3칸으로 나눠서 플라스틱/캔/종이 분류.</Text>

                    <Text mb={4}><b>10. 베란다 화분 받침</b></Text>

                    <Text mb={4}>방수 테이프로 감싸면 화분 물받이로 사용 가능.</Text>

                    <Heading as="h2" fontSize={{ base: 'xl', md: '2xl' }} mb={5} pb={2} borderBottom="3px solid" borderColor="brand.500" w="fit-content">
                      결론
                    </Heading>

                    <Text mb={4}>쓸 만한 크기의 박스 2~3개만 보관해두면 된다. 나머지는 깨끗하게 접어서 분리수거.</Text>
                </Stack>
              </Box>
            </VStack>
          </article>
        </Container>
      </Box>
    </>
  );
};

export default Blog60;
