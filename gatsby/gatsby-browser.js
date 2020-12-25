import React from "react"
import "./src/styles/_global.scss"
import Layout from "./src/components/Layout"

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}
