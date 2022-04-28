import React from "react";
import ProfileData from "../components/profile-data";
import ProfileInsights from "../components/profile-insights";
import CompanyFacts from "../components/profile-company-facts";

const Profile = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <div id='profile'>
      <div id='two-col-frame'>
        <ProfileData organizationId={organizationId} />
        <CompanyFacts organizationId={organizationId}/>
      </div>
        <ProfileInsights organizationId={organizationId} />
    </div>
  );
};
export default Profile;