/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * All configuration related things are here
 * 
 * This is configuration file
 */
const path = require('path')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteTitle: "STEM one"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'zxx'
      }
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: { default: path.resolve('./src/components/BlogContent/BlogLayout.js') },
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1587495365023117",
      },
    },

  ],
}
