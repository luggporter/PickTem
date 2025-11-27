# PickTem - 오늘의 테무템 모아보기 🛍️

인스타 릴스 / 유튜브 쇼츠에서 소개한 템들을 한 곳에 모아두는 **영상별 상품 링크 모음 사이트**입니다.

## 🎯 프로젝트 개요

- **메인 페이지**: 영상 리스트를 카드 형태로 보여줍니다
- **상세 페이지**: 각 영상에서 소개한 상품들을 리스트로 보여줍니다
- **모바일 최적화**: 인스타 인앱 브라우저에서 최적화된 경험을 제공합니다

## 🛠️ 기술 스택

- **React 18** + **TypeScript**
- **Chakra UI** - 컴포넌트 라이브러리
- **React Router** - 클라이언트 사이드 라우팅
- **Vite** - 빌드 도구
- **React Icons** - 아이콘 라이브러리

## 🚀 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 📱 주요 기능

### 1. 영상 리스트 페이지 (`/`)

- 영상 썸네일, 제목, 설명을 카드 형태로 표시
- 카테고리 배지 표시
- 모바일 친화적인 반응형 디자인

### 2. 영상 상세 페이지 (`/video/:id`)

- 영상 정보 (썸네일, 제목, 설명, 날짜)
- 해당 영상에서 소개한 상품 리스트
- 각 상품의 "구매하러 가기" 버튼 (테무 제휴 링크)
- 뒤로가기 및 다른 영상 보기 기능

## 🎨 디자인 특징

- **색상**: 테무 브랜드 오렌지 (#FF6A00) 기반 컬러 팔레트
- **타이포그래피**: Pretendard 폰트 사용
- **인터랙션**: 호버 효과, 부드러운 애니메이션
- **반응형**: 모바일 우선 디자인

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── VideoCard.tsx   # 영상 카드 컴포넌트
│   └── ProductCard.tsx # 상품 카드 컴포넌트
├── pages/              # 페이지 컴포넌트
│   ├── VideoListPage.tsx    # 메인 페이지
│   └── VideoDetailPage.tsx  # 상세 페이지
├── data/               # 데이터
│   └── mockData.ts     # Mock 데이터
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── theme/              # Chakra UI 테마
│   └── index.ts
├── App.tsx             # 메인 앱 컴포넌트
└── main.tsx           # 앱 진입점
```

## 📊 데이터 구조

### Video 타입

```typescript
interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  products: Product[];
  category?: string;
  publishedAt?: string;
}
```

### Product 타입

```typescript
interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  price?: string;
}
```

## 🔗 제휴 링크

현재는 샘플 링크를 사용하고 있습니다. 실제 운영 시에는 테무 제휴 링크로 교체해야 합니다.

## 📱 모바일 최적화

- 터치 친화적인 버튼 크기
- 세로 화면에 최적화된 레이아웃
- 빠른 로딩을 위한 이미지 최적화
- 부드러운 스크롤 및 애니메이션

---

💡 **인스타 프로필 링크에 넣어서 사용하세요!**
