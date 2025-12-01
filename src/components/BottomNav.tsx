import { Box, HStack, Icon, Text } from '@chakra-ui/react'
import { FiHome, FiSearch, FiBarChart2, FiUser } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNav = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { icon: FiHome, label: 'Home', path: '/' },
    { icon: FiSearch, label: 'Discover', path: '/discover' },
    { icon: FiBarChart2, label: 'Statistics', path: '/statistics' },
    { icon: FiUser, label: 'Profile', path: '/profile' },
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
      left={0}
      right={0}
      zIndex={100}
      bg="white"
      borderTop="1px solid"
      borderColor="gray.200"
      px={2}
      py={2}
      maxW="100%"
      mx="auto"
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

