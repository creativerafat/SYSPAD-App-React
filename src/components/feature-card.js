import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-feature-card">
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="feature-card-image"
      />
      <div className="feature-card-container">
        <img
          alt={props.image_alt}
          src="/playground_assets/ellipse%201-200h.png"
          className="feature-card-image1"
        />
        <h2 className="feature-card-text">{props.heading}</h2>
        <span className="feature-card-text1">{props.text}</span>
        <span className="feature-card-text2">{props.text1}</span>
      </div>
      <div className="feature-card-container1">
        <ul className="feature-card-ul list">
          <li className="list-item"></li>
          <li className="feature-card-li1 list-item">
            <span className="feature-card-text3">Launcing Date</span>
          </li>
          <li className="list-item">
            <span className="feature-card-text4">Raising</span>
          </li>
        </ul>
        <ul className="feature-card-ul1 list">
          <li className="list-item"></li>
          <li className="feature-card-li4 list-item">
            <span className="feature-card-text5">Open Now</span>
          </li>
          <li className="feature-card-li5 list-item">
            <span className="feature-card-text6">$1,000,000</span>
          </li>
        </ul>
      </div>
      <a
        href={props.link_text}
        target="_blank"
        rel="noreferrer noopener"
        className="feature-card-link"
      >
        {props.text2}
      </a>
    </div>
  )
}

FeatureCard.defaultProps = {
  text: '$CCS',
  image_alt1: 'image',
  image_src1: '/playground_assets/rectangle%206-400w.png',
  heading: 'CryptoCitizen',
  text1: 'Hightest ranking meta verse citizen community.',
  link_text: 'https://example.com',
  image_src:
    'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHllbGxvdyUyMHRlY2h8ZW58MHx8fHwxNjI2MjU1NDk0&ixlib=rb-1.2.1&w=200',
  image_alt: 'image',
  text2: 'TOKEN SALE',
}

FeatureCard.propTypes = {
  text: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  heading: PropTypes.string,
  text1: PropTypes.string,
  link_text: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  text2: PropTypes.string,
}

export default FeatureCard
