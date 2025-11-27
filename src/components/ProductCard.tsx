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
  showDirectPurchase?: boolean
}

const ProductCard = ({ product, showDirectPurchase = false }: ProductCardProps) => {
  const handlePurchaseClick = () => {
    window.open(product.affiliateUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow="hidden"
      bg="white"
      boxShadow="0 6px 20px -5px rgba(0, 0, 0, 0.12), 0 8px 8px -5px rgba(0, 0, 0, 0.04)"
      border="1px solid"
      borderColor="gray.200"
      borderRadius="lg"
      w={'100%'}
      cursor="pointer"
      onClick={handlePurchaseClick}
      _hover={{
        boxShadow: '0 15px 35px -5px rgba(0, 0, 0, 0.18), 0 12px 12px -5px rgba(0, 0, 0, 0.08)',
        transform: 'translateY(-4px)',
        borderColor: 'brand.200',
      }}
      transition="all 0.3s ease-in-out"
    >
      <Image
        objectFit="cover"
        maxW={{ base: '100%', sm: '150px' }}
        h={{ base: '200px', sm: '150px' }}
        src={product.imageUrl}
        alt={product.name}
      />

      <Stack flex="1">
        <CardBody py={4} px={4}>
          <Stack spacing={3}>
            <HStack justify="space-between" align="flex-start">
              <Heading size="sm" color="gray.800" lineHeight="1.3" flex="1">
                {product.name}
              </Heading>
              {product.price && (
                <Badge colorScheme="brand" variant="solid" borderRadius="full" px={2}>
                  {product.price}
                </Badge>
              )}
            </HStack>

            <Text 
              color="gray.600" 
              fontSize="sm" 
              lineHeight="1.4"
              noOfLines={2}
            >
              {product.description}
            </Text>

            <Box pt={2}>
              <Button
                size="sm"
                colorScheme="brand"
                variant="solid"
                rightIcon={<FiExternalLink />}
                onClick={(e) => {
                  e.stopPropagation()
                  handlePurchaseClick()
                }}
                width="100%"
              >
                이동하기
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Stack>
    </Card>
  )
}

export default ProductCard
