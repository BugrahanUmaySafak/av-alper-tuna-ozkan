export type Article = {
  id: string;
  title: string;
  content: string; // HTML
  slug: string;
  excerpt: string;
  image: { url: string; alt: string };
  keywords: string[];
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
};
