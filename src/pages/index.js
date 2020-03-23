import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LatestRecipes from "../components/latestRecipes"
import AboutMe from "../components/aboutMe"
import InstagramSection from "../components/instagramSection"

const IndexPage = () => (
  //index is using the layout, when the page renders the layout on index, set it to 100vh otherwise set it to 20
  <Layout title="home" homepage>
    <SEO title="The Kamado King" />
    <LatestRecipes />
    <AboutMe />
    <InstagramSection />
  </Layout>
)

export default IndexPage
