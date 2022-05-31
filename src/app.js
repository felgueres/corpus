import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views";
import Navbar from "./components/nav-bar";
import Footer from "./components/footer";

const App = () => {
  return (
    <div id="app">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
