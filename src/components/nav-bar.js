import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./logout-button";
import LoginButton from "./login-button";
import logo from "../assets/ClimateMetricLogo.svg"

const MainNav = () => (
  <Nav style={{ float: 'right' }}>
    <Nav.Link
      as={RouterNavLink}
      to="/"
      exact
      activeClassName="router-link-exact-active"
    >
      Climate Disclosures
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/profile"
      exact
      activeClassName="router-link-exact-active"
    >
      About
    </Nav.Link>
    <Nav.Link
      as={RouterNavLink}
      to="/feedback"
      exact
      activeClassName="router-link-exact-active"
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
        <span style={{ display: 'inline-block' }}>
          <img className="app-logo" src={logo} alt="ClimateMetric Logo" width="150" />
          <span class="badge badge-primary  ml-2 mt-1" style={{ verticalAlign: 'top' }}>Beta</span>
        </span>

        <MainNav />
        {/* <AuthNav /> */}
      </Container>
    </Navbar>
  );
};

export default NavBar;
