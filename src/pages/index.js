import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"
import { Link } from "gatsby"


const HomePage = ({ data, location }) => {

      return (
        
        <LandingPage location={location}>
          <SEO title="Home" />
          <h1 className="home-title"><Greeting />This is <input type="radio" name="tabs" id="tab1"/> 
<label for="tab1">Matt Smith</label>'s website.      
<br />
        He <input type="radio" name="tabs" id="tab2"/> 
<label for="tab2">makes stuff</label> and <input type="radio" name="tabs" id="tab3" /><label for="tab3">writes things</label> about work, learning and <input type="radio" name="tabs" id="tab4" /><label for="tab4">growing up</label>.<br />
<div class="tab content1"><p>I'm not the actor who used to play the Doctor on Doctor Who. I'm not one of the other 3 billion Matt Smith's in the world. I'm a guy who has done a lot of work in the field of Learning and Development. If you really want to, you can find out more about me on my <Link to="/about">About</Link> page.</p>
</div> 
<div class="tab content2">I'm currently working on a website to help people learn Performance Consulting. You can see a list of my work on the <Link link to="/projects">projects page</Link>.
</div>
<div class="tab content3">
  <p>I'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. You</p>
  <p>Is great</p>
  
</div>
<div class="tab content4">Everything I work on can be rolled up into this topic of "Growing up". This includes learning, expertise, management, culture, parenting, adult development, childhood development, education and cultivating systems that enable us to be better people. I go into more detail</div>
        
        <br />
        </h1>   
          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage