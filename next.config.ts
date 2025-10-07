import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
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
