import React from "react"
import { Link } from "gatsby"
import { siteMetadata } from "../../gatsby-config"

const Header = () => (
    <header>
        <div className="global-header">
            <div className="inner-header">
                <div className="home-nav">
                    <Link to ="/">Matt Smith</Link>
                </div>
                <div className="page-nav">
                    <nav>
                        <Link to="/About">About</Link>
                        <Link to="/Consulting">Consulting</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Ideas">About</Link>
                        <Link to="/Now">Now</Link>
                    </nav>
                </div>
            </div>
        </div>
    </header>
)


export default Header