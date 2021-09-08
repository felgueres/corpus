import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => (
  <Nav className="align-items-end ml-auto ">
    <Nav.Link
      eventKey='profiles'
      as={Link}
      to="/profiles"
      className="navbar-font-cta"
    >Get Started
    </Nav.Link>
    <Nav.Link
      eventKey='blog'
      as={Link}
      to="/blog"
      className="navbar-font"
    >Blog
    </Nav.Link>
  </Nav>
);

const NavBar = () => {
  return (
    <div className='navbar-layout'>
      <Navbar collapseOnSelect expand="md" bg="white">
        <Navbar.Brand className="navbar-font" href="/">ClimateCap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <MainNav />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
