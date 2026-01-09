import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import { FiHome, FiList, FiBook, FiGlobe } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: FiHome, label: '홈', path: '/' },
    { icon: FiList, label: '상품 리스트', path: '/list' },
    { icon: FiBook, label: '메거진', path: '/magazine' },
    { icon: FiGlobe, label: '뉴스', path: '/news' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/PickTem'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <Box
      position="fixed"
      bottom={0}
      left="50%"
      transform="translateX(-50%)"
      zIndex={100}
      bg="white"
      borderTop="1px solid"
      borderColor="gray.200"
      px={2}
      py={1}
      maxW="480px"
      w="100%"
    >
      <HStack justify="space-around" spacing={0}>
        {navItems.map((item) => {
          const active = isActive(item.path)
          return (
            <Box
              key={item.path}
              flex={1}
              display="flex"
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              onClick={() => navigate(item.path)}
              py={2}
              px={2}
              borderRadius="12px"
              _hover={{
                bg: 'gray.50',
              }}
              transition="all 0.2s"
            >
              <Icon
                as={item.icon}
                w={6}
                h={6}
                color={active ? '#ff8f00' : '#868e96'}
                mb={1}
              />
              <Text
                fontSize="11px"
                fontWeight={active ? '600' : '400'}
                color={active ? '#ff8f00' : '#868e96'}
              >
                {item.label}
              </Text>
            </Box>
          )
        })}
      </HStack>
    </Box>
  )
}

export default BottomNav

