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
</div> 
<div class="tab content2"><p>I create all kinds of stuff to help people learn. work on the <Link link to="/projects">projects page</Link>.</p>
</div>
<div class="tab content3">
  <p>I'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. YouI'm currently working on a website to help people learn Performance Consulting. You</p>
  <p>Is great</p>
  
</div>
<div class="tab content4"><p>Everything I work on can be rolled up into this topic of "Growing up". This includes learning, expertise, management, culture, parenting, adult development, childhood development, education and cultivating systems that enable us to be better people. I go into more detail</p>
        <p>In fact, I have a <Link to="/newsletter">newsletter</Link> called <em>Growing Up</em>. I send out an essay a month about these very topics. Enter your email below if that's something you'd be interested in.</p>
        <iframe src="https://mattsmith.substack.com/embed" width="100%" height="180" frameborder="0" scrolling="no"></iframe></div>
        <br />
        </h1>   
          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage