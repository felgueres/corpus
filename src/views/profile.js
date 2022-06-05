import React from "react";
import SearchBar from "../components/searchbar";
import { SearchResults } from "../components/search-results";
import { Banner } from "../components/banner";

export const Profile = () => {
    return (
        <>
            <Banner/>
            <SearchBar />
            <SearchResults />
        </>
    );
};

export default Profile;
