import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title= "Contact" />
      <h1>Let's chat</h1>
      <h3>Email</h3>
      <p>For professional enquiries and long-form communication it's best to email me: <a href="mailto:hello@thisismattsmith.com">hello@thisismattsmith.com</a></p>
      <h3>Conversations</h3>
      <p>I love talking to clever people like you. If you'd like to start a discussion about a shared interest, my work, my writing, a project of mine or something I've said then IM me in one of these ways:</p>
      <p>
      <ul>
            <li><a href="https://t.me/thismattsmith" target="_blank" rel="noref">Send a message on Telegram</a> to user @thismattsmith</li>
            <li><a href="https://discordapp.com/users/Matt_Smith#3628/" target="_blank" rel="noref">Contact me on Discord</a>: username Matt Smith#3628</li>
            <li>DM on <a href="https://twitter.com/mattsmithtweets" target="_blank" rel="noref">Twitter</a> or <a href="https://www.linkedin.com/in/thisismattsmith/" target="_blank" rel="noref">LinkedIn</a>.</li>
            </ul>
            <h3>Social Media</h3>
        <ul>
          <li><a href="https://twitter.com/mattsmithtweets" target="_blank" rel="noref">Twitter</a></li>
          <li><a href="https://www.linkedin.com/in/thisismattsmith/" target="_blank" rel="noref">LinkedIn</a>.</li>
          <li><a href="https://medium.com/@thisismattsmith" target="_blank" rel="noref">Medium</a></li>
          <li><a href="https://www.polywork.com/mattsmith" target="_blank" rel="noref">Polywork</a></li>
        </ul>
        <h3>Follow my work</h3>
        <ul>
          <li>The best way to keep up with what I'm doing is to subscribe to my <a href="https://www.getrevue.co/profile/thisismattsmith" target="_blank" referrer="norel">monthly newsletter</a></li>
          <li>You can also add https://thisismattsmith.com/rss.xml to your RSS reader to get my blog posts as they're published</li>
          <li>I also have a LinkedIn page that reposts all my articles and information about new projects: <a href="https://www.linkedin.com/company/thisismattsmithdotcom" target="_blank" rel="noref">thisismattsmith.com on LinkedIn</a></li>
        </ul>
        </p>
    </Layout>
  )
}

export default ContactPage