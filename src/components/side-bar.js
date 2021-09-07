import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

const SideBar = () => {
    return ( 
        <div className ='heavy-padded' >
        <Nav.Link className = 'nav-links' activeClassName = "nav-link-active" as = { RouterNavLink } to = "/" exact > Climate<strong>Cap</strong> </Nav.Link>
        <Nav.Link className = 'nav-links' activeClassName = "nav-link-active" as = { RouterNavLink } to = "/profiles" > Get Started </Nav.Link> 
        </div>
    );
};

export default SideBar;