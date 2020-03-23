import React from "react"
import Img from "gatsby-image"
import { FaHeart } from "react-icons/fa";

import styles from "./instagramCard.module.scss"


const InstagramCard = ({ posts }) => {
    return (
        <a className={styles.instaLink} href={`https://www.instagram.com/p/${posts.node.id}`} target="_blank">
            <Img className={styles.instaThumbnail} fixed={posts.node.localFile.childImageSharp.fixed} />
            <div className={styles.likesWrapper}>
                <FaHeart className={styles.heart} fill="red" />
                <p className={styles.likes}>{posts.node.likes}</p>
            </div>
        </a>
    )
}

export default InstagramCard