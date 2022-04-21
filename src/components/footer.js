import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Footer = () => (
    <div id='homebar' className="bg-white">
        <Navbar>
          <Navbar.Brand href="/">American Machina [V0.0]</Navbar.Brand>
          <NavbarCollapse className='justify-content-center'>
          </NavbarCollapse>
          <Navbar.Text>feedback</Navbar.Text>
        </Navbar>
    </div>
)
;

export default Footer;
