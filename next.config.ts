import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'queensmobiletires.com',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }
    ],
  },
  async redirects() {
    return [
      // 301 Redirects to preserve SEO rankings
      // Add your old URL patterns here. Example:
      // {
      //   source: '/old-category/:slug',
      //   destination: '/:slug',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
