import React from "react";
import Navigationbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Scrollspy from "react-scrollspy";
import Scroll from "../Scroll";
import "./Navbar.css";

const Navbar = (props) => (
      <Navigationbar id="nav" sticky="top" className="customNav" expand="lg">
        <Navigationbar.Brand href="#home">Tommi Ilvonen</Navigationbar.Brand>
        <Navigationbar.Toggle
          className="custom-toggler"
          aria-controls="basic-navbar-nav"
        />
        <Navigationbar.Collapse id="basic-navbar-nav" className="navDirection">
          <Nav>
          <Scrollspy
            items={['home', 'about', 'experience', 'skills', 'projects', 'contact']}
            currentClassName="is-active"
            offset={-200}
            >
              <li>
                <Scroll type="id" element="home">
                  <Nav.Link href="#home">Home</Nav.Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="about">
                  <Nav.Link href="#about">About</Nav.Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="experience">
                  <Nav.Link href="#experience">Experience</Nav.Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="skills">
                  <Nav.Link href="#skills">Skills</Nav.Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="projects">
                  <Nav.Link href="#projects1">Projects</Nav.Link>
                </Scroll>
              </li>
              <li>
                <Scroll type="id" element="contact">
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Scroll>
              </li>
          </Scrollspy>
            </Nav>
        </Navigationbar.Collapse>
      </Navigationbar>
    );
export default Navbar;
