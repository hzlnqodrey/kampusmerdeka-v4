/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/kampusmerdeka_kemdikbud_go_id/mitra/**',
      },
    ],
  },
}

module.exports = nextConfig
