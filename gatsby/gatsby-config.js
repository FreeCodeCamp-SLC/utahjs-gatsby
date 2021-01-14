import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `UtahJS`,
    description: `UtahJS Information. Built with Gatsby and Strapi CMS`,
    author: `freeCodeCamp - SLC Study Group`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET_NAME,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Sans', 'Sanchez', 'Gothic A1', 'Domine'],
        },
      },
    },
  ],
};
