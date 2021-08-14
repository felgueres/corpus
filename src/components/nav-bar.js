import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar, Badge, Row } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import logo from "../assets/ClimateMetricLogo.svg"

const MainNav = () => (
  <Nav >
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
    >
      Climate Disclosures 
    <span class="badge badge-primary badge-small">Beta</span>
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
    >
      About
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/feedback"
      exact
    >
      Feedback
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
        <Navbar.Brand href="">Climate<strong>Metric</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse className='justify-content-center' id='responsive-navbar-nav' >
          <MainNav/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
