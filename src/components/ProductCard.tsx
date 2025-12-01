import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
  Box,
  Badge,
} from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { Product } from '../types'

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handlePurchaseClick = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      bg="white"
      borderRadius="12px"
      w="100%"
      cursor="pointer"
      onClick={handlePurchaseClick}
      _hover={{
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
      }}
      transition="all 0.2s ease"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '120px' }}
        h={{ base: '180px', sm: '120px' }}
        src={product.imageUrl}
        alt={product.name}
      />

      <Stack flex="1">
        <CardBody py={3} px={4}>
          <Stack spacing={2}>
            <HStack justify="space-between" align="flex-start" spacing={3}>
              <Heading 
                size="sm" 
                color="#212529" 
                lineHeight="1.4" 
                flex="1"
                fontWeight="600"
                noOfLines={2}
              >
                {product.name}
              </Heading>
              {product.price && (
                <Badge 
                  bg="#ff8f00" 
                  color="white" 
                  borderRadius="6px" 
                  px={2}
                  py={1}
                  fontSize="13px"
                  fontWeight="600"
                  whiteSpace="nowrap"
                >
                  {product.price}
                </Badge>
              )}
            </HStack>

            {product.description && (
              <Text 
                color="#868e96" 
                fontSize="13px" 
                lineHeight="1.5"
                noOfLines={2}
              >
                {product.description}
              </Text>
            )}

            <Box pt={1}>
              <Button
                size="sm"
                bg="#ff8f00"
                color="white"
                borderRadius="8px"
                fontWeight="600"
                rightIcon={<FiExternalLink />}
                onClick={(e) => {
                  e.stopPropagation()
                  handlePurchaseClick()
                }}
                width="100%"
                _hover={{
                  bg: '#e67e00',
                }}
                _active={{
                  bg: '#cc6d00',
                }}
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
