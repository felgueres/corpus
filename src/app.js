import React from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading, NavBar } from "./components";
import { Profiles } from "./views";
import "./app.css";

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='container-fluid' id="app">
      <NavBar/>
      <Switch>
        <Route path="/" component={Profiles} />
      </Switch>
    </div>
  );
};

export default App;
