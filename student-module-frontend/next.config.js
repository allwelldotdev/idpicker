const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  transpilePackages: ['three'],
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    config.externals = [...(config.externals || []), { canvas: 'canvas' }]
    return config;
  },
};

module.exports = nextConfig;
