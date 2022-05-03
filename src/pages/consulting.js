import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ConsultingPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Consulting" />
      <h1>Consulting services</h1>
      
      <p>
     
    <br />
<a href="https://calendly.com/this-is-matt-smith"><strong>Schedule a 20 min intro call ☞</strong></a>
</p>
<br/>
<hr />
<p><small>P.S. If you're looking for a Learning & Development service that isn't listed you can still <Link to="/contact">get in touch</Link> and I can introduce you to someone in my network. I've worked with some of the brightest minds in L&D, EdTech and eLearning. I'd be happy to refer you to someone who can help.</small>
      </p>
    </Layout>
  )
}





export default ConsultingPage