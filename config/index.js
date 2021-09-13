const seo = require("./seo")
const siteUrl = require("./site-url")
const pages = require("./pages")
const favicons = require("./favicons")
const components = require("./components")

const config = {
  ...seo,
  siteUrl,
  pages,
  favicons,
  components,
}

module.exports = config
