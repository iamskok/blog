import React from "react"
import { Helmet } from "react-helmet"
import amstelvarItalicWoff2 from "../../assets/fonts/amstelvar-italic.woff2"
import interWoff2 from "../../assets/fonts/inter.woff2"
import dankMonoWoff2 from "../../assets/fonts/dank-mono.woff2"
import dankMonoItalicWoff2 from "../../assets/fonts/dank-mono-italic.woff2"

const PreloadLinks = () => (
  <Helmet>
    <link
      href={amstelvarItalicWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={dankMonoWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={dankMonoItalicWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
    <link
      href={interWoff2}
      as="font"
      type="font/woff2"
      rel="preload"
      crossOrigin="anonymous"
    />
  </Helmet>
)

export default PreloadLinks
