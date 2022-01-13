module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["img.icons8.com", "images.ctfassets.net"],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
};
