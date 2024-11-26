import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: "export", // Enables static export mode
  images: {
    unoptimized: true, // Ensures images work with static export
  },
};
export default nextConfig;
