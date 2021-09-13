const svgrSvgo = {
  resolve: `gatsby-plugin-svgr-svgo`,
  options: {
    urlSvgOptions: [
      {
        test: /\.svg$/,
        svgo: false,
      },
    ],
  },
}

module.exports = svgrSvgo
