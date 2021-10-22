import React, { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Tooltip, OverlayTrigger, Button, Image } from "react-bootstrap";

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
    var color = card.has_disclosures ? "#90EE90" : "#D3D3D3"
    return (
      <Link className='profile-card' to={`/profiles/${card.company_name}`}>
        <Row className='my-3 py-4 px-3 pointer border border-card d-flex justify-content-between'>
          <span>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">{card.has_disclosures ? "Has Disclosures" : "No Disclosures"}</Tooltip>}
            >
              {({ ref, ...triggerHandler }) => (
                <Button
                  variant="transparent"
                  {...triggerHandler}
                  className="d-inline-flex align-items-center"
                >
                  <svg ref={ref} height="18" width="18">
                    <circle cx="9" cy="9" r="3" stroke={color} stroke-width="3" fill={color} />
                  </svg>
                </Button>
              )}
            </OverlayTrigger>
            <span className='button-divider' />
            {card.company_name}
          </span>
        </Row>
      </Link >
    )
  }

  const buildTable = (cardsInformation) => {
    return <div>{Object.entries(cardsInformation).map(([idx, card],) => renderRow(idx, card))}</div>
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
      <strong>Explore Companies</strong>
      {buildTable(cardsInformation)}
    </Col>
  );
};

export default ProfilesTable;