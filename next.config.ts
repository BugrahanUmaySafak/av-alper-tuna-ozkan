// next.config.ts
import type { NextConfig } from "next";

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 360, 375, 390, 414, 480, 540, 640, 720, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "/**" },
      { protocol: "https", hostname: "img.youtube.com", pathname: "/vi/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
    qualities: [60, 65, 72, 78],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
} satisfies NextConfig;

export default nextConfig;
