import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router";

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
      <tr key={idx}>
        <td>
          <Link className='table-child' to={`/profiles/${card.company_name}`}>{card.short_name}</Link>
          <Link className='table-child-subtitle ' to={`/profiles/${card.company_name}`}> {card.category}</Link>
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
    setCategory(match.params.categoryId)
  }, [location])

  useEffect(() => {
    if (!cardsInformation) fetchClimateRisks();
  }, []);

  useEffect(()=>
  {
    if (cardsInformation) fetchClimateRisks();
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
      <br/>
      <br/>
      {buildTable(cardsInformation)}
    </Col>
  );
};

export default ProfilesTableCategory;