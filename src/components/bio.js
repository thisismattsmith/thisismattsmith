/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/thisismattsmith.png/" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          Thanks for reading. If you'd like to read my latest posts you can join my newsletter. {author.name}.
          {` `}<br />
         I also post ideas and questions on  <a href="https://www.linkedin.com/in/thisismattsmith/">LinkedIn</a> and <a href={`https://twitter.com/${social?.twitter || ``}`}>
            Twitter</a>.
          
        </p>
      )}
    </div>
  )
}

export default Bio
