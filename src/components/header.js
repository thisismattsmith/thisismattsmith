import React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

const Header = () => (
    
    <header>
    <div className="universalSidebar">
    <div className="sidebarPic">
    <Link to="/"><img src={'/thisismattsmith.png'} alt="Profile pic" width="100px" float="left"/></Link>
    </div>
  <div className="sidebar-wrapper">
          <ul>
            <li><Link to="/about" className="sidebar-link">about</Link></li>
            <li><Link to="/consulting" className="sidebar-link">consulting</Link></li>
            <li><Link to="/writing" className="sidebar-link">writing</Link></li>
            <li><Link to="/ideas" className="sidebar-link">ideas</Link></li>
            <li><Link to="/side-projects" className="sidebar-link">side projects</Link></li>
            <li><Link to="/contact" className="sidebar-link">contact</Link></li>
          </ul>  
  </div>
  </div>
    </header>
)


export default Header