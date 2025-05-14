import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // We're setting this to true to avoid ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // During development you can enable this for faster builds
    // But for production, we want to catch type errors
    ignoreBuildErrors: false,
  }
};

export default nextConfig;
