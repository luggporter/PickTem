import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff4e6',
      100: '#ffe0b3',
      200: '#ffcc80',
      300: '#ffb84d',
      400: '#ffa31a',
      500: '#ff8f00', // 당근마켓 주황색
      600: '#e67e00',
      700: '#cc6d00',
      800: '#b35c00',
      900: '#994b00',
    },
    gray: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
    },
    carrot: {
      50: '#fff4e6',
      100: '#ffe0b3',
      200: '#ffcc80',
      300: '#ffb84d',
      400: '#ffa31a',
      500: '#ff8f00',
      600: '#e67e00',
      700: '#cc6d00',
      800: '#b35c00',
      900: '#994b00',
    }
  },
  fonts: {
    heading: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
    body: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: '#f7f7f7',
        color: '#212529',
      },
      // 모바일 최적화를 위한 전역 스타일
      '*': {
        boxSizing: 'border-box',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
  breakpoints: {
    base: '0em',
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-1px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
            transform: 'translateY(0)',
          },
          transition: 'all 0.2s',
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            transform: 'translateY(-1px)',
            boxShadow: 'md',
          },
          transition: 'all 0.2s',
        },
      },
    },
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
          border: 'none',
          _hover: {
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.12)',
          },
          transition: 'all 0.2s ease',
        },
      },
    },
  },
})

export default theme
