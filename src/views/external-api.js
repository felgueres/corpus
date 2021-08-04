import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";

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

      <h3>Climate Risks Digest</h3>
      <p></p>
      <p>
        In the near-future, lending capital will only be available to businesses that have a strategy in place to get to a low carbon future.
      </p>
      <p>
        This project is a web interface making sense of the climate risk landscape disclosed by companies in their SEC 10K filings.
      </p>

      <p>
        It allows investors, creditors, underwriters and entrepreneurs to identify opportunities that decarbonize the productive sector of the US.
      </p>

      <Button onClick={callApi} color="primary" className="mt-1">
        Show latest
      </Button>

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
