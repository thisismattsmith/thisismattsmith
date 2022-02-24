import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="About Matt Smith" />
      <h3>/ side projects</h3>
      <h1>Experiments and things I've done for fun</h1>
      <p></p>
      <hr></hr>
      <h4>eLearningAdvice.com</h4>
      <p>Tips for creating far less and much better eLearning.</p>
      <p>Go to <a href="http://www.elearningadvice.com" target="_blank">eLearningAdvice.com</a></p>
      <br></br>
      <hr></hr>
      <h4>Rethinking Work</h4>
      <p>I'm posting articles about work in a publication on Medium.</p>
      <p>Go to <a href="http://www.rehtinkingwork.co" target="_blank">Rethinking Work</a></p>
      <br></br>
      <hr></hr>
    </Layout>
  )
}

export default AboutPage