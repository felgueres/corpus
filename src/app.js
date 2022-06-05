import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views";
import Search from "./views/search";
import Profile from "./views/profile";

const App = () => {
  return (
    <table id="nmain">
      <tbody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile/>} />
          </Routes>
      </tbody>
    </table>
  );
};

export default App;
