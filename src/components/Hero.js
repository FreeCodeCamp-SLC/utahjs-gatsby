import React from 'react'

import HeroBox from './HeroBox'
import heroStyles from '../styles/hero.module.css'

const Hero = () => {
  return (
    <div className={heroStyles.hero}>
      <HeroBox />
    </div>
  )
}

export default Hero