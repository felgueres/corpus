import React from "react";
import { useSearchParams } from "react-router-dom";

export const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q")
  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.currentTarget)
    let formData = new FormData(event.currentTarget);
    console.log(formData.values())
    let newQuery = formData.get("query");
    if (!newQuery) return;
    setSearchParams({ 'q': newQuery})
  }
  console.log(query)

  return (
    <div style={{ display: "flex" }}>
      <form onSubmit={handleSubmit}>
        <label>
          <input defaultValue={query ?? undefined} type="text" name="query" />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
