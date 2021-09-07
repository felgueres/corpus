import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => (
  <Nav className="align-items-end">
    <Nav.Link
      eventKey='profiles'
      as={Link}
      to="/profiles"
      exact
    >Product
    </Nav.Link>
  </Nav>
);

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" className="navbar">
      <Navbar.Brand className='lm-2 font-inter' href="/">Climate<strong>Cap</strong></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
      <Navbar.Collapse id='responsive-navbar-nav' >
        <MainNav />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
