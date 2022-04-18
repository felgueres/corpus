import React from "react";
import { Navbar } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import useEscape from "./useEscape";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIESNAVBAR } from "../utils";

const NavBar = () => {
  return (
    <div>
      <div className='navbar-bg'>
        <Navbar className="py-2" >
          <Navbar.Brand className="navbar-font" href="/">American Machina [V0.0]</Navbar.Brand>
          <NavbarCollapse className='justify-content-center'>
          </NavbarCollapse>
          <Navbar.Text className="navbar-font">feedback | updates</Navbar.Text>
        </Navbar>
      </div>
    </div>
  );
};

export default NavBar;
