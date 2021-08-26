import React, { useState, useEffect } from "react";
import { Container, Spinner, Row} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

const ProfilesTable = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  // const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      console.log(`${apiUrl}`);
      const response = await fetch(`${apiUrl}/api/climaterisks`);
      const responseData = await response.json();
      setCardsInformation(responseData);
    } catch (error) {
      setCardsInformation(error.message);
    }
  };

  const renderCard = (idx, card) => {
    return (
    <tr>
      <td>{card.company_name}</td>
      <td>{card.year}</td>
      <td>{card.url}</td>
    </tr>
    )
  }

  useEffect(() => {
    if (!props.searchTerms) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {

    return (<div>
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>)
  }

  return (
    <Container>
      <Row>
        <table class="table table-sm">
          <thead>
            <tr class='row'>
              <th class='col-md-4' >Company</th>
              <th class='col-md-4' >First Mention</th>
              <th class='col-md-4' >Statements</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </Row>
      {Object.entries(cardsInformation).sort((a, b) => a[0].localeCompare(b[0])).map(([idx, card],) => renderCard(idx, card))}
    </Container>
  );
};

export default ProfilesTable;