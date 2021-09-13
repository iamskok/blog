const path = require("path")
const pages = require("../../config/pages")
const slashify = require("../../src/utils/slashify")
const { IMAGES_PATH } = require("../../src/utils/constants")

const onCreatePage = ({ page, actions: { createPage, deletePage } }) =>
  Object.values(pages)
    .map(({ pathName, image }) => [slashify(pathName), image])
    .filter(([pathName, image]) => pathName && image)
    .forEach(([pathName, image]) => {
      if (page.path === pathName) {
        deletePage(page)
        createPage({
          ...page,
          context: {
            image: path.join(process.cwd(), IMAGES_PATH, image),
          },
        })
      }
    })

module.exports = onCreatePage
