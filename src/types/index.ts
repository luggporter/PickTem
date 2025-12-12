export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  affiliateUrl: string;
  price?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  products: Product[];
  category?: string;
  publishedAt?: string;
}

export interface MagazineArticle {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  category?: string;
  author?: string;
  readTime?: number; // 읽기 시간 (분)
}
