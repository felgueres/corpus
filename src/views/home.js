import React from "react";
import { Button, Container } from "react-bootstrap";

const Home = () => (
  <Container>
    <h1 className="heavy-padded title">
      A firm-level database </h1>
    <h1 className="title">
      and analytics
    </h1>
    <h1 className="title">for climate finance.
    </h1>
    <Button className="button" href="/profiles">Get started</Button>
  </Container>
);

export default Home;
