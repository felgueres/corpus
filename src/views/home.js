import React from "react";
import { Button, Col } from "react-bootstrap";
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

    <br />
    <br />    <br />    <br />
    <Col xs={10} sm={10} md={8} lg={6} xl={6} className="pl-0 pr-0" >
      <p className="p-bold">
        If you'd like to follow our progress, we send monthly updates via email:
      </p>
      <div id="email-input-layout">
        <input id="email-input" type="email" placeholder="you@email.com"></input>
      </div>
    </Col>
  </div>
);

export default Home;
