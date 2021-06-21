import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";

const Cards = (props) => {

  const [cardsInformation, setCardsInformation] = useState('');

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
    setCardsInformation(responseData)
  };
  
// data[0] = { 'link': link, 'title': title }
// data[1] ...
  const renderCard = (idx, card) => {
    return (
      <Card style={{ paddingLeft: 0, paddingRight: 0 }} key={idx}>
        <Card.Body>
          {/* <Card.Title>{props.cardsInformation.title}</Card.Title> */}
          {/* <Card.Subtitle className="mb-2 text-muted">{card.title}</Card.Subtitle> */}
          {/* <Card.Text>One, two, go!</Card.Text> */}
          <Card.Link href={card.link}>{card.title}</Card.Link>
        </Card.Body>
      </Card>)
  }

  if (!props.searchTerms) {
    return <div> Do kuul searches! </div>
  }

  fetchGoogleSearch(props.searchTerms);

  if (!cardsInformation) {
    return <div> Waiting for your searches! </div>
  }
  
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      { Object.entries(cardsInformation).map(([idx, card],) => renderCard(idx, card))}
    </Container>
  );
};

export default Cards;