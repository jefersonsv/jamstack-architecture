const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: false,
  swcMinify: true,
  distDir: 'dist',
  images: {
    domains: ['dummyimage.com'],
    loader: 'custom',
    disableStaticImages: true,
    unoptimized: true,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    format: 'webp',
  },
});

module.exports = nextConfig;
