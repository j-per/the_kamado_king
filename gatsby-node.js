const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const recipePage = path.resolve(`src/templates/recipePage.js`)
  return graphql(`
    query RecipePageQuery {
        allContentfulRecipe {
          edges {
            node {
              id
              recipeTitle
              slug
              prepTime
              cookTime
              totalTime
              childContentfulRecipeAboutRichTextNode {
                json
              }
              previewImage {
                file {
                  url
                }
              }
            }
          }
        }
      }
  `, { limit: 1000 }).then(result => {
      if (result.errors) {
        throw result.errors
      }

      result.data.allContentfulRecipe.edges.forEach(edge => {
        createPage({
          path: `recipes/${edge.node.slug}`,
          component: recipePage,
          context: {
            title: edge.node.recipeTitle,
            previewImage: edge.node.previewImage.file.url,
            richText: edge.node.childContentfulRecipeAboutRichTextNode,
            prepTime: edge.node.prepTime,
            cookTime: edge.node.cookTime,
            totalTime: edge.node.totalTime
          },
        })
      })
    })
}
