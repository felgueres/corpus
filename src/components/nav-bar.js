import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Nav } from "react-bootstrap";


const NavBar = () => {
  return (
    <div id="homebar">
      <Navbar>
        <Navbar.Brand href="/">American Machina</Navbar.Brand>
        <NavbarCollapse className='justify-content-center'>
          <Navbar.Text>Insights on America's Industrial Base</Navbar.Text>
        </NavbarCollapse>
        <Nav.Link href='/about'>About</Nav.Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
