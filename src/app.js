import "./app.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { Footer, Loading, NavBar, SideBar } from "./components";
import { Profile, Home } from "./views";

const App = () => {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Container id="app">
      <NavBar />
      <Container id="frame-content">
        <SideBar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/organizations/:organizationId' component={Profile} />
        </Switch>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
};

export default App;
