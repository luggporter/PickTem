# 카카오 애드핏 설치 확인 가이드

## 1. 브라우저 개발자 도구로 확인

### 단계별 확인 방법

#### 1단계: 개발자 도구 열기
- **Chrome/Edge**: `F12` 또는 `Ctrl+Shift+I` (Mac: `Cmd+Option+I`)
- **Safari**: `Cmd+Option+I` (개발자 메뉴 활성화 필요)

#### 2단계: Elements 탭에서 확인
1. Elements 탭 클릭
2. `Ctrl+F` (Mac: `Cmd+F`)로 검색창 열기
3. 다음 중 하나를 검색:
   - `kakao_ad_area`
   - `DAN-TuJyMLJV5hB5UXiO`
   - `data-ad-unit`

**확인해야 할 것:**
```html
<ins class="kakao_ad_area" style="display:none;" 
     data-ad-unit="DAN-TuJyMLJV5hB5UXiO" 
     data-ad-width="320" 
     data-ad-height="100">
</ins>
```

#### 3단계: Network 탭에서 스크립트 확인
1. Network 탭 클릭
2. 페이지 새로고침 (`F5`)
3. 필터에 `ba.min.js` 입력
4. `t1.daumcdn.net/kas/static/ba.min.js` 파일이 로드되었는지 확인
   - Status: `200` (성공)
   - Type: `script`

#### 4단계: Console 탭에서 에러 확인
1. Console 탭 클릭
2. 빨간색 에러 메시지가 있는지 확인
3. 카카오 애드핏 관련 에러가 없는지 확인

## 2. 실제 광고 표시 확인

### 확인 방법
1. 사이트 접속: `https://ssikapicktem.co.kr`
2. 광고가 표시되는 위치 확인:
   - Home 페이지 (여러 위치)
   - 블로그 페이지들
   - 상품 페이지들

### 주의사항
- **광고 차단 프로그램 비활성화**: AdBlock, uBlock 등
- **시크릿 모드에서 테스트**: 확장 프로그램 영향 제거
- **모바일에서도 확인**: 카카오 애드핏은 모바일 최적화
- **캐시 삭제 후 확인**: `Ctrl+Shift+Delete` (Mac: `Cmd+Shift+Delete`)

## 3. 자동 확인 스크립트

브라우저 Console에서 다음 코드를 실행하여 자동 확인:

```javascript
// 카카오 애드핏 설치 확인 스크립트
(function() {
  console.log('=== 카카오 애드핏 설치 확인 ===');
  
  // 1. 스크립트 로드 확인
  const script = document.querySelector('script[src*="t1.daumcdn.net/kas/static/ba.min.js"]');
  if (script) {
    console.log('✅ 스크립트 로드됨:', script.src);
  } else {
    console.log('❌ 스크립트가 로드되지 않음');
  }
  
  // 2. 광고 영역 확인
  const adAreas = document.querySelectorAll('.kakao_ad_area');
  console.log(`✅ 광고 영역 개수: ${adAreas.length}개`);
  
  adAreas.forEach((area, index) => {
    const unitId = area.getAttribute('data-ad-unit');
    const width = area.getAttribute('data-ad-width');
    const height = area.getAttribute('data-ad-height');
    console.log(`  [${index + 1}] Unit ID: ${unitId}, 크기: ${width}x${height}`);
  });
  
  // 3. 특정 광고 단위 확인
  const targetAd = document.querySelector('[data-ad-unit="DAN-TuJyMLJV5hB5UXiO"]');
  if (targetAd) {
    console.log('✅ 목표 광고 단위 발견:', targetAd.getAttribute('data-ad-unit'));
  } else {
    console.log('❌ 목표 광고 단위를 찾을 수 없음');
  }
  
  console.log('=== 확인 완료 ===');
})();
```

## 4. 카카오 애드핏 대시보드에서 확인

1. https://adfit.kakao.com 접속
2. 로그인 후 대시보드 이동
3. 해당 광고 단위 선택
4. "통계" 또는 "모니터링" 메뉴에서:
   - 노출 수 확인
   - 클릭 수 확인
   - 수익 확인

**참고**: 광고가 실제로 표시되기까지 최대 30분 소요될 수 있습니다.

## 5. 문제 해결

### 광고가 표시되지 않는 경우

1. **스크립트가 로드되지 않음**
   - Network 탭에서 `ba.min.js` 확인
   - 방화벽이나 보안 프로그램 확인

2. **광고 영역이 없음**
   - React 컴포넌트가 제대로 렌더링되는지 확인
   - 페이지 새로고침

3. **에러 메시지 확인**
   - Console 탭에서 에러 확인
   - 에러 내용에 따라 해결

4. **모바일에서만 표시**
   - 카카오 애드핏은 모바일 최적화
   - 데스크톱에서는 제한적으로 표시될 수 있음

## 6. 빠른 확인 체크리스트

- [ ] 개발자 도구에서 `kakao_ad_area` 클래스 찾기
- [ ] `data-ad-unit="DAN-TuJyMLJV5hB5UXiO"` 속성 확인
- [ ] Network 탭에서 `ba.min.js` 로드 확인
- [ ] Console에서 에러 없음 확인
- [ ] 실제 광고가 화면에 표시됨 (모바일 권장)
- [ ] 광고 차단 프로그램 비활성화

