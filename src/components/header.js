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
            <li><Link to="/about" className="sidebar-link">About</Link></li>
            <li><Link to="/blog" className="sidebar-link">Blog</Link></li>
            <li><Link to="/projects" className="sidebar-link">Projects</Link></li>
            <li><Link to="/contact" className="sidebar-link">Contact</Link></li>
            <li><Link to="/newsletter" className="sidebar-link">Newsletter</Link></li>
            <li><Link to="/consulting" className="sidebar-link">Hire me</Link></li>
          </ul>  
  </div>
  </div>
    </header>
)


export default Header