/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // Compression
  compress: true,

  // Image optimization
  images: {
    // Enable AVIF + WebP formats for modern browsers
    formats: ["image/avif", "image/webp"],
    // Minimize unused image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 144, 176, 256, 384],
    // Cache images for 60 days
    minimumCacheTTL: 5184000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },

  // Security headers + performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Improve caching for static assets
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          // Security
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      // Long-term cache for audio files
      {
        source: "/audio/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Long-term cache for images
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
