# Google Sheets API 설정 가이드

이 프로젝트는 Google Sheets를 데이터베이스로 사용합니다. 설정 방법은 다음과 같습니다.

## 1. Google Cloud Console 설정

### 1.1 프로젝트 생성
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 (또는 기존 프로젝트 선택)

### 1.2 Google Sheets API 활성화
1. 왼쪽 메뉴에서 **API 및 서비스** → **라이브러리** 클릭
2. "Google Sheets API" 검색
3. **사용 설정** 클릭

### 1.3 API 키 생성
1. 왼쪽 메뉴에서 **API 및 서비스** → **사용자 인증 정보** 클릭
2. **+ 사용자 인증 정보 만들기** → **API 키** 클릭
3. API 키 복사 (예: `AIzaSyC1234567890abcdefghijklmnopqr`)
4. (선택) API 키 제한 설정:
   - **애플리케이션 제한사항**: HTTP 리퍼러 (웹사이트)
   - **웹사이트 제한사항**: `https://ssikapicktem.co.kr/*` 추가
   - **API 제한사항**: Google Sheets API만 선택

## 2. Google Sheets 설정

### 2.1 스프레드시트 생성
1. [Google Sheets](https://sheets.google.com/) 접속
2. 새 스프레드시트 생성

### 2.2 시트 구조 설정

#### 비디오 시트 (`비디오`)
1행에 다음 헤더 입력:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| 고유키 | 판매타입 | 카테고리 | 상태 | 제목 | 설명 | 썸네일 이미지 | 공개날짜 | 종료날짜 | 메모 |

**비디오 데이터 예시:**

| 고유키 | 판매타입 | 카테고리 | 상태 | 제목 | 설명 | 썸네일 이미지 | 공개날짜 | 종료날짜 | 메모 |
|--------|----------|----------|------|------|------|---------------|----------|----------|------|
| 1 | 상품 공유 | 생활용품 | 공개 | 크리스마스템 TOP5 | 올해 크리스마스 추천템 | https://... | 2025-11-25 0:00:00 | | |
| 2 | 상품 공유 | 생활용품 | 공개 | 재미있는 템 TOP5 | 재미있는 아이템 모음 | https://... | 2025-11-26 0:00:00 | | |

#### 제품 시트 (`제품`)
1행에 다음 헤더 입력:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| 부모 고유키 | 자식 고유키 | 상품명 | 상품설명 | 썸네일 이미지 | 바로가기 주소 | 가격 | 상태 | 메모 |

**제품 데이터 예시:**

| 부모 고유키 | 자식 고유키 | 상품명 | 상품설명 | 썸네일 이미지 | 바로가기 주소 | 가격 | 상태 | 메모 |
|-------------|-------------|--------|----------|---------------|---------------|------|------|------|
| 1 | 1-1 | 크리스마스 테이블보 | | https://... | https://link... | ₩12,919 | 공개 | |
| 1 | 1-2 | 와인 병 커버 세트 | | https://... | https://link... | ₩2,325 | 공개 | |
| 2 | 2-1 | 밋머리 빗 세트 | | https://... | https://link... | ₩2,562 | 공개 | |

**참고:**
- `비디오` 시트의 **고유키**와 `제품` 시트의 **부모 고유키**가 연결됩니다.
- **상태**가 "공개"인 항목만 웹사이트에 표시됩니다.
- "비공개" 상태로 설정하면 숨길 수 있습니다.

### 2.4 공유 설정
1. 스프레드시트 우측 상단 **공유** 클릭
2. **액세스 권한 변경** → **링크가 있는 모든 사용자**로 변경
3. 권한: **뷰어** 선택
4. **완료** 클릭

### 2.5 스프레드시트 ID 확인
URL에서 스프레드시트 ID 복사:
```
https://docs.google.com/spreadsheets/d/[이_부분이_SPREADSHEET_ID]/edit
```
예: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

## 3. 프로젝트 환경 변수 설정

### 3.1 .env 파일 생성
프로젝트 루트에 `.env` 파일 생성:

```env
VITE_GOOGLE_SHEETS_API_KEY=AIzaSyC1234567890abcdefghijklmnopqr
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
VITE_GOOGLE_SHEETS_VIDEO_RANGE=비디오!A2:J1000
VITE_GOOGLE_SHEETS_PRODUCT_RANGE=제품!A2:I1000
```

**각 항목 설명:**
- `VITE_GOOGLE_SHEETS_API_KEY`: Google Cloud Console에서 생성한 API 키
- `VITE_GOOGLE_SHEETS_SPREADSHEET_ID`: Google Sheets URL의 스프레드시트 ID
- `VITE_GOOGLE_SHEETS_VIDEO_RANGE`: 비디오 데이터 범위 (기본: `비디오!A2:J1000`)
  - `비디오`: 시트 이름
  - `A2:J1000`: 2행부터 1000행까지 (1행은 헤더)
- `VITE_GOOGLE_SHEETS_PRODUCT_RANGE`: 제품 데이터 범위 (기본: `제품!A2:I1000`)
  - `제품`: 시트 이름
  - `A2:I1000`: 2행부터 1000행까지 (1행은 헤더)

### 3.2 .gitignore 확인
`.env` 파일이 Git에 커밋되지 않도록 `.gitignore`에 추가되어 있는지 확인:

```gitignore
.env
.env.local
.env.production
```

## 4. 배포 환경 설정

### GitHub Pages (Vite 기본 설정)
GitHub Actions secrets에 환경 변수 추가:

1. GitHub 저장소 → **Settings** → **Secrets and variables** → **Actions**
2. **New repository secret** 클릭
3. 다음 secret 추가:
   - `VITE_GOOGLE_SHEETS_API_KEY`
   - `VITE_GOOGLE_SHEETS_SPREADSHEET_ID`
   - `VITE_GOOGLE_SHEETS_RANGE`

### Vercel
1. Vercel 대시보드 → 프로젝트 선택
2. **Settings** → **Environment Variables**
3. 환경 변수 추가

### Netlify
1. Netlify 대시보드 → 프로젝트 선택
2. **Site settings** → **Build & deploy** → **Environment**
3. **Environment variables** → **Add a variable**

## 5. 로컬 개발 및 테스트

### 5.1 개발 서버 실행
```bash
npm run dev
```

### 5.2 데이터 확인
1. 브라우저 개발자 도구 (F12) 열기
2. Console 탭 확인:
   - ✅ 성공: Google Sheets 데이터가 로드됨
   - ⚠️ 경고: "Google Sheets API 설정이 없습니다" → 로컬 mockData 사용
   - ❌ 오류: API 키 또는 스프레드시트 ID 확인

### 5.3 캐시 초기화
데이터가 5분간 캐시됩니다. 강제 새로고침:
1. 브라우저 개발자 도구 열기
2. Console에서 실행:
```javascript
import { clearCache } from './src/services/googleSheets'
clearCache()
```
3. 페이지 새로고침

## 6. 문제 해결

### API 키 오류
- API 키가 올바른지 확인
- Google Cloud Console에서 API 키 제한 설정 확인
- HTTP 리퍼러가 올바르게 설정되었는지 확인

### 스프레드시트 접근 불가
- 스프레드시트가 "링크가 있는 모든 사용자"로 공유되었는지 확인
- 스프레드시트 ID가 올바른지 확인

### 데이터가 표시되지 않음
- 시트 이름이 "비디오"와 "제품"인지 확인
- 데이터 범위가 올바른지 확인 (기본: `비디오!A2:J1000`, `제품!A2:I1000`)
- 헤더가 1행에 있고, 데이터는 2행부터 시작하는지 확인
- **상태** 열이 "공개"로 설정되어 있는지 확인
- 브라우저 Console에서 오류 메시지 확인

### Fallback 동작
Google Sheets 데이터를 가져오지 못하면 자동으로 로컬 `mockData.ts` 파일의 데이터를 사용합니다.

## 7. 데이터 업데이트

Google Sheets에서 데이터를 수정하면:
1. 최대 5분 후 자동 반영 (캐시)
2. 페이지 새로고침 시 즉시 반영 (캐시가 만료된 경우)

## 8. 보안 고려사항

### API 키 보안
- API 키는 절대 Git에 커밋하지 마세요
- 프로덕션에서는 HTTP 리퍼러 제한 설정 권장
- 정기적으로 API 키 교체 권장

### 스프레드시트 보안
- 스프레드시트는 읽기 전용(뷰어)으로 공유
- 편집 권한은 절대 공개하지 마세요
- 민감한 정보는 저장하지 마세요

## 9. 비용

- Google Sheets API는 무료 할당량 제공
- 일일 500,000회 요청 무료
- 이 프로젝트는 캐싱(5분)을 사용하므로 할당량 초과 가능성 낮음

---

문제가 있거나 추가 지원이 필요하면 이슈를 생성해주세요.

