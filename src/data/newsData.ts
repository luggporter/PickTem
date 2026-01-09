// 뉴스 데이터
export interface NewsItem {
  id: string
  title: string
  summary: string
  content: string
  source: string
  publishedAt: string
  imageUrl?: string
  url: string
  fullHeight?: number // 뉴스 기사의 전체 높이 (픽셀)
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: '연예계 은퇴합니다..돌연 충격 선언한 조윤우·소희·이태임',
    summary: '화려했던 연예계 삶을 뒤로 하고 평범한 제2의 인생을 선택했다.',
    content: '배우 조윤우, 앨리스 소희, 이태임이 연예계 은퇴를 선언했습니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/starnews.jpg',
    url: 'https://v.daum.net/v/20260108070604180',
  },
  {
    id: '2',
    title: '방탄소년단, 3월 20일 컴백 앞두고 경사..\'필터\' 스포티파이 5억회 돌파',
    summary: 'BTS의 \'Filter\'가 Spotify에서 5억 스트리밍을 돌파했습니다.',
    content: '방탄소년단의 곡 \'Filter\'가 Spotify에서 5억 회 스트리밍을 돌파하는 기록을 세웠습니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/bts-filter.jpg',
    url: 'https://v.daum.net/v/20260108070604181',
    fullHeight: 800 // 실제 뉴스 기사 높이의 20% = 160px 표시
  },
  {
    id: '3',
    title: '조용필 한달음에..故 안성기 빈소, 박중훈→이정재 조문 행렬',
    summary: '故 안성기 빈소에 연예계 스타들의 조문이 이어지고 있습니다.',
    content: '배우 안성기의 빈소에 조용필, 박중훈, 이정재 등 많은 스타들이 조문을 왔습니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/ahn-sungki.jpg',
    url: 'https://v.daum.net/v/20260108070604182',
    fullHeight: 1100 // 실제 뉴스 기사 높이의 20% = 220px 표시
  },
  {
    id: '4',
    title: '\'김지민♥\' 김준호, 해외서 파격 노출.."경범죄로 체포될 듯"',
    summary: '김준호가 해외에서 파격적인 노출을 해 화제가 되었습니다.',
    content: '배우 김준호가 해외 여행 중 파격적인 노출 사진이 공개되어 화제를 모으고 있습니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/kim-joon-ho.jpg',
    url: 'https://v.daum.net/v/20260108070604183',
    fullHeight: 750 // 실제 뉴스 기사 높이의 20% = 150px 표시
  },
  {
    id: '5',
    title: '\'김태희♥\' 비, 난리통 연예계 속 의미심장 일침.."나태하면 사건·사고 나"',
    summary: '비가 최근 연예계 사건들에 대해 의미심장한 발언을 했습니다.',
    content: '가수 비가 최근 연예계의 여러 사건들에 대해 경고의 메시지를 전했습니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/rain-kim-tae-hee.jpg',
    url: 'https://v.daum.net/v/20260108070604184',
    fullHeight: 900 // 실제 뉴스 기사 높이의 20% = 180px 표시
  },
  {
    id: '6',
    title: '\'故장제원 아들\' 노엘 "구치소서 58kg→95kg" 모습 보니',
    summary: '장제원 아들 노엘의 구치소 생활이 공개되었습니다.',
    content: '故 장제원 전 의원의 아들 노엘의 구치소 생활 모습이 공개되어 화제입니다.',
    source: '스타뉴스',
    publishedAt: '2026-01-08',
    imageUrl: '/images/news/noel.jpg',
    url: 'https://v.daum.net/v/20260108070604185',
    fullHeight: 850 // 실제 뉴스 기사 높이의 20% = 170px 표시
  }
]

export default newsData
