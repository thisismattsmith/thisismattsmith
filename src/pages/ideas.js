import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="About Matt Smith" />
      <h3>/ideas</h3>
      <h1>A collection of ideas for products, services, software and business</h1>
      <p>Here are some ideas that I don't have the time, ability or resources to work on right now. You're welcome to take any of these ideas and work on them as your own, as long as you let me know.</p>
      <p>And feel free to get in touch if you have any questions about an idea or want to collaborate on one.</p>
          
          
    </Layout>
  )
}

export default AboutPage