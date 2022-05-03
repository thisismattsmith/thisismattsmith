import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ProjectsPage = ({ data, location }) => {
  

  return (
    <Layout location={location}>
      <SEO title="Projects" />
      <h1>Things I've made</h1>
      <p></p>
      <h2>// 2022 //</h2>
<input type="radio" name="tabs" id="tab1"/> 
  <label for="tab1"><h3>The Learning Feed</h3></label>
    <div class="tab content1">
      <p>This site is a continuous feed of interesting ideas about learning, expertise, education and instruction.</p> 
      <p>I created it to scratch my own itch -- I desperately wanted a place to visit that was full of stimulating thoughts about learning. Following people on social media is great but there are very few people who <em>only</em> post about learning. I wanted a way to cut through the noise so I made The Learning Feed.</p> 
      <p>Visit the site: <a href="https://thelearningfeed.com" target="_blank" rel="noref">TheLearningFeed.com</a></p>
      <small><p>You can also follow the <a href="https://www.linkedin.com/company/the-learning-feed" target="_blank" rel="noref">The Learning Feed LinkedIn page</a> and  <a href="https://www.twitter.com/TheLearnFeed" target="_blank" rel="noref">The Learning Feed on Twitter</a> to get posts from the site directly in your social feed.</p></small>
    </div>
    <br />
<input type="radio" name="tabs" id="tab3" />
<label for="tab3"><h3>Growing Up</h3></label>
<div class="tab content3"><p>A newsletter about cultivating wisdom, understanding your place in the world and being a better person.</p>
<p><a href="https://mattsmith.substack.com/" target="_blank" rel="noref">Visit Growing Up</a></p></div>
<br />
<input type="radio" name="tabs" id="tab2" />
  <label for="tab2"><h3>Secret project</h3></label>
    <div class="tab content2"><p><em>Shhhhhh. </em>Coming soon. Sign up to my <a href="https://www.getrevue.co/profile/thisismattsmith" target="_blank" referrer="norel">newsletter</a> to get notified.</p>
    </div>
    <br />

    </Layout>
  )
}

export default ProjectsPage