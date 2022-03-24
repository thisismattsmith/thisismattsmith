import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title= "Contact" />
      <h1>Let's chat</h1>
      <p>Speak to meeee.t so I can see how long the page width is.</p>
          
          <p>Hi Whattup?</p>
          <p>LinkedIn
            Twitter
            Discord username: Matt Smith#3628
            

          Woudl you like to hang out some time?
        
      </p>
    </Layout>
  )
}

export default AboutPage