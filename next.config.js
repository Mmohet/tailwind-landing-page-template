/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? '/tailwind-landing-page-template' : '',
  assetPrefix: isProd ? '/tailwind-landing-page-template' : '',
};

module.exports = nextConfig;
