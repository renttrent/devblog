module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
