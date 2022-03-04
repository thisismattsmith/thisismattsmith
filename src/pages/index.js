import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"
import Accordian from "../components/accordian"

const HomePage = ({ data, location }) => {

      return (
        
        <LandingPage location={location}>
          <SEO title="Matt Smith" />
          <Accordian />
          <br />       

          
          

          

          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage