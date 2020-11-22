exports.createPages = async function ({ graphql, actions }) {

  const query = await graphql(`
    {
        allShopifyProduct(sort: { fields: [title] }) {
          edges {
            node {
              title
              images {
                originalSrc
              }
              shopifyId
              variants {
                id
              }
              description
              availableForSale
              priceRange {
                maxVariantPrice {
                  amount
                }
                minVariantPrice {
                  amount
                }
              }
            }
          }
        }
      }
    `);

  const items = query.data.allShopifyProduct.edges;

  items.map(({ node }) => {
    actions.createPage({
      path: node.shopifyId,
      component: require.resolve(`./src/templates/product.jsx`),
      context: node,
    });
  })


  console.log("End of Gatsby Node File");
}