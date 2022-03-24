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
      <small>© {new Date().getFullYear()}, Matt Smith. Have a splendid day. </small>
      </footer>
    </div>
    </div>
  )
}

export default Layout
