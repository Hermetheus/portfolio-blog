import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import "../styles/index.scss"
import Footer from "./footer"
import Header from "./header"
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <div>
          <Header />
        </div>
        <div>
          <div className={layoutStyles.content}>{props.children}</div>
        </div>
        <div />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
