import "./app.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "react-bootstrap";
import { Loading, NavBar, SideBar } from "./components";
import { Filings, About, Earnings } from "./views";
import { Redirect } from "react-router-dom";

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
          <Route path="/" exact><Redirect to='/earnings/12927'></Redirect></Route>
          <Route path='/filings/:organizationId' component={Filings} />
          <Route path='/earnings/:organizationId' component={Earnings} />
          <Route path='/about/' component={About} />
        </Switch>
      </Container>
    </Container>
  );
};

export default App;
