import React, { useState } from "react";
import { Button, ButtonGroup, Container, Col } from "react-bootstrap";
import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { RiskCards } from "../components";

export const ExternalApi = (props) => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const { getAccessTokenSilently } = useAuth0();
  const [searchTerms, setSearchTerms] = useState("");

  const companyFilterOnChange = (event) => {
    console.log("coming at you from onChange", event.target.value)
    setSearchTerms(event.target.value)
  }

  return (
    <Container className="mb-5 pt-3">

      <h2>Climate Capital</h2>
      <p>Making climate risk data accessible for business</p>
      <input style={{ width: "50%"}} type="text" placeholder="Search a company..." onChange={companyFilterOnChange}></input>
      <br></br>
      <br></br>

      <RiskCards searchTerms={searchTerms}></RiskCards>

    </Container>
  );
};

export default ExternalApi;
