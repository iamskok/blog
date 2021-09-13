const { default: favicon } = require("../../config/favicons")
const { language: lang } = require("../../config/seo")
const {
  home: { title: name, description },
} = require("../../config/pages")
const short_name = require("../../config/site-url")

const manifest = {
  resolve: `gatsby-plugin-manifest`,
  options: {
    name,
    short_name,
    description,
    lang,
    start_url: `/`,
    background_color: `hsl(0, 0%, 100%)`,
    theme_color: `hsl(240, 87%, 50%)`,
    display: `standalone`,
    icon: `static${favicon}`,
  },
}

module.exports = manifest
