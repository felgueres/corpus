import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";

const SideBar = () => {
  return (
    <div className='mt-5'>
      <Nav.Link className='nav-links font-inter' activeClassName="nav-link-active" as={RouterNavLink} to="/" exact>ClimateCap</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/profiles">Research</Nav.Link>
    </div>
  );
};

export default SideBar;
