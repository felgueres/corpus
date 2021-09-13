import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBar = () => {
    return (
        <div className='pt-5'>
            <Nav.Link className='nav-links brand' href="/">ClimateCap</Nav.Link>
            <Nav.Link className='nav-links' activeClassName="nav-link-active" as={RouterNavLink} to="/profiles" > Company Ratings </Nav.Link>
        </div>
    );
};

export default SideBar;