import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "images.unsplash.com", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/vi/**", // YouTube video thumbnail path
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**", // Eğer placeholder görselleri de kullanıyorsan
      },
    ],
  },
};

export default nextConfig;
