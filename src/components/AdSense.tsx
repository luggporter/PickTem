import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'

declare global {
  interface Window {
    adsbygoogle: any[] & { loaded?: boolean }
  }
}

interface AdSenseProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  style?: React.CSSProperties
  fullWidthResponsive?: boolean
}

const AdSense = ({ 
  adSlot, 
  adFormat = 'auto',
  style = { display: 'block' },
  fullWidthResponsive = true 
}: AdSenseProps) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle && window.adsbygoogle.loaded) {
        return
      }
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.error('AdSense error:', err)
    }
  }, [])

  return (
    <Box
      as="ins"
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
    />
  )
}

export default AdSense

