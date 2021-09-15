import React, { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";

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

  return (
    <div className="my-5">
      <h3 className="profile-title">{organizationId}</h3>

      {/* Subtitle */}
      <Row className='py-2'>
        <Col className="col-md-6 col-sm-12">
          <Row>
            <Col className="col-xs-4">Sector: -- </Col>
            <Col className="col-xs-4">Ticker: -- </Col>
          </Row>
        </Col>
      </Row>

      <Row className="pt-3">
        <Col xs={12} sm={8} md={8} lg={6} xl={6}>
          <p className="profile-subtitle">Climate Risk Rating </p>
          <Row>
            <Col className="col-xs-6">
              <span className="climate-risk-score">X</span>
            </Col>
            <Col className="col-xs-6">
              <div className="margin-auto">
                <p className="climate-risk-assessment">
                  X
                  <br />
                  Risk
                </p>
              </div>
            </Col>
          </Row>
          <Row className="climate-risk-gradient">
            <Col className="centered">Neglible</Col>
            <Col className="centered"> Low</Col>
            <Col className="centered">Med</Col>
            <Col className="centered">High</Col>
            <Col className="centered">Severe</Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <div className="profile-snippet">
        <p className="my-0"><strong>Selected Snippet</strong></p>
        <p className="">{data.risks}</p>
      </div>
    </div>
  );
};

export default ProfileSummary;