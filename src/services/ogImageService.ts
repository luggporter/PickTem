/**
 * HTML 엔티티를 디코딩하는 함수
 */
function decodeHtmlEntities(text: string): string {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

/**
 * URL에서 OG 이미지를 추출하는 서비스
 */

export interface OGData {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  siteName?: string;
}

/**
 * URL에서 HTML을 가져와서 OG 메타 태그를 파싱합니다.
 */
export async function fetchOGData(url: string): Promise<OGData> {
  try {
    // 직접 fetch 시도 (User-Agent 헤더로 브라우저 요청 시뮬레이션)
    try {
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
        }
      })

      if (response.ok) {
        const html = await response.text()
        return parseOGTags(html)
      }
    } catch (error) {
      console.log('직접 fetch 실패, 프록시 시도:', error)
    }

    // 직접 fetch 실패 시 corsproxy.org 프록시 사용
    const proxyUrl = `https://corsproxy.org/?${encodeURIComponent(url)}`
    const response = await fetch(proxyUrl)

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const html = await response.text()
    return parseOGTags(html)
  } catch (error) {
    console.error('OG 데이터 가져오기 실패:', error)
    throw new Error('OG 데이터를 가져올 수 없습니다.')
  }
}

/**
 * HTML에서 OG 메타 태그를 파싱합니다.
 */
function parseOGTags(html: string): OGData {
  const ogData: OGData = {}

  // 정규식을 사용한 간단한 OG 태그 파싱
  const metaRegex = /<meta[^>]*property=["']([^"']*?)["'][^>]*content=["']([^"']*?)["'][^>]*>/gi
  const titleRegex = /<title[^>]*>(.*?)<\/title>/i

  let match

  // OG 메타 태그 파싱
  while ((match = metaRegex.exec(html)) !== null) {
    const property = match[1]
    const content = match[2]

    switch (property) {
      case 'og:title':
        ogData.title = decodeHtmlEntities(content)
        break
      case 'og:description':
        ogData.description = decodeHtmlEntities(content)
        break
      case 'og:image':
        console.log('Original OG image content:', content)
        // 이미지 URL이 상대 URL인 경우 절대 URL로 변환
        if (content) {
          if (content.startsWith('http')) {
            // 이미 절대 URL
            ogData.image = content
          } else if (content.startsWith('//')) {
            // 프로토콜 상대 URL - 도메인만 추출해서 올바른 URL 구성
            const urlParts = content.substring(2).split('/')
            if (urlParts.length >= 2) {
              // //thumbnews.nateimg.co.kr/view610//news.nateimg.co.kr/orgImg/...
              // -> https://news.nateimg.co.kr/orgImg/...
              const domainIndex = urlParts.findIndex(part => part.includes('.nateimg.co.kr'))
              if (domainIndex !== -1) {
                // 실제 이미지 도메인부터 시작하도록 재구성
                ogData.image = `https://${urlParts.slice(domainIndex).join('/')}`
              } else {
                ogData.image = `https:${content}`
              }
            } else {
              ogData.image = `https:${content}`
            }
          } else {
            // 상대 경로 - 현재는 그대로 사용 (추후 개선 필요)
            ogData.image = content
          }

          // URL 정제: 잘못된 패턴 수정
          if (ogData.image) {
            ogData.image = ogData.image
              .replace(/\/+/g, '/')  // 연속된 슬래시를 하나로
              .replace(/^(https?:\/)([^/])/, '$1/$2')  // 프로토콜 뒤 슬래시 보장
          }

          console.log('Processed OG image URL:', ogData.image)
        }
        break
      case 'og:url':
        ogData.url = content
        break
      case 'og:site_name':
        ogData.siteName = decodeHtmlEntities(content)
        break
    }
  }

  // OG 태그가 없으면 일반 title 태그 사용
  if (!ogData.title) {
    const titleMatch = titleRegex.exec(html)
    if (titleMatch) {
      ogData.title = decodeHtmlEntities(titleMatch[1].trim())
    }
  }

  return ogData
}

/**
 * URL이 유효한지 확인합니다.
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * 상대 URL을 절대 URL로 변환합니다.
 */
export function resolveUrl(baseUrl: string, relativeUrl: string): string {
  try {
    return new URL(relativeUrl, baseUrl).href
  } catch {
    return relativeUrl
  }
}
