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

  const getStats = (data) => {

    if (typeof data === 'undefined' ){
      return <span>Nothing yet.</span>
    }

    var disclosures = data.disclosures

    var climateMention = 0
    var ghgMention = 0
    var climateRiskMention = 0
    var weatherMention = 0
    var materialMention = 0
    var physicalEffectsMention = 0
    var regulationRiskMention = 0
    var financialRiskMention = 0
    for (var y in disclosures) {
      if (disclosures[y]['disclosure'].length > 0) {
        for (var i = 0; i < disclosures[y]['disclosure'].length; i++) {
          var line = disclosures[y]['disclosure'][i];
          climateMention += matchCounter(line, /\bclimate change\b/g)
          ghgMention += matchCounter(line, /\bghg\b/g)
          ghgMention += matchCounter(line, /\bgreenhouse\b/g)
          climateRiskMention += matchCounter(line, /\bclimate risk\b/g)
          weatherMention += matchCounter(line, /\bextreme weather\b/g)
          weatherMention += matchCounter(line, /\bweather\b/g)
          materialMention += matchCounter(line, /\bmaterial impact\b/g)
          physicalEffectsMention += matchCounter(line, /\bphysical effects\b/g)
          regulationRiskMention += matchCounter(line, /\bregulation\b/g)
          regulationRiskMention += matchCounter(line, /\bregulatory\b/g)
          regulationRiskMention += matchCounter(line, /\bcompliance\b/g)
          financialRiskMention += matchCounter(line, /\bfinancial\b/g)
          financialRiskMention += matchCounter(line, /\boperational cost\b/g)
          financialRiskMention += matchCounter(line, /\boperating cost\b/g)
          financialRiskMention += matchCounter(line, /\bcost of operation\b/g)
        }
      }
    }
    return (
      <div>
        {climateRiskMention > 0 && <span>Climate risk: {climateRiskMention} <br /></span>}
        {climateMention > 0 && <span>Climate change: {climateMention} <br /></span>}
        {ghgMention > 0 && <span>Greenhouse gases: {ghgMention}<br /></span>}
        {materialMention > 0 && <span>Material impact: {materialMention}<br /></span>}
        {weatherMention > 0 && <span>Severe weather: {weatherMention}<br /></span>}
        {physicalEffectsMention > 0 && <span>Physical risk: {physicalEffectsMention}<br /></span>}
        {regulationRiskMention > 0 && <span>Regulation risk: {regulationRiskMention}<br /></span>}
        {financialRiskMention > 0 && <span>Financial risk: {financialRiskMention}<br /></span>}
      </div>
    )
  }

  const getCompleteness = (textArr) => {
    var governance = 0
    var strategy = 0
    var riskManagement = 0
    var metricTargets = 0

    for (var i = 0; i < textArr.length; i++) {
      var line = textArr[i];
      governance += matchCounter(line, /\bgovernance\b/g)
      strategy += matchCounter(line, /\bstrategy\b/g)
      riskManagement += matchCounter(line, /\brisk management\b/g)
      metricTargets += matchCounter(line, /\bco2\b/g)
    }

    return (
      <div>
        <span>Governance: {governance ? governance : <strong className="card-strong">Not mentioned</strong>} <br /></span>
        <span>Strategy: {strategy ? strategy : <strong className="card-strong">Not mentioned</strong>} <br /></span>
        <span>Risk Management: {riskManagement ? riskManagement : <strong className="card-strong">Not mentioned</strong>} <br /></span>
        <span>Metric Targets: {metricTargets ? metricTargets : <strong className="card-strong">Not mentioned</strong>} <br /></span>
      </div>
    )
  }

  const renderLine = (idx, line) => {
    return (
      <span>
        <br />
        {line}
        <br />
      </span>
    )
  }


  const renderDisclosure = (year, disclosure) => {
    if (disclosure.disclosure.length > 0) {
      return (
        <span className="profile-snippet">
          <tr key={year}>
            <hr />
            <span className="profile-findings"><strong>{year}</strong></span> |
            <a href={disclosure.url}> source</a>
            <br />
            <br />
            <span>
              {disclosure.disclosure}
              {Object.entries(disclosure.disclosure).map(([idx, line],) => renderLine(idx, line))}
            </span>
          </tr>
        </span>
      )
    }
  }

  const renderDisclosures = (disclosures) => {
    if (!(data)) {
      return (
        <span className="profile-findings">
          <br />
          <hr />
          Company doesn't report climate-related disclosures.
          <br />
        </span>)
    }
    var disclosures = data.disclosures;
    return (
      <div>
        {Object.entries(disclosures).map(([year, disclosure],) => renderDisclosure(year, disclosure))}
      </div>
    )
  }

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>
      <Row className='py-2'>
        <Col sm={12} md={8}>
          <div className="investor-disclosure border profile-cards ">
            <br />
            <span className="my-3 profile-subtitle"><strong>Annual Investor Reports</strong></span>
            <br />
            <span className="profile-findings">Climate-related snippets</span>
            {renderDisclosures(data)}
            <br />
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className="investor-disclosure border profile-cards">
            <p className="my-3 profile-findings"><strong> Climate Risks found </strong></p>
            <p className="my-3 profile-findings">{getStats(data)}</p>
          </div>

          {/* <div className="investor-disclosure border profile-cards">
            <p className="my-3 profile-findings"><strong> TCFD Recommendations </strong></p>
            <p className="my-3 profile-findings">{getCompleteness(data.risks)}</p>
          </div> */}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSummary;