import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com', // GitHub's raw domain
        port: '', // No port required
        pathname: '/18K-Radio/18K/refs/heads/main/images/**', // Pattern for image paths
      },
    ],
  },
};

export default nextConfig;
