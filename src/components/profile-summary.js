import React, { useState, useEffect } from "react";
import { Row, Col, Badge, Button } from "react-bootstrap";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const [organizationInformation, setOrganizationInformation] = useState(null);
  const [isActive, setActive] = useState(false);
  const [riskCategory, setriskCategory] = useState('');

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

  function getHighlightedText(text, highlight) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span> {parts.map((part, i) =>
      <span key={i} className={part.toLowerCase() === highlight.toLowerCase() && isActive ? 'highlight-yellow' : ''}>
        {part}
      </span>)
    } </span>;
  }

  const renderLine = (idx, line) => {
    return (
      <span>
        <br />
        {getHighlightedText(line, riskCategory)}
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

  const activateClass = (event) => {
    if (riskCategory === event.target.value || riskCategory === '') {
      console.log('same')
      setActive(!isActive)
    }
    setriskCategory(event.target.value)
  }

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>
      <Row className='py-2'>
        <Col sm={12} md={8}>
          <div className="investor-disclosure border profile-cards ">
            <br />
            <span className="my-3 profile-subtitle"><strong>Annual Financial Disclosures (10K)</strong></span>
            <br />
            <span className="profile-findings">Climate-related snippets</span>
            {renderDisclosures(data)}
            <br />
          </div>
        </Col>

        <Col sm={12} md={4}>
          <div className="">
            <p className="my-3 "><strong>Climate-related Risks</strong></p>
            <Button className='button-pill' value='climate change' onClick={activateClass}>Physical</Button>
            <span className='button-divider' />
            <Button className='button-pill' value='regulations' onClick={activateClass}>Policy & Regulation</Button>
            <span className='button-divider' />
            <Button className='button-pill' value='technology' onClick={activateClass}>Technology Development</Button>
            <span className='button-divider' />
            <Button className='button-pill' value='consumer' onClick={activateClass}>Consumer Preferences</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSummary;