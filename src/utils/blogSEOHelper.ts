// 블로그 SEO 개선을 위한 공통 헬퍼 함수

export const createArticleSchema = (
  title: string,
  description: string,
  url: string,
  author: string,
  baseUrl: string,
  ogImage: string,
  datePublished: string,
  dateModified: string,
  category: string,
  readTime: number
) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  inLanguage: 'ko-KR',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': url,
  },
  author: {
    '@type': 'Person',
    name: author,
  },
  publisher: {
    '@type': 'Organization',
    name: '씩아픽템',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}favicon.png`,
    },
  },
  image: [ogImage],
  datePublished,
  dateModified,
  articleSection: category,
  keywords: `${category}, 생활 꿀팁`,
  wordCount: readTime * 250,
});

export const createBreadcrumbSchema = (
  baseUrl: string,
  title: string,
  url: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: '홈',
      item: baseUrl,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: '메거진',
      item: `${baseUrl}magazine`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: title,
      item: url,
    },
  ],
});


