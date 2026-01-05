// next.config.js
const withCSS = require('@zeit/next-css')

const basePath = '/McMurtry-Website'

module.exports = withCSS({
  // Use basePath for GitHub Pages deployment at subdirectory
  basePath: basePath,
  assetPrefix: basePath,
  env: {
    BASE_PATH: basePath,
  },
  publicRuntimeConfig: {
    basePath: basePath,
  },
})