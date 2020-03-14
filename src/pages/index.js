import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeCardLayout from "../components/recipeCardLayout"
import AboutMe from "../components/aboutMe"


const IndexPage = () => (
  <Layout title='home'>
    <SEO title='The Kamado King' />
    <RecipeCardLayout />
    <AboutMe />
  </Layout>
)

export default IndexPage
