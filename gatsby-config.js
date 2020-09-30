const dotenv = require("dotenv");
dotenv.config();

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
          },
    ]
}