import { useState } from 'react'
import {
  Box,
  VStack,
  Heading,
  Input,
  Button,
  Text,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const AdminPassword = () => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 실제로는 서버에서 검증해야 하지만, 지금은 하드코딩된 비밀번호 사용
    const correctPassword = 'admin123' // 실제로는 환경변수나 서버에서 가져와야 함

    if (password === correctPassword) {
      // 비밀번호가 맞으면 세션에 저장하고 admin/home으로 이동
      sessionStorage.setItem('adminAuthenticated', 'true')
      navigate('/admin/home')
    } else {
      setError('비밀번호가 올바르지 않습니다.')
    }
  }

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
    >
      <Box
        p={8}
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        w="100%"
        maxW="400px"
      >
        <VStack spacing={6}>
          <Heading size="lg" textAlign="center">
            Admin 로그인
          </Heading>

          <Text textAlign="center" color="gray.600">
            관리자 비밀번호를 입력해주세요.
          </Text>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <VStack spacing={4}>
              <FormControl isRequired>
                <FormLabel>비밀번호</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력하세요"
                />
              </FormControl>

              {error && (
                <Alert status="error" borderRadius="md">
                  <AlertIcon />
                  {error}
                </Alert>
              )}

              <Button
                type="submit"
                colorScheme="blue"
                width="100%"
                size="lg"
              >
                로그인
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Box>
  )
}

export default AdminPassword
