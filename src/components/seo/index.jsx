import React from "react"
import DefaultMeta from "./default-meta"
import OpenGraph from "./open-graph"
import Twitter from "./twitter"
import SchemaOrg from "./schema-org"
import useSiteMetadata from "../../hooks/use-site-metadata"
import slashify from "../../utils/slashify"

const SEO = ({
  pathName,
  slug,
  title,
  description,
  images,
  imageAlt,
  pageId,
  type,
  breadcrumb,
  datePublished,
  dateModified,
}) => {
  const {
    siteUrl,
    siteName,
    firstName,
    lastName,
    language,
    socialMedia,
    logo,
    address,
    speakableSelector,
    pages,
  } = useSiteMetadata()

  const imageUrls = getImageUrls({ images, siteUrl })
  const activePages = getActivePages({ pages, pageId })
  const url = getCurrentUrl({ siteUrl, pathName, slug, pages, activePages })

  const defaultMeta = {
    title,
    description,
    language,
    url,
  }

  const twitter = {
    title,
    description,
    imageUrls,
    imageAlt,
    socialMedia,
  }

  const openGraph = {
    siteName,
    firstName,
    lastName,
    title,
    description,
    imageUrls,
    imageAlt,
    dateModified,
    datePublished,
    language,
    activePages,
    url,
  }

  const schemaOrg = {
    siteUrl,
    siteName,
    firstName,
    lastName,
    logo,
    language,
    socialMedia,
    address,
    speakableSelector,
    pathName,
    title,
    description,
    imageUrls,
    breadcrumb,
    type,
    dateModified,
    datePublished,
    slug,
    pages,
    activePages,
    url,
  }

  return (
    <>
      <DefaultMeta {...defaultMeta} />
      <Twitter {...twitter} />
      <OpenGraph {...openGraph} />
      <SchemaOrg {...schemaOrg} />
    </>
  )
}

const getCurrentUrl = ({
  siteUrl,
  pathName,
  slug,
  pages: {
    blog: { pathName: blogPathName },
  },
  activePages: { isHome, isPost },
}) =>
  isHome
    ? siteUrl
    : isPost
    ? slashify(siteUrl, blogPathName, slug)
    : slashify(siteUrl, pathName)

const getActivePages = ({ pages, pageId }) =>
  Object.entries(pages).reduce((acc, page) => {
    const [name, { id }] = page
    const [firstLetter, ...remainingLetters] = name
    const key = `is` + firstLetter.toUpperCase() + remainingLetters.join(``)
    acc[key] = id === pageId

    return acc
  }, {})

const getImageUrls = ({ images, siteUrl }) =>
  Object.entries(images).reduce((acc, image) => {
    const [
      key,
      {
        images: {
          fallback: { src: path },
        },
      },
    ] = image
    const url = `${siteUrl}${path}`
    acc[`${key}ImageUrl`] = url

    return acc
  }, {})

export default SEO
