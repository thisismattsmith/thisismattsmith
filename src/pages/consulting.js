import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ConsultingPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Consulting" />
      <h1>I help companies perform better through learning and development</h1><p>
      <p><em>Note: I have very limited availability at the moment and can't commit to any time-sensitive projects. However, I know many great people that can. <Link to="/contact">Get in touch</Link> and I can introduce you to someone in my network that can help you.</em>
      </p>









</p>

    </Layout>
  )
}





export default ConsultingPage