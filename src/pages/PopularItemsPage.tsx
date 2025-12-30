import {
  Container,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Box,
  HStack,
  Badge,
  Icon,
  Progress,
} from '@chakra-ui/react'
import { 
  FiTrendingUp, 
  FiBarChart2, 
  FiPieChart, 
  FiSearch,
  FiDollarSign,
  FiClock,
  FiUsers,
  FiTarget
} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
import SEO from '../components/SEO'
import AdRotator from '../components/ads/AdRotator'
import { useVideos } from '../hooks/useVideos'
import { useMemo } from 'react'
import { KakaoAdDirect } from './Home'
import Dable from '../components/ads/Dable'
import Clickmon from '../components/ads/Clickmon'
import Publishers from '../components/ads/Publishers'

const PopularItemsPage = () => {
  const navigate = useNavigate()
  const { videos: mockVideos } = useVideos()

  // 카테고리별 통계 계산 (더미 데이터 - 나중에 실제 데이터로 교체)
  const categoryStats = useMemo(() => {
    const categoryCounts = mockVideos.reduce((acc, v) => {
      if (v.category) {
        acc[v.category] = (acc[v.category] || 0) + 1
      }
      return acc
    }, {} as Record<string, number>)
    
    const total = Object.values(categoryCounts).reduce((sum, count) => sum + count, 0)
    
    return Object.entries(categoryCounts)
      .map(([category, count]) => ({
        category,
        count,
        percentage: Math.round((count / total) * 100),
        // 더미 조회수 데이터 (나중에 실제 데이터로 교체)
        views: Math.floor(Math.random() * 50000) + 10000,
      }))
      .sort((a, b) => b.count - a.count)
  }, [])

  // 인기 이유 분석 (더미 데이터)
  const popularityReasons = [
    {
      reason: '계절성 상품',
      description: '크리스마스, 연말 시즌 상품이 높은 관심을 받고 있어요',
      percentage: 45,
      icon: FiClock,
      color: '#667eea',
    },
    {
      reason: '가성비',
      description: '저렴한 가격대의 실용적인 상품이 인기를 끌고 있어요',
      percentage: 32,
      icon: FiDollarSign,
      color: '#48bb78',
    },
    {
      reason: '트렌드',
      description: 'SNS에서 화제가 된 재미있는 아이템들이 주목받고 있어요',
      percentage: 23,
      icon: FiTrendingUp,
      color: '#ed8936',
    },
  ]

  // 조회수 트렌드 (더미 데이터 - 시간대별)
  const hourlyTrends = [
    { hour: '00시', views: 1200 },
    { hour: '06시', views: 3500 },
    { hour: '12시', views: 8500 },
    { hour: '18시', views: 12000 },
    { hour: '21시', views: 9800 },
  ]

  // 인기 키워드 (더미 데이터)
  const popularKeywords = [
    { keyword: '크리스마스', count: 12500, trend: 'up' },
    { keyword: '테무템', count: 9800, trend: 'up' },
    { keyword: '선물', count: 7600, trend: 'stable' },
    { keyword: '가성비', count: 5400, trend: 'up' },
    { keyword: '재미있는', count: 3200, trend: 'down' },
  ]

  // 가격대별 인기도 (더미 데이터)
  const priceRanges = [
    { range: '₩0 - ₩5,000', count: 45, color: '#48bb78' },
    { range: '₩5,000 - ₩10,000', count: 32, color: '#38b2ac' },
    { range: '₩10,000 - ₩20,000', count: 18, color: '#ed8936' },
    { range: '₩20,000+', count: 5, color: '#f56565' },
  ]

  const maxPriceCount = Math.max(...priceRanges.map(r => r.count))

  return (
    <>
      <SEO
        title="인기 상품 분석 - 씩아픽템 | 실시간 트렌드 & 인기 통계"
        description="실시간으로 가장 많이 조회된 인기 상품과 카테고리별 트렌드를 확인하세요. 씩아픽템의 인기 분석 페이지에서 최신 쇼핑 트렌드를 파악하세요."
        keywords="인기상품, 트렌드, 베스트 상품, 실시간 인기, 인기 분석, 쇼핑 통계, 추천템 순위"
        canonical="/popular"
      />
      <Box>
        <MobileHeader 
          title="인기 분석" 
          showBack 
          onBack={() => navigate('/')} 
      />
      <Container maxW="container.sm" py={4} px={4}>
        <VStack spacing={6} align="stretch">
          {/* 헤더 통계 카드 */}
          <Box
            bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            borderRadius="20px"
            p={6}
            color="white"
            boxShadow="lg"
          >
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between">
                <HStack spacing={2}>
                  <Icon as={FiBarChart2} w={6} h={6} />
                  <Text fontSize="18px" fontWeight="700">
                    인기 분석 대시보드
                  </Text>
                </HStack>
                <Badge bg="rgba(255,255,255,0.3)" color="white" px={3} py={1} borderRadius="8px">
                  실시간
                </Badge>
              </HStack>
              
              <SimpleGrid columns={2} spacing={4}>
                <VStack spacing={1} align="flex-start">
                  <Text fontSize="12px" opacity={0.9}>총 조회수</Text>
                  <Heading size="xl" fontWeight="700">-</Heading>
                  <Text fontSize="11px" opacity={0.8}>데이터 준비중</Text>
                </VStack>
                <VStack spacing={1} align="flex-start">
                  <Text fontSize="12px" opacity={0.9}>인기 카테고리</Text>
                  <Text fontSize="lg" fontWeight="700" noOfLines={1}>
                    {categoryStats[0]?.category || '-'}
                  </Text>
                  <Text fontSize="11px" opacity={0.8}>
                    {categoryStats[0]?.percentage || 0}% 점유율
                  </Text>
                </VStack>
              </SimpleGrid>
            </VStack>
          </Box>

          {/* 광고 2: 헤더 통계 카드 후 */}
          <AdRotator type="auto" />

          {/* 데이블 광고 */}
          <Box py={4}>
            <Dable 
              serviceId="YOUR_SERVICE_ID" 
              widgetId="dablewidget_popular" 
              style={{ display: 'block', minHeight: '100px', width: '100%' }}
            />
          </Box>

          {/* 왜 인기가 많을까? 섹션 */}
          <Box>
            <HStack spacing={2} mb={4}>
              <Icon as={FiTarget} w={5} h={5} color="#667eea" />
              <Heading size="lg" color="#212529" fontWeight="700">
                왜 인기가 많을까?
              </Heading>
            </HStack>
            
            <VStack spacing={4}>
              {popularityReasons.map((reason, index) => (
                <Box
                  key={index}
                  bg="white"
                  borderRadius="16px"
                  p={5}
                  w="100%"
                  boxShadow="sm"
                  borderLeft="4px solid"
                  borderLeftColor={reason.color}
                >
                  <HStack spacing={4} align="flex-start">
                    <Box
                      bg={`${reason.color}15`}
                      borderRadius="12px"
                      p={3}
                    >
                      <Icon as={reason.icon} w={6} h={6} color={reason.color} />
                    </Box>
                    <VStack spacing={2} align="flex-start" flex={1}>
                      <HStack justify="space-between" w="100%">
                        <Text fontSize="16px" fontWeight="700" color="#212529">
                          {reason.reason}
                        </Text>
                        <Badge bg={reason.color} color="white" px={2} py={1} borderRadius="6px" fontSize="11px">
                          {reason.percentage}%
                        </Badge>
                      </HStack>
                      <Text fontSize="14px" color="#868e96" lineHeight="1.5">
                        {reason.description}
                      </Text>
                      <Box w="100%">
                        <Progress
                          value={reason.percentage}
                          size="sm"
                          colorScheme="purple"
                          borderRadius="full"
                          bg="gray.100"
                          sx={{
                            '& > div': {
                              bg: reason.color,
                            },
                          }}
                        />
                      </Box>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* 사람들은 어떤 카테고리를 많이 찾았을까? */}
          <Box>
            <HStack spacing={2} mb={4}>
              <Icon as={FiPieChart} w={5} h={5} color="#48bb78" />
              <Heading size="lg" color="#212529" fontWeight="700">
                인기 카테고리 분석
              </Heading>
            </HStack>
            
            <Box bg="white" borderRadius="16px" p={5} boxShadow="sm">
              <VStack spacing={4} align="stretch">
                {categoryStats.map((stat, idx) => (
                  <Box key={stat.category}>
                    <HStack justify="space-between" mb={2}>
                      <HStack spacing={2}>
                        <Badge
                          bg={idx === 0 ? '#ff8f00' : '#e9ecef'}
                          color={idx === 0 ? 'white' : '#868e96'}
                          borderRadius="6px"
                          px={2}
                          py={1}
                          fontSize="11px"
                          fontWeight="700"
                        >
                          {idx + 1}위
                        </Badge>
                        <Text fontSize="15px" fontWeight="600" color="#212529">
                          {stat.category}
                        </Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Text fontSize="13px" color="#868e96">
                          {stat.count}개
                        </Text>
                        <Badge bg="#667eea" color="white" px={2} py={1} borderRadius="6px" fontSize="11px">
                          {stat.percentage}%
                        </Badge>
                      </HStack>
                    </HStack>
                    <Progress
                      value={stat.percentage}
                      size="md"
                      borderRadius="full"
                      bg="gray.100"
                      sx={{
                        '& > div': {
                          bg: idx === 0 ? '#ff8f00' : '#667eea',
                        },
                      }}
                    />
                    <HStack justify="flex-end" mt={1}>
                      <Text fontSize="11px" color="#868e96">
                        조회수: {stat.views.toLocaleString()}회 (준비중)
                      </Text>
                    </HStack>
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>

          {/* 시간대별 조회수 트렌드 */}
          <Box>
            <HStack spacing={2} mb={4}>
              <Icon as={FiClock} w={5} h={5} color="#ed8936" />
              <Heading size="lg" color="#212529" fontWeight="700">
                시간대별 조회수 트렌드
              </Heading>
            </HStack>
            
            <Box bg="white" borderRadius="16px" p={5} boxShadow="sm">
              <VStack spacing={3} align="stretch">
                {hourlyTrends.map((trend) => {
                  const maxViews = Math.max(...hourlyTrends.map(t => t.views))
                  const percentage = (trend.views / maxViews) * 100
                  
                  return (
                    <Box key={trend.hour}>
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="14px" fontWeight="600" color="#212529">
                          {trend.hour}
                        </Text>
                        <Text fontSize="13px" color="#868e96">
                          {trend.views.toLocaleString()}회
                        </Text>
                      </HStack>
                      <Progress
                        value={percentage}
                        size="lg"
                        borderRadius="full"
                        bg="gray.100"
                        sx={{
                          '& > div': {
                            bg: 'linear-gradient(90deg, #ed8936 0%, #f6ad55 100%)',
                          },
                        }}
                      />
                    </Box>
                  )
                })}
              </VStack>
            </Box>
          </Box>

          {/* 인기 키워드 */}
          <Box>
            <HStack spacing={2} mb={4}>
              <Icon as={FiSearch} w={5} h={5} color="#f56565" />
              <Heading size="lg" color="#212529" fontWeight="700">
                인기 검색 키워드
              </Heading>
            </HStack>
            
            <SimpleGrid columns={2} spacing={3}>
              {popularKeywords.map((keyword, idx) => (
                <Box
                  key={keyword.keyword}
                  bg="white"
                  borderRadius="12px"
                  p={4}
                  boxShadow="sm"
                  border="1px solid"
                  borderColor={idx === 0 ? '#ff8f00' : 'gray.100'}
                >
                  <VStack spacing={2} align="flex-start">
                    <HStack justify="space-between" w="100%">
                      <Text fontSize="14px" fontWeight="700" color="#212529">
                        {keyword.keyword}
                      </Text>
                      {idx === 0 && (
                        <Badge bg="#ff8f00" color="white" px={1.5} py={0.5} borderRadius="4px" fontSize="9px">
                          HOT
                        </Badge>
                      )}
                    </HStack>
                    <Text fontSize="12px" color="#868e96">
                      {keyword.count.toLocaleString()}회 검색
                    </Text>
                    <HStack spacing={1}>
                      <Icon
                        as={keyword.trend === 'up' ? FiTrendingUp : keyword.trend === 'down' ? FiTrendingUp : FiBarChart2}
                        w={3}
                        h={3}
                        color={
                          keyword.trend === 'up' ? '#48bb78' : 
                          keyword.trend === 'down' ? '#f56565' : 
                          '#868e96'
                        }
                        transform={keyword.trend === 'down' ? 'rotate(180deg)' : 'none'}
                      />
                      <Text fontSize="10px" color={
                        keyword.trend === 'up' ? '#48bb78' : 
                        keyword.trend === 'down' ? '#f56565' : 
                        '#868e96'
                      }>
                        {keyword.trend === 'up' ? '상승' : keyword.trend === 'down' ? '하락' : '유지'}
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              ))}
            </SimpleGrid>
          </Box>

          {/* 가격대별 인기도 */}
          <Box>
            <HStack spacing={2} mb={4}>
              <Icon as={FiDollarSign} w={5} h={5} color="#38b2ac" />
              <Heading size="lg" color="#212529" fontWeight="700">
                가격대별 인기도
              </Heading>
            </HStack>
            
            <Box bg="white" borderRadius="16px" p={5} boxShadow="sm">
              <VStack spacing={4} align="stretch">
                {priceRanges.map((range) => {
                  const percentage = (range.count / maxPriceCount) * 100
                  
                  return (
                    <Box key={range.range}>
                      <HStack justify="space-between" mb={2}>
                        <Text fontSize="14px" fontWeight="600" color="#212529">
                          {range.range}
                        </Text>
                        <HStack spacing={2}>
                          <Text fontSize="13px" color="#868e96">
                            {range.count}개
                          </Text>
                          <Badge bg={range.color} color="white" px={2} py={1} borderRadius="6px" fontSize="11px">
                            {Math.round(percentage)}%
                          </Badge>
                        </HStack>
                      </HStack>
                      <Progress
                        value={percentage}
                        size="md"
                        borderRadius="full"
                        bg="gray.100"
                        sx={{
                          '& > div': {
                            bg: range.color,
                          },
                        }}
                      />
                    </Box>
                  )
                })}
              </VStack>
            </Box>
          </Box>

          {/* 데이터 준비중 안내 */}
          <Box
            bg="gray.50"
            borderRadius="12px"
            p={4}
            textAlign="center"
          >
            <HStack spacing={2} justify="center" mb={2}>
              <Icon as={FiUsers} w={4} h={4} color="#868e96" />
              <Text fontSize="13px" color="#868e96" fontWeight="500">
                실제 조회수 및 통계 데이터는 준비 중입니다
              </Text>
            </HStack>
            <Text fontSize="11px" color="#adb5bd">
              곧 실시간 데이터를 확인하실 수 있어요!
            </Text>
          </Box>

          {/* 광고 3: 페이지 하단 */}
          <KakaoAdDirect adUnitId="DAN-TuJyMLJV5hB5UXiO" adWidth={320} adHeight={100} />

          {/* 클릭몬 광고 */}
          <Box py={4}>
            <Clickmon 
              adCode={`<script type="text/javascript">
(function(cl,i,c,k,l,m,o,n){m=c;o=cl.referrer;m+='&mon_rf='+encodeURIComponent(o);m+='&mon_direct_url='+encodeURIComponent(k);m+='&W100='+l;
n='<'+i+' type="text/javascript" src="'+m+'"></'+i+'>';cl.writeln(n);
})(document,'script','https://mtab.clickmon.co.kr/pop/wp_m_320_100_js.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1154452%7C%5E%7CAdver_M_1046207','PASSBACK_INPUT','N');
</script>`}
              style={{ display: 'block', minHeight: '100px', width: '100%' }}
            />
          </Box>

          {/* Publishers 광고 */}
          {/* <Box py={4}>
            <Publishers 
              adCode='<script src="https://quge5.com/88/tag.min.js" data-zone="197310" async data-cfasync="false"></script>'
              style={{ display: 'block', minHeight: '100px', width: '100%' }}
            />
          </Box> */}
        </VStack>
      </Container>
    </Box>
    </>
  )
}

export default PopularItemsPage
