import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Greeting from "../components/greeting"

const HomePage = ({ data, location }) => {
    

      return (
        <Layout location={location}>
          <SEO title="Matt Smith" />
          <h1> <Greeting />this is Matt Smith's website.</h1>
         
          <p>This is the p text.</p>
          </Layout>
          )
          }
          
export default HomePage