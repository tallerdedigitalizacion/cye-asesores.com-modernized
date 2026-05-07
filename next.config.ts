import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/cye-asesores.com-modernized",
  assetPrefix: "/cye-asesores.com-modernized",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
