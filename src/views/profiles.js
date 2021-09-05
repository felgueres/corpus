import React from "react";
import { Container } from "react-bootstrap";
import { ProfilesTable, News } from "../components";

export const Profiles = () => {
  return (
    <Container>
      <div class="input-group mb-3 mt-5">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">@</span>
        </div>
        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
      </div>
      <News></News>
      <ProfilesTable></ProfilesTable>
    </Container>
  );
};

export default Profiles;
