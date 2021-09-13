/** @jsx jsx */
import { useEffect, useState, Fragment } from "react"
import { jsx, Themed } from "theme-ui"
import { Global } from "@emotion/react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { useKey } from "react-use"
import { GatsbyImage } from "gatsby-plugin-image"
import { ScrollProvider } from "../../components/scroll-provider"
import {
  NotationProvider,
  notationRef,
} from "../../components/notation-provider"
import useSiteMetadata from "../../hooks/use-site-metadata"
import Layout from "../../components/layout"
import PostMeta from "../../components/post-meta"
import Pagination from "../../components/pagination"
import scrollCodeBlock from "../../components/code-block/scroller"
import ScrollProgress from "../../components/scroll-progress"

const Post = ({
  data: {
    mdx: {
      body,
      frontmatter: {
        title,
        description,
        image: {
          childImageSharp: { gatsbyImageData, ...seoImages },
        },
        imageAlt,
        datePublished,
        dateModified,
      },
    },
  },
  pageContext: {
    previousPost,
    nextPost,
    slug,
    tableOfContents: {
      ids: tableOfContentsHeaderIds,
      items: tableOfContentsItems,
    },
  },
}) => {
  const {
    pages: {
      post: { id, type },
    },
  } = useSiteMetadata()
  const [isSmoothScroll, setIsSmoothScroll] = useState(false)

  // Avoid page jumping by applying the smooth scroll behavior after component mount
  useEffect(() => {
    setIsSmoothScroll(true)
    return () => setIsSmoothScroll(false)
  }, [])

  // Add event listeners for CodeBlock horizontal scrolling
  useKey(`ArrowLeft`, event => scrollCodeBlock(event, `left`))
  useKey(`ArrowRight`, event => scrollCodeBlock(event, `right`))

  return (
    <Fragment>
      {isSmoothScroll && <SmoothScroll />}
      <NotationProvider>
        <ScrollProvider>
          <ScrollProgress />
          <Layout
            pageId={id}
            type={type}
            slug={slug}
            title={title}
            description={description}
            images={{ ...seoImages }}
            imageAlt={imageAlt}
            datePublished={datePublished}
            dateModified={dateModified}
          >
            {gatsbyImageData && imageAlt && (
              <GatsbyImage image={gatsbyImageData} alt={imageAlt} />
            )}
            <div ref={notationRef}>
              <Themed.h1>{title}</Themed.h1>
              <PostMeta slug={slug} date={datePublished} />
              <MDXRenderer
                tableOfContentsItems={tableOfContentsItems}
                tableOfContentsHeaderIds={tableOfContentsHeaderIds}
              >
                {body}
              </MDXRenderer>
            </div>
            {(previousPost || nextPost) && (
              <Pagination previous={previousPost} next={nextPost} />
            )}
          </Layout>
        </ScrollProvider>
      </NotationProvider>
    </Fragment>
  )
}

const SmoothScroll = () => (
  <Global styles={{ html: { scrollBehavior: `smooth` } }} />
)

export default Post

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        ...FrontmatterFields
        image {
          childImageSharp {
            ...ImageUrlFields
          }
        }
      }
    }
  }
`
