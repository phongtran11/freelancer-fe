/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'dimoaq.s3.ap-northeast-1.amazonaws.com',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'graph.facebook.com',
      'localhost:4200',
    ],
  },
}

module.exports = nextConfig
