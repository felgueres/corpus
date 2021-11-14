import React, { useState } from "react";
import { Row, Button } from "react-bootstrap";
import useOrganizationProfile from "./useOrganizationProfile";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const [isActive, setActive] = useState(false);
  const [riskCategory, setriskCategory] = useState('');
  const { organizationData, loadingCompanyData } = useOrganizationProfile(organizationId)

  function getIdentifiedRisks(data) {

    if (!(data)) {
      return {}
    }

    const disclosures = data.disclosures;
    let summary = { 'physical': 0, 'regulation': 0, 'financial': 0, 'emissions': 0, 'opportunity': 0 }
    for (let year in disclosures) {
      var lines = disclosures[year].disclosure
      if (Array.isArray(lines) && lines.length) {
        for (let i = 0; i < lines.length; i++) {
          summary['physical'] += lines[i].toLowerCase().includes('physical') ? 1 : 0
          summary['regulation'] += lines[i].toLowerCase().includes('regul') ? 1 : 0
          summary['financial'] += lines[i].toLowerCase().includes('financial') ? 1 : 0
          summary['emissions'] += lines[i].toLowerCase().includes('emissions') ? 1 : 0
          summary['opportunity'] += lines[i].toLowerCase().includes('opportunit') ? 1 : 0
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
            <span className="profile-findings"><strong>{year}</strong></span> |
            <a href={disclosure.url}> SEC: Form 10-K</a>
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
    if (!(organizationData)) {
      return (
        <span className="profile-findings">
          <br />
          <hr />
          Company doesn't report climate-related disclosures.
          <br />
        </span>)
    }
    var company_disclosures = organizationData.disclosures;

    return (
      <div>
        {Object.entries(company_disclosures).map(([year, disclosure],) => renderDisclosure(year, disclosure))}
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

  var riskSummary = getIdentifiedRisks(organizationData)

  if (loadingCompanyData) {
    return <div>Loading</div>
  }

  function getHighlightPill(exposureType) {
    if ((riskSummary[exposureType] < 1)) {
      return (
        <span>
          <span className='button-divider' />
          <Button className='button-pill btn-light' disabled value={exposureType}>{exposureType}</Button>
        </span>
      )
    }
    return (
      <span>
        <span className='button-divider' />
        <Button className='button-pill' value={exposureType} onClick={activateClass}>{exposureType} ({riskSummary[exposureType]})</Button>
      </span>
    )
  }

  return (
    <div>
      <Row>
        <h4 className="py-2"><strong>{organizationId}</strong></h4>
      </Row>
      <Row>
        <h5>Top Snippets</h5>
        <span className='ml-auto mr-3'>
          Highlights
          <span className='button-divider' />
          {
            ['physical', 'regulation', 'opportunity'].map(exposureType => { return getHighlightPill(exposureType) })
          }
        </span> </Row>
      <Row>
        {renderDisclosures(organizationData)}
      </Row>
    </div>
  );
};

export default ProfileSummary;