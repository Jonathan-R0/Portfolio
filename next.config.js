/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  // A global 404 is needed because each language has its own HTML root layout.
  experimental: { globalNotFound: true },
};

module.exports = nextConfig;
