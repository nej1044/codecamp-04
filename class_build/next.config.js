module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "develofirm",
  exportPathMap: () => ({
    "/": { page: "/" },
    "/boards": { page: "/boards" },
    "/404": { page: "/404" },
  }),
};
