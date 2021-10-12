import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { SearchBar } from ".";

const NavBar = () => {
  return (
    <div>
      <Navbar className="bg-white shadow-sm py-3" >
        <Navbar.Brand className="navbar-font" href="/">ClimateDisclosures</Navbar.Brand>
        <NavbarCollapse className='justify-content-center'>
        <SearchBar />
        </NavbarCollapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
