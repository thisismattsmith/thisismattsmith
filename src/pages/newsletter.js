import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Newsletter" />
      <h1>I have a newsletter</h1>
      <p>Actually, I have two!</p>
      <p>The first is for anyone who would like to keep an eye on my work. It's a monthly update of new projects, ideas and articles. It's the best way to keep up to date with what I'm doing. You can <a href="https://www.getrevue.co/profile/thisismattsmith" target="_blank" referrer="norel">join here</a></p> 
      <p> I also write another newsletter that explores my main interests, all rolled up into the topic of <em>Growing Up</em>. I write essays exploring ideas about maturity, wisdom, learning, adult and child development, parenting, personal growth, and understanding who we are and where we fit into the world.</p>
      <iframe src="https://mattsmith.substack.com/embed" width="100%" height="180" frameborder="0" scrolling="no"></iframe>
      <p>My hope is that this turns into a collaborative project, a digital place where we can explore these topics together.</p>
    </Layout>
  )
}

export default AboutPage