import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

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
      <p classname="footer-text">© {new Date().getFullYear()}, Matt Smith. Built on <Link to="/acknowledgement">Wadawurrung country</Link>. Thanks for visiting.</p>
      </footer>
    </div>
    </div>
  )
}

export default Layout
