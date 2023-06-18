/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['robohash.org'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
