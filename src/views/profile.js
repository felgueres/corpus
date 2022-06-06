import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { EarningsCall } from "../components/earningscall";
import { SectionsTable } from "../components/sections-table";

export const Profile = () => {
    return (
        <>
            <Banner/>
            <SearchBar />
            <SectionsTable/>
            <EarningsCall/>
        </>
    );
};

export default Profile;
