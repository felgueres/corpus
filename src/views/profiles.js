import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, SideBar, ProfileSummary } from "../components";
import { Route, Switch, Link } from "react-router-dom";

export const Profiles = ({ match }) => {

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

  function handleClear() {
    setSearchTerm('')
    setSearchResult('')
  }

  const renderRow = (searchItem) => {
    return (
      <li style={{'listStyleType': 'none'}} key={searchItem.short_name}>
        <Link onClick={handleClear} className="search-child" to={`/profiles/${searchItem.company_name}`}>{searchItem.short_name}</Link>
      </li>
    )
  }

  function handleSearch(event) {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    if (searchTerm) { fetchSearchResults(searchTerm) }
  }, [searchTerm]);

  useEffect(()=> {
    if (searchTerm===''){
      setSearchResult('')
    }
  },[searchTerm])

  return (
    <Row className='vh-100'>
      <Col className='sidebar'>
        <SideBar />
      </Col>
      <Col className="not-sidebar pt-5">
        <div role="combobox" aria-controls="" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-0-label" >
          <input id='searchbar' value={searchTerm} aria-labelledby="downshift-0-label" type="text" className="form-control searchbar" autoComplete="off" placeholder="Search firms..." onChange={event => { handleSearch(event) }} />
            <ul className="overflow-y-scroll border" role="listbox">
              {searchResult && searchResult.map(searchItem => renderRow(searchItem))}
            </ul>
        </div>
        <div id='blurable' className='mb-5'>
          <Switch>
            <Route path={`${match.path}`} exact component={ProfilesTable} />
            <Route path={`${match.path}/:organizationId`} exact component={ProfileSummary} />
          </Switch>
        </div>
      </Col>
    </Row>
  );
};

export default Profiles;
