/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const putInDotEnv =
  "skncXTR4PXxPshsuH0LB0sIBO5CQLq3Xurvw62DsmMXXQ7pUPXL3VqflsLzT988Ymk7BaFrRb88Ry2SGlNszhyyeJFTCfzjKJi1KklTfCQJr6diWZKQod8kWGnRaeCGvZZoiW5Fio8P2iQ2Ecd6cB2KFwcAUZgcd0Y6DET0SHgSQ53thVYdX"
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `7UP`,
    siteUrl: "https://7up-gatsby.com",
    description: "7up Website Created in Gatsby",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `d2g6k9gy`,
        dataset: `production`,
        token: putInDotEnv,
        watchMode: true,
      },
    },
  ],
}
