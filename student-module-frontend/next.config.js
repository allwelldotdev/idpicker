/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Remove any middleware or update output strategy
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
