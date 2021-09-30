import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';


export const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchSearchResults = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations/search`,
        {
          method: 'PUT',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
        });
      const responseData = await response.json();
      setSearchResult(responseData);
    } catch (error) {
      setSearchResult(error.message);
    }
  };

  var mouseDownHappened = false;

  function handleClear() {
    if (mouseDownHappened) {
      // Hack to get passed the planned execution where onblur precedes the go to link.
      mouseDownHappened = false
    }
    else {
      setSearchTerm('')
      setSearchResult('')
    }
  }

  const renderRow = (searchItem) => {
    return (
      <li className="searchbar-list border" key={searchItem.short_name}>
        <Link onMouseDown={() => { mouseDownHappened = true }} onClick={handleClear} className="search-child" to={`/profiles/${searchItem.company_name}`}>{searchItem.short_name}</Link>
      </li>
    )
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (searchTerm) { fetchSearchResults(searchTerm) }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResult('')
    }
  }, [searchTerm])

  return (
    <Col xs={12} sm={8} md={5}>
      <div className="border shadow-sm searchbar-margin" role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label" >
        <div className="input-group">
          <span className="search-icon"><BsSearch className="search-icon" /></span>
          <input onBlur={handleClear} value={searchTerm} aria-labelledby="downshift-0-label" type="text" className="searchbar" autoComplete="off" placeholder="Find Companies" onChange={event => { handleSearch(event) }} />
        </div>
        <div className="input-group">
        <ul className="overflow-y-scroll" role="listbox">
          {searchResult && searchResult.map(searchItem => renderRow(searchItem))}
        </ul>
        </div>
      </div>
    </Col>
  );
};

export default SearchBar;
