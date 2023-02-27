/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  paths: {
    '@components/*': ['src/components/*']
  }
}

module.exports = nextConfig
