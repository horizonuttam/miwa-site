import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Wix URLs -> new URLs. Add more as you find them in Search Console.
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/blog-1", destination: "/blog", permanent: true },
      { source: "/post/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/blog/categories/:category", destination: "/blog", permanent: true },
      { source: "/blog/page/:n", destination: "/blog", permanent: true },
      { source: "/blog/hashtags/:tag", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
