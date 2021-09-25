import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const [organizationInformation, setOrganizationInformation] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const fetchClimateRisks = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/organizations/${organizationId}`);
      const responseData = await response.json();
      setOrganizationInformation(responseData);
    } catch (error) {
      setOrganizationInformation(error.message);
    }
  };

  useEffect(() => { if (organizationId) { fetchClimateRisks() } }, [organizationId]);

  if (!organizationInformation) {
    return 'loading'
  }
  var data = organizationInformation[0];
  const matchCounter = (text, regex) => {
    if (text.toLowerCase().match(regex)) {
      return (text.toLowerCase().match(regex).length)
    } else {
      return 0
    }
  }

  const getStats = (textArr) => {
    var climateMention = 0
    var ghgMention = 0
    var climateRiskMention = 0
    var weatherMention = 0
    var materialMention = 0

    for (var i = 0; i < textArr.length; i++) {
      var line = textArr[i];
      climateMention += matchCounter(line, /\bclimate change\b/g)
      ghgMention += matchCounter(line, /\bghg\b/g)
      ghgMention += matchCounter(line, /\bgreenhouse\b/g)
      climateRiskMention += matchCounter(line, /\bclimate risk\b/g)
      weatherMention += matchCounter(line, /\bextreme weather\b/g)
      weatherMention += matchCounter(line, /\bweather\b/g)
      materialMention += matchCounter(line, /\bmaterial impact\b/g)
    }

    return (
      <div>
        Climate risk: {climateRiskMention}
        <br />
        Climate change: {climateMention}
        <br />
        Greenhouse gasses: {ghgMention}
        <br />
        Material impact: {materialMention}
        <br />
        Severe weather: {weatherMention}
      </div>
    )
  }

  const renderDisclosure = (idx, line) => {
    return (
      <tr key={idx}>
        <p className="profile-snippet">
          {line}
        </p>
      </tr>)
  }

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>
      <Row className='py-2'>
        <Col sm={12} md={8}>
          <div className="investor-disclosure border profile-cards ">
            <p className="my-3 profile-findings"><strong>Annual Investor Report (10K), 2021 </strong></p>
            <p className="profile-findings">Climate-related snippets</p>
            {Object.entries(data.risks).map(([idx, line],) => renderDisclosure(idx, line))}
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="investor-disclosure border profile-cards">
            <p className="my-3 profile-findings"><strong> Keywords </strong></p>
            <p className="my-3 profile-findings">{getStats(data.risks)}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSummary;