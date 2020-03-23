import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from "./header.module.scss"
//If it's the index page, show the full thing otherwise make it smaller
const Header = props => {
  return (
    <header
      className={styles.homePageWrapper}
    >
      <Link to="/" className={styles.link}>
        <h1 className={styles.heading}>The Kamado King</h1>
      </Link>
      <p className={styles.slogan}> Just a guy trying to make <span role="img" aria-label="bomb emoji">💣</span>food for his family</p>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
