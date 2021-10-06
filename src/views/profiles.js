import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, ProfileSummary} from "../components";
import { Route, Switch } from "react-router-dom";

export const Profiles = ({ match }) => {

  return (
    <Row className='px-3 py-3'>
      <Col>
          <Switch>
            <Route path={`${match.path}`} exact component={ProfilesTable} />
            <Route path={`${match.path}profiles/:organizationId`} exact component={ProfileSummary} />
          </Switch>
      </Col>
    </Row>
  );
};

export default Profiles;
