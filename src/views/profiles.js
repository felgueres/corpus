import React from "react";
import { Route, Switch } from "react-router-dom";
import Feed from "../components/feed";
import ProfileSummary from "../components/profile-summary"

export const Profiles = ({ match }) => {

  return (
      <div>
        <Feed/>
          <Switch>
            <Route path={`${match.path}organizations/:organizationId`} exact component={ProfileSummary} />
          </Switch>
      </div>
  );
};

export default Profiles;
