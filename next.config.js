/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async rewrites() {
    return [{ source: "/next/api/:path*", destination: "/api/:path*" }];
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
