/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import CodeBlock from "../../../../../src/components/code-block"
import PageSelector from "../common/page-selector"
import { REGEX_PATTERN, SITE_METADATA } from "../common/constants"

const { creator, pages } = SITE_METADATA

const composeData = ({ title, description, image, imageAlt }) => ({
  creator,
  title,
  description,
  image,
  imageAlt,
})

const renderContent = ({ title, description, image, imageAlt, creator }) =>
  `
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${imageAlt}" />
  <meta name="twitter:creator" content="${creator}" />
`.replace(REGEX_PATTERN, ``)

const initialState = composeData(pages.home)
const TwitterPlayground = () => {
  const [state, setState] = useState(initialState)
  const [selectedPage, setSelectedPage] = useState(`home`)
  const handlePageSelection = event => setSelectedPage(event.target.value)

  useEffect(() => setState(composeData(pages[selectedPage])), [selectedPage])

  return (
    <Fragment>
      <PageSelector onChange={handlePageSelection} />
      <CodeBlock className="language-html">{renderContent(state)}</CodeBlock>
    </Fragment>
  )
}

export default TwitterPlayground
