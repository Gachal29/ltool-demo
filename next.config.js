/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "scrapbox.io"
    ]
  },
  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400"
          }
        ]
      }
    ]
  },  
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Link",
            value: "/favicons/favicon.ico; rel=icon"
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
