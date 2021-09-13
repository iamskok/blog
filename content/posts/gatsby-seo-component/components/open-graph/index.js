/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, Fragment } from "react"
import CodeBlock from "../../../../../src/components/code-block"
import PageSelector from "../common/page-selector"
import { REGEX_PATTERN, SITE_METADATA } from "../common/constants"

const { siteName, author, language, pages } = SITE_METADATA

const composeData = ({ images, ...rest }) => ({
  siteName,
  author,
  language,
  ...rest,
})

const renderContent = ({
  isArticle,
  url,
  siteName,
  language,
  title,
  description,
  image,
  imageAlt,
  published,
  modified,
  author,
}) => {
  const base = `<meta property="og:type" content="${
    isArticle ? `article` : `website`
  }" />
    <meta property="og:url" content="${url}" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:locale" content="${language}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:alt" content="${imageAlt}" />
  `
  const article = `${base}<meta property="article:published_time" content="${published}" />
    <meta property="article:modified_time" content="${modified}" />
    <meta property="article:author" content="${author}" />
  `
  const content = (isArticle ? article : base).replace(REGEX_PATTERN, ``)

  return content
}

const initialState = composeData(pages.home)
const OpenGraphPlayground = () => {
  const [state, setState] = useState(initialState)
  const [selectedPage, setSelectedPage] = useState(`home`)
  const handlePageSelection = event => setSelectedPage(event.target.value)

  useEffect(() => {
    const page = composeData(pages[selectedPage])
    setState({
      ...page,
      isArticle: selectedPage === `article`,
    })
  }, [selectedPage])

  return (
    <Fragment>
      <PageSelector onChange={handlePageSelection} />
      <CodeBlock className="language-html">{renderContent(state)}</CodeBlock>
    </Fragment>
  )
}

export default OpenGraphPlayground
