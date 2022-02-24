import React from "react"
import { Link } from "gatsby"

const LandingPage = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <div className="landing-wrapper">
      <div data-is-root-path={isRootPath}>
      <main>{children}
        </main>
    </div>
    </div>
  )
}

export default LandingPage
