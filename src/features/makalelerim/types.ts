export type Article = {
  id: string;
  title: string;
  content: string;
  slug: string;
  image: { url: string; alt: string; tinyUrl?: string };
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
  };
};
