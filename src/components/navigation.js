import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/gear">Gear</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
