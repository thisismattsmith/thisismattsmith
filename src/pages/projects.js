import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="About Matt Smith" />
      <h3>/projects</h3>
      <h1>Experiments and things I've done for fun</h1>
      <p></p>
      <hr></hr>
      <h4>eLearningAdvice.com</h4>
      <p>Tips for creating far less and much better eLearning.</p>
      <p>Go to <a href="http://www.elearningadvice.com" target="_blank">eLearningAdvice.com</a></p>
      <br></br>
      <hr></hr>
      <h4>Rethinking Work</h4>
      <p>I'm posting articles about work in a publication on Medium.</p>
      <p>Go to <a href="http://www.rehtinkingwork.co" target="_blank">Rethinking Work</a></p>
      <br></br>
      <hr></hr>
<input type="radio" name="tabs" id="tab1"/> 
<label for="tab1">TheLearningFeed.com</label><br />
<input type="radio" name="tabs" id="tab2" />
<label for="tab2">LearnPerformanceConsulting.com</label><br />
<input type="radio" name="tabs" id="tab3" />
<label for="tab3">eLearning Advice</label><br />
<input type="radio" name="tabs" id="tab4" />
<label for="tab4">EdTech advisory</label><br />
<input type="radio" name="tabs" id="tab5" />
<label for="tab5">Employee Experience</label><br />

<div class="tab content1">
    <p>Yo</p>
    <p>Helping L&D teams get better at what they do.</p>
    <p>This includes fixing them completely.</p>
</div>

<div class="tab content2">I do a whole bunch of stuff</div>

<div class="tab content3">Tab3 Contents</div>

<div class="tab content4">Hola!</div>

<div class="tab content5">Words words worms</div>
    </Layout>
  )
}

export default ProjectsPage