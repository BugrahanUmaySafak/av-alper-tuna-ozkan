export type Article = {
  id: string;
  title: string;
  slug: string;
  content: string;
  image: {
    url: string;
    alt: string;
    tinyUrl?: string;
    publicId?: string;
  };
  summary?: string;
  category?: { id: string; name: string };
  keywords: string[];
  // ikisini de tut
  createdAt: string;
  updatedAt?: string;
  readingMinutes?: number;
};
