import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Loading, PrivateRoute } from "./components";
import { Home, Profiles, Profile } from "./views";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      {/* <NavBar /> */}
      <Row className="h-100">
        <Col className="col-2 bg-white">
          <ul class="nav flex-column mb-auto">
            <br></br>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page">
                Introduction 
              </a>
            </li>
            <li>
              <a class="nav-link link-dark">
                Search Companies
              </a>
            </li>
          </ul>
      </Col>
          <Col className="col-10 bg-light">
            <Switch>
              <Route path="/profiles" exact component={Profiles} />
              <Route path="/profiles/:organizationId" exact component={Profile} />
              <Route path="/" exact component={Home} />
            </Switch>
          </Col>
      </Row>
    </div>
      );
};

      export default App;
