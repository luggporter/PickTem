import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
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

  return (
    <Card
      maxW="100%"
      cursor="pointer"
      onClick={handleCardClick}
      boxShadow="0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 12px 12px -5px rgba(0, 0, 0, 0.06)"
      border="1px solid"
      borderColor="gray.200"
      _hover={{
        transform: 'translateY(-6px)',
        boxShadow: '0 25px 50px -10px rgba(0, 0, 0, 0.2), 0 20px 20px -5px rgba(0, 0, 0, 0.1)',
        borderColor: 'brand.200',
      }}
      transition="all 0.3s ease-in-out"
    >
      <CardBody p={{ base: 3, md: 4 }}>
        <Box position="relative" mb={4}>
          <Image
            src={video.thumbnailUrl}
            alt={video.title}
            borderRadius="lg"
            w="100%"
            h={{ base: '180px', md: '200px' }}
            objectFit="cover"
          />
          {video.category && (
            <Badge
              position="absolute"
              top={2}
              right={2}
              colorScheme="brand"
              variant="solid"
              borderRadius="full"
              px={3}
              py={1}
              fontSize="xs"
            >
              {video.category}
            </Badge>
          )}
        </Box>
        
        <Stack spacing={3}>
          <Heading size={{ base: 'sm', md: 'md' }} color="gray.800" lineHeight="1.3">
            {video.title}
          </Heading>
          
          <Text 
            color="gray.600" 
            fontSize="sm" 
            lineHeight="1.5"
            noOfLines={2}
          >
            {video.description}
          </Text>
          
          <Box pt={2}>
            <Button
              size="md"
              width="100%"
              variant="solid"
              onClick={(e) => {
                e.stopPropagation()
                handleCardClick()
              }}
            >
              상품 보러가기 ({video.products.length}개)
            </Button>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default VideoCard
