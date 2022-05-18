import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "./useSearch";

export const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q")
  let { data, loading } = useSearch(searchParams.toString())

  function handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.currentTarget);
    let newQuery = formData.get("q");
    if (!newQuery) return;
    setSearchParams({ 'q': newQuery })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <input defaultValue={query ?? undefined} type="text" name="q" placeholder="search" autoComplete="off" />
        </label>
      </form>
      <ul>
        <li>{data}</li>
      </ul>
    </div>
  );
};

export default SearchBar;
