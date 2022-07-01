import React from "react";
import { Navbar } from "../components/navbar";
import { EarningsList } from "../components/earnings-list";

export const Home = () => {
    return (
        <>
            <Navbar />
            <EarningsList/>
            <tr id="spacer-h-10"></tr>
        </>
    );
};

export default Home;
