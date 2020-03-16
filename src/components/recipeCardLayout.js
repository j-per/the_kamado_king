import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import RecipeCard from "./RecipeCard.js"
import styles from "./recipeCardLayout.module.scss"

const RecipeCardSection = props => {
  const data = useStaticQuery(graphql`
    query RecipeCardQuery {
      allContentfulRecipe(sort: { fields: id }) {
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

  //Only show 4 recipe cards on the index page
  const shrinkArray = data.allContentfulRecipe.edges.filter(
    (currentVal, index) => index < 4
  )
  // shrinkArray.map((edge, index) => <RecipeCard edge={edge} key={edge.node.id} />
  return (
    <section className={styles.mainRecipeSectionWrapper}>
      <h2 className={styles.mainTitle}>{props.title || "Latest Recipes"}</h2>
      <div className={styles.recipeSectionWrapper}>
        {/* If the allRecipes prop is passed, the component will show all recipes from contentful.
        If the allRecipe prop IS NOT passed, the component will only render 4 cards (shrinkArray function). */}
        {data.allContentfulRecipe.edges.map(edge => (
          <RecipeCard edge={edge} key={edge.node.id} />
        ))}
      </div>
      <Link to="/recipes" className={styles.allRecipesLink}>
        View All
      </Link>
    </section>
  )
}

export default RecipeCardSection
