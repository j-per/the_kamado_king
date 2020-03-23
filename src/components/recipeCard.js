import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./recipeCard.module.scss"

const RecipeCard = (props) => {

  return (
    <Link to={`recipes/${props.edge.node.slug}`} className={styles.cardWrapper}>
      <Img className={styles.image} fluid={props.edge.node.previewImage.fluid} />
      <div className={styles.textWrapper}>
        <p className={styles.p}>Recipe</p>
        <h3 className={styles.h3}>{props.edge.node.recipeTitle}</h3>
        <p className={styles.author}>
          by <b className={styles.b}>Jesse Perdue</b>
        </p>
      </div>
    </Link>
  )
}

export default RecipeCard
