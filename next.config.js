/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  // assetPrefix: "./",
  // images: {
  //   // loader: "custom",
  //   // // path:"/"
  //   minimumCacheTTL: 1500000,
  //   loader: "default",
  //   // loaderFile: "./src/utils/imageloader.ts",
  //   unoptimized: true,
  // },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import './src/styles/main.scss';`,
  },
}

module.exports = nextConfig
