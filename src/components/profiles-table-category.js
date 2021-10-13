import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { Redirect, useLocation } from "react-router";

const ProfilesTableCategory = ({ match }) => {
  const location = useLocation()
  const [categoryId, setCategory] = useState(null)
  const [cardsInformation, setCardsInformation] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const renderRow = (idx, card) => {
    return (
      <Link className='profile-card' to={`/profiles/${card.company_name}`}>
      <Row className='my-3 py-4 px-3 pointer border border-card d-flex justify-content-between'> 
        <span>
          <svg height="18" width="18">
            <circle cx="9" cy="9" r="3" stroke="#FF7F7F" stroke-width="3" fill="#FF7F7F" />
          </svg>
            <span className='button-divider'/>
        {card.short_name}</span>
        <span className='sm-font'>{card.category}</span>
      </Row>
    </Link>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
      <div>
        {Object.entries(cardsInformation).map(([idx, card],) => renderRow(idx, card))}
      </div>
    )
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
    setCategory(match.params.categoryId)
  }, [location])

  useEffect(() => {
    if (categoryId) fetchClimateRisks();
  }
    , [categoryId])

  if (!cardsInformation) {
    return spinner()
  }

  if (fetchError) {
    return <div className="mt-3">Unable to fetch data.</div>
  }

  return (
    <Col md={6}>
      <strong>Sector: {categoryId}</strong>
      {buildTable(cardsInformation)}
    </Col>
  );
};

export default ProfilesTableCategory;