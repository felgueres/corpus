import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { EarningsCall } from "../components/earningscall";

export const Profile = () => {
    return (
        <>
            <Banner/>
            <SearchBar />
            <EarningsCall/>
        </>
    );
};

export default Profile;
