import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";

const Cards = (props) => {

  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;

  if (!props.cardsInformation) {
    return <div> Do kuul searches! </div>
  }
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
  
  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      { Object.entries(props.cardsInformation).map(([idx, card],) => renderCard(idx, card))}
    </Container>
  );
};

export default Cards;