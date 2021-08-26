import React from "react";
import { Container, Col, Row, Table } from "react-bootstrap";
import { ProfilesTable } from "../components";

export const Profiles = (props) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  return (
    <Container className="mb-5 pt-3">
      <ProfilesTable></ProfilesTable>
    </Container>
  );
};

export default Profiles;
