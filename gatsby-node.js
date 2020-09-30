var path = require('path');

exports.createPages = async ({actions, graphql}) => {
    const {createPage} = actions;

    const result = await graphql(`
    {
        allContentfulElectronics {
            nodes {
              slug
              title
              desc {
                json
              }
            }
          }
    }
    `)

    console.log(JSON.stringify(result));

    result.data.allContentfulElectronics.nodes.forEach((obj)=>{
        createPage({
            path: `/product/${obj.slug}`,
            component: path.resolve('./src/template/product.tsx'),
            context: {
                itemDetails: obj
            }
        })
    })
}