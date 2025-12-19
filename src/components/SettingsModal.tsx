import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Box,
  Text,
  Button,
  Divider,
} from '@chakra-ui/react'
import { useState } from 'react'
import AboutContent from './settings/AboutContent'
import PrivacyPolicyContent from './settings/PrivacyPolicyContent'
import TermsContent from './settings/TermsContent'
import ContactContent from './settings/ContactContent'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

const SettingsModal = ({ isOpen, onClose }: SettingsModalProps) => {
  const [currentView, setCurrentView] = useState<'menu' | 'about' | 'privacy' | 'terms' | 'contact'>('menu')

  const handleMenuClick = (view: 'about' | 'privacy' | 'terms' | 'contact') => {
    setCurrentView(view)
  }

  const handleBack = () => {
    setCurrentView('menu')
  }

  const handleClose = () => {
    setCurrentView('menu')
    onClose()
  }

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      size="full" 
      motionPreset="slideInBottom"
      blockScrollOnMount={true}
      isCentered={false}
    >
      <ModalOverlay />
      <ModalContent
        maxW="480px"
        w="100%"
        mx="auto"
        my={0}
        maxH="100vh"
        borderRadius={0}
        overflow="hidden"
        display="flex"
        flexDirection="column"
        bg="white"
      >
        <ModalHeader flexShrink={0}>
          {currentView === 'menu' ? '설정' : (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleBack}
              mr={2}
              fontSize="18px"
              fontWeight="600"
            >
              ←
            </Button>
          )}
          {currentView === 'menu' && '설정'}
          {currentView === 'about' && '서비스 소개'}
          {currentView === 'privacy' && '개인정보처리방침'}
          {currentView === 'terms' && '이용약관'}
          {currentView === 'contact' && '문의하기'}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody 
          pb={6}
          overflowY="auto"
          flex={1}
          css={{
            '&::-webkit-scrollbar': {
              width: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#e0e0e0',
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: '#b0b0b0',
            },
          }}
        >
          {currentView === 'menu' && (
            <VStack spacing={4} align="stretch">
              <Button
                variant="ghost"
                justifyContent="flex-start"
                h="60px"
                fontSize="16px"
                fontWeight="600"
                onClick={() => handleMenuClick('about')}
                _hover={{ bg: 'gray.50' }}
              >
                서비스 소개
              </Button>
              <Divider />
              <Button
                variant="ghost"
                justifyContent="flex-start"
                h="60px"
                fontSize="16px"
                fontWeight="600"
                onClick={() => handleMenuClick('privacy')}
                _hover={{ bg: 'gray.50' }}
              >
                개인정보처리방침
              </Button>
              <Divider />
              <Button
                variant="ghost"
                justifyContent="flex-start"
                h="60px"
                fontSize="16px"
                fontWeight="600"
                onClick={() => handleMenuClick('terms')}
                _hover={{ bg: 'gray.50' }}
              >
                이용약관
              </Button>
              <Divider />
              <Button
                variant="ghost"
                justifyContent="flex-start"
                h="60px"
                fontSize="16px"
                fontWeight="600"
                onClick={() => handleMenuClick('contact')}
                _hover={{ bg: 'gray.50' }}
              >
                문의하기
              </Button>
            </VStack>
          )}

          {currentView === 'about' && <AboutContent />}
          {currentView === 'privacy' && <PrivacyPolicyContent />}
          {currentView === 'terms' && <TermsContent />}
          {currentView === 'contact' && <ContactContent />}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SettingsModal

