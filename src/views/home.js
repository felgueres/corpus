import React from "react";
import { Button } from "react-bootstrap";
import { NavBar } from "../components";

const Home = () => (
  <div>
    <NavBar />
    <h1 className="heavy-padded title">
      A firm-level database </h1>
    <h1 className="title">
      and analytics for
    </h1>
    <h1 className="title">climate finance.
    </h1>
    <div style={{ 'display': 'flex' }}>
      <Button className="button" href="/profiles">Get started</Button>
    </div>
  </div>
);

export default Home;
