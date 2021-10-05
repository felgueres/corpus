import React, { useState, useEffect } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";
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
    <Col xs={12} sm={12} md={7}>
      <Form.Row>
        <InputGroup className="searchbar-group">
          <InputGroup.Prepend>
            <InputGroup.Text><BsSearch /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control onBlur={handleClear} value={searchTerm} aria-labelledby="downshift-0-label" type="text" autoComplete="off" className="searchbar" placeholder="Search companies by name" onChange={event => { handleSearch(event) }} />
        </InputGroup>
      </Form.Row>
      <InputGroup>
        <ul className="overflow-y-scroll" role="listbox">
          {searchResult && searchResult.map(searchItem => renderRow(searchItem))}
        </ul>
      </InputGroup>
    </Col>
  );
};

export default SearchBar;
