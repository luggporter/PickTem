# Google Apps Script 활동 로그 및 뉴스 관리 설정 가이드

사용자 활동(클릭, 좋아요)과 뉴스 관리를 Google Sheets에 자동으로 기록하는 설정입니다.

## 1. Google Sheets 준비

### 1.1 시트 생성

기존 스프레드시트에 새 시트를 추가하거나 새 스프레드시트 생성:

#### 활동 로그 시트

**시트 이름**: `활동로그`

**헤더 (1행)**:
| A | B | C | D | E | F |
|---|---|---|---|---|---|
| 고유키 | 상품명 | 카운트 | 활동 타입 | 메모 | 시간 |

#### 뉴스 시트

**시트 이름**: `뉴스`

**헤더 (1행) - 아래 내용을 A열 부터 I열까지 복사해서 붙여넣으세요:**

```
ID	제목	요약	내용	출처	발행일	이미지 URL	원본 URL	상태
```

또는 각 셀에 직접 입력:

- **A1**: ID
- **B1**: 제목
- **C1**: 요약
- **D1**: 내용
- **E1**: 출처
- **F1**: 발행일
- **G1**: 이미지 URL
- **H1**: 원본 URL
- **I1**: 상태

## 2. Apps Script 설정

### 2.1 Apps Script 열기

1. Google Sheets 열기
2. **확장 프로그램** → **Apps Script** 클릭

### 2.2 코드 작성

기본 코드를 모두 삭제하고 다음 코드 붙여넣기:

```javascript
function doPost(e) {
  try {
    console.log('Apps Script doPost 호출됨');
    console.log('받은 데이터:', e.postData.contents);

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);

    console.log('파싱된 데이터:', data);

    // 활동 로그 처리
    if (data.logType === '활동로그') {
      const activitySheet = ss.getSheetByName('활동로그');

      if (!activitySheet) {
        return ContentService.createTextOutput(
          JSON.stringify({ error: '활동로그 시트를 찾을 수 없습니다.' }),
        ).setMimeType(ContentService.MimeType.JSON);
      }

      // 현재 시간 (한국 시간)
      const now = new Date();
      const kstTime = Utilities.formatDate(
        now,
        'Asia/Seoul',
        'yyyy-MM-dd HH:mm:ss',
      );

      // 활동 로그 데이터 추가 (A: 고유키, B: 상품명, C: 카운트, D: 활동 타입, E: 메모, F: 시간)
      activitySheet.appendRow([
        data.uniqueKey || '',
        data.name || '',
        data.count || 1,
        data.activityType || '',
        data.memo || '',
        kstTime,
      ]);

      return ContentService.createTextOutput(
        JSON.stringify({ success: true, type: 'activity' }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 뉴스 추가 처리
    if (data.logType === '뉴스추가') {
      console.log('뉴스 추가 처리 시작');

      // range에서 시트 이름 추출 (예: "뉴스!A1:Z999" → "뉴스")
      const sheetName = data.range ? data.range.split('!')[0] : '뉴스';
      console.log('시트 이름:', sheetName);

      const newsSheet = ss.getSheetByName(sheetName);
      console.log('시트 찾음:', !!newsSheet);

      if (!newsSheet) {
        console.log('시트를 찾을 수 없음:', sheetName);
        return ContentService.createTextOutput(
          JSON.stringify({ error: `${sheetName} 시트를 찾을 수 없습니다.` }),
        ).setMimeType(ContentService.MimeType.JSON);
      }

      // 뉴스 데이터 추가 (A: ID, B: 제목, C: 요약, D: 내용, E: 출처, F: 발행일, G: 이미지 URL, H: 원본 URL, I: 상태)
      const rowData = [
        data.id || '',
        data.title || '',
        data.summary || '',
        data.content || '',
        data.source || '',
        data.publishedAt || '',
        data.imageUrl || '',
        data.url || '',
        data.status || '공개',
      ];

      console.log('추가할 데이터:', rowData);
      newsSheet.appendRow(rowData);
      console.log('데이터 추가 완료');

      return ContentService.createTextOutput(
        JSON.stringify({ success: true, type: 'news', sheet: sheetName }),
      ).setMimeType(ContentService.MimeType.JSON);
    }

    // 지원하지 않는 logType
    return ContentService.createTextOutput(
      JSON.stringify({ error: '지원하지 않는 요청 타입입니다.' }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: error.toString() }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      message: 'PickTem Activity Logger & News Manager is running',
    }),
  ).setMimeType(ContentService.MimeType.JSON);
}
```

### 2.3 배포

1. 우측 상단 **배포** → **새 배포** 클릭
2. **배포 유형 선택** (톱니바퀴 아이콘) → **웹 앱** 선택
3. 설정:
   - **설명**: "PickTem Activity Logger" (선택)
   - **다음 사용자로 실행**: **나**
   - **액세스 권한**: **모든 사용자**
4. **배포** 클릭
5. **액세스 승인** → Google 계정 선택 → **고급** → **... 이동(안전하지 않음)** → **허용**
6. **웹 앱 URL** 복사 (예: `https://script.google.com/macros/s/AKfycb.../exec`)

## 3. 프로젝트 환경 변수 설정

`.env` 파일에 Apps Script URL 추가:

```env
VITE_GOOGLE_SHEETS_API_KEY=your_api_key
VITE_GOOGLE_SHEETS_SPREADSHEET_ID=your_spreadsheet_id
VITE_GOOGLE_SHEETS_VIDEO_RANGE=비디오!A2:J1000
VITE_GOOGLE_SHEETS_PRODUCT_RANGE=제품!A2:I1000
VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycb.../exec
```

## 4. 개발 서버 재시작

```bash
npm run dev
```

## 5. 테스트

### 5.1 활동 로그 확인

1. 웹사이트에서 비디오 클릭
2. 하트 아이콘 클릭 (좋아요)
3. 상품 "구매하러 가기" 버튼 클릭
4. Google Sheets `활동로그` 시트 확인

### 5.2 뉴스 추가 확인

1. 관리자 페이지에서 뉴스 추가
2. Google Sheets `뉴스` 시트 확인

### 5.3 예상 결과

#### 활동 로그 시트

| 고유키 | 상품명              | 카운트 | 활동 타입 | 메모 | 시간                |
| ------ | ------------------- | ------ | --------- | ---- | ------------------- |
| 1      | 크리스마스템 TOP5   | 1      | 클릭수    |      | 2025-12-03 15:30:45 |
| 1      | 크리스마스템 TOP5   | 1      | 좋아요    |      | 2025-12-03 15:31:10 |
| 1-1    | 크리스마스 테이블보 | 1      | 클릭수    |      | 2025-12-03 15:31:25 |

#### 뉴스 시트

| ID              | 제목        | 요약        | 내용           | 출처    | 발행일     | 이미지 URL  | 원본 URL    | 상태 |
| --------------- | ----------- | ----------- | -------------- | ------- | ---------- | ----------- | ----------- | ---- |
| news_1234567890 | 새로운 소식 | 간단한 요약 | 자세한 내용... | PickTem | 2025-12-03 | https://... | https://... | 공개 |

## 6. 기능 설명

### 6.1 비디오 클릭

- 비디오 카드 클릭 시 자동 기록
- 고유키: 비디오 ID
- 상품명: 비디오 제목
- 활동 타입: "클릭수"

### 6.2 비디오 좋아요

- 하트 아이콘 클릭 시 기록
- 로컬스토리지에 저장 (새로고침해도 유지)
- 고유키: 비디오 ID
- 상품명: 비디오 제목
- 활동 타입: "좋아요"

### 6.3 상품 클릭

- "구매하러 가기" 버튼 클릭 시 기록
- 고유키: 상품 ID
- 상품명: 상품 이름
- 활동 타입: "클릭수"

### 6.4 뉴스 추가

- 관리자 페이지에서 뉴스 등록 시 자동 기록
- 뉴스 시트에 데이터 추가
- 기본 상태: "공개"

## 7. 주의사항

### 7.1 no-cors 모드

- Apps Script는 CORS를 지원하지 않아 `mode: 'no-cors'` 사용
- 응답을 확인할 수 없지만 정상 작동
- 브라우저 Console에서 로그 확인 가능

### 7.2 배포 업데이트

Apps Script 코드를 수정한 경우:

1. **배포** → **배포 관리** 클릭
2. 연필 아이콘 (수정) 클릭
3. **버전**: **새 버전** 선택
4. **배포** 클릭

### 7.3 Apps Script 디버깅

Google Sheets에서 **확장 프로그램 → Apps Script → 실행 로그**를 확인해서 오류 메시지를 볼 수 있습니다.

### 7.4 로컬스토리지

- 좋아요는 브라우저 로컬스토리지에 저장
- 브라우저 쿠키/캐시 삭제 시 초기화
- 다른 브라우저/기기에서는 별도 관리

## 8. 문제 해결

### Apps Script 오류

- Google Sheets에서 **확장 프로그램** → **Apps Script** → **실행 로그** 확인
- 오류 메시지 확인

### 로그가 기록되지 않음

- `.env` 파일에 `VITE_APPS_SCRIPT_URL` 설정 확인
- Apps Script 배포 시 **액세스 권한**이 "모든 사용자"인지 확인
- 브라우저 Console에서 "활동 로그 전송" 메시지 확인

### 뉴스가 추가되지 않음

- Google Sheets에 "뉴스" 시트 존재 확인
- 뉴스 시트 헤더가 올바르게 설정되었는지 확인
- Apps Script 코드에 뉴스 추가 로직이 포함되었는지 확인
- 브라우저 Console에서 "뉴스 추가 요청 전송" 메시지 확인

### 좋아요가 유지되지 않음

- 브라우저 로컬스토리지 확인 (F12 → Application → Local Storage)
- `picktem_likes` 키 존재 확인

---

문제가 있거나 추가 지원이 필요하면 이슈를 생성해주세요.
