import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, SideBar, ProfileSummary } from "../components";
import { Route, Switch } from "react-router-dom";

export const Profiles = ({match}) => {
  return (
    <Row className='vh-100'>
      <Col className='sidebar'>
        <SideBar />
      </Col>
      <Col className="not-sidebar pt-5">
        <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" />
        <div id='blurable' className='mb-5'>
          <Switch>
            <Route path={`${match.path}`} exact component={ProfilesTable} />
            <Route path={`${match.path}/:organizationId`} exact component={ProfileSummary} />
          </Switch>
        </div>
      </Col>
    </Row>
  );
};

export default Profiles;
