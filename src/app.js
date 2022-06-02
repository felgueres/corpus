import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./views";
import Footer from "./components/footer";
import Search from "./views/search";

const App = () => {
  return (
    <table id="nmain">
      <tbody>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        <Footer />
      </tbody>
    </table>
  );
};

export default App;
