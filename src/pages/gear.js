import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import styles from "../styles/gear.module.scss"

const Gear = () => {
  return (
    <Layout>
      <SEO title="Gear" />
      <div className={styles.wrapper}>
        <h1>Gear Page</h1>
      </div>
    </Layout>
  )
}

export default Gear
