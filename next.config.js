/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'instagram.fixy1-1.fna.fbcdn.net'],
  },
}

module.exports = nextConfig
