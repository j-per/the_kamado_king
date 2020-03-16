import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeCardLayout from "../components/recipeCardLayout"
import AboutMe from "../components/aboutMe"

const IndexPage = () => (
  //index is using the layout, when the page renders the layout on index, set it to 100vh otherwise set it to 20
  <Layout title="home" homepage>
    <SEO title="The Kamado King" />
    <RecipeCardLayout />
    <AboutMe />
  </Layout>
)

export default IndexPage
