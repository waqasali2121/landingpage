import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: "export",
  // In production, we are hosted at https://waqasali2121.github.io/landingpage/
  assetPrefix: isProd ? '/landingpage/' : '',
  basePath: isProd ? '/landingpage' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
