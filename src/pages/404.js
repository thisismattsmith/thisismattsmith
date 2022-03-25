import React from "react"
import { graphql } from "gatsby"
import Landing from "../components/landing"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Landing location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <div classname="pageNotFound">
      <h2>Something is terribly wrong...</h2>
      
      
      <p>It seems that the page you're looking for does not exist. Return <Link to="/">Home</Link></p>
      </div>
      

    </Landing>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
