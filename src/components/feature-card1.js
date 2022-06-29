import React from 'react'

import PropTypes from 'prop-types'

import './feature-card1.css'

const FeatureCard1 = (props) => {
  return (
    <div className={`feature-card1-feature-card ${props.rootClassName} `}>
      <h2 className="feature-card1-text">{props.title}</h2>
      <h2 className="feature-card1-text1">{props.title1}</h2>
    </div>
  )
}

FeatureCard1.defaultProps = {
  title: '$50.25 M',
  title1: 'Raised',
  rootClassName: '',
}

FeatureCard1.propTypes = {
  title: PropTypes.string,
  title1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default FeatureCard1
