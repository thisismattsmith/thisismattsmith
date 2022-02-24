import React from "react"
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
       © {new Date().getFullYear()}, Matt Smith. Have a wonderful day. 
       <p></p>
      </footer>
    </div>
    </div>
  )
}

export default Layout
