import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "source.unsplash.com",
      "pixabay.com",
      "cdn.pixabay.com",
      "picsum.photos",
      "fastly.picsum.photos",
    ],
  },
};

export default nextConfig;
