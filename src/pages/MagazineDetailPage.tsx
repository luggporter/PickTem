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

