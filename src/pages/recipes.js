import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import RecipeCardLayout from "../components/recipeCardLayout"

const Recipes = () => {
    return (
        <Layout>
            <SEO title='recipes' />
            <RecipeCardLayout allRecipes title="All Recipes" />
        </Layout>
    )
}

export default Recipes;