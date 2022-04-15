import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer, Loading, NavBar } from "./components";
import { Profiles } from "./views";
import "./app.css";
import { Container, Row } from "react-bootstrap";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container className='frame px-0' id="app">
      <NavBar />
      <Container className="frame">
        <Row className="browse-row">
          <span className="browse">Browse by Industry ◢</span>
        </Row>
        <Switch>
          <Route path="/" component={Profiles} />
        </Switch>
      </Container>
      <Footer />
    </Container>
  );
};

export default App;
