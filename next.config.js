/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.mhw-db.com",
        port: "",
        pathname: "/weapons/**",
      },
      {
        protocol: "https",
        hostname: "assets.mhw-db.com",
        port: "",
        pathname: "/armor/**",
      },
    ],
  },
};

module.exports = nextConfig;
