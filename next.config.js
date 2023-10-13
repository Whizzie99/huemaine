/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
