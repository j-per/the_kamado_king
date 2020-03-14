import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';
import BurgerMenu from "../components/burgermenu"
import SEO from "../components/seo"


import styles from "./recipePage.module.scss"


const RecipePage = (props) => {
    const HeadingTwo = ({ children }) => <h2 className={styles.h2}>{children}</h2>
    const Paragraph = ({ children }) => <p className={styles.p}>{children}</p>
    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <HeadingTwo>{children}</HeadingTwo>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>
        }
    };
    return (
        <>
        <SEO title={props.pageContext.title} />
        <BurgerMenu />
        <section className={styles.recipePageWrapper}>
            <h1 className={styles.h1}>{props.pageContext.title}</h1>
            <div className={styles.imageTimeWrapper}>
                <img className={styles.previewImage} src={props.pageContext.previewImage} alt="bitch" />
                <div className={styles.timeWrapper}>
                    <p className={styles.time}><b>Prep Time: </b>{props.pageContext.prepTime}</p>
                    <p className={styles.time}><b>Cook Time: </b>{props.pageContext.cookTime}</p>
                    <p className={styles.time}><b>Total Time: </b>{props.pageContext.totalTime}</p>
                </div>
            </div>
            {documentToReactComponents(props.pageContext.richText.json, options)}
        </section>
        </>
    )
}

export default RecipePage