import React from "react";
import { Container } from "react-bootstrap";
import { ProfilesTable } from "../components";

export const Profiles = () => {
  return (
    <Container className="mb-5 pt-3">
      <ProfilesTable></ProfilesTable>
    </Container>
  );
};

export default Profiles;
