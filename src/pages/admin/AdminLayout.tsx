import { useEffect } from 'react'
import { Box, Flex, VStack, Link, Text, Heading } from '@chakra-ui/react'
import { Link as RouterLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

const AdminLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // 인증 체크
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem('adminAuthenticated') === 'true'
    if (!isAuthenticated) {
      navigate('/admin/password', { replace: true })
    }
  }, [navigate])

  const menuItems = [
    { path: '/admin/home', label: '홈' },
    { path: '/admin/news', label: '뉴스' },
  ]

  return (
    <Box minH="100vh" bg="#f7f7f7">
      <Box
        maxW="container.xl"
        mx="auto"
        bg="white"
        minH="100vh"
        boxShadow={{ base: 'none', md: '0 0 20px rgba(0,0,0,0.1)' }}
      >
        {/* 헤더 */}
        <Box bg="gray.800" color="white" p={4}>
          <Heading size="lg">PickTem Admin</Heading>
        </Box>

        <Flex>
          {/* 사이드바 */}
          <Box
            w="250px"
            bg="gray.50"
            p={4}
            minH="calc(100vh - 80px)"
            borderRight="1px solid"
            borderColor="gray.200"
          >
            <VStack align="stretch" spacing={2}>
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  as={RouterLink}
                  to={item.path}
                  p={3}
                  borderRadius="md"
                  bg={location.pathname === item.path ? 'blue.500' : 'transparent'}
                  color={location.pathname === item.path ? 'white' : 'gray.700'}
                  _hover={{
                    bg: location.pathname === item.path ? 'blue.600' : 'gray.100'
                  }}
                  fontWeight="medium"
                >
                  {item.label}
                </Link>
              ))}
            </VStack>
          </Box>

          {/* 메인 콘텐츠 */}
          <Box flex={1} p={6}>
            <Outlet />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default AdminLayout
