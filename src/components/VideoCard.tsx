import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  HStack,
  Icon,
} from '@chakra-ui/react'
import { FiHeart } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Video } from '../types'
import { useState } from 'react'

interface VideoCardProps {
  video: Video
}

const VideoCard = ({ video }: VideoCardProps) => {
  const navigate = useNavigate()
  const [isLiked, setIsLiked] = useState(false)

  const handleCardClick = () => {
    navigate(`/video/${video.id}`)
  }

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  return (
    <Card
      maxW="100%"
      cursor="pointer"
      onClick={handleCardClick}
      borderRadius="16px"
      overflow="hidden"
      bg="white"
      boxShadow="0 1px 3px rgba(0, 0, 0, 0.1)"
      h="100%"
      display="flex"
      flexDirection="column"
      _hover={{
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        transform: 'translateY(-2px)',
      }}
      transition="all 0.2s ease"
    >
      {/* 이미지 영역 */}
      <Box
        position="relative"
        w="100%"
        aspectRatio="4/3"
        bgImage={`url(${video.thumbnailUrl})`}
        bgSize="cover"
        bgPosition="center"
        overflow="hidden"
        flex={1}
        flexShrink={0}
      >
        {/* 하트 아이콘 */}
        <Box
          position="absolute"
          top={3}
          right={3}
          w="32px"
          h="32px"
          borderRadius="full"
          bg="rgba(255, 255, 255, 0.9)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          onClick={handleLikeClick}
          _hover={{
            bg: 'rgba(255, 255, 255, 1)',
            transform: 'scale(1.1)',
          }}
          transition="all 0.2s"
          zIndex={2}
        >
          <Icon
            as={FiHeart}
            w={5}
            h={5}
            color={isLiked ? '#ff6b6b' : '#868e96'}
            fill={isLiked ? '#ff6b6b' : 'none'}
            transition="all 0.2s"
          />
        </Box>
      </Box>

      {/* 텍스트 영역 */}
      <CardBody p={4} flex="1" display="flex" flexDirection="column">
        <Stack spacing={2} flex="1">
          {/* 위치/카테고리 */}
          {video.category && (
            <Text
              fontSize="12px"
              color="#868e96"
              fontWeight="500"
              noOfLines={1}
            >
              {video.category}
            </Text>
          )}

          {/* 제목 */}
          <Heading
            size="sm"
            color="#212529"
            lineHeight="1.4"
            fontWeight="700"
            noOfLines={2}
          >
            {video.title}
          </Heading>

          {/* 설명 */}
          <Text
            color="#868e96"
            fontSize="13px"
            lineHeight="1.5"
            noOfLines={2}
            flex="1"
          >
            {video.description}
          </Text>

          {/* 하단 정보 */}
          <HStack spacing={2} pt={1}>
            <Text fontSize="12px" color="#868e96">
              상품 {video.products.length}개
            </Text>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default VideoCard
