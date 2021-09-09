import React from "react";
import { Button } from "react-bootstrap";
import { NavBar } from "../components";

const Home = () => (
  <div className='pt-3'>
    <NavBar />
    <h1 className="heavy-padded title centered">
      A firm-level database </h1>
    <h1 className="title centered">
      and analytics
    </h1>
    <h1 className="title centered">for climate finance.
    </h1>
    <div style={{ 'display': 'flex', 'justifyContent': 'center' }}>
      <Button className="button" href="/profiles">Get started</Button>
    </div>
  </div>
);

export default Home;
