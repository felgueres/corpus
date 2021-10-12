import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer, Loading, NavBar, NavbarCategories } from "./components";
import { Profiles } from "./views";
import "./app.css";
import { Container } from "react-bootstrap";


const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='container-fluid bg-light' id="app">
      <Container>
        <NavBar />
        <NavbarCategories/>
          <Switch>
            <Route path="/" component={Profiles} />
          </Switch>
        <Footer />
      </Container>
    </div>
  );
};

export default App;
