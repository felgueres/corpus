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
    if (text.toLowerCase().match(regex)){
      return (text.toLowerCase().match(regex).length)
    } else {
      return 0
    }
  }

  const getStats = (textArr) => {
    var climateMention = 0
    var ghgMention = 0
    var climateRiskMention = 0

    for (var i = 0; i < textArr.length; i++) {
      var line = textArr[i];
      climateMention += matchCounter(line, /\bclimate change\b/g)
      ghgMention += matchCounter(line, /\bghg\b/g)
      ghgMention += matchCounter(line, /\bgreenhouse\b/g)
      climateRiskMention += matchCounter(line, /\bclimate risk\b/g)
     }

    return (
      <div>
        Climate risk: {climateRiskMention}
        <br/>
        Climate change: {climateMention} 
        <br/>
        Greenhouse gasses: {ghgMention}
      </div>
    )
  }

  const renderDisclosure = (idx, line) => {
    return (
    <tr key={idx}>
      <p>
        {line}
      </p>
    </tr>)
  }

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>
      <Row className='py-2' style={{ 'marginLeft': '0px' }}>
        <Col className="investor-disclosure border shadow col-md-8 col-sm-12 ">
          <div className="my-3 profile-snippet">
            <p className="my-2 profile-findings"><strong>Annual Investor Report (10K), 2021 </strong></p>
            <p className="profile-findings">Climate-related snippets</p>
            {Object.entries(data.risks).map(([idx, line],) => renderDisclosure(idx, line))}
          </div>
        </Col>
        <Col className="investor-disclosure">
          <div className="profile-findings">
            <p className="my-1 profile-findings"><strong> Keyword stats </strong></p>
            <p className="my-1">{getStats(data.risks)}</p>
          </div>
          <p className="my-1"></p>
        </Col>
      </Row>

    </div>
  );
};

export default ProfileSummary;