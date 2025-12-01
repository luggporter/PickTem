import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Badge,
  Box,
  HStack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Video } from '../types'

interface VideoCardProps {
  video: Video
}

const VideoCard = ({ video }: VideoCardProps) => {
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/video/${video.id}`)
  }

  return (
    <Card
      maxW="100%"
      cursor="pointer"
      onClick={handleCardClick}
      borderRadius="20px"
      overflow="hidden"
      position="relative"
      h={{ base: '200px', md: '220px' }}
      bg="gray.100"
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
      }}
      transition="all 0.3s ease"
    >
      {/* 배경 이미지 */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        borderRadius="20px"
        bgImage={`url(${video.thumbnailUrl})`}
        bgSize="cover"
        bgPosition="center"
        _hover={{
          transform: 'scale(1.05)',
        }}
        transition="transform 0.5s ease"
      />
      
      {/* 배경 전체에 살짝 어두운 오버레이 (이미지와 동일 크기) */}
      {/* <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        borderRadius="20px"
        bg="rgba(0, 0, 0, 0.16)"
      /> */}
      
      {/* 컨텐츠 */}
      <CardBody
        position="relative"
        zIndex={1}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        // p={4}
        w={'100%'}
        p={0}
      >
        {/* 텍스트 가독성을 위한 반투명 블러 박스 */}
        <Box
          bg="rgba(0, 0, 0, 0.32)"
          borderRadius="16px"
          px={3}
          py={3}
          w="100%"
          h="100%"
          p={4}
          // backdropFilter="blur(10px)"
        >
          <Stack spacing={2}>
            {/* 카테고리 배지 */}
            {video.category && (
              <Badge
                bg="rgba(0, 0, 0, 0.5)"
                color="white"
                borderRadius="6px"
                px={2.5}
                py={0.5}
                fontSize="10px"
                fontWeight="600"
                alignSelf="flex-start"
                border="1px solid rgba(255, 255, 255, 0.1)"
              >
                {video.category}
              </Badge>
            )}
            
            {/* 제목 */}
            <Heading 
              size="md" 
              color="white" 
              lineHeight="1.3"
              fontWeight="700"
              textShadow="0 1px 4px rgba(0, 0, 0, 0.6)"
              noOfLines={2}
            >
              {video.title}
            </Heading>
            
            {/* 설명 */}
            <Text 
              color="rgba(255, 255, 255, 0.95)" 
              fontSize="12px" 
              lineHeight="1.4"
              noOfLines={1}
              fontWeight="400"
            >
              {video.description}
            </Text>
            
            {/* 하단 정보 */}
            <Box pt={1}>
              <HStack
                spacing={1.5}
                bg="rgba(0, 0, 0, 0.5)"
                borderRadius="8px"
                px={2.5}
                py={1.5}
                border="1px solid rgba(255, 255, 255, 0.1)"
                display="inline-flex"
              >
                <Box
                  w="5px"
                  h="5px"
                  borderRadius="full"
                  bg="#48bb78"
                  flexShrink={0}
                />
                <Text
                  color="white"
                  fontSize="12px"
                  fontWeight="500"
                >
                  상품 {video.products.length}개
                </Text>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </CardBody>
    </Card>
  )
}

export default VideoCard
