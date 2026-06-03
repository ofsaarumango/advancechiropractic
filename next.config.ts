import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  // To allow HMR (Hot Module Replacement) from the local network IP
  experimental: {
    // Some versions of Next.js place allowedDevOrigins inside experimental, others at root.
    // At root might throw type errors in TypeScript, so we can ignore it or use experimental.
  },
  allowedDevOrigins: ['192.168.1.11'] as string[],
};

export default nextConfig;
