const onCreateNode = require("./gatsby/node/on-create-node")
const onCreatePage = require("./gatsby/node/on-create-page")
const createPages = require("./gatsby/node/create-pages")

module.exports = {
  onCreateNode,
  onCreatePage,
  createPages,
}
