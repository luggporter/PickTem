import { VStack, Text, Box, Heading } from '@chakra-ui/react'

const TermsContent = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color="#212529" fontWeight="700">
        이용약관
      </Heading>
      
      <Box>
        <Text fontSize="14px" color="#868e96" mb={6}>
          최종 수정일: 2025년 12월 19일
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제1조 (목적)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          본 약관은 씩아픽템(이하 "회사")이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제2조 (정의)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          1. "서비스"란 회사가 제공하는 상품 추천 및 정보 제공 서비스를 의미합니다.
          <br />
          2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 자를 의미합니다.
          <br />
          3. "콘텐츠"란 서비스를 통해 제공되는 모든 정보, 텍스트, 그래픽, 링크 등을 의미합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제3조 (약관의 게시와 개정)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있으며, 개정된 약관은 서비스 화면에 공지하거나 기타의 방법으로 이용자에게 공지합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제4조 (서비스의 제공 및 변경)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사는 다음과 같은 서비스를 제공합니다:
          <br />
          1. 인기 상품 추천 서비스
          <br />
          2. 카테고리별 상품 분류 및 검색 서비스
          <br />
          3. 상품 정보 및 관련 콘텐츠 제공
          <br />
          4. 기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 일체의 서비스
        </Text>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사는 서비스의 내용을 변경할 수 있으며, 변경 시에는 사전에 공지합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제5조 (서비스의 중단)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다. 회사는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스 제공화면에 공지한 바에 따릅니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제6조 (이용자의 의무)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          이용자는 다음 행위를 하여서는 안 됩니다:
          <br />
          1. 신청 또는 변경 시 허위내용의 등록
          <br />
          2. 타인의 정보 도용
          <br />
          3. 회사가 게시한 정보의 변경
          <br />
          4. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
          <br />
          5. 회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
          <br />
          6. 회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
          <br />
          7. 외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제7조 (저작권의 귀속 및 이용제한)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다. 이용자는 회사를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제8조 (면책조항)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다. 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          제9조 (준거법 및 관할법원)
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          서비스 이용과 관련하여 회사와 이용자 간에 발생한 분쟁에 대하여는 대한민국 법을 적용하며, 본 분쟁으로 인하여 소송이 제기될 경우 소송은 회사의 본사 소재지를 관할하는 법원의 관할로 합니다.
        </Text>
      </Box>
    </VStack>
  )
}

export default TermsContent

