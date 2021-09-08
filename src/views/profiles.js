import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ProfilesTable, SideBar } from "../components";

export const Profiles = () => {
  return (
      <Row className='vh-100'> 
        <Col className='sidebar'>
          <SideBar />
        </Col>
        <Col className="not-sidebar pt-5">
          <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" />
          <div id='blurable'>
            <ProfilesTable className='mt-5'></ProfilesTable>
          </div>
        </Col>
      </Row>
  );
};

export default Profiles;
