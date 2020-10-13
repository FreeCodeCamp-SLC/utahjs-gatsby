import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import indexStyles from "../styles/index.module.css"

const IndexPage = () => (
  <div className={indexStyles.home_page}>
    <SEO title="Home" />
    <Layout />
    <Hero />
  </div>
)

export default IndexPage
