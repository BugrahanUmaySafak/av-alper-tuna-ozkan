// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 360, 375, 390, 414, 480, 540, 640, 720, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 78, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // bulut adın farklıysa burayı değiştir
        pathname: "/dhd5qma6b/image/upload/**",
      },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    // uyarıyı susturmak için
    qualities: [55, 60, 65, 70, 72, 75, 78, 80],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
