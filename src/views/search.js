import React from "react";
import { SearchResults } from "../components/search-results";
import { IndexResults } from "../components/index-results";
import { Navbar } from "../components/navbar";

export const Search = () => {
    return (
        <>
            <Navbar/>
            <IndexResults/>
            <SearchResults />
        </>
    );
};

export default Search;
