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

      {/* <h3>Climate Risks Digest</h3> */}
      
      {/* <Button onClick={callApi} color="primary" className="mt-1">
        Show latest
      </Button> */}
      {/* <Col sm={3} style={{ paddingLeft: 0, paddingRight: 0 }}> */}
          <RiskCards searchTerms='ClimateRisks'></RiskCards>
      {/* </Col> */}

      {message && (
        <div className="mt-5">
          <h6 className="muted">Result</h6>
          <Highlight>{JSON.stringify(message, null, 2)}</Highlight>
        </div>
      )}
    </Container>
  );
};

export default ExternalApi;
