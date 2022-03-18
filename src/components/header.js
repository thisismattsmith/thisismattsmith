import React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

const Header = () => (
    
    <header>
    <div className="universalSidebar">
    <div className="sidebarPic">
    <Link to="/"><img src={'/thisismattsmith.png'} alt="Profile pic of Matt Smith" width="90px" float="left"/></Link>
    </div>
  <div className="sidebar-wrapper">
          <ul>
            <li><Link to="/about" className="sidebar-link">about</Link></li>
            <li><Link to="/blog" className="sidebar-link">blog</Link></li>
            <li><Link to="/projects" className="sidebar-link">projects</Link></li>
            <li><Link to="/contact" className="sidebar-link">contact</Link></li>
            <li><Link to="/consulting" className="sidebar-link">consulting</Link></li>
            <li><Link to="/newsletter" className="sidebar-link">newsletter</Link></li>
          </ul>  
  </div>
  </div>
    </header>
)


export default Header