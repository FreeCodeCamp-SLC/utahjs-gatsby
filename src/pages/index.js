import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import Hero from '../components/Hero'

const IndexPage = () => (
  <div className='home-page'>  
    <SEO title="Home" />
    <Hero />
  </div>
  
)

export default IndexPage
