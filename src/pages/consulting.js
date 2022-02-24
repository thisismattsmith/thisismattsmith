import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ConsultingPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Consulting" />
      <h3>/consulting</h3>
      <h1>I help companies perform better through learning and development</h1><p>
      <p>
      </p>
      <h3>Title</h3>
<input type="radio" name="tabs" id="tab1"/> 
<label for="tab1">Upskilling L&D</label>
<input type="radio" name="tabs" id="tab2" />
<label for="tab2">L&D Strategy</label>
<input type="radio" name="tabs" id="tab3" />
<label for="tab3">Onboarding</label>
<input type="radio" name="tabs" id="tab4" />
<label for="tab4">EdTech advisory</label>
<input type="radio" name="tabs" id="tab5" />
<label for="tab5">Employee Experience</label>

<div class="tab content1">
    <p>Yo</p>
    <p>Helping L&D teams get better at what they do.</p>
    <p>This includes fixing them completely.</p>
</div>

<div class="tab content2">I do a whole bunch of stuff</div>

<div class="tab content3">Tab3 Contents</div>

<div class="tab content4">Hola!</div>

<div class="tab content5">Words words worms</div>
</p>

    </Layout>
  )
}





export default ConsultingPage