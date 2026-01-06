import { VStack, Text, Box, Heading, List, ListItem } from '@chakra-ui/react'

const PrivacyPolicyContent = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color="#212529" fontWeight="700">
        개인정보처리방침
      </Heading>

      <Box>
        <Text fontSize="14px" color="#868e96" mb={6}>
          최종 수정일: 2025년 12월 19일
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          1. 기본 방침
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          씩아픽템(이하 &quot;서비스&quot;)은 이용자의 개인정보를 최소한으로 수집하고, 가능한 한
          개인을 식별할 수 있는 정보는 직접 수집하지 않는 것을 원칙으로 합니다.
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          2. 수집하는 개인정보
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={3}>
          현재 서비스는 회원가입, 로그인, 댓글 작성 등 별도의 입력 절차를 통해 이름, 이메일, 전화번호
          등의 개인정보를 직접 수집하지 않습니다.
        </Text>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          다만, 서비스 제공 과정에서 아래와 같은 정보가 자동으로 생성·수집될 수 있습니다.
        </Text>
        <List spacing={1} fontSize="15px" color="#212529" mb={4}>
          <ListItem>- 접속한 단말기 정보(브라우저 종류, OS 버전 등)</ListItem>
          <ListItem>- 접속 일시, 이용 기록(방문한 페이지 등)</ListItem>
          <ListItem>- 광고 노출 및 클릭 기록</ListItem>
        </List>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          3. 쿠키 및 유사 기술의 이용
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          서비스는 이용자에게 더 나은 콘텐츠와 광고를 제공하기 위해 쿠키(Cookie) 및 유사 기술을
          사용할 수 있습니다. 쿠키는 이용자의 브라우저에 저장되는 작은 파일로, 개별 이용자를 특정하지
          않는 범위에서 서비스 이용 통계, 광고 노출 횟수 조절 등에 활용됩니다.
        </Text>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          이용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있으나, 이 경우 일부 기능이
          제한될 수 있습니다.
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          4. 광고 및 분석 도구
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          서비스는 카카오 애드핏 등 제3자 광고 서비스 및 통계/분석 도구를 사용할 수
          있습니다. 이 과정에서 광고/분석 제공자는 쿠키, 광고 ID 등을 활용하여 비식별 정보 기반으로
          맞춤형 광고를 제공하거나 통계를 수집할 수 있습니다.
        </Text>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          제3자 서비스가 수집·처리하는 정보에 대해서는 각 서비스 제공자의 개인정보처리방침이 적용되며,
          이용자는 해당 정책을 통해 보다 자세한 내용을 확인할 수 있습니다.
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          5. 이용자의 권리
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          서비스는 이용자로부터 직접적인 개인정보(이름, 이메일 등)를 수집하고 있지 않으므로, 일반적인
          계정 탈퇴·정보 삭제 절차는 운영하지 않습니다. 다만, 쿠키 등 온라인 식별자에 대한 제어는
          브라우저 설정 또는 각 광고/분석 제공자의 정책에 따라 변경하실 수 있습니다.
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          6. 개인정보 보호 문의
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          개인정보 보호와 관련된 문의사항이 있으신 경우, 서비스 내 문의하기 페이지를 통해 연락해
          주시면 성실히 답변드리겠습니다.
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={4} mb={3}>
          7. 개인정보처리방침의 변경
        </Heading>
        <Text fontSize="15px" lineHeight="1.8" color="#212529" mb={4}>
          본 개인정보처리방침은 서비스 기능 추가, 관련 법령 개정, 정책 변경 등에 따라 수정될 수
          있습니다. 중요한 변경 사항이 있을 경우, 서비스 내 공지 등을 통해 사전에 알려드리겠습니다.
        </Text>
      </Box>
    </VStack>
  )
}

export default PrivacyPolicyContent

