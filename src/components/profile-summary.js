import React, { useState, useEffect } from "react";
import { Container, Col, Card } from "react-bootstrap";

const ProfileSummary = ({ organizationId }) => {
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

  useEffect(() => { if(!organizationInformation){fetchClimateRisks()} }, []);

  if (!organizationInformation) {
    return 'loading'
  }

  return (
    <Container>
      <Col>
        <Card className='pt-2'>
          <div className="card-body">
            <h5 className="card-title">{organizationId}</h5>
            <p className="card-text">{ organizationInformation[0].risks }</p>
          </div>
        </Card>
        
      </Col>
    </Container>
  );
};

export default ProfileSummary;