import React, { Fragment } from "react"
import { Themed, Box } from "theme-ui"
import Link from "../../../../src/components/link"
import slashify from "../../../../src/utils/slashify"

const SeriesIntro = ({ part }) => (
  <Fragment>
    <Themed.p>
      This is a 4 part series about building{` `}
      <Themed.strong>SEO-optimized Gatsby blog</Themed.strong>.
    </Themed.p>
    <Themed.ol>
      <Themed.li>
        <Box
          as={Number(part) === 1 ? `span` : Link}
          to={slashify(`blog`, `gatsby-node-and-config-files`)}
        >
          <Themed.inlineCode>gatsby-config.js</Themed.inlineCode> and{` `}
          <Themed.inlineCode>gatsby-node.js</Themed.inlineCode> files
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 2 ? `span` : Link}
          to={slashify(`blog`, `gatsby-graphql-fragments`)}
        >
          GraphQL Fragments
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 3 ? `span` : Link}
          to={slashify(`blog`, `gatsby-seo-component`)}
        >
          SEO component
        </Box>
      </Themed.li>
      <Themed.li>
        <Box
          as={Number(part) === 4 ? `span` : Link}
          to={slashify(`blog`, `gatsby-sitemap-and-robots-txt-files`)}
        >
          <Themed.inlineCode>sitemap.xml</Themed.inlineCode> and{` `}
          <Themed.inlineCode>robots.txt</Themed.inlineCode>
        </Box>
      </Themed.li>
    </Themed.ol>
  </Fragment>
)

export default SeriesIntro
