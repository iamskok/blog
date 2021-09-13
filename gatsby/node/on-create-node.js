const { createFilePath } = require("gatsby-source-filesystem")

const onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `Mdx`) {
    createNodeField({
      name: `slug`,
      value: createFilePath({ node, getNode }).replace(/\//g, ``),
      node,
    })
  }
}

module.exports = onCreateNode
