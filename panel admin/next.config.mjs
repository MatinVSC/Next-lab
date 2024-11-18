/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
    ],
  },
};

export default nextConfig;
