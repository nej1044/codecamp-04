module.exports = {
  reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  generateBuildId: () => "develofirm",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
    "/cart": { page: "/cart" },
    "/lecture": { page: "/lecture" },
    "/mypage": { page: "/mypage" },
    "/news": { page: "/news" },
    "/signup": { page: "/signup" },
  }),
};
