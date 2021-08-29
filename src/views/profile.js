import React from "react";

export const Profile = ({ match, location }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const { params: { organizationId }} = match;

  return (
    <div>
      <p>
        <strong>{organizationId}</strong>
      </p>
    </div>
  );
};

export default Profile;
