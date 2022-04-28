import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const Footer = () => (
    <div id='footer' className="bg-white">
        <Navbar>
          <NavbarCollapse className='justify-content-center'></NavbarCollapse>
          <Navbar.Text>V0.0</Navbar.Text>
        </Navbar>
    </div>
)
;

export default Footer;
