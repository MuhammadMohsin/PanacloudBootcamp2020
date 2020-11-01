require("dotenv").config({
    path: `.env`,
  })

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-stripe`,
            options: {
                objects: ["Price"],
                secretKey: process.env.STRIPE_SECRET_KEY,
                downloadFiles: false,
            },
        },
    ]
}