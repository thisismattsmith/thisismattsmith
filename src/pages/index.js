import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"


const HomePage = ({ data, location }) => {

      return (
        
        <LandingPage location={location}>
          <SEO title="Matt Smith" />
          <h1 className="home-title"><Greeting />This is <input type="radio" name="tabs" id="tab1"/> 
<label for="tab1">Matt Smith</label>'s website.      
<br />
        I make <input type="radio" name="tabs" id="tab2"/> 
<label for="tab2">stuff</label>.<br />
I write <input type="radio" name="tabs" id="tab3" /><label for="tab3">things</label>.<br />
  <div class="tab content1">
    <p></p>
    <p>I help L&D teams get better at what they do.</p>
    <p>This includes fixing them completely.</p>
</div> 
<div class="tab content2">I do a whole bunch of stuff</div>
<div class="tab content3">Tab3 Contents</div>
        
        <br />
        </h1>   
          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage