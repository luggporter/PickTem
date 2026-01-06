import { Box } from '@chakra-ui/react'
import KakaoAdFit from './KakaoAdFit'

interface AdRotatorProps {
  /** 광고 타입: 'auto'는 카카오 광고 사용, 특정 타입 지정 가능 */
  type?: 'auto' | 'kakao' | 'medianet'
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
  kakaoAdUnitId = 'DAN-TuJyMLJV5hB5UXiO',
  style = { display: 'block', minHeight: '120px', width: '100%' }
}: AdRotatorProps) => {
  // auto 타입일 경우 카카오 광고 사용
  const getAdType = () => {
    if (type !== 'auto') return type
    return 'kakao'
  }

  const selectedType = getAdType()

  console.log({selectedType, kakaoAdUnitId});
  
  return (
    <Box py={4} display="flex" justifyContent="center" w="100%">
      {selectedType === 'kakao' && kakaoAdUnitId && (
        <KakaoAdFit
          adUnitId={kakaoAdUnitId}
          adWidth={320}
          adHeight={100}
          style={style}
        />
      )}
      {/* {selectedType === 'medianet' && mediaNetCid !== 'YOUR_MEDIANET_CID' && (
        <MediaNet
          cid={mediaNetCid}
          style={style}
        />
      )} */}
      {/* 기본값이거나 설정되지 않은 경우 KakaoAdFit 사용 */}
      {selectedType === 'kakao' && (!kakaoAdUnitId || kakaoAdUnitId === 'DAN-TuJyMLJV5hB5UXiO') && (
        <KakaoAdFit
          adUnitId="DAN-TuJyMLJV5hB5UXiO"
          adWidth={320}
          adHeight={100}
          style={style}
        />
      )}
    </Box>
  )
}

export default AdRotator

