import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"

const HomePage = ({ data, location }) => {
    

      return (
        <LandingPage location={location}>
          <SEO title="Matt Smith" />
          <h1 className="home-title"><Greeting />This is Matt Smith's website.<br/>
          I make stuff.
          <br />
          I write things.<br />
          </h1>
          <br />
          
          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage