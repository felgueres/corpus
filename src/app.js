import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer, Loading, NavBar } from "./components";
import { Profiles } from "./views";
import "./app.css";
import { Container } from "react-bootstrap";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='container-flex bg-light px-0' id="app">
      <NavBar />
      <Container className='body'>
          <Switch>
            <Route path="/" component={Profiles} />
          </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
