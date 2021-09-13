const pages = {
  home: {
    id: `home`,
    pathName: `/`,
    title: `Vladimir Skok`,
    description: `My name is Vladimir Skok. I move pixels on the web.`,
    image: `home.jpg`,
    imageAlt: `Coding work station`,
    breadcrumb: `🏠 Vladimir Skok`,
    type: `WebPage`,
  },
  blog: {
    id: `blog`,
    pathName: `blog`,
    title: `Software Engineer Blog ✍️`,
    description: `Thoughts and notes on software engineering`,
    image: `blog.jpg`,
    imageAlt: `Black and white blank mechanical keyboard`,
    breadcrumb: `✍️ Blog`,
    type: `Blog`,
  },
  post: {
    id: `post`,
    type: `Article`,
    breadcrumb: `📝`,
  },
}

module.exports = pages
