import { VStack, Text, Box, Heading, HStack, Icon } from '@chakra-ui/react'
import { FiMail, FiMessageCircle } from 'react-icons/fi'

const ContactContent = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color="#212529" fontWeight="700">
        문의하기
      </Heading>
      
      <Box>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={6}>
          씩아픽템에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락주시기 바랍니다. 
          빠른 시일 내에 답변드리겠습니다.
        </Text>
        
        <Box
          bg="gray.50"
          borderRadius="12px"
          p={6}
          mb={6}
        >
          <HStack spacing={4} mb={4}>
            <Icon as={FiMail} w={6} h={6} color="#212529" />
            <VStack align="start" spacing={1}>
              <Text fontSize="14px" color="#868e96" fontWeight="500">
                이메일
              </Text>
              <Text fontSize="16px" color="#212529" fontWeight="600">
                luggporter45@gmail.com
              </Text>
            </VStack>
          </HStack>
          
          <HStack spacing={4}>
            <Icon as={FiMessageCircle} w={6} h={6} color="#212529" />
            <VStack align="start" spacing={1}>
              <Text fontSize="14px" color="#868e96" fontWeight="500">
                문의 유형
              </Text>
              <Text fontSize="16px" color="#212529" fontWeight="600">
                서비스 문의, 제안사항, 오류 신고
              </Text>
            </VStack>
          </HStack>
        </Box>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          자주 묻는 질문
        </Heading>
        
        <Box mb={4}>
          <Text fontSize="16px" fontWeight="600" color="#212529" mb={2}>
            Q. 상품 정보가 잘못되었어요.
          </Text>
          <Text fontSize="15px" lineHeight="1.8" color="#495057" mb={4}>
            A. 상품 정보에 오류가 있으시면 이메일로 알려주시면 빠르게 수정하겠습니다.
          </Text>
        </Box>
        
        <Box mb={4}>
          <Text fontSize="16px" fontWeight="600" color="#212529" mb={2}>
            Q. 특정 상품을 추천해주세요.
          </Text>
          <Text fontSize="15px" lineHeight="1.8" color="#495057" mb={4}>
            A. 원하시는 카테고리나 상품 유형을 이메일로 보내주시면 검토 후 반영하겠습니다.
          </Text>
        </Box>
        
        <Box mb={4}>
          <Text fontSize="16px" fontWeight="600" color="#212529" mb={2}>
            Q. 광고 관련 문의는 어떻게 하나요?
          </Text>
          <Text fontSize="15px" lineHeight="1.8" color="#495057" mb={4}>
            A. 광고 문의사항은 이메일로 보내주시면 담당자가 확인 후 답변드리겠습니다.
          </Text>
        </Box>
        
        <Box
          bg="blue.50"
          borderRadius="8px"
          p={4}
          mt={6}
        >
          <Text fontSize="14px" lineHeight="1.6" color="#495057">
            💡 <strong>답변 시간:</strong> 평일 기준 1-2일 이내 답변드립니다.
            <br />
            주말 및 공휴일에는 답변이 지연될 수 있습니다.
          </Text>
        </Box>
      </Box>
    </VStack>
  )
}

export default ContactContent

