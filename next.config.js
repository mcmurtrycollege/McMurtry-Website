// next.config.js
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  // Use basePath for GitHub Pages deployment at subdirectory
  basePath: '/McMurtry-Website',
  assetPrefix: '/McMurtry-Website',
})