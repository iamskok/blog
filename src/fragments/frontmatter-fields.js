import { graphql } from "gatsby"

export const FrontmatterFields = graphql`
  fragment FrontmatterFields on MdxFrontmatter {
    title
    description
    datePublished(formatString: "MMMM DD, YYYY")
    dateModified(formatString: "MMMM DD, YYYY")
    image {
      childImageSharp {
        gatsbyImageData(
          width: 900
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    imageAlt
  }
`
