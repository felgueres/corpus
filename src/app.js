import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views";
import Footer from "./components/footer";

const App = () => {
  return (
    <div id="app">
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer/>
    </div>
  );
};

export default App;
