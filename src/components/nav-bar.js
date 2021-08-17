import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";

const MainNav = () => (
  <Nav >
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
    >
    Home
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/app"
      exact
    >
      Climate Disclosures
      <span class="badge badge-primary badge-small">Beta</span>
    </Nav.Link>
  </Nav>
);


const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav className="justify-content-end">
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const NavBar = () => {
  return (
    <Navbar expand="md" bg="white">
      <Container >
        <Navbar.Brand className='lm-2 font-inter' href="/">Climate<strong>Cap</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav' >
          <MainNav />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
