import React from "react"
import { Link } from "gatsby"
import BurgerMenu from "./burgermenu"

import styles from "./navigation.module.scss"

const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <BurgerMenu />
      <Link to="/" className={styles.navLink}>
        The Kamado King
      </Link>
    </nav>
  )
}

export default Navigation
