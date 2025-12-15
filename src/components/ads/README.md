# 광고 컴포넌트 사용 가이드

이 디렉토리에는 여러 광고 플랫폼 컴포넌트가 포함되어 있습니다.

## 사용 가능한 광고 플랫폼

### 1. Google AdSense (기존)
```tsx
import AdSense from '../AdSense'

<AdSense
  adSlot="9944590930"
  adFormat="horizontal"
  style={{
    display: 'block',
    minHeight: '120px',
    width: '100%',
  }}
/>
```

### 2. Kakao AdFit (카카오 애드핏)
```tsx
import KakaoAdFit from './ads/KakaoAdFit'

<KakaoAdFit
  adUnitId="YOUR_AD_UNIT_ID"
  style={{
    display: 'block',
    minHeight: '120px',
    width: '100%',
  }}
/>
```

**설정 방법:**
1. [카카오 애드핏](https://adfit.kakao.com)에서 계정 생성
2. 매체 등록 및 광고 단위 생성
3. 광고 단위 ID 확인 후 위 컴포넌트에 입력

### 3. Media.net
```tsx
import MediaNet from './ads/MediaNet'

<MediaNet
  cid="YOUR_CID"
  style={{
    display: 'block',
    minHeight: '120px',
    width: '100%',
  }}
/>
```

**설정 방법:**
1. [Media.net](https://www.media.net)에서 계정 생성
2. 사이트 승인 후 광고 단위 생성
3. CID(Customer ID) 확인 후 위 컴포넌트에 입력

## 주의사항

- 각 광고 플랫폼의 정책을 준수해야 합니다
- 여러 광고 플랫폼을 동시에 사용할 경우 각 플랫폼의 정책을 확인하세요
- 실제 광고 ID는 각 플랫폼에서 발급받은 값을 사용해야 합니다
- 테스트 환경에서는 광고가 표시되지 않을 수 있습니다

