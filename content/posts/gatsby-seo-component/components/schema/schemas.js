import { SITE_METADATA } from "../common/constants"

const {
  siteUrl,
  siteName,
  address: addressMetadata,
  author,
  logo,
  socialMedia,
  speakableSelector,
} = SITE_METADATA

const address = {
  "@type": `PostalAddress`,
  "@id": `${siteUrl}/#address`,
  ...addressMetadata,
}

const person = {
  "@type": `Person`,
  "@id": `${siteUrl}/#person`,
  url: siteUrl,
  name: author,
  sameAs: socialMedia,
  address: {
    "@id": `${siteUrl}/#address`,
  },
}

const organization = {
  "@id": `${siteUrl}/#organization`,
  "@type": `Organization`,
  url: siteUrl,
  name: siteName,
  logo: {
    "@type": `ImageObject`,
    ...logo,
  },
  address: {
    "@id": `${siteUrl}/#address`,
  },
}

const breadcrumbs = {
  "@type": `BreadcrumbList`,
  "@id": `${siteUrl}/#breadcrumbs`,
  name: `Breadcrumbs`,
  itemListElement: [
    {
      "@type": `ListItem`,
      position: 1,
      name: `Home`,
      item: {
        "@type": `WebPage`,
        "@id": siteUrl,
      },
    },
  ],
}

const speakable = {
  "@type": "SpeakableSpecification",
  cssSelector: speakableSelector,
}

export { address, person, organization, breadcrumbs, speakable }
