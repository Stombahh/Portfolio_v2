import React from 'react'
import './base.css'
// import './AnimatedBackground.css'
import Container from './Container'
import Navigation from './Navigation/Navigation'
import Landing from './Landing/Landing'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      // <div className="background">
      //   <div id="stars" />
      //   <div id="stars2" />
      //   <div id="stars3" />
      <div>

        <Landing />
        <Navigation />
        <Container>
          {children}
        </Container>
      </div>
      // </div>
    )
  }
}

export default Template
