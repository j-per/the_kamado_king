import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import InstagramCard from "./instagramCard"

import styles from "./instagramSection.module.scss"

const InstagramSection = () => {
  const instagramPosts = useStaticQuery(graphql`
    query InstagramPostsQuery {
      allInstaNode(limit: 8, sort: { fields: id, order: ASC }) {
        edges {
          node {
            likes
            localFile {
              childImageSharp {
                fixed(height: 150, width: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className={styles.instaSection}>
      <h3 className={styles.instaHeading}>Check out my instagram</h3>
      <div className={styles.instaCardWrapper}>
        {instagramPosts.allInstaNode.edges.map(edge => (
          <InstagramCard posts={edge} />
        ))}
      </div>
    </section>
  )
}

export default InstagramSection
