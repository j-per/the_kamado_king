import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import RecipeCard from "./RecipeCard.js"
import styles from "./latestRecipes.module.scss"

const LatestRecipes = props => {
  const recipes = useStaticQuery(graphql`
    query latestRecipesQuery {
      allContentfulRecipe(sort: { fields: id }, limit: 4) {
        edges {
          node {
            childContentfulRecipeAboutRichTextNode {
              json
            }
            recipeTitle
            publishDate(formatString: "MMMM Do, YYYY")
            slug
            id
            previewImage {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `)

  const recipeCard = recipes.allContentfulRecipe.edges.map(edge => <RecipeCard edge={edge} key={edge.node.id} />)

  return (
    <section className={styles.mainRecipeSectionWrapper}>
      <h2 className={styles.mainTitle}>Latest Recipes</h2>
      <div className={styles.recipeSectionWrapper}>
        {recipeCard}
      </div>
    </section>
  )
}

export default LatestRecipes
