/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["192.168.1.19"],
  env: {
    NEXT_PUBLIC_ACCESS_CODE: process.env.ACCESS_CODE,
  },
  webpack: (config) => {
    // Add rule for handling JSON files
    config.module.rules.push({
      test: /\.json$/,
      type: 'json'
    });
    return config;
  }
}

module.exports = nextConfig
