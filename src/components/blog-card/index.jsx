/** @jsx jsx */
import { jsx, Card, Themed } from "theme-ui"
import { GatsbyImage } from "gatsby-plugin-image"
import Link from "../link"

const BlogCard = ({
  post: {
    frontmatter: {
      title,
      description,
      image: {
        childImageSharp: { gatsbyImageData },
      },
      imageAlt,
    },
  },
  relativeUrl,
}) => {
  return (
    <Link
      to={relativeUrl}
      sx={{
        textDecoration: `none`,
        margin: 0,
        padding: 0,
        marginBottom: 4,
        borderRadius: 2,
        transition: `blogCard`,
        "&:hover, &:focus-visible": {
          ".blog-card": {
            boxShadow: `active`,
          },
          ".blog-card-header": {
            color: `primary`,
          },
        },
      }}
    >
      <Card
        as="article"
        className="blog-card"
        sx={{
          margin: 0,
          padding: 3,
          borderRadius: 2,
          boxShadow: `default`,
          transition: `card`,
        }}
      >
        {gatsbyImageData && imageAlt && (
          <GatsbyImage image={gatsbyImageData} alt={imageAlt} />
        )}

        <Themed.h2
          className="blog-card-header"
          sx={{
            color: `text`,
            marginTop: 0,
            transition: `blogCardHeader`,
          }}
        >
          {title}
        </Themed.h2>

        <Themed.p
          sx={{
            color: `text`,
            transition: `blogCardHeaderParagraph`,
          }}
        >
          {description}
        </Themed.p>
      </Card>
    </Link>
  )
}

export default BlogCard
