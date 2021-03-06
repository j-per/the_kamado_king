import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo"
import AllRecipes from "../components/allRecipes"

const Recipes = () => {
    return (
        <div>
            <SEO title='Recipes' />
            <AllRecipes />
        </div>
    )
}

export default Recipes;