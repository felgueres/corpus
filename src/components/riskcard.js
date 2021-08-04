import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

// <Card.Title>{props.cardsInformation.title}</Card.Title>
// <Card.Subtitle className="mb-2 text-muted">{card.title}</Card.Subtitle>
// <Card.Text>One, two, go!</Card.Text>

const RiskCards = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  // const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;

  const [message, setMessage] = useState("");

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

  const styleCard = {
    // fontSize: 10,
    // color: "#4a54f1",
    paddingLeft: 0,
    paddingRight: 0,
    marginTop: 3,
    marginBottom: 20
}
  
  const renderCard = (idx, card) => {
    return (
    <Card style={styleCard} key={idx}>
      <Card.Header>{card.company_name}</Card.Header>
      <Card.Body>
        <Card.Title>Climate Risks {card.year}</Card.Title>
        <Card.Link href={card.url}>Source: 10-k Filing</Card.Link>
        <Card.Text>{card.risks[1]}</Card.Text>
      </Card.Body>
    </Card>
    )
  }

  useEffect(() => {
    if (props.searchTerms) fetchClimateRisks(props.searchTerms);
  }, [props.searchTerms]);

  if (!props.searchTerms) {
    return <div> Your searches will appear here! </div>
  }

  if (!cardsInformation) {
    return <div> Just one sec! </div>
  }
  
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      { Object.entries(cardsInformation).map(([idx, card],) => renderCard(idx, card))}
    </Container>
  );
};

export default RiskCards;