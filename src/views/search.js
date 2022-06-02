import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { SearchResults } from "../components/search-results";

export const Search = () => {
    return (
        <>
            <Banner />
            <SearchBar />
            <SearchResults />
        </>
    );
};

export default Search;
