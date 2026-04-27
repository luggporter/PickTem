import { useParams, useNavigate } from 'react-router-dom'
import { Box, Container, VStack, Heading, Button } from '@chakra-ui/react'
import MobileHeader from '../components/MobileHeader'
import { useEffect } from 'react'
import Blog1 from '../components/blog/blog1/Blog1'
import Blog2 from '../components/blog/blog2/Blog2'
import Blog3 from '../components/blog/blog3/Blog3'
import Blog4 from '../components/blog/blog4/Blog4'
import Blog5 from '../components/blog/blog5/Blog5'
import Blog6 from '../components/blog/blog6/Blog6'
import Blog7 from '../components/blog/blog7/Blog7'
import Blog8 from '../components/blog/blog8/Blog8'
import Blog9 from '../components/blog/blog9/Blog9'
import Blog10 from '../components/blog/blog10/Blog10'
import Blog11 from '../components/blog/blog11/Blog11'
import Blog12 from '../components/blog/blog12/Blog12'
import Blog13 from '../components/blog/blog13/Blog13'
import Blog14 from '../components/blog/blog14/blog14'
import Blog15 from '../components/blog/blog15/blog15'
import Blog16 from '../components/blog/blog16/blog16'
import Blog17 from '../components/blog/blog17/blog17'
import Blog18 from '../components/blog/blog18/blog18'
import Blog19 from '../components/blog/blog19/blog19'
import Blog20 from '../components/blog/blog20/Blog20'
import Blog21 from '../components/blog/blog21/Blog21'
import Blog22 from '../components/blog/blog22/Blog22'
import Blog23 from '../components/blog/blog23/Blog23'
import Blog24 from '../components/blog/blog24/Blog24'
import Blog25 from '../components/blog/blog25/Blog25'
import Blog26 from '../components/blog/blog26/Blog26'
import Blog27 from '../components/blog/blog27/Blog27'
import Blog28 from '../components/blog/blog28/Blog28'
import Blog29 from '../components/blog/blog29/Blog29'
import Blog30 from '../components/blog/blog30/Blog30'
import Blog31 from '../components/blog/blog31/Blog31'
import Blog32 from '../components/blog/blog32/Blog32'
import Blog33 from '../components/blog/blog33/Blog33'
import Blog34 from '../components/blog/blog34/Blog34'
import Blog35 from '../components/blog/blog35/Blog35'
import Blog36 from '../components/blog/blog36/Blog36'
import Blog37 from '../components/blog/blog37/Blog37'
import Blog38 from '../components/blog/blog38/Blog38'
import Blog39 from '../components/blog/blog39/Blog39'
import Blog40 from '../components/blog/blog40/Blog40'
import Blog41 from '../components/blog/blog41/Blog41'
import Blog42 from '../components/blog/blog42/Blog42'
import Blog43 from '../components/blog/blog43/Blog43'
import Blog44 from '../components/blog/blog44/Blog44'
import Blog45 from '../components/blog/blog45/Blog45'
import Blog46 from '../components/blog/blog46/Blog46'
import Blog47 from '../components/blog/blog47/Blog47'
import Blog48 from '../components/blog/blog48/Blog48'
import Blog49 from '../components/blog/blog49/Blog49'
import Blog50 from '../components/blog/blog50/Blog50'
import Blog51 from '../components/blog/blog51/Blog51'
import Blog52 from '../components/blog/blog52/Blog52'
import Blog53 from '../components/blog/blog53/Blog53'
import Blog54 from '../components/blog/blog54/Blog54'
import Blog55 from '../components/blog/blog55/Blog55'
import Blog56 from '../components/blog/blog56/Blog56'
import Blog57 from '../components/blog/blog57/Blog57'
import Blog58 from '../components/blog/blog58/Blog58'
import Blog59 from '../components/blog/blog59/Blog59'
import Blog60 from '../components/blog/blog60/Blog60'
import Blog61 from '../components/blog/blog61/Blog61'
import Blog62 from '../components/blog/blog62/Blog62'
import Blog63 from '../components/blog/blog63/Blog63'
import Blog64 from '../components/blog/blog64/Blog64'
import Blog65 from '../components/blog/blog65/Blog65'
import Blog66 from '../components/blog/blog66/Blog66'
import Blog67 from '../components/blog/blog67/Blog67'
import Blog68 from '../components/blog/blog68/Blog68'
import Blog69 from '../components/blog/blog69/Blog69'
import Blog70 from '../components/blog/blog70/Blog70'
import Blog71 from '../components/blog/blog71/Blog71'
import Blog72 from '../components/blog/blog72/Blog72'
import Blog73 from '../components/blog/blog73/Blog73'
import Blog74 from '../components/blog/blog74/Blog74'
import Blog75 from '../components/blog/blog75/Blog75'

