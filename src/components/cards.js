import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";

// <Card.Title>{props.cardsInformation.title}</Card.Title>
// <Card.Subtitle className="mb-2 text-muted">{card.title}</Card.Subtitle>
// <Card.Text>One, two, go!</Card.Text>

const Cards = (props) => {
  const [cardsInformation, setCardsInformation] = useState(null);
  const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;
  
  async function fetchGoogleSearch (data) {
    const token = await getAccessTokenSilently();
    const res = await fetch(`${apiUrl}/api/google-search`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'},});
    const responseData = await res.json();
    setCardsInformation(responseData);
    console.log('search counter')
  };
  const styleCard = {
    fontSize: 10,
    color: "#4a54f1",
    paddingLeft: 0,
    paddingRight: 0
}
  
  const renderCard = (idx, card) => {
    return (
      <Card style={styleCard} key={idx}>
        <Card.Body>
          <Card.Link href={card.link}>{card.title}</Card.Link>
        </Card.Body>
      </Card>)
  }

  useEffect(() => {
    if (props.searchTerms) fetchGoogleSearch(props.searchTerms);
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

export default Cards;