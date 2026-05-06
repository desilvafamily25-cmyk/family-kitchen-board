import type { NextConfig } from "next"

const config: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pausesleep.com.au",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/prescription-care/hormone-therapy", destination: "/menopause/hormone-therapy", permanent: true },
      { source: "/prescription-care/weight-metabolic", destination: "/services", permanent: true },
      { source: "/sleep-plan", destination: "/sleep", permanent: true },
      { source: "/learn", destination: "/articles", permanent: true },
      { source: "/blog", destination: "/articles", permanent: true },
      { source: "/article/:slug*", destination: "/articles/:slug*", permanent: true },
      { source: "/menopause/free-assessment", destination: "/assessment", permanent: true },
    ]
  },
}

export default config
