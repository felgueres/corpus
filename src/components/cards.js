import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container } from "react-bootstrap";

const Cards = (props) => {

  const [message, setMessage] = useState('');
  const { getAccessTokenSilently } = useAuth0()
  const apiUrl = process.env.REACT_APP_API_URL;

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Card style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title> */}
          <Card.Subtitle className="mb-2 text-muted">Top 3 Search</Card.Subtitle>
          <Card.Text>One, two, go!</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Cards;