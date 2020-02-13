import React from "react";
// import { Link } from 'gatsby'
import styles from "./Navigation.css";
// import $ from 'jquery';
import "./Navigation.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky="top" className="customNav" expand="lg">
        <Navbar.Brand href="#home">Tommi Ilvonen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
