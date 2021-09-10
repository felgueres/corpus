import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { ProfilesTable, SideBar, ProfileSummary } from "../components";
import { Route, Switch } from "react-router-dom";

export const Profiles = ({ match }) => {

  const [searchTerm, setSearchTerm] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchSearchResults = async (data) => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations/search`,  
        { method: 'PUT',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}});
      const responseData = await response.json();
      setSearchResult(responseData);
    } catch (error) {
      setSearchResult(error.message);
    }
  };

  function handleSearch(event) {
    setSearchTerm(event.target.value)
    fetchSearchResults(searchTerm).then(console.log(searchResult))
  }

  return (
    <Row className='vh-100'>
      <Col className='sidebar'>
        <SideBar />
      </Col>
      <Col className="not-sidebar pt-5">
        <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" onChange={event => { handleSearch(event) }} />
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
