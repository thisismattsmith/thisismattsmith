import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="About Matt Smith" />
      <h3>/about</h3>
      <h1>About Matt Smith</h1>
      <p>My name is Matt and I'm just a rad xdude. I am going to keep on writing just so I can see how long the page width is.</p>

          <p>Hi Whattup?</p>
          <p>
          Woudl you like to hang out some time?</p>
          <h3>The best way to contact me</h3>
          <h4>The best way to keep up with what I'm doing</h4>
          <p>Newsletter:</p>
          
          <p>LinkedIn:</p>
          <p>Twitter: I post more generally about learning in society, parenting and education.</p>
          <p>nopqrstuvwxyz.abcdefghijklmnopqrstuvwxyz.</p>
          <p>Today I am writing like this to see what it</p>
          <p>would read like. It is an interesting thought.</p>
          <h2>About this site</h2>
          <p>This site is built with a lovely React framework called Gatsby. All design and development has been done by me. Page design and most graphics: Figma. Writing done with iA writer, based on notes kept in Roam Research.</p>
    </Layout>
  )
}

export default AboutPage