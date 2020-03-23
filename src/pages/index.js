import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import BurgerMenu from "../components/burgermenu"
import SEO from "../components/seo"
import LatestRecipes from "../components/latestRecipes"
import AboutMe from "../components/aboutMe"
import InstagramSection from "../components/instagramSection"

const IndexPage = () => (
  //index is using the layout, when the page renders the layout on index, set it to 100vh otherwise set it to 20
  <div>
    <BurgerMenu />
    <Header />
    <SEO title="Home" />
    <LatestRecipes />
    <AboutMe />
    <InstagramSection />
    <Footer />
  </div>
)

export default IndexPage
