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
  <p>If it's okay with you I'm going to switch to writing in a first person perspective now. It's a bit more personal.</p>
  <p>I have around 20 years experience in leadership, with 12+ years specifically in the field of Learning & Development. At this point I'm most interesting in working alone (with some fun collaboration) to create <Link to="/projects">products, resources and other stuff</Link> that helps improve the way people work and learn. Sometimes I <Link to="/consulting">consult</Link> with businesses to help them solve interesting problems. I also write about my work and new ideas on this site's <Link to="/blog">blog</Link>.</p>
  <p>If you'd like more info about me take a look at my <Link to="/about">about</Link> page or get in <Link to="/contact">contact</Link> with me.</p>
</div> 
<div class="tab content2"><p>In my spare time I'm working on <Link link to="/projects">projects</Link> focusing on learning, leadership, productivity and collaboration. </p>
<p>My latest project is a continuous feed of ideas about learning, expertise and education called <a href="https://TheLearningFeed.com" target="_blank" rel="noreferrer">The Learning Feed</a>.</p>
<br />
</div>
<div class="tab content3">
  <p>My <Link to="/blog">blog</Link> is where I write about improving human performance and different approaches to learning in the workplace.</p>
  
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