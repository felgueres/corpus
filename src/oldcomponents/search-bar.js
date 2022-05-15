import React, { useState, useEffect } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
  const [searchParms, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchSearchResults = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/search`,
        {
          method: 'GET',
          params: {'data':JSON.stringify(data)},
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
      <Link onMouseDown={() => { mouseDownHappened = true }} onClick={handleClear} to={`/profiles/${searchItem.company_name}`}>
        <li className="searchbar-list border search-card" key={searchItem.short_name}>
          <span>
            <BsSearch />
          </span>
          <span className='button-divider' />
          <span className='button-divider' />
          <span>
            {searchItem.short_name}
          </span>
        </li>
      </Link >
    )
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
    const sp = new URLSearchParams({'query': searchTerm, 'job':'boss'}).toString()
  }

  useEffect(() => {
    if (searchTerm) { fetchSearchResults(searchTerm) }
  }, );

  useEffect(() => {
    if (searchTerm === '') {
      setSearchResult('')
    }
  }, [searchTerm])
  


  return (
    <span className="searchbar-block">
        <InputGroup>
          <Form.Control onBlur={handleClear} value={searchTerm} aria-labelledby="downshift-0-label" type="text" autoComplete="off" className="searchbar-frame" placeholder="Search" onChange={event => { handleSearch(event) }} />
        </InputGroup>
      <InputGroup>
        <ul className="overflow-y-scroll" role="listbox">
          {/* {searchResult && searchResult.map(searchItem => renderRow(searchItem))} */}
        </ul>
      </InputGroup>
     </span>
  );
};

export default SearchBar;
