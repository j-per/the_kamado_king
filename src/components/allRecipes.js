import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Select from 'react-select';

import Layout from "./layout"
import RecipeCard from "./RecipeCard"
import styles from "./allRecipes.module.scss"

const AllRecipes = props => {
  const recipes = useStaticQuery(graphql`
    query allRecipesQuery {
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
            tag
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
  }

  const options = [
    { value: 'Beef', label: '🥩 Beef' },
    { value: 'Poultry', label: '🍗 Poultry' },
    { value: 'Pork', label: '🥓 Pork' },
    { value: 'Seafood', label: '🍤 Seafood' },
    { value: 'Other', label: '🍕 Other' }
  ];

  //This will change the recipe card component to only display what comes from the filter
  let recipeCard = recipes.allContentfulRecipe.edges.map(edge => <RecipeCard edge={edge} key={edge.node.id} />)

  if (selectedOption) {
    const filtered = recipes.allContentfulRecipe.edges.filter(edge => edge.node.tag === selectedOption.value);
    recipeCard = filtered.map(edge => <RecipeCard edge={edge} key={edge.node.id} />)
  }



  return (
    <Layout>
      <section className={styles.allRecipesWrapper}>
        <h2 className={styles.allRecipesHeading}>My Recipes</h2>
        <div className={styles.selectWrapper}>
          <Select
            isClearable
            value={selectedOption}
            onChange={handleChange}
            options={options}
            placeholder="Filter Options..."
          />
        </div>
        <div className={styles.recipeSectionWrapper}>
          {recipeCard}
        </div>
      </section>
    </Layout>
  )
}


export default AllRecipes
