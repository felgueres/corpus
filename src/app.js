import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./views";
import Navbar from "./components/nav-bar";

const App = () => {
  return (
    <Container id="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </Container>
  );
};

export default App;
