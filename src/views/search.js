import React from "react";
import { SearchResults } from "../components/search-results";
import { CompanyResults } from "../components/company-results";
import { Navbar } from "../components/navbar";

export const Search = () => {
    return (
        <>
            <Navbar/>
            <CompanyResults />
            <SearchResults />
        </>
    );
};

export default Search;
