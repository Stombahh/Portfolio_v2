import React from 'react'
import './base.css'
// import Container from './Container'
import Navigation from './Navigation/Navigation'
import Landing from './Landing/Landing'
import Skills from './Skills/Skills'
import About from './About/About'



class Template extends React.Component {
  render() {
    const { children } = this.props

    return (

      <div>
        <Landing />
        <Navigation />
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <About />
          <Skills />
        </div>
      </div>
    )
  }
}

export default Template
