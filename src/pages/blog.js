/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import useSiteMetadata from "../hooks/use-site-metadata"
import BlogCard from "../components/blog-card"
import slashify from "../utils/slashify"

const Blog = ({
  data: {
    allMdx: { edges },
    file: { childImageSharp: seoImages },
  },
}) => {
  const {
    pages: {
      blog: { id, pathName, title, description, imageAlt, breadcrumb, type },
    },
  } = useSiteMetadata()
  const posts = edges.map(({ node }) => node)

  return (
    <Layout
      pageId={id}
      pathName={pathName}
      title={title}
      description={description}
      images={{ ...seoImages }}
      imageAlt={imageAlt}
      breadcrumb={breadcrumb}
      type={type}
    >
      <Themed.h1>{title}</Themed.h1>

      {posts.map(({ id, fields: { slug }, ...post }) => (
        <BlogCard key={id} relativeUrl={slashify(pathName, slug)} post={post} />
      ))}
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query ($image: String) {
    file(absolutePath: { eq: $image }) {
      childImageSharp {
        ...ImageUrlFields
      }
    }
    allMdx(sort: { order: DESC, fields: [frontmatter___datePublished] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            ...FrontmatterFields
          }
        }
      }
    }
  }
`
