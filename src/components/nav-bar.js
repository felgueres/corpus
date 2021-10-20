import React from "react";
import { Container, Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { SearchBar } from ".";

const NavBar = () => {
  return (
    <div className='bg-white border'>
      <Container>
        <Navbar className="py-3" >
          <Navbar.Brand className="navbar-font" href="/">ClimateDisclosures</Navbar.Brand>
          <NavbarCollapse className='justify-content-center'>
            <SearchBar />
          </NavbarCollapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavBar;
