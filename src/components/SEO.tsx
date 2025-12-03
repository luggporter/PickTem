import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonical?: string
  structuredData?: object
}

const SEO = ({
  title = 'SsikAPickTem - 오늘의 추천템 몰아보기',
  description = '인스타그램 릴스, 유튜브 쇼츠에서 소개된 인기 상품을 한눈에! 씩아픽템에서 오늘의 추천 상품을 간편하게 찾아보세요.',
  keywords = '추천템, 인스타 추천템, 유튜브 쇼츠, 인기상품, 테무, 알리익스프레스, 쇼핑몰, 추천상품, 씨카, 픽템',
  ogImage = 'https://ssikapicktem.co.kr/Ssikapicktem_OG.png',
  ogType = 'website',
  canonical = 'https://ssikapicktem.co.kr/',
  structuredData
}: SEOProps) => {
  const siteUrl = 'https://ssikapicktem.co.kr'
  const fullCanonical = canonical.startsWith('http') ? canonical : `${siteUrl}${canonical}`
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  return (
    <Helmet>
      {/* 기본 메타 태그 */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:site_name" content="SsikAPickTem" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* 구조화된 데이터 (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO

