import React from 'react'
import Typed from 'react-typed'
import './Landing.css'

class Landing extends React.Component {
  render() {

    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        {/* <div className="overlay-intro"></div> */}
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Möikkeli, täsä mä oon</h1>
              <p className="intro-subtitle"><span className="text-slider-items">
              </span><strong className="text-slider"><Typed strings={['Software Developer', 'Scrum Master', 'Gamer']} typeSpeed={80} backDelay={1100} backSpeed={30} loop /></strong></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing
