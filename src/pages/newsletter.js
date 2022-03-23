import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Newsletter" />
      <h1>I have a newsletter.</h1>
      <p>Here are some ideas that I don't have the time, ability or resources to work on right now. You're welcome to take any of these ideas and work on them as your own, as long as you let me know.</p>
      <p>And feel free to get in touch if you have any questions about an idea or want to collaborate on one.</p> 
      <iframe src="https://mattsmith.substack.com/embed" width="100%" height="180" frameborder="0" scrolling="no"></iframe>
      <p>If you'd like to stay up to date with what I write here you can use the RSS feed or follow And feel free to get in touch if you have any questions about an idea or want to collaborate on one.</p>
    </Layout>
  )
}

export default AboutPage