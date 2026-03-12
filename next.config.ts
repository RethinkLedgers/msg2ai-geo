import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve static assets from the GEO deployment directly so they load
  // correctly when pages are proxied through the main msg2ai.xyz site.
  assetPrefix: "https://msg2ai-geo.vercel.app",
};

export default nextConfig;
