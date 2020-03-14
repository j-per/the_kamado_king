import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const Test = () => {
    const data = useStaticQuery(graphql`
    query ImageQuery {
        allContentfulRecipe {
            edges {
              node {
                previewImage {
                  fluid {
                    ...GatsbyContentfulFluid
                  }
                }
              }
            }
          }
      }
      `)

    console.log(data);
    return (
        <div>
            <h1>Test Page</h1>
            <Img fluid={data.allContentfulRecipe.edges[0].node.previewImage.fluid} />
        </div>
    )
}

export default Test