/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // This replaces the old webpack 'raw-loader' usage
        '*.md': {
          loaders: ['raw-loader'],
          as: 'asset/source',
        },
      },
    },
  },
};

module.exports = nextConfig;