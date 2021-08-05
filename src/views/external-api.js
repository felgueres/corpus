import React, { useState } from "react";
import { Button, ButtonGroup, Container, Col } from "react-bootstrap";
import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { RiskCards } from "../components";

export const ExternalApi = () => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      console.log(`${apiUrl}`);
      const response = await fetch(`${apiUrl}/api/climaterisks`);
      const responseData = await response.json();
      setMessage(responseData);
    } catch (error) {
      setMessage(error.message);
    }
  };


  return (
    <Container className="mb-5 pt-5">

      <h3>Search Companies</h3>
      <br></br>

      <RiskCards searchTerms='ClimateRisks'></RiskCards>

    </Container>
  );
};

export default ExternalApi;
