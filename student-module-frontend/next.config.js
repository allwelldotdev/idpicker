/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/idpicker/student-module-frontend',
  assetPrefix: '/idpicker/student-module-frontend/',
}

module.exports = nextConfig
