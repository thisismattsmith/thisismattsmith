import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header


  return (
    <div>
      <Header />
      <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header h1>{header}
        </header>
      <main>{children}
        </main>
      <footer>
       © {new Date().getFullYear()}, Matt Smith. No tracking, no analytics. 
       <p></p>
       <p>I'm constantly experimenting with this site. If you spot any errors please <Link to="/contact">contact me</Link></p>.
        <form><input type="text" label="email"></input></form>
      </footer>
    </div>
    </div>
  )
}

export default Layout
