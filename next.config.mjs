// next.config.mjs
console.log(">>> Next is using next.config.mjs with output: export");

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};
export default nextConfig;
