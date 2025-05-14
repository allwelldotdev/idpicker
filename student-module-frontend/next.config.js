/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/student-module-frontend' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/student-module-frontend/' : '',
}

module.exports = nextConfig
