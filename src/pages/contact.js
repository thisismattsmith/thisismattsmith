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
      <p>If you'd like to have a conversation or send a quick message feel free to IM me.</p>
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
          <li>If you'd like to receive updates about new projects, ideas and articles you can subscribe to my <a href="https://www.getrevue.co/profile/thisismattsmith" target="_blank" referrer="norel">monthly newsletter</a></li>
          <li>Add https://thisismattsmith.com/rss.html to your RSS reader to get my blog posts as they're published</li>
          <li>I've created a LinkedIn page that reposts my articles and information about my projects: <a href="https://www.linkedin.com/company/thisismattsmithdotcom" target="_blank" rel="noref">thisismattsmith.com on LinkedIn</a></li>
        </ul>
        </p>
    </Layout>
  )
}

export default ContactPage