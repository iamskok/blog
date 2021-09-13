import React from "react"
import { Helmet } from "react-helmet"
import slashify from "../../utils/slashify"

const SchemaOrg = ({
  siteUrl,
  siteName,
  firstName,
  lastName,
  logo,
  language,
  socialMedia: { twitter, github },
  address,
  speakableSelector,
  pathName,
  title,
  description,
  imageUrls: {
    schemaOrg1x1ImageUrl,
    schemaOrg4x3ImageUrl,
    schemaOrg16x9ImageUrl,
  },
  breadcrumb,
  type,
  dateModified,
  datePublished,
  slug,
  pages: {
    home: { breadcrumb: homeBreadcrumb },
    blog: { breadcrumb: blogBreadcrumb, pathName: blogPathName },
    post: { breadcrumb: postBreadcrumb },
  },
  activePages: { isHome, isBlog, isAbout, isContact, isPost },
  url,
}) => {
  const schemaId = id => `${siteUrl}/#${id}`

  const fullName = `${firstName} ${lastName}`
  const pageUrl = slashify(siteUrl, pathName)
  const blogPageUrl = slashify(siteUrl, blogPathName)
  const articlePageUrl = slashify(siteUrl, blogPathName, slug)
  // Convert `speakableSelector` to CSS selector
  const cssSelector = `[${Object.values(speakableSelector).join(`=`)}]`

  const schemaOrgAddress = {
    "@type": `PostalAddress`,
    "@id": schemaId(`address`),
    ...address,
  }

  const schemaOrgPerson = {
    "@type": `Person`,
    "@id": schemaId(`person`),
    url: siteUrl,
    name: fullName,
    sameAs: [twitter, github],
    address: {
      "@id": schemaId(`address`),
    },
  }

  const schemaOrgOrganization = {
    "@id": schemaId(`organization`),
    "@type": `Organization`,
    url: siteUrl,
    name: siteName,
    logo: {
      "@type": `ImageObject`,
      url: slashify(siteUrl, logo),
    },
    address: {
      "@id": schemaId(`address`),
    },
  }

  const schemaOrgPage = Object.assign(
    {
      "@type": type,
      author: { "@id": schemaId(`person`) },
      publisher: { "@id": schemaId(`organization`) },
      description,
      headline: title,
      inLanguage: language,
      name: title,
      url,
      mainEntityOfPage: url,
      image: [
        schemaOrg1x1ImageUrl,
        schemaOrg4x3ImageUrl,
        schemaOrg16x9ImageUrl,
      ],
    },
    isPost && datePublished && { datePublished },
    isPost && dateModified ? { dateModified } : { dateModified: datePublished },
    !isBlog &&
      speakableSelector && {
        speakable: {
          "@type": `SpeakableSpecification`,
          cssSelector,
        },
      }
  )

  const breadcrumbList = [
    {
      id: siteUrl,
      name: homeBreadcrumb,
    },
  ]

  if (isBlog || isContact || isAbout) {
    breadcrumbList.push({
      id: pageUrl,
      name: breadcrumb,
    })
  } else if (isPost) {
    breadcrumbList.push(
      {
        id: blogPageUrl,
        name: blogBreadcrumb,
      },
      {
        id: articlePageUrl,
        name: `${postBreadcrumb} ${title}`,
      }
    )
  }

  const schemaOrgBreadcrumbs = {
    "@type": `BreadcrumbList`,
    "@id": schemaId(`breadcrumbs`),
    name: `Breadcrumbs`,
    itemListElement: breadcrumbList.map(({ id, name }, index) => ({
      "@type": `ListItem`,
      position: index + 1,
      name,
      item: {
        "@type": `WebPage`,
        "@id": id,
      },
    })),
  }

  const schemaOrg = {
    "@context": `http://schema.org`,
    "@graph": [
      schemaOrgAddress,
      schemaOrgPerson,
      schemaOrgOrganization,
      schemaOrgPage,
    ],
  }

  if (!isHome) {
    schemaOrg[`@graph`].push(schemaOrgBreadcrumbs)
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schemaOrg)}</script>
    </Helmet>
  )
}

export default SchemaOrg
