const siteUrl = require("../../config/site-url")
const pages = require("../../config/pages")
const slashify = require("../../src/utils/slashify")

const sitemap = {
  resolve: `gatsby-plugin-sitemap`,
  options: {
    query: `{
      allMdx {
        nodes {
          frontmatter {
            datePublished
            dateModified
          }
          fields {
            slug
          }
        }
      }
    }`,
    resolveSiteUrl: () => siteUrl,
    resolvePages: ({ allMdx: { nodes } }) => {
      const {
        blog: { pathName: blogPathName },
      } = pages

      const allPages = Object.values(pages).reduce((acc, { pathName }) => {
        if (pathName) {
          acc.push({ path: slashify(pathName) })
        }
        return acc
      }, [])

      const allArticles = nodes.map(
        ({
          frontmatter: { datePublished, dateModified },
          fields: { slug },
        }) => ({
          path: slashify(blogPathName, slug),
          lastmod: dateModified ? dateModified : datePublished,
        })
      )

      return [...allPages, ...allArticles]
    },
    serialize: ({ path: url, lastmod }) => ({
      url,
      lastmod,
    }),
  },
}

module.exports = sitemap
