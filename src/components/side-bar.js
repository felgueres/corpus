import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBar = () => {
  return (
    <div className='mt-5'>
                  
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/" exact>What is ClimateCap?</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/profiles">Search</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/analysis" exact>News</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/roadmap" exact>Roadmap</Nav.Link>
      <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/feedback" exact>Feedback</Nav.Link>
    </div>
  );
};

export default SideBar;
