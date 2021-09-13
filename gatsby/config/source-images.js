const path = require("path")
const { IMAGES_PATH } = require("../../src/utils/constants")

const sourceImages = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: path.resolve(IMAGES_PATH),
  },
}

module.exports = sourceImages
