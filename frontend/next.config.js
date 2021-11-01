module.exports = {
  reactStrictMode: true,

  // swc 사용
  swcMinify: true,

  // Suspense
  experimental: {
    concurrentFeatures: true,
  },

  // AVIF
  images: {
    formats: ["image/avif", "image/webp"],
  },
};
