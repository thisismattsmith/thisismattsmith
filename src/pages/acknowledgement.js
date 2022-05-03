import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AcknowledgementPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title= "Acknowledgement of country" />
      <h1>Acknowledgement of country</h1>
      
      <blockquote>I (Matt Smith) acknowledge the Traditional Custodians of country throughout Australia and their connection to land, sea and community. I pay my respect to Elders past, present and future, extending that respect to all Aboriginal and Torres Strait Islander peoples today.</blockquote>
      </Layout>
  )
}

export default AcknowledgementPage