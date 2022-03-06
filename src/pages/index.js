import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"
import { Link } from "gatsby"


const HomePage = ({ data, location }) => {

      return (
        
        <LandingPage location={location}>
          <SEO title="Matt Smith" />
          <h1 className="home-title"><Greeting />This is <input type="radio" name="tabs" id="tab1"/> 
<label for="tab1">Matt Smith</label>'s website.      
<br />
        I <input type="radio" name="tabs" id="tab2"/> 
<label for="tab2">make stuff</label> and <input type="radio" name="tabs" id="tab3" /><label for="tab3">write things</label> about work, learning and <input type="radio" name="tabs" id="tab4" /><label for="tab4">growing up</label>.<br />
  
  <div class="tab content1">I help L&D teams get better at what they do.
  <br />
  <Link to="/about">About</Link>
</div> 
<div class="tab content2">I'm currently working on a website to help people learn Performance Consulting. You can see a list of my work on the <Link link to="/projects">projects page</Link>.
</div>
<div class="tab content3">Here are my three most recent pieces of writing:</div>
<div class="tab content4">Growing up? That sounds weird. But when I look through the work I do, the books I read, it all falls under the idea of growth. Even my interests in new ways of working comes from an interest in using business as a vehicle for personal growth.</div>
        
        <br />
        </h1>   
          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage