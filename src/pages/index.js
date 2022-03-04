import React from "react"
import SEO from "../components/seo"
import Greeting from "../components/greeting"
import LandingPage from "../components/landing"

const HomePage = ({ data, location }) => {

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

      return (
        
        <LandingPage location={location}>
          <SEO title="Matt Smith" />
          
          <h1 className="home-title"><Greeting />This is <button class="accordion">Matt Smith</button>'s website.
          <div class="panel">
            <p>Matt Smith is a dude.</p>
          </div><br/>
          
          I <button class="accordion">make stuff</button>.
          <div class="panel">
            <p>Lorem ipsum..</p>
          </div>
          <br />
          I <button class="accordion">write things</button>.<br />
          <div class="panel">
            <p>Lorem ipjhghkgkjg</p>
          </div>
          <br />
          </h1>
          <br />
          
         

          
          

          

          <p className="enter-site">Enter</p>
          </LandingPage>
          )
          }
          
export default HomePage