require('dotenv').config()
module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-shopify`,
            options: {
              // The domain name of your Shopify shop.
              shopName: process.env.SHOP_NAME,
              // The storefront access token
              accessToken: process.env.ACCESS_TOKEN,
            },
          },
    ]
}