import { Box, HStack, Text, Icon } from '@chakra-ui/react'
import { FiBell, FiSettings } from 'react-icons/fi'

interface MobileHeaderProps {
  title?: string
  showBack?: boolean
  onBack?: () => void
  showNotification?: boolean
  notificationCount?: number
  onSettingsClick?: () => void
}

const MobileHeader = ({ 
  title, 
  showBack = false, 
  onBack,
  showNotification = false,
  notificationCount = 0,
  onSettingsClick
}: MobileHeaderProps) => {


  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg="white"
      borderBottom="1px solid"
      borderColor="gray.200"
      px={4}
      py={3}
    >
      {/* 모바일 상태바 */}
      {/* <HStack justify="space-between" mb={2} fontSize="12px" color="gray.600">
        <Text fontWeight="600">{currentTime}</Text>
        <HStack spacing={1}>
          <Box w="16px" h="10px" border="1.5px solid" borderColor="gray.600" borderRadius="2px" position="relative">
            <Box 
              position="absolute" 
              right="1px" 
              top="1px" 
              w="2px" 
              h="6px" 
              bg="gray.600" 
              borderRadius="0 1px 1px 0"
            />
          </Box>
          <Box w="4px" h="4px" bg="gray.600" borderRadius="full" />
        </HStack>
      </HStack> */}

      {/* 헤더 컨텐츠 */}
      <HStack justify="space-between" align="center">
        {showBack ? (
          <Text 
            fontSize="18px" 
            fontWeight="600" 
            cursor="pointer"
            onClick={onBack}
          >
            ←
          </Text>
        ) : (
          <Box />
        )}
        
        {title && (
          <Text fontSize="18px" fontWeight="700" color="#212529">
            {title}
          </Text>
        )}
        
        {/* 알림 아이콘 주석 처리 */}
        {/* {showNotification ? (
          <Box position="relative">
            <Icon as={FiBell} w={6} h={6} color="#212529" />
            {notificationCount > 0 && (
              <Box
                position="absolute"
                top="-2px"
                right="-2px"
                bg="#ff3b30"
                color="white"
                borderRadius="full"
                w="18px"
                h="18px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="10px"
                fontWeight="700"
              >
                {notificationCount > 9 ? '9+' : notificationCount}
              </Box>
            )}
          </Box>
        ) : (
          <Box />
        )} */}
        
        {/* 설정 버튼 */}
        {onSettingsClick ? (
          <Icon 
            as={FiSettings} 
            w={6} 
            h={6} 
            color="#212529" 
            cursor="pointer"
            onClick={onSettingsClick}
          />
        ) : (
          <Box />
        )}
      </HStack>
    </Box>
  )
}

export default MobileHeader

