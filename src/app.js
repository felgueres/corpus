import React from "react";
import { Route, Switch } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
import { NavBar, Loading, SideBar } from "./components";
import { Home, Profiles, Profile, Invest } from "./views";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Row className="h-100">
        <Col className='sidebar pr-0'>
          <SideBar  />
        </Col>
        <Col className='not-sidebar'>
          <Switch>
            <Route path="/profiles" exact component={Profiles} />
            <Route path="/profiles/:organizationId" exact component={Profile} />
            <Route path="/invest" exact component={Invest} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Col>
      </Row>
    </div>
  );
};

export default App;
