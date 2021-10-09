import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";

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


  function getIdentifiedRisks(data) {
    if (!(data)) {
      return {}
    }
    const disclosures = data.disclosures;
    let summary = {'physical': 0 , 'regulation': 0 , 'financial':0, 'emissions': 0} 
    for (let year in disclosures) {
      var lines = disclosures[year].disclosure
      if (Array.isArray(lines) && lines.length) {
        for (let i = 0; i < lines.length; i++) {
          summary['physical'] += lines[i].toLowerCase().includes('physical') ? 1 : 0
          summary['regulation'] += lines[i].toLowerCase().includes('regul') ? 1 : 0
          summary['financial'] += lines[i].toLowerCase().includes('financial') ? 1 : 0
          summary['emissions'] += lines[i].toLowerCase().includes('emissions') ? 1 : 0
        }
      }
    }
    return summary
  }

function getHighlightedText(text, highlight) {
  const parts = text.split('.');
  return <span> {parts.map((part, i) =>
    <span key={i} className={part.toLowerCase().includes(highlight.toLowerCase()) && isActive ? 'highlight-yellow' : ''}>
      {part}.
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
          <span>
            {Object.entries(disclosure.disclosure).filter(function ([idx, line]) { return line.toLowerCase().includes(riskCategory) })
              .map(([idx, line],) => renderLine(idx, line))}
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
  if (riskCategory === '') {
    setriskCategory(event.target.value)
    setActive(true)
  } else if (riskCategory === event.target.value) {
    setActive(false)
    setriskCategory('')
  } else {
    setriskCategory(event.target.value)
    setActive(true)
  }
}

var riskSummary = getIdentifiedRisks(data)

return (
  <div>
    <h3 className="py-2"><strong>{organizationId}</strong></h3>
    <Row>
      <Col sm={12} md={8}>
        <div className="p-3 border rounded-border bg-white">
          <h5><strong>Annual Financial Disclosures</strong></h5>
          <span>Climate-related snippets</span>
          {renderDisclosures(data)}
        </div>
      </Col>

      <Col sm={12} md={4}>
        <div className="bg-white p-3 border rounded-border">
          <p className="my-1 "><strong>Filter by climate risk</strong></p>
          <hr/>
          <Button className='button-pill' value={'physical'} onClick={activateClass}>Physical risk <span className='badge badge-pill badge-light'>{('physical' in riskSummary) ? riskSummary['physical'] : 0}</span></Button>
          <span className='button-divider' />
          <Button className='button-pill' value={'regulat'} onClick={activateClass}>Policy & regulation <span className='badge badge-pill badge-light'>{('regulation' in riskSummary) ? riskSummary['regulation'] : 0}</span></Button>
          <span className='button-divider' />
          <Button className='button-pill' value={'financial'} onClick={activateClass}>Financial Risk <span className='badge badge-pill badge-light'>{('financial' in riskSummary) ? riskSummary['financial'] : 0}</span></Button>
          <span className='button-divider' />
          <Button className='button-pill' value={'emissions'} onClick={activateClass}>GHG Emissions <span className='badge badge-pill badge-light'>{('emissions' in riskSummary) ? riskSummary['emissions'] : 0}</span></Button>
          <span className='button-divider' />
        </div>
      </Col>
    </Row>
  </div>
);
};

export default ProfileSummary;