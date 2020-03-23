import React from "react"
import { FaInstagram } from "react-icons/fa";

import styles from "./aboutMe.module.scss"

const AboutMe = () => {

    return (
        <section className={styles.aboutMeWrapper}>
            <h2>Hey, I'm Jesse and I love cooking on my Kamado Joe</h2>
            <p>I started making videos on my Kamado Joe in 2019 and fell in love with it.</p>
            <p>I decided to build this website to share my recipes with the world.</p>
            <p>Go check out my <b>Instagram: </b></p>
            <a href="https://www.instagram.com/the_kamado_king/" target="_blank" rel="noopener noreferrer"><FaInstagram size={70} color="#e23c31" /></a>
        </section>
    )
}

export default AboutMe