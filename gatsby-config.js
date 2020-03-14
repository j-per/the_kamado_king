require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require(`path`);

//Used for contentful
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

module.exports = {
  siteMetadata: {
    title: `The Kamado King`,
    description: `Kamado style cooking recipes`,
    author: `Jesse Perdue`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `the_kamado_king`,
      },
    }
    ,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACEID,
        accessToken: process.env.CONTENTFUL_ACCESSTOKEN
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `krv5fxp`,
        }
      }
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,

        // This folder will be created if it doesn’t exist.
        uploadFolder: 'gatsby-cloudinary',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
