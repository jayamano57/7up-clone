import React, { useEffect } from "react"
import Nav from "./Nav"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <div id="app">
      <Helmet>
        <script
          src="https://kit.fontawesome.com/d391db31fc.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Nav />
      <div className="body">{children}</div>
    </div>
  )
}
