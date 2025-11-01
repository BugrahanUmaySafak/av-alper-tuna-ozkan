// public site tipi
export type Video = {
  id: string;
  title: string;
  youtubeId: string;
  createdAt: string;
  updatedAt?: string;
  // panelden gelen cloudinary kapak
  coverUrl?: string;
  // backend bazen sadece objectId döndürüyor → o zaman isim yok
  category?: {
    id: string;
    name: string;
  };
};
