import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { NavBar, SideBar } from "./components";
import { Filings, About, Earnings, Home } from "./views";

const App = () => {
  return (
    <Container id="app">
      <NavBar />
      <Container id="frame-content">
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/filings/:organizationId' element={<Filings/>} />
          <Route path='/earnings/:organizationId' element={<Earnings/>} />
          <Route path='/about/' element={<About/>} />
        </Routes>
      </Container>
    </Container>
  );
};

export default App;
