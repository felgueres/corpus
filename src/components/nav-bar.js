import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => (
  <Nav className="align-items-end centered">
    <Nav.Link
      eventKey='profiles'
      as={Link}
      to="/profiles"
      className="navbar-font-cta"
    >
    Search
    </Nav.Link>
  </Nav>
);

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-layout mb-5" collapseOnSelect expand="md" bg="white">
        <Navbar.Brand className="navbar-font" href="/">Climate Disclosures</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls='responsive-navbar-nav' /> */}
        {/* <Navbar.Collapse id='responsive-navbar-nav'> */}
          {/* <MainNav /> */}
        {/* </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default NavBar;
