import React from "react"
import { Themed } from "theme-ui"
import Link from "../../../../src/components/link"

const GITHUB_URL = `https://github.com/iamskok/gatsby-seo`
const LIVE_BLOG_URL = `https://gatsby-seo-draft.netlify.com`

const CompletedProjectLinks = () => (
  <Themed.p>
    At any point of time feel free to checkout the source code in{` `}
    <Link href={GITHUB_URL}>GitHub</Link> or the{` `}
    <Link href={LIVE_BLOG_URL}>live blog</Link>.
  </Themed.p>
)

export default CompletedProjectLinks
