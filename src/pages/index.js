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
          
          <h1 className="home-title"><Greeting />This is <button class="accordion">Matt Smith</button>'s website.
          <div class="panel">
            <p>Matt Smith is a dude.</p>
          </div><br/>
          
          I <button class="accordion">make stuff</button>.
          <div class="panel">
            <p>Lorem ipsum..</p>
          </div>
          <br />
          I <button class="accordion">write things</button>.<br />
          <div class="panel">
            <p>Lorem ipjhghkgkjg</p>
          </div>
          <br />
          </h1>
          <br />
          
         

          
          

          

          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage