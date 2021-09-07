import React from "react";
import { Container } from "react-bootstrap";
import { ProfilesTable } from "../components";
import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav } from "react-bootstrap"

export const Profiles = () => {
  return (
    <Container className="heavy-padded">
      <Nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{'backgroundColor': 'white', 'padding': '0px'}}> 
          <Nav.Link className = 'breadcrumb-item' as = { RouterNavLink } to = "/profiles" > Firms </Nav.Link> 
        </ol>
      </Nav>
      <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" />
      <div id='blurable'>
        {/* <News></News> */}
        <ProfilesTable className='mt-5'></ProfilesTable>
      </div>
    </Container>
  );
};

export default Profiles;
