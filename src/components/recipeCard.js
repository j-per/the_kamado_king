import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./recipeCard.module.scss"

const RecipeCard = ({ edge }) => {
    const [hover, setHover] = useState(false);
    return (
        <Link
            to={`recipes/${edge.node.slug}`}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            onFocus={() => setHover(true)}
            onBlur={() => setHover(false)}
            className={styles.cardWrapper}
        >
            <Img fluid={edge.node.previewImage.fluid} />
            <div className={styles.textWrapper}>
                <p className={styles.p} >Recipe</p>
                <h3 className={styles.h3}>{edge.node.recipeTitle}</h3>
                <p className={styles.author} >by <b className={styles.b}>Jesse Perdue</b></p>
            </div>
        </Link>

    )
}

export default RecipeCard