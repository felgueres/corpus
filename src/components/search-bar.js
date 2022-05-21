import React from "react";
import { useSearchParams } from "react-router-dom";
import useSearch from "./useSearch";

const PLACEHOLDER = '🔍  Search by keyword, company or people...'

const COMPANIES = {
  '12927': 'Boeing', '936468': 'Lockheed Martin', '101829': 'Raytheon',
  '217346': 'Textron', '1467858': 'General Motors', '1318605': 'Tesla', '37996': 'Ford', '1045810': 'Nvidia', '50863': 'Intel'
}

const regex = /\d+/;

export const SearchBar = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let query = searchParams.get("q")
  let { data, loading } = useSearch(searchParams.toString())

  function handleSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.currentTarget);
    let newQuery = formData.get("q");
    if (!newQuery) return;
    setSearchParams({ 'q': newQuery, 'collection': 'summaryV1', 'limit': 100 })
  }

  function tableRow(e) {
    return (
      <li>
        <h4>{e.name}</h4>
        {e.role}
        {e.summary}
      </li>
    )
  }

  const regex = /\d/;

  function hasFacts(e) {
    return regex.test(e)
  }

  return (
    <div id='search'>
      <div id='search-form'>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={query ?? undefined} type="text" name="q" placeholder={PLACEHOLDER} autoComplete="off" />
          </label>
        </form>
      </div>
      <div id='search-results'>
        <h4>Summary</h4>
        <ul>
          {!loading && data
            .filter(e => e.section === 'outlook')
            .filter(e => e.role !== 'operator')
            // .sort((a, b) => (a.start_idx > b.start_idx) ? 1 : -1)
            // .filter(e=> hasFacts(e.summary))
            .map((i, idx) => tableRow(i))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
