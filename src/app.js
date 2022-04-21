import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer, Loading, NavBar } from "./components";
import { Profiles } from "./views";
import { Container } from "react-bootstrap";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container id="app">
      <NavBar />
      <Container id="frame-content">
        <Switch>
          <Route path="/" component={Profiles} />
        </Switch>
      </Container>
      <Footer />
    </Container>
  );
};

export default App;
