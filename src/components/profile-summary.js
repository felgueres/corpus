import React from "react";
import CompanyFacts from "./profile-company-facts";
import ProfileData from "./profile-data";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;

  if(!organizationId){
    return <div>Loading</div>
  }

  return (
    <div id='profilesummary'>
      <ProfileData organizationId={organizationId}/>
      <CompanyFacts organizationId={organizationId}/>
    </div>
  );
};

export default ProfileSummary;