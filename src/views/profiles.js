import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, NavBar, ProfileSummary } from "../components";
import { Route, Switch } from "react-router-dom";

export const Profiles = ({ match }) => {

  return (
    <Row className='vh-100'>
      <Col>
        <NavBar />
          <Switch>
            <Route path={`${match.path}`} exact component={ProfilesTable} />
            <Route path={`${match.path}/:organizationId`} exact component={ProfileSummary} />
          </Switch>
      </Col>
    </Row>
  );
};

export default Profiles;
