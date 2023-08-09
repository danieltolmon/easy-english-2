module.exports = {
  images: {
    domains: ['a.storyblok.com'],
  },
  i18n: {
    localeDetection: false,
    locales: ["en", "es", "ca"],
    defaultLocale: "es",
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"]
  //   });

  //   config.resolve.fallback = { fs: false, net: false, tls: false };

  //   return config;
  // },
};