import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Fuerza a Next.js a servir imágenes sin optimización
  },
};

export default nextConfig;