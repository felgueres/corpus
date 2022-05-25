import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { About, Home } from "./views";

const App = () => {
  return (
    <Container id="app">
      <Container id="body-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about/' element={<About/>} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;
