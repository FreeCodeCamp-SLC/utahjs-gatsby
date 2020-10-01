import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from '../components/Hero'
import indexStyles from '../styles/index.module.css'

const IndexPage = () => (
  <div className={indexStyles.home_page}>  
    <SEO title="Home" />
    <Hero />
  </div>
  
)

export default IndexPage
