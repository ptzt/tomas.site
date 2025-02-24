import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'nyc3.digitaloceanspaces.com',
        pathname: '/betzerra/coffeedb/coffee-shops/**', // Este patrón debe coincidir con la ruta completa de las imágenes
      },
    ],
  },
};

export default nextConfig;
