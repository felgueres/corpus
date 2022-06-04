import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { SearchResults } from "../components/search-results";
import { CompanyResults } from "../components/company-results";

export const Search = () => {
    return (
        <>
            <Banner />
            <SearchBar />
            <CompanyResults />
            <SearchResults />
        </>
    );
};

export default Search;
