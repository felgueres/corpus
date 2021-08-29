import React from "react";
import { ProfileSummary } from "../components";


export const Profile = ({ match, location }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  var organizationId = match.params.organizationId;

  return (
    <div className='pt-4'>
      <ProfileSummary organizationId={organizationId} />
    </div>
  );
};

export default Profile;
