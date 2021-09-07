import React from "react";
import { ProfileSummary } from "../components";
import { Container } from "react-bootstrap";

export const Profile = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <Container className="heavy-padded">
      <input id='searchbar' type="text" className="form-control searchbar" autoComplete="off" placeholder="Search" />
      <div id='blurable'>
        <ProfileSummary organizationId={organizationId} />
      </div>
    </Container>
  );
};

export default Profile;
