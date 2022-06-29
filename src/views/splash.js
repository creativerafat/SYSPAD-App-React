import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './splash.css'

const Splash = (props) => {
  return (
    <div className="splash-container">
      <Helmet>
        <title>SYSPAD-App</title>
        <meta property="og:title" content="SYSPAD-App" />
      </Helmet>
      <div className="splash-container1">
        <img
          alt="image"
          src="/playground_assets/group%2027-1500h.png"
          loading="lazy"
          className="splash-image"
        />
        <Link to="/home" href="home" className="splash-navlink">
          Enter App
        </Link>
      </div>
    </div>
  )
}

export default Splash
