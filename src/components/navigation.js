import React from "react"
import { Link } from "gatsby"

import styles from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul className={styles.navUL}>
        <li className={styles.navLI}>
          <Link to="/" className={styles.homeButton}>THE KAMADO KING</Link>
        </li>
        <li className={styles.navLI}>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li className={styles.navLI}>
          <Link to="/gear">Gear</Link>
        </li>
        <li className={styles.navLI}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