// 블로그 컴포넌트 매핑
const blogComponents: Record<string, () => JSX.Element> = {
  '1': Blog1,
  '2': Blog2,
  '3': Blog3,
  '4': Blog4,
  '5': Blog5,
  '6': Blog6,
  '7': Blog7,
  '8': Blog8,
  '9': Blog9,
  '10': Blog10,
  '11': Blog11,
  '12': Blog12,
  '13': Blog13,
  '14': Blog14,
  '15': Blog15,
  '16': Blog16,
  '17': Blog17,
  '18': Blog18,
  '19': Blog19,
  '20': Blog20,
  '21': Blog21,
  '22': Blog22,
  '23': Blog23,
  '24': Blog24,
  '25': Blog25,
  '26': Blog26,
  '27': Blog27,
  '28': Blog28,
  '29': Blog29,
  '30': Blog30,
  '31': Blog31,
  '32': Blog32,
  '33': Blog33,
  '34': Blog34,
  '35': Blog35,
  '36': Blog36,
  '37': Blog37,
  '38': Blog38,
  '39': Blog39,
  '40': Blog40,
  '41': Blog41,
  '42': Blog42,
  '43': Blog43,
  '44': Blog44,
  '45': Blog45,
  '46': Blog46,
  '47': Blog47,
  '48': Blog48,
  '49': Blog49,
  '50': Blog50,
  '51': Blog51,
  '52': Blog52,
  '53': Blog53,
  '54': Blog54,
  '55': Blog55,
  '56': Blog56,
  '57': Blog57,
  '58': Blog58,
  '59': Blog59,
  '60': Blog60,
  '61': Blog61,
  '62': Blog62,
  '63': Blog63,
  '64': Blog64,
  '65': Blog65,
  '66': Blog66,
  '67': Blog67,
  '68': Blog68,
  '69': Blog69,
  '70': Blog70,
  '71': Blog71,
  '72': Blog72,
  '73': Blog73,
  '74': Blog74,
  '75': Blog75,
  // 추후 다른 블로그 추가 시 여기에 추가
  // 'another-blog-id': Blog2,
}

const MagazineDetailPage = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!id) {
    return (
      <Box bg="white" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack
          onBack={() => navigate('/magazine')}
        />
        <Container maxW="container.sm" py={16}>
          <VStack spacing={4}>
            <Heading size="md">메거진을 찾을 수 없습니다</Heading>
            <Button onClick={() => navigate('/magazine')}>메거진으로 돌아가기</Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  const BlogComponent = blogComponents[id]

  if (!BlogComponent) {
    return (
      <Box bg="white" minH="100vh">
        <MobileHeader
          title="메거진"
          showBack
          onBack={() => navigate('/magazine')}
        />
        <Container maxW="container.sm" py={16}>
          <VStack spacing={4}>
            <Heading size="md">메거진을 찾을 수 없습니다</Heading>
            <Button onClick={() => navigate('/magazine')}>메거진으로 돌아가기</Button>
          </VStack>
        </Container>
      </Box>
    )
  }

  return <BlogComponent />
}

export default MagazineDetailPage

