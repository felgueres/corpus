import React, { useState, useEffect } from "react";
import { Container, Spinner, Col } from "react-bootstrap";
import { BsBook } from "react-icons/bs";

const ProfilesTable = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setCardsInformation(error.message);
    }
  };

  const renderCard = (idx, card) => {
    return (
      <tr key={idx}>
        <td><a className='company-names' href={`profiles/${card.company_name}`}>{card.short_name}</a></td>
      </tr>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
      <table className="table table-sm border hover">
        <thead>
          <tr>
            <th><BsBook className="m-2" />Organization Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cardsInformation).map(([idx, card],) => renderCard(idx, card))}
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
    if (!props.searchTerms) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {
    return spinner()
  }

  return (
    <Container>
      <Col className='my-3 p-3 border rounded shadow-sm'>
        {buildTable(cardsInformation)}
      </Col>
    </Container>
  );
};

export default ProfilesTable;