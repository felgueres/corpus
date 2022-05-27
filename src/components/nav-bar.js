import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <div id="homebar">
      <Navbar>
        <Nav.Link href="/">Aerospace Market Landscape</Nav.Link>
        <NavbarCollapse className='justify-content-center'></NavbarCollapse>
        <Nav.Link href='https://www.surveymonkey.com/r/25G9H5K'>mailing list</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
