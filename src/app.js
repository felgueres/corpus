import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Footer, Loading, NavBar } from "./components";
import { Profiles } from "./views";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='container-fluid bg-light' id="app">
      <NavBar />
      <div className="main-screen">
        <Switch>
          <Route path="/" component={Profiles} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
