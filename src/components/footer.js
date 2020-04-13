import React from "react"
import { FaInstagram } from "react-icons/fa"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <a
        href="https://www.instagram.com/the_kamado_king/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={30} color="#fff" />
      </a>
      <p className={styles.slogan}>
        Make{" "}
        <span role="img" aria-label="bomb emoji">
          💣
        </span>
        food!
      </p>
      <p className={styles.copyright}>&copy;The Kamado King</p>
    </footer>
  )
}

export default Footer
