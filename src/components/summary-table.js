import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const SummaryTable = () => {
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

  const renderRow = (category, count) => {
    return (
      <tr key={category}>
        <td>
          <Link className='table-child'>{category}: {count}</Link><br />
        </td>
      </tr>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
      <table className="table table-sm table-hover">
        <thead>
          <tr>
            <th className='table-title'>Company Sectors
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cardsInformation).map(([category, count],) => renderRow(category, count))}
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
  console.log(cardsInformation)
  return (
      <Row>
        <Col sm={12} md={6}>
          {buildTable(cardsInformation)}
        </Col>
        <Col sm={12} md={6}>
          {/* To be added */}
        </Col>
      </Row>
  );
};

export default SummaryTable;