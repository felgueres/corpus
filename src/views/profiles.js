import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfileSummary} from "../components";
import { Route, Switch } from "react-router-dom";
import feed from "../components/feed";

export const Profiles = ({ match }) => {

  return (
    <Row className='px-0'>
      <Col>
          <Switch>
            <Route path={`${match.path}`} exact component={feed} />
            <Route path={`${match.path}profiles/:organizationId`} exact component={ProfileSummary} />
          </Switch>
      </Col>
    </Row>
  );
};

export default Profiles;
