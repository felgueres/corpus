import React from "react";
import { Route, Switch } from "react-router-dom";
import feed from "../components/feed";

export const Profiles = ({ match }) => {

  return (
      <div>
          <Switch>
            <Route path={`${match.path}`} exact component={feed} />
            <Route path={`${match.path}browse/:categoryId`} exact component={feed} />
          </Switch>
      </div>
  );
};

export default Profiles;
