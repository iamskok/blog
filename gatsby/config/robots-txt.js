require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { NODE_ENV, CONTEXT: NETLIFY_ENV = NODE_ENV } = process.env

const robotsTxt = {
  resolve: `gatsby-plugin-robots-txt`,
  options: {
    resolveEnv: () => NETLIFY_ENV,
    env: {
      production: {
        policy: [
          {
            userAgent: `*`,
          },
        ],
      },
      "branch-deploy": {
        policy: [
          {
            userAgent: `*`,
            disallow: [`/`],
          },
        ],
      },
      "deploy-preview": {
        policy: [
          {
            userAgent: `*`,
            disallow: [`/`],
          },
        ],
      },
    },
  },
}

module.exports = robotsTxt
