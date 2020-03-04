import React from "react";
import "../components/base.css";
import favicon from "../../static/favicon.ico";
import Helmet from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Experiences from "../components/Experiences/Experiences";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
require('typeface-passion-one');

class RootIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Tommi Ilvonen - Software Developer">
          <link rel="icon" href={favicon} />
        </Helmet>
        <Landing />
        <Navbar />
        <About />
        <Experiences />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default RootIndex;
