/** @type {import('next').NextConfig} */
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const { withPlaiceholder } = require("@plaiceholder/next");
const withPWA = require("next-pwa");

module.exports = withPWA(
  withPlaiceholder({
    reactStrictMode: true,
    webpack(config) {
      config.plugins.push(new WindiCSSWebpackPlugin)
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      })
      return config
    },
    images: {
      domains: ['avatars.githubusercontent.com', 'cdn.jsdelivr.net', 'img.zhheo.com', 'rxhsk.xicp.fun', 'raw.githubusercontent.com', 'imgse.com', 'static.com'],
    },
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
    },
  }))
