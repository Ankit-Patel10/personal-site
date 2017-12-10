module.exports = {
  siteMetadata: {
    title: `Personal Site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-101333629-1',
      },
    },
  ],
}
