/** @jsx jsx */
import { Fragment } from "react"
import { jsx, Embed, Box } from "theme-ui"
import { useBreakpointIndex } from "@theme-ui/match-media"
import Link from "../../../../src/components/link"

const GraphiQLIframe = ({
  title = `Gatsby GraphiQL playground`,
  url = `https://gatsby-seo.skok.dev/___graphql?query=`,
  query,
}) => {
  const isMobile = useBreakpointIndex() === 0

  return isMobile ? (
    <Fragment />
  ) : (
    <Fragment>
      <span
        sx={{
          display: `inline-block`,
          fontSize: `14px`,
          color: `secondary`,
          marginBottom: 0,
        }}
      >
        GraphiQL is an in-browser IDE for writing, validating, and testing
        GraphQL queries. You can play with the above code example right from
        here. This IDE is connected to Gatsby&apos;s running{` `}
        <Link href="https://github.com/iamskok/gatsby-seo/blob/master/docker-compose.yml">
          development server
        </Link>
        .
      </span>
      <Box
        sx={{
          display: [`none`, `block`],
          width: `100vw`,
          position: `relative`,
          left: `50%`,
          marginLeft: `-50vw`,
        }}
      >
        <Embed title={title} src={`${url}${query}`} loading="lazy" />
      </Box>
    </Fragment>
  )
}

export default GraphiQLIframe
