import React from 'react'
import './base.css'
import Container from './Container'
import Navigation from './Navigation/Navigation'
import Landing from './Landing/Landing'

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (

      <div>
        <Landing />
        <Navigation />
        <Container>
          {children}
        </Container>
      </div>
    )
  }
}

export default Template
