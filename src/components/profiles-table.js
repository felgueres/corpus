import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col, Row, Tooltip, OverlayTrigger, Button, Form } from "react-bootstrap";

const ProfilesTable = () => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const [filterCategories, setFilterCategories] = useState({});
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

  function applyFilters([, entry],) {
    if (Object.values(filterCategories).every(isApplied => !isApplied)) {
      return true
    }
    let isFiltered = Object.entries(filterCategories)
      .filter(function active([, isApplied]) { return isApplied })
      .map(([filterName,],) => entry['summary'][filterName] > 0 || entry['category'] === filterName)
      .every(isApplied => isApplied)
    return isFiltered
  }

  const renderRow = (card) => {
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
                    <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="3" fill={color} />
                  </svg>
                </Button>
              )}
            </OverlayTrigger>
            <span className='button-divider' />
            {card.company_name}
            {Object.entries(card.summary).map(([name, value]) => (<span> {name}, {value} </span>))}
            {card.category}
          </span>
        </Row>
      </Link >
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
  });

  if (!cardsInformation) {
    return spinner()
  }

  const activateFilter = (event) => {
    const { id } = event.target
    setFilterCategories(prevState => ({
      ...prevState,
      [id]: !filterCategories[id]
    }))
  }

  var cat_counter = Object.entries(cardsInformation)
  .map(([, entry]) => entry.category)
  .reduce(function (obj, category) {
      if (!obj[category]) {
        obj[category] = 1
      } else {
        obj[category]++
      } return obj
    }, {})

  var risk_counter = Object.entries(cardsInformation)
  .map(([, entry]) => entry.summary)
  .reduce(function (obj, summary) {
      Object.entries(summary).forEach(([risk_type, risk_count]) => {
        if (!obj[risk_type] && risk_count > 0) {
          obj[risk_type] = 1
        } else if (risk_count > 0) {
          obj[risk_type]++
        }
      })
      return obj
    }, {})

  return (
    <Row>
      <Col>
        <p className=""><strong>Filter</strong></p>
        <hr />
        <Form>
          {Object.entries(risk_counter).map(([risk_type, count]) => (
            <div key={`default-${risk_type}`} className="mb-3">
              <Form.Check
                type='checkbox'
                id={`${risk_type}`}
                label={`${risk_type}: ${count}`}
                value={`${risk_type}`}
                onClick={activateFilter}
              />
            </div>
          ))}
        </Form>

        <p className=""><strong>Sector</strong></p>
        <hr />
        <Form>
          {Object.entries(cat_counter).map(([category, count]) => (
            <div key={`default-${category}`} className="mb-3">
              <Form.Check
                type='checkbox'
                id={`${category}`}
                label={`${category}: ${count}`}
                onClick={activateFilter}
              />
            </div>
          ))}
        </Form>
      </Col>
      <Col className="mx-auto" md={8}>
        <strong>Explore Companies</strong>
        {
          Object.entries(cardsInformation)
          .filter(applyFilters)
          .map(([, card],) => renderRow(card))
        }
      </Col>
    </Row>
  );
};

export default ProfilesTable;