import React from "react"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"
import {
  FacebookShareButton,
  EmailShareButton,
  PinterestShareButton,
  TwitterShareButton,
} from "react-share"
import {
  FacebookIcon,
  EmailIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share"

import SEO from "../components/seo"
import Layout from "../components/layout"
import styles from "./recipePage.module.scss"

const RecipePage = props => {
  const HeadingTwo = ({ children }) => <h2 className={styles.h2}>{children}</h2>
  const Paragraph = ({ children }) => <p className={styles.p}>{children}</p>
  const OrderedList = ({ children }) => (
    <ol className={styles.orderedList}>{children}</ol>
  )
  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <HeadingTwo>{children}</HeadingTwo>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.OL_LIST]: (node, children) => (
        <OrderedList>{children}</OrderedList>
      ),
    },
  }

  const socialURL = `https://thekamadoking.com/recipes/${props.pageContext.slug}`

  return (
    <Layout>
      <section className={styles.recipePage}>
        <div className={styles.recipePageContentWrapper}>
          <SEO title={props.pageContext.title} />
          <h1 className={styles.h1}>{props.pageContext.title}</h1>
          <div className={styles.imageTimeWrapper}>
            <img
              className={styles.previewImage}
              src={props.pageContext.previewImage}
              alt="bitch"
            />
            <div className={styles.timeWrapper}>
              <p className={styles.time}>
                <b>PREP TIME: </b>
                {props.pageContext.prepTime}
              </p>
              <p className={styles.time}>
                <b>COOK TIME: </b>
                {props.pageContext.cookTime}
              </p>
              <p className={styles.time}>
                <b>TOTAL TIME: </b>
                {props.pageContext.totalTime}
              </p>
              <EmailShareButton url={socialURL} className={styles.socialIcon}>
                <EmailIcon size={42} round={true} />
              </EmailShareButton>
              <FacebookShareButton
                url={socialURL}
                className={styles.socialIcon}
              >
                <FacebookIcon size={42} round={true} />
              </FacebookShareButton>
              <PinterestShareButton
                url={socialURL}
                className={styles.socialIcon}
                media={props.pageContext.previewImage}
              >
                <PinterestIcon size={42} round={true} />
              </PinterestShareButton>
              <TwitterShareButton url={socialURL} className={styles.socialIcon}>
                <TwitterIcon size={42} round={true} />
              </TwitterShareButton>
            </div>
          </div>
          {documentToReactComponents(props.pageContext.richText.json, options)}
        </div>
      </section>
    </Layout>
  )
}

export default RecipePage
