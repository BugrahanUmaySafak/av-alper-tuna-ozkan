// public site tipi
export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  createdAt: string;
  updatedAt?: string;
  coverUrl?: string;
  category?: {
    id: string;
    name: string;
  };
};
