exports.onCreatePage = async ({ page, actions }) => {
    const { createPage } = actions
      if (page.path.match(/^\/product/)) {
      page.matchPath = "/product/*"
      createPage(page)
    }
  }

/*
exports.createPages = async function ({ actions}) {

    actions.createPage({
        path: "fruits",
        component: require.resolve(`./src/templates/fruits.tsx`),
        context: {
            name: "Mango",
            desc: "This is some description of mango"
         },
    });
    console.log("End of Gatsby Node File");
}
*/