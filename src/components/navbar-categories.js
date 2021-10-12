import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavbarCategories = () => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations/summary`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const renderRow = (category) => {
    return (
      <Nav.Link
        as={RouterNavLink}
        to={`/categories/${category[0]}`}
        exact
        activeClassName="underline"
      >
        {category[0]} <strong> ({category[1]}) </strong>
      </Nav.Link>
    )
  }

  const buildTable = (cardsInformation) => {
    return  <NavbarCollapse className="d-flex justify-content-center">{Object.entries(cardsInformation).map(([idx, category],) => renderRow(category))}</NavbarCollapse>
  }

  const spinner = () => {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden"></span>
        </Spinner>
      </div>)
  }

  useEffect(() => {
    if (!cardsInformation) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {
    return spinner()
  }

  if (fetchError) {
    return <div className="mt-3">Unable to fetch data.</div>
  }

  return (
      <Navbar>
           {buildTable(cardsInformation)}
      </Navbar>

  );
};

export default NavbarCategories;