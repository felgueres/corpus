import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

const NavBar = () => {
  return (
    <div>
      <div className='navbar-bg'>
        <Navbar className="py-2" >
          <Navbar.Brand className="navbar-font" href="/">American Machina<span style={{'fontSize': '9px'}}><br/>Market Insights of America's Industrial Base </span> </Navbar.Brand>
          <NavbarCollapse className='justify-content-center'>
          </NavbarCollapse>
          <Navbar.Text className="navbar-font">feedback | updates</Navbar.Text>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
