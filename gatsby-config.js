module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [`gatsby-plugin-react-helmet`],
}

plugins: [
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-101333629-1',
    },
  },
]
