import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <h1>Things I've made</h1>
      <p></p>
      <h3>2022</h3>
<input type="radio" name="tabs" id="tab1"/> 
  <label for="tab1"><h2>The Learning Feed</h2></label>
    <div class="tab content1">
      <p>Yo</p>
      <p>Helping L&D teams get better at what they do.</p>
      <p>This includes fixing them completely.</p>
    </div>
<input type="radio" name="tabs" id="tab2" />
  <label for="tab2"><h2>LearnPerformanceConsluting.com</h2></label>
    <div class="tab content2">I do a whole bunch of stuff
    </div>
    <br />
<input type="radio" name="tabs" id="tab3" />
<label for="tab3"><h2>Growing Up</h2></label>
<div class="tab content3">A newsletter about learning, cultivating wisdom, understanding your place in the world and being a better person. 
<p>Growing Up</p></div>
<br />
<input type="radio" name="tabs" id="tab4" />
<label for="tab4">EdTech advisory</label><br />
<input type="radio" name="tabs" id="tab5" />
<label for="tab5">Employee Experience</label><br />







<div class="tab content4">Hola!</div>

<div class="tab content5">Words words worms</div>
    </Layout>
  )
}

export default ProjectsPage