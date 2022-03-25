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
<label for="tab2">creates</label> and <input type="radio" name="tabs" id="tab3" /><label for="tab3">writes things</label> about work, learning and <input type="radio" name="tabs" id="tab4" /><label for="tab4">growing up</label>.<br />
<div class="tab content1">
  <p>Okay, if you don't mind I'm going to switch to writing in the first person now.</p>
  <p>If you'd like more info about me take a look at my <Link to="/about">about</Link> page or get in <Link to="/contact">contact</Link> with me.</p>
  <p><Link to="/consulting">Hire me</Link> as an advisor.</p>
  <p><Link to="/contact">Contact me</Link> for any questions or offers to collaborate.</p> 
</div> 
<div class="tab content2"><p>I'm always working on few <Link link to="/projects">projects</Link> at a time.</p>
<br />
<p>You can also <Link link to="/consulting">hire me</Link> to create something for you.</p>
</div>
<div class="tab content3">
  <p>I'm trying to keep my writing on this site mostly concentrated on how we can work and learn in new</p>
  
</div>
<div class="tab content4"><p>Everything I work on can be rolled up into this topic of "Growing up". This includes learning, expertise, wisdom, personal growth, culture, parenting, adult development, childhood development, education and cultivating systems that enable us to be better people.</p>
        <p>In fact, I have a <Link to="/newsletter">newsletter</Link> called <em>Growing Up</em>. I send out an essay a month about these very topics. Enter your email below if that's something you'd be interested in.</p>
        <iframe src="https://mattsmith.substack.com/embed" width="100%" height="180" frameborder="0" scrolling="no"></iframe></div>
        <br />
        </h1>   
          <p className="enter-site"><Link to="/about">☞</Link></p>
          </LandingPage>
          )
          }
          
export default HomePage