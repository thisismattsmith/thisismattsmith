import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="About Matt Smith" />
      <h3>/about</h3>
      <h1>Matt Smith</h1>
      <p>My name is Matt and I'm just a rad xdude. I am going to keep on writing just so I can see how long the page width is.</p>

          <p>Hi Whattup?</p>
          <p>
          Woudl you like to hang out some time?</p>
          <h2>About this site</h2>
          <p>This site is not just my online home, it's also my playground. I tinker with it all the time.</p>
          <p>abcdefghijklmnopqrstuvwxyzabcdefghijklm.</p>
          <p>nopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.</p>
          <p>Today I am writing like this to see what it</p>
          <p>would read like. It is an interesting thought.</p>
    </Layout>
  )
}

export default AboutPage