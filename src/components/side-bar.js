import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <div className='mt-5'>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/" exact>About</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/profiles">Profiles</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/invest" exact>Thesis</Nav.Link>
    </div>
  );
};

export default SideBar;
