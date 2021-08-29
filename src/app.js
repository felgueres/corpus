import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profiles, Profile} from "./views";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-1">
        <Switch>
          <Route path="/profiles" exact component={Profiles} />
          <Route path="/profiles/:organizationId" exact component={Profile} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </div>
  );
};

export default App;
