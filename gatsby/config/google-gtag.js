require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { GOOGLE_ANALYTICS_ID } = process.env

const googleGtag = {
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: [GOOGLE_ANALYTICS_ID],
  },
}

module.exports = googleGtag
