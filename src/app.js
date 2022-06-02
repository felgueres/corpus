import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views";
import Search from "./views/search";

const App = () => {
  return (
    <table id="nmain">
      <tbody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
      </tbody>
    </table>
  );
};

export default App;
