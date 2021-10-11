import React from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, ProfileSummary} from "../components";
import { Route, Switch } from "react-router-dom";
import ProfilesTableCategory from "../components/profiles-table-category";

export const Profiles = ({ match }) => {

  return (
    <Row className='px-3 py-5'>
      <Col>
          <Switch>
            <Route path={`${match.path}`} exact component={ProfilesTable} />
            <Route path={`${match.path}profiles/:organizationId`} exact component={ProfileSummary} />
            <Route path={`${match.path}categories/:categoryId`} exact component={ProfilesTableCategory} />
          </Switch>
      </Col>
    </Row>
  );
};

export default Profiles;
