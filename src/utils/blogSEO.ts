// 블로그 SEO를 위한 공통 유틸리티 함수

export interface BlogSEOData {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  thumbnailUrl: string;
}

export const getBaseUrl = () => {
  return window.location.hostname === 'localhost' 
    ? 'http://localhost:3001/' 
    : 'https://ssikapicktem.co.kr/';
};

export const generateBlogStructuredData = (data: BlogSEOData) => {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}magazine/${data.id}`;
  const ogImage = `${baseUrl}${data.thumbnailUrl.replace(/^\//, '')}`;
  
  // Article 스키마
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.description,
    inLanguage: 'ko-KR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: {
      '@type': 'Person',
      name: data.author,
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
    datePublished: data.publishedAt,
    dateModified: data.publishedAt,
    articleSection: data.category,
    keywords: `${data.category}, 생활 꿀팁, ${data.title}`,
    wordCount: data.readTime * 250, // 읽기 시간 기준 대략적 단어 수
  };

  // Breadcrumb 스키마
  const breadcrumbSchema = {
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
        name: data.title,
        item: url,
      },
    ],
  };

  // Organization 스키마 (사이트 전체 정보)
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '씩아픽템',
    url: baseUrl,
    logo: `${baseUrl}favicon.png`,
    sameAs: [
      // 소셜 미디어 링크가 있다면 추가
    ],
  };

  return {
    articleSchema,
    breadcrumbSchema,
    organizationSchema,
    url,
    ogImage,
  };
};

export const generateBlogMetaTags = (data: BlogSEOData) => {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}magazine/${data.id}`;
  const ogImage = `${baseUrl}${data.thumbnailUrl.replace(/^\//, '')}`;
  
  return {
    title: `${data.title} | 씩아픽템`,
    description: data.description,
    keywords: `${data.category}, 생활 꿀팁, 추천템, ${data.title}`,
    canonical: url,
    ogType: 'article',
    ogUrl: url,
    ogTitle: data.title,
    ogDescription: data.description,
    ogImage: ogImage,
    articleAuthor: data.author,
    articlePublishedTime: data.publishedAt,
    articleSection: data.category,
    twitterCard: 'summary_large_image',
    twitterTitle: data.title,
    twitterDescription: data.description,
    twitterImage: ogImage,
  };
};

