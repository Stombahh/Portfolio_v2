import React from "react";
import Navigationbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Scrollspy from "react-scrollspy";
import Scroll from "../Scroll";
import "./Navbar.css";

class Navbar extends React.Component {
  render(props) {
    return (
      <Navigationbar id="nav" sticky="top" className="{props.sticky ? 'alt' : ''}" className="customNav" expand="lg">
        <Navigationbar.Brand href="#home">Tommi Ilvonen</Navigationbar.Brand>
        <Navigationbar.Toggle
          className="custom-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navigationbar.Collapse id="basic-navbar-nav" className="customsuunta">
          <Scrollspy
            items={["home", "about", "skills", "projects", "contact"]}
            currentClassName="is-active"
            offset={100}
          >
            <Nav>
              <Scroll type="id" element="home">
                <Nav.Link href="#home">Home</Nav.Link>
              </Scroll>
              <Scroll type="id" element="about">
                <Nav.Link href="#about">About</Nav.Link>
              </Scroll>
              <Scroll type="id" element="skills">
                <Nav.Link href="#skills">Skills</Nav.Link>
              </Scroll>
              <Scroll type="id" element="projects">
                <Nav.Link href="#projects">Projects</Nav.Link>
              </Scroll>
              <Scroll type="id" element="contact">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Scroll>
            </Nav>
          </Scrollspy>
        </Navigationbar.Collapse>
      </Navigationbar>
    );
  }
}
export default Navbar;
