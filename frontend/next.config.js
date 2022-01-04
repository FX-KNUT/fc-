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
    deviceSizes: [480, 768, 1280],
  },

  // svg
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
