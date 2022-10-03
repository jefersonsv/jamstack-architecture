const withOptimizedImages = require('next-optimized-images');

/** @type {import('next').NextConfig} */
const nextConfig = withOptimizedImages({
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'dist',
  images: {
      loader: 'custom',
  },
  images: {
    disableStaticImages: true,
    unoptimized: true,
  },
  responsive: {
    adapter: require('responsive-loader/sharp'),
    format: "webp",
  }
})

module.exports = nextConfig