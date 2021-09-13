const remarkSlug = require("remark-slug")

const mdx = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    extensions: [`.mdx`, `.md`],
    remarkPlugins: [remarkSlug],
    gatsbyRemarkPlugins: [
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 900,
          withWebp: true,
          quality: 100,
          loading: `lazy`,
          linkImagesToOriginal: false,
        },
      },
    ],
  },
}

module.exports = mdx
