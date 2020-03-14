import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FaInstagram } from "react-icons/fa";


import styles from "./aboutMe.module.scss"


const AboutMe = () => {

    const image = useStaticQuery(graphql`
    query Cloudinary {
        file(name: { eq: "emerson-peters-PR0ENPY0P9c-unsplash"} ) {
            childCloudinaryAsset {
                fluid{
                    ...CloudinaryAssetFluid
                }
            }
        }
    }
    `)


    return (
        <section className={styles.aboutMeWrapper}>
            <h2>Hey, I'm Jesse and I love cooking on my Kamado Joe.</h2>
            <p>I started making videos on my Kamado Joe about a year ago.</p>
            <p>I decided to build this website to share my recipes.</p>
            <p>Go check out my <b>Instagram: </b></p>
            <a href="https://www.instagram.com/the_kamado_king/" target="_blank"><FaInstagram size={70} color="tomato" /></a>
        </section>
    )
}

export default AboutMe