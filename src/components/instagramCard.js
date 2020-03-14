import React from "react"
import Img from "gatsby-image"

const InstagramCard = (props) => {
    return (
        <Img fixed={props.test.node.localFile.childImageSharp.fixed} alt="ass" />
    )
}

export default InstagramCard