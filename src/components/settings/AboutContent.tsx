import { VStack, Text, Box, Heading } from '@chakra-ui/react'

const AboutContent = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" color="#212529" fontWeight="700">
        씩아픽템이란?
      </Heading>
      
      <Box>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          씩아픽템은 인스타그램 릴스, 유튜브 쇼츠 등 소셜 미디어에서 소개된 인기 상품을 한눈에 모아볼 수 있는 추천템 큐레이션 플랫폼입니다.
        </Text>
        
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          매일 새로운 트렌드와 인기 상품이 쏟아지는 소셜 미디어 속에서, 여러분이 놓치기 쉬운 좋은 상품들을 엄선하여 소개합니다. 우리는 단순히 상품을 나열하는 것이 아니라, 실제로 사용해볼 만한 가치 있는 아이템들을 선별하여 제공합니다.
        </Text>
        
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          단순히 상품 소개가 아니라 삶에 필요한 모든 생활 정보를 제공하여, 소비자들에게 합리적인 쇼핑을 할 수 있도록 제공합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          서비스명 소개
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          씩아픽템은 씩아가 픽(Pick)한 템(Item)을 소개하는 서비스입니다.
        </Text>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          씩아의 씩의 씩씩이라는 이름을 가진 포피츠 강아지이며, 씩아의 아는 아리라는 이름을 가진 아비시니안 고양이 이름입니다.
        </Text>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          앞으로도 씩씩이와 아리가 여러분께 다양한 상품을 소개할 예정이며, 
        </Text>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          여러분과 소통할 예정입니다. 사랑스러운 마음으로 우리 친구들을 환영해주세요!
        </Text>

        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          우리의 목표
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          씩아픽템은 소비자들이 더 나은 쇼핑 결정을 내릴 수 있도록 돕는 것을 목표로 합니다. 다양한 소셜 미디어 플랫폼에서 발견한 인기 상품들을 한 곳에서 비교하고, 검토할 수 있는 편리한 공간을 제공합니다.
        </Text>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          추후 씩아픽템은 유저들이 소통할 수 있는 커뮤니티 기능을 추가할 예정입니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          상품 선정 기준
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          우리는 인스타그램, 유튜브 등 다양한 소셜 미디어에서 화제가 되고 있는 상품들을 모니터링합니다. 단순히 인기만을 따르는 것이 아니라, 실제 사용자들의 반응과 평가를 종합적으로 고려하여 가치 있는 상품들을 선별합니다.
        </Text>
        
        <Heading size="md" color="#212529" fontWeight="700" mt={6} mb={3}>
          서비스 이용 방법
        </Heading>
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mb={4}>
          씩아픽템은 카테고리별로 상품을 분류하여 제공합니다. 가구, 전자제품, 미용, 패션, 주방용품 등 다양한 카테고리에서 원하는 상품을 쉽게 찾아볼 수 있습니다. 각 상품에 대한 상세 정보와 구매 링크를 확인하여 더 나은 쇼핑 경험을 즐기실 수 있습니다.
        </Text>
        
        <Text fontSize="16px" lineHeight="1.8" color="#212529" mt={6}>
          씩아픽템과 함께 더 스마트한 쇼핑을 시작해보세요.
        </Text>
      </Box>
    </VStack>
  )
}

export default AboutContent

