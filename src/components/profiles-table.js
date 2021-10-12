import React, { useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const ProfilesTable = () => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const renderRow = (idx, card) => {
    return (
      <tr key={idx}>
        <td>
          <Row className="justify-content-between">
            <Col md={8}>
              <Link className='table-child' to={`/profiles/${card.company_name}`}>{card.short_name}</Link>
            </Col>
            <Col md={4} className='float-end'>
              <span className='table-child-subtitle' to={`/profiles/${card.company_name}`}> {card.category}</span>
            </Col>
          </Row>
        </td>
      </tr>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
      <table className="table table-hover bg-white border rounded-border">
        <tbody>
          {Object.entries(cardsInformation).map(([idx, card],) => renderRow(idx, card))}
        </tbody>
      </table>
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
    if (!cardsInformation) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {
    return spinner()
  }

  if (fetchError) {
    return <div className="mt-3">Unable to fetch data.</div>
  }
  return (
      <Col sm={12} md={6}>
        <Row>
          <strong>Explore Companies</strong>
          <br/>
          <br/>
          {buildTable(cardsInformation)}
        </Row>
      </Col>
  );
};

export default ProfilesTable;