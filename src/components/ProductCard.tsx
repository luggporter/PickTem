import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Box,
  Badge,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { Product } from '../types'
import { logProductClick } from '../services/activityLogger'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handlePurchaseClick = () => {
    logProductClick(product.id, product.name)
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      bg="white"
      borderRadius="20px"
      w="100%"
      cursor="pointer"
      onClick={handlePurchaseClick}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
      }}
      transition="all 0.3s ease"
      border="1px solid"
      borderColor="gray.100"
    >
      {/* 이미지 섹션 */}
      <Box
        position="relative"
        w={{ base: '100%', sm: '140px' }}
        h={{ base: '200px', sm: '140px' }}
        flexShrink={0}
        overflow="hidden"
      >
        <Image
          objectFit="cover"
          w="100%"
          h="100%"
          src={product.imageUrl}
          alt={product.name}
          _hover={{
            transform: 'scale(1.05)',
          }}
          transition="transform 0.3s ease"
        />
        {/* 가격 배지 */}
        {product.price && (
          <Badge
            position="absolute"
            top={3}
            right={3}
            bg="rgba(0, 0, 0, 0.7)"
            color="white"
            borderRadius="8px"
            px={3}
            py={1.5}
            fontSize="13px"
            fontWeight="700"
            backdropFilter="blur(8px)"
            border="1px solid rgba(255, 255, 255, 0.1)"
          >
            {product.price}
          </Badge>
        )}
      </Box>

      {/* 컨텐츠 섹션 */}
      <Stack flex="1" minW={0}>
        <CardBody py={4} px={5} display="flex" flexDirection="column" justifyContent="space-between" h="100%">
          <Stack spacing={3} flex="1">
            {/* 제목 */}
            <Heading 
              size="sm" 
              color="#212529" 
              lineHeight="1.4" 
              fontWeight="700"
              noOfLines={2}
            >
              {product.name}
            </Heading>

            {/* 설명 */}
            {product.description && (
              <Text 
                color="#868e96" 
                fontSize="13px" 
                lineHeight="1.5"
                noOfLines={2}
                fontWeight="400"
              >
                {product.description}
              </Text>
            )}

            {/* 구매 버튼 */}
            <Box pt={2}>
              <Button
                size="md"
                bg="#212529"
                color="white"
                borderRadius="12px"
                fontWeight="600"
                rightIcon={<FiExternalLink />}
                onClick={(e) => {
                  e.stopPropagation()
                  handlePurchaseClick()
                }}
                width="100%"
                _hover={{
                  bg: '#000000',
                  transform: 'translateY(-1px)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                }}
                _active={{
                  bg: '#1a1a1a',
                  transform: 'translateY(0)',
                }}
                transition="all 0.2s ease"
              >
                구매하러 가기
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default ProductCard
