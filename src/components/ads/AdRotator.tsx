import { Box } from '@chakra-ui/react'
import AdSense from '../AdSense'
import KakaoAdFit from './KakaoAdFit'
import MediaNet from './MediaNet'

interface AdRotatorProps {
  /** 광고 타입: 'auto'는 랜덤 선택, 특정 타입 지정 가능 */
  type?: 'auto' | 'adsense' | 'kakao' | 'medianet'
  /** AdSense 광고 슬롯 ID */
  adSenseSlot?: string
  /** 카카오 애드핏 광고 단위 ID */
  kakaoAdUnitId?: string
  /** Media.net Customer ID */
  mediaNetCid?: string
  /** 광고 스타일 */
  style?: React.CSSProperties
}

/**
 * 여러 광고 플랫폼을 자동으로 로테이션하는 컴포넌트
 * 
 * 사용 방법:
 * <AdRotator type="auto" />
 * 또는
 * <AdRotator type="adsense" adSenseSlot="9944590930" />
 */
const AdRotator = ({
  type = 'auto',
  adSenseSlot = '9944590930',
  kakaoAdUnitId = 'DAN-TuJyMLJV5hB5UXiO',
  mediaNetCid = 'YOUR_MEDIANET_CID',
  style = { display: 'block', minHeight: '120px', width: '100%' }
}: AdRotatorProps) => {
  // auto 타입일 경우 랜덤 선택
  const getAdType = () => {
    if (type !== 'auto') return type
    
    const adTypes: Array<'adsense' | 'kakao' | 'medianet'> = [
      'adsense',
      'kakao',
      'medianet'
    ]
    // 페이지 로드 시점의 시간 기반으로 선택 (일관성 유지)
    const index = Math.floor(Date.now() / 10000) % adTypes.length
    return adTypes[index]
  }

  const selectedType = getAdType()

  return (
    <Box py={4} display="flex" justifyContent="center" w="100%">
      {selectedType === 'adsense' && (
        <AdSense
          adSlot={adSenseSlot}
          adFormat="horizontal"
          style={style}
        />
      )}
      {selectedType === 'kakao' && kakaoAdUnitId && kakaoAdUnitId !== 'YOUR_KAKAO_AD_UNIT_ID' && (
        <KakaoAdFit
          adUnitId={kakaoAdUnitId}
          adWidth={320}
          adHeight={100}
          style={style}
        />
      )}
      {selectedType === 'medianet' && mediaNetCid !== 'YOUR_MEDIANET_CID' && (
        <MediaNet
          cid={mediaNetCid}
          style={style}
        />
      )}
      {/* 기본값이거나 설정되지 않은 경우 AdSense 사용 */}
      {selectedType === 'kakao' && (!kakaoAdUnitId || kakaoAdUnitId === 'YOUR_KAKAO_AD_UNIT_ID') && (
        <AdSense
          adSlot={adSenseSlot}
          adFormat="horizontal"
          style={style}
        />
      )}
      {selectedType === 'medianet' && (!mediaNetCid || mediaNetCid === 'YOUR_MEDIANET_CID') && (
        <AdSense
          adSlot={adSenseSlot}
          adFormat="horizontal"
          style={style}
        />
      )}
    </Box>
  )
}

export default AdRotator

