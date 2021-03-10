require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-cosmicjs',
      options: {
        bucketSlug: 'sfoldestate', /* Find this in Your Bucket > Settings > Basic Settings after logging in at https://app.cosmicjs.com/login */
        objectTypes: ['posts', 'settings'], /* Object types to fetch */
        apiAccess: {
          read_key: 'iIGlRTzPsE232KOkPyHhwzQX10eaTjFrZozJ2jZJl0GKd1ZM6E', /* Find this in Your Bucket > Settings > API Access after logging in at https://app.cosmicjs.com/login */
        },
        localMedia: true /* Optional. If you want to enable local image for Gatsby Image */
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
