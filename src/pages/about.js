import React from "react";
import SEO from "../components/seo"
import Navigation from "../components/navigation"

const About = () => {
    return (
        <div>
            <Navigation />
            <SEO title="about" />
            <div>
                <h1>This is the about page</h1>
            </div>
        </div>
    )
}

export default About;