import React, { useState } from "react";
import { Button, ButtonGroup, Container, Col, Row, Badge } from "react-bootstrap";
import { Highlight } from "../components";
import { useAuth0 } from "@auth0/auth0-react";
import { RiskCards } from "../components";

export const ExternalApi = (props) => {
  const [message, setMessage] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;
  const { getAccessTokenSilently } = useAuth0();
  const [searchTerms, setSearchTerms] = useState("");
  const [categorySearchTerms, setCategorySearchTerms] = useState("All Categories");

  const companyFilterOnChange = (event) => {
    setSearchTerms(event.target.value)
  }
  
  const categoryFilterOnChange = (event) => {
    setCategorySearchTerms(event.target.value)
  }

  const renderOption = (category) => {
    return (
      <option value={category}>{category}</option>
    )
  }

  const categories = ['All Categories', 'Aerospace', 'Agriculture', 'Airlines', 'Apparel', 'Auto', 'Auto Parts', 'Automotive', 'Banking', 'Beverage', 'Beverages', 'Biotechnology', 'Careers', 'Chem', 'Chemicals', 'Conglomerate', 'Construction', 'Consumer', 'Consumer Goods', 'Defense', 'Energy', 'Enterprise', 'Entertainment', 'Fast Food', 'Finance', 'Financial', 'Financial Services', 'Financials', 'Food', 'Gas', 'Healthcare', 'Home', 'Home Improvement', 'Hotels', 'Industrial', 'Infrastructure', 'Insurance', 'Investment Banking', 'Lodging', 'Log', 'Logistics', 'Manufacturing', 'Marketplace', 'Materials', 'Media', 'Medical Devices', 'Metals', 'Mining', 'Oil', 'Packaging', 'Paper', 'Pharmaceuticals', 'Printing', 'Private Equity', 'Property Management', 'REIT', 'Real Estate', 'Renewable Energy', 'Restaurants', 'Retail', 'Security', 'Semiconductors', 'Shipping', 'Software', 'Sports', 'Technology', 'Tourism', 'Transportation', 'Travel', 'Utilities', 'Waste Management', 'Water'] 
  return (
    <Container className="mb-5 pt-3">
      <h3 style={{display : 'inline-block'}}>Climate Metrics</h3>
      <span class="badge badge-primary ml-2 mt-2" style={{verticalAlign: 'top'}}>Beta</span>
      <p>Helping markets transition to a low carbon economy by providing tools and data.</p>
      <Row>
        <Col md={7}>
          <input style={{ width: '100%', minHeight: 35, height: 35 }} type="text" placeholder="Search a company..." onChange={companyFilterOnChange}></input>
        </Col>
        <Col md={{ span: 5, offset: 0 }}>
          <select placeholder="Category" style={{width: '100%', minHeight: 35, height: 35 }} onChange={categoryFilterOnChange}>
            {categories.map(category => renderOption(category))}
          </select>
        </Col>
      </Row>

      <br></br>

      <RiskCards searchTerms={searchTerms} categorySearchTerms={categorySearchTerms}></RiskCards>

    </Container>
  );
};

export default ExternalApi;
