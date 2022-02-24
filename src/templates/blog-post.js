import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"


const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <h3>/writing</h3>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        
        <header>
         <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>
        <section
          classname="blog-post-wrapper"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <p classname="blog-post-date">This post was first added to this site on {post.frontmatter.date}</p>
        
        <br></br>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap-reverse`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
        
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <footer>
          <Bio />
        </footer>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
