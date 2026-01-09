import { Box, Heading, Text, VStack, Card, CardBody } from '@chakra-ui/react'

const AdminHome = () => {
  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading size="lg" mb={2}>
          관리자 페이지
        </Heading>
        <Text color="gray.600">
          PickTem 관리자 대시보드입니다.
        </Text>
      </Box>

      <Card>
        <CardBody>
          <Heading size="md" mb={3}>
            현재 기능
          </Heading>
          <VStack align="stretch" spacing={2}>
            <Text>• 뉴스 관리</Text>
            <Text color="gray.500">추가 기능은 추후 개발 예정입니다.</Text>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  )
}

export default AdminHome
