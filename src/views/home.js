import React from "react";
import AlgoliaSearch from "../components/algolia";
import Navbar from "../components/nav-bar";


export const Home = () => {
  return (
    <div>
      <Navbar/>
      <AlgoliaSearch/>
    </div>
  );
};

export default Home;
