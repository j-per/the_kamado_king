import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstagramCard from "./instagramCard"

const InstagramSection = () => {
  const data = useStaticQuery(graphql`
    query InstagramQuery {
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              original
              timestamp
              caption
              localFile {
                childImageSharp {
                  fixed(width: 250, height: 250) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              # Only available with the public api scraper
              thumbnails {
                src
                config_width
                config_height
              }
              dimensions {
                height
                width
              }
            }
          }
        }
      }     
    `)
  return (
    <section>
      <h1>Instagram Section</h1>
      {data.allInstaNode.edges.map(node => {
        return (
          <InstagramCard style={{ margin: "0", padding: "0" }} test={node} />
        )
      })}
    </section>
  )
}

export default InstagramSection