import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Container, ListGroup } from "react-bootstrap";
import Highlighter from "react-highlight-words";


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
    var risks = card.risks.map(function (risk) {
      return <ListGroup.Item>
        <Highlighter
        highlightClassName="YourHighlightClass"
        searchWords={["climate change", "opportunities", "risk", "risks"]}
        autoEscape={true}
        textToHighlight={risk}/>
        </ListGroup.Item>
    })

    return (
      <Card className="shadow-sm rounded" style={styleCard} key={idx}>
        <Card.Header className="bg-white"><strong>{card.company_name}</strong>
          <Card.Title></Card.Title>
          <Card.Subtitle className="text-muted">Category: {card.category}</Card.Subtitle>
          <Card.Link href={card.url}> Source: 10-K, 2021</Card.Link>
        </Card.Header>
        <ListGroup variant="flush">
        {risks}
        </ListGroup>
      </Card>
    )
  }

  useEffect(() => {
    if (!props.searchTerms) fetchClimateRisks();
  }, []);

  if (!cardsInformation) {
    return <div> Just one sec! </div>
  }

  var filteredCompaniesByCategory = {};
  var filteredCompanies = {};

  for (const [_idx, card] of Object.entries(cardsInformation)) {
    if (props.categorySearchTerms == 'All Categories') {
      filteredCompaniesByCategory[card.company_name] = card
    }

    else {
      if (card.category.toLowerCase().includes(props.categorySearchTerms.toLowerCase())) {
        filteredCompaniesByCategory[card.company_name] = card
      }
    }
  }

  for (const [_, card] of Object.entries(filteredCompaniesByCategory)) {
    if (card.company_name.toLowerCase().includes(props.searchTerms.toLowerCase())) {
      filteredCompanies[card.company_name] = card
    }
  }

  return (
    <Container>
      <p>Showing {Object.keys(filteredCompanies).length} companies.</p>
      {Object.entries(filteredCompanies).sort((a, b) => a[0].localeCompare(b[0])).map(([idx, card],) => renderCard(idx, card))}
    </Container>
  );
};

export default RiskCards;