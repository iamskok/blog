const SITE_URL = `https://gatsby-seo.netlify.app`

const IMAGE_URL_BASE = `${SITE_URL}/static/0cf5c621d3f5b6ef8b857e489c39e2e5`
const IMAGE_URL_BASE_SM = `${IMAGE_URL_BASE}/5bb6f`
const IMAGE_URL_BASE_MD = `${IMAGE_URL_BASE}/34erv`
const IMAGE_URL_BASE_LG = `${IMAGE_URL_BASE}/c3xs4`

const SITE_METADATA = {
  siteName: `Gatsby SEO`,
  siteUrl: SITE_URL,
  creator: `@gatsbyjs`,
  author: `Jane Doe`,
  logo: {
    url: `${SITE_URL}/logo.jpg`,
    width: 640,
    height: 640,
  },
  language: `en_US`,
  socialMedia: [`https://twitter.com/gatsbyjs`, `https://github.com/gatsbyjs`],
  speakableSelector: [`data-speakable="true"`],
  address: {
    addressCountry: `US`,
    addressLocality: `Los Angeles`,
    addressRegion: `CA`,
  },
  pages: {
    home: {
      url: SITE_URL,
      title: `Jane Doe`,
      description: `Jane Doe's place on the web`,
      image: `${IMAGE_URL_BASE_LG}/home.jpg`,
      images: [
        `${IMAGE_URL_BASE_SM}/home.jpg`,
        `${IMAGE_URL_BASE_MD}/home.jpg`,
        `${IMAGE_URL_BASE_LG}/home.jpg`,
      ],
      imageAlt: `Two corgis sitting next to each other`,
      breadcrumb: `Home`,
      type: `WebPage`,
    },
    blog: {
      url: `${SITE_URL}/blog/`,
      title: `Blog`,
      description: `Jane Doe's blog about software engineering`,
      image: `${IMAGE_URL_BASE_LG}/blog.jpg`,
      images: [
        `${IMAGE_URL_BASE_SM}/blog.jpg`,
        `${IMAGE_URL_BASE_MD}/blog.jpg`,
        `${IMAGE_URL_BASE_LG}/blog.jpg`,
      ],
      imageAlt: `Cute brown Retriever is licking it's nose`,
      breadcrumb: `Blog`,
      type: `Blog`,
    },
    contact: {
      url: `${SITE_URL}/contact/`,
      title: `Contact`,
      description: `Jane Doe's contact information`,
      image: `${IMAGE_URL_BASE_LG}/contact.jpg`,
      images: [
        `${IMAGE_URL_BASE_SM}/contact.jpg`,
        `${IMAGE_URL_BASE_MD}/contact.jpg`,
        `${IMAGE_URL_BASE_LG}/contact.jpg`,
      ],
      imageAlt: `Bulldog is chilling on the ground`,
      breadcrumb: `Contact`,
      type: `ContactPage`,
    },
    about: {
      url: `${SITE_URL}/about/`,
      title: `About`,
      description: `Jane Doe's biography`,
      image: `${IMAGE_URL_BASE_LG}/about.jpg`,
      images: [
        `${IMAGE_URL_BASE_SM}/about.jpg`,
        `${IMAGE_URL_BASE_MD}/about.jpg`,
        `${IMAGE_URL_BASE_LG}/about.jpg`,
      ],
      imageAlt: `French bulldog is hanging out on the playground`,
      breadcrumb: `About`,
      type: `AboutPage`,
    },
    article: {
      url: `${SITE_URL}/blog/siberian-husky/`,
      title: `Siberian Husky`,
      description: `Awesome article about Siberian Husky`,
      image: `${IMAGE_URL_BASE_LG}/cover.jpg`,
      images: [
        `${IMAGE_URL_BASE_SM}/cover.jpg`,
        `${IMAGE_URL_BASE_MD}/cover.jpg`,
        `${IMAGE_URL_BASE_LG}/cover.jpg`,
      ],
      imageAlt: `Blue-eyed husky`,
      breadcrumb: `Siberian Husky`,
      published: `2018-01-01`,
      modified: `2019-01-01`,
      type: `Article`,
    },
  },
}

const PAGE_LABELS = [`Home`, `Blog`, `About`, `Contact`, `Article`]

const REGEX_PATTERN = new RegExp(/  /g)

export { PAGE_LABELS, REGEX_PATTERN, SITE_METADATA }
