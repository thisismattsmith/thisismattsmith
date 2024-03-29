import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const UnsolicitedPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="My page for people who send me unsolicited sales pitches" />
      <h1>A handy guide to help you sell to me (and other people)</h1>
      <p>Hey there! I've given you this link because I think you're trying to sell me something.</p>

      <ul>
        <li>I'm not your target customer</li>
        <li></li>
        <li>I'm opposed to</li>
      </ul>
          <p>Hi Whattup?</p>
          <p>
          Woudl you like to hang out some time?</p>
          <h2>About this site</h2>
          <p>This site is not just my online home, it's also my playground. I tinker with it all the time.</p>
          <p>Built with Gatsby. Hosted on You can see the analytics of this site here.</p>
    </Layout>
  )
}

export default UnsolicitedPage