const path = require("path")
const { POSTS_PATH } = require("../../src/utils/constants")

const sourcePosts = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `posts`,
    path: path.resolve(POSTS_PATH),
  },
}

module.exports = sourcePosts
