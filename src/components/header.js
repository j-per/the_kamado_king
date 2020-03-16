import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from "./header.module.scss"

const Header = props => {
  return (
    <div>
      <header
        className={props.homepage ? styles.homePageWrapper : styles.wrapper}
      >
        <Link to="/" className={styles.link}>
          <h1 className={styles.heading}>The Kamado King</h1>
        </Link>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
