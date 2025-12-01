import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Badge,
  Box,
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

  // 그라데이션 색상 배열 (피트니스 앱 스타일)
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // 보라색
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // 핑크
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // 파란색
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // 초록색
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // 핑크-노란색
  ]
  const gradientIndex = parseInt(video.id) % gradients.length
  const gradient = gradients[gradientIndex]

  return (
    <Card
      maxW="100%"
      cursor="pointer"
      onClick={handleCardClick}
      borderRadius="20px"
      overflow="hidden"
      position="relative"
      h={{ base: '280px', md: '320px' }}
      _hover={{
        transform: 'scale(1.02)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
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
        bgImage={video.thumbnailUrl}
        bgSize="cover"
        bgPosition="center"
      />
      
      {/* 그라데이션 오버레이 */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={gradient}
        opacity={0.85}
      />
      
      {/* 컨텐츠 */}
      <CardBody
        position="relative"
        zIndex={1}
        h="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p={6}
      >
        <Stack spacing={3} flex="1">
          {/* 카테고리 배지 */}
          {video.category && (
            <Badge
              bg="rgba(255, 255, 255, 0.3)"
              color="white"
              borderRadius="20px"
              px={3}
              py={1}
              fontSize="12px"
              fontWeight="600"
              backdropFilter="blur(10px)"
              alignSelf="flex-start"
            >
              {video.category}
            </Badge>
          )}
          
          {/* 제목 */}
          <Heading 
            size="xl" 
            color="white" 
            lineHeight="1.3"
            fontWeight="700"
            textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
            noOfLines={2}
          >
            {video.title}
          </Heading>
          
          {/* 설명 */}
          <Text 
            color="rgba(255, 255, 255, 0.9)" 
            fontSize="15px" 
            lineHeight="1.5"
            textShadow="0 1px 5px rgba(0, 0, 0, 0.2)"
            noOfLines={2}
          >
            {video.description}
          </Text>
        </Stack>
        
        {/* 하단 정보 */}
        <Box pt={4}>
          <Box
            bg="rgba(255, 255, 255, 0.25)"
            borderRadius="12px"
            px={4}
            py={3}
            backdropFilter="blur(10px)"
            border="1px solid rgba(255, 255, 255, 0.3)"
          >
            <Text
              color="white"
              fontSize="14px"
              fontWeight="600"
              textAlign="center"
            >
              상품 {video.products.length}개
            </Text>
          </Box>
        </Box>
      </CardBody>
    </Card>
  )
}

export default VideoCard
