/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  ...nextConfig,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['res.cloudinary.com'],
  },
  experimental: {
    serverActions: true,
  },
};

