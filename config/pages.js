const pages = {
  home: {
    id: `home`,
    pathName: `/`,
    title: `Vladimir Skok`,
    description: `My name is Vladimir Skok. I move pixels on the web.`,
    image: `home.jpg`,
    imageAlt: `Home page cover photo`,
    breadcrumb: `🏠 Vladimir Skok`,
    type: `WebPage`,
  },
  blog: {
    id: `blog`,
    pathName: `blog`,
    title: `Software Engineer Blog ✍️`,
    description: `Thoughts and notes on software engineering`,
    image: `blog.jpg`,
    imageAlt: `Blog image`,
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
