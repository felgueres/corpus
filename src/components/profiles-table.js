import React, { useState, useEffect } from "react";
import { Container, Spinner, Col} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilesTable = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  // const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/climaterisks`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setCardsInformation(error.message);
    }
  };

  const renderCard = (idx, card) => {
    return (
      <tr key={idx}>
        <td><a href={`profiles/${card.company_name}`}>{card.company_name}</a></td>
        <td>{card.category}</td>
        <td>{card.year}</td>
      </tr>
    )
  }

  const buildTable = (cardsInformation) => {
    return (
      <table className="table table-sm">
        <thead>
          <tr>
            <th>Organization Name</th>
            <th>Industry</th>
            <th>Climate Reporting Since</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(cardsInformation).sort((a, b) => a[0].localeCompare(b[0])).map(([idx, card],) => renderCard(idx, card))}
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
      <Col className='col-md-8'>
      {buildTable(cardsInformation)}
      </Col>
    </Container>
  );
};

export default ProfilesTable;