import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchBar } from ".";

const NavBar = () => {
  return (
    <div>
      <Navbar className="justify-content-between bg-light shadow-sm" >
        <Navbar.Brand className="navbar-font" href="/">ClimateCap</Navbar.Brand>
        <SearchBar />
      </Navbar>
    </div>
  );
};

export default NavBar;
