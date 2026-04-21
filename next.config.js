/** @type {import('next').NextConfig} */
const basePath = process.env.BASE_PATH ?? '/tailwind-landing-page-template';

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

module.exports = nextConfig;
