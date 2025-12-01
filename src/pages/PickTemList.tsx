import {
  Badge,
  Box,
  Card,
  CardBody,
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { FiPlayCircle } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import MobileHeader from '../components/MobileHeader'
import { mockVideos } from '../data/mockData'

const PickTemList = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Box bg="#f7f7f7" minH="100vh">
      <MobileHeader
        title="전체 영상 리스트"
        showBack
        onBack={() => navigate('/')}
      />
      <Container maxW="container.sm" py={4} px={4}>
        <VStack spacing={6} align="stretch" h={'100%'}>
          {/* 전체 영상 리스트 (썸네일 + 텍스트) */}
          <Card
            borderRadius="20px"
            bg="white"
            border="1px solid"
            borderColor="gray.100"
            boxShadow="sm"
            h={'100%'}
          >
            <CardBody p={5}>
              <VStack spacing={3} align="stretch">
                <HStack spacing={2} mb={2}>
                  <Box
                    w="24px"
                    h="24px"
                    borderRadius="full"
                    bg="#f1f3f5"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <FiPlayCircle size={14} color="#212529" />
                  </Box>
                  <Heading size="sm" color="#212529" fontWeight="700">
                    전체 영상 리스트
                  </Heading>
                </HStack>

                <VStack spacing={2} align="stretch">
                  {mockVideos.map((video) => (
                    <HStack
                      key={video.id}
                      align="center"
                      spacing={3}
                      py={1.5}
                      cursor="pointer"
                      onClick={() => navigate(`/video/${video.id}`)}
                    >
                      {/* 작은 썸네일 */}
                      <Box
                        w="64px"
                        h="64px"
                        borderRadius="12px"
                        overflow="hidden"
                        flexShrink={0}
                      >
                        <Image
                          src={video.thumbnailUrl}
                          alt={video.title}
                          w="100%"
                          h="100%"
                          objectFit="cover"
                        />
                      </Box>

                      {/* 텍스트 영역 */}
                      <VStack
                        align="flex-start"
                        spacing={1}
                        flex={1}
                        minW={0}
                      >
                        <Text
                          fontSize="14px"
                          color="#212529"
                          fontWeight="600"
                          noOfLines={1}
                        >
                          {video.title}
                        </Text>
                        {video.category && (
                          <Badge
                            bg="#f1f3f5"
                            color="#495057"
                            borderRadius="999px"
                            px={2}
                            py={0.5}
                            fontSize="10px"
                          >
                            {video.category}
                          </Badge>
                        )}
                        <Text
                          fontSize="12px"
                          color="#868e96"
                          noOfLines={1}
                        >
                          상품 {video.products.length}개
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </CardBody>
          </Card>

        </VStack>
      </Container>
    </Box>
  )
}

export default PickTemList