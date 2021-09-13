const path = require("path")
const pages = require("../../config/pages")
const {
  tableOfContents: tableOfContentsConfig,
} = require("../../config/components")
const slashify = require("../../src/utils/slashify")
const { POST_TEMPLATE_PATH } = require("../../src/utils/constants")

const query = `
  query {
    allMdx(sort: { order: DESC, fields: [frontmatter___datePublished] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          tableOfContents
          frontmatter {
            title
            hasIntro
          }
        }
      }
    }
  }
`

const createPages = async ({ actions: { createPage }, graphql, reporter }) => {
  const {
    data: {
      allMdx: { edges },
    },
    errors,
  } = await graphql(query)

  if (errors) {
    reporter.panicOnBuild(`There was an error loading posts`, errors)
    return
  }

  edges.forEach(
    (
      {
        node: {
          id,
          fields: { slug },
          tableOfContents: { items: tableOfContentsItems },
          frontmatter: { hasIntro: hasTableOfContentsIntro = true },
        },
      },
      index
    ) => {
      const {
        blog: { pathName: blogPathName },
      } = pages

      const tableOfContents = getTableOfContents(
        tableOfContentsItems,
        hasTableOfContentsIntro
      )

      const { previous: previousPost, next: nextPost } = getNearbyPosts(
        edges,
        index,
        blogPathName
      )

      createPage({
        path: slashify(blogPathName, slug),
        component: path.resolve(POST_TEMPLATE_PATH),
        context: {
          id,
          slug,
          tableOfContents,
          previousPost,
          nextPost,
        },
      })
    }
  )
}

// Get title and URL of the previous and next posts
const getNearbyPosts = (edges, index, pathName) => {
  const isPrevious = index !== 0
  const isNext = index !== edges.length - 1

  const previousEdge = isPrevious ? edges[index - 1] : null
  const nextEdge = isNext ? edges[index + 1] : null

  return {
    previous: previousEdge
      ? {
          url: getPostUrl(previousEdge, pathName),
          title: getPostTitle(previousEdge),
        }
      : null,
    next: nextEdge
      ? {
          url: getPostUrl(nextEdge, pathName),
          title: getPostTitle(nextEdge),
        }
      : null,
  }
}

// `getNearbyPosts` helpers
const getPostTitle = edge => edge?.node?.frontmatter?.title
const getPostSlug = edge => edge?.node?.fields?.slug
const getPostUrl = (edge, pathName) => slashify(pathName, getPostSlug(edge))

// Get the list of header IDs per post
const getHeaderIds = (items = []) =>
  items.reduce((acc, { url, items: childItems }) => {
    if (url) {
      acc.push(url.replace(`#`, ``))
    }

    if (childItems) {
      acc.push(...getHeaderIds(childItems))
    }

    return acc
  }, [])

// Get the table of contents data per post
const getTableOfContents = (items = [], hasIntro) => {
  const { introId, introTitle } = tableOfContentsConfig
  const introItem = {
    url: `#${introId}`,
    title: introTitle,
  }

  // Add intro unless it's explicitly set to false
  const shouldIncludeIntro = hasIntro === null ? true : hasIntro
  const allItems = shouldIncludeIntro ? [introItem, ...items] : items

  return {
    ids: getHeaderIds(allItems),
    items: allItems,
  }
}

module.exports = createPages
