import React from "react";
import { Navbar } from "react-bootstrap";
import { SearchBar } from ".";

const NavBar = () => {
  return (
    <div>
      <Navbar className="navbar-layout mb-5" collapseOnSelect expand="md" bg="white">
        <Navbar.Brand className="navbar-font" href="/">ClimateCap</Navbar.Brand>
        <SearchBar />
      </Navbar>
    </div>
  );
};

export default NavBar;
