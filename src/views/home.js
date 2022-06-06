import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { Recommendations } from "../components/recommendations";
import { Navbar } from "../components/navbar";


export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <SearchBar />
            <Recommendations />
        </>
    );
};

export default Home;
