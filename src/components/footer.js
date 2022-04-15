import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Footer = () => (
    <div className='navbar-bg footer-frame'>
        <Navbar className="py-2" >
          <Navbar.Brand className="navbar-font" href="/">American Machina [V0.0]</Navbar.Brand>
          <NavbarCollapse className='justify-content-center'>
          </NavbarCollapse>
          <Navbar.Text className="navbar-font">feedback | updates</Navbar.Text>
        </Navbar>
    </div>
)
;

export default Footer;
