import React from 'react'

import heroBoxStyles from '../styles/hero-box.module.css'
import logo from '../images/utahjs-logo.png'

const HeroBox = () => {
  return (
    <div className={heroBoxStyles.hero_box}>
      <div className={heroBoxStyles.hero_box_inner}>
        <img className={heroBoxStyles.logo} src={logo} alt='UtahJS Logo' />
        <h2>UtahJS</h2>
        <div className={heroBoxStyles.hero_subtext}>
          JavaScript Engineers of Utah
        </div>
        <div className={heroBoxStyles.hero_subtext}>
          Let's learn together.
        </div>
        <a className={`${heroBoxStyles.btn} ${heroBoxStyles.yellow}`} href='https://conf.utahjs.com'>Conference</a>
        <a className={`${heroBoxStyles.btn} ${heroBoxStyles.green}`} href='https://slack.utahjs.com'>Join Slack</a>
      </div>
    </div>
  )
}

export default HeroBox