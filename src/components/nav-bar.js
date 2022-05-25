import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <div id="homebar">
      <Navbar>
        <Navbar.Text href="/">American Machina</Navbar.Text>
        <NavbarCollapse className='justify-content-center'>
        </NavbarCollapse>
        <Nav.Link href='/about'>About</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
