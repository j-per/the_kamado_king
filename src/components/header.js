import React, { useEffect, useState } from 'react';
import { Link } from "gatsby"
import PropTypes from "prop-types"

import styles from './header.module.scss'

const Header = () => {

  useEffect(() => {

  })

  return (
    <div >
      <header className={styles.wrapper} >
        <Link to="/" className={styles.link}><h1 className={styles.heading}>The Kamado King</h1></Link>
        {/* <nav className={styles.nav}>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          <li><Link to="/gear">Gear</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav> */}
      </header>
    </div >
  )
}



Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
