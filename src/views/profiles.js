import React from "react";
import { Container } from "react-bootstrap";
import { ProfilesTable } from "../components";

export const Profiles = () => {
  return (
    <Container className="heavy-padded">
      <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" />
      <div id='blurable'>
        {/* <News></News> */}
        <ProfilesTable className='mt-5'></ProfilesTable>
      </div>
    </Container>
  );
};

export default Profiles;
