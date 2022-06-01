import React from "react";
import SearchBar from "../components/searchbar";
import { Banner } from "../components/banner";
import { SearchResults } from "../components/search-results";

export const Search = () => {
    return (
        <div>
            <Banner />
            <SearchBar />
            <br/>
            <SearchResults/>
        </div>
    );
};

export default Search;
