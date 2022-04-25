import React from "react";
import CompanyFacts from "../components/profile-company-facts";
import ProfileData from "../components/profile-data";
import ProfileInsights from "../components/profile-insights";

const Profile = ({ match }) => {
  var organizationId = match.params.organizationId;
  return (
    <div id='profile'>
      <span>
        <ProfileData organizationId={organizationId} />
      </span>
      <div className="content">
        <ProfileInsights organizationId={organizationId} />
        <CompanyFacts organizationId={organizationId} />
      </div>
    </div>
  );
};
export default Profile;