import React from "react";
import CompanyFacts from "../components/profile-company-facts";
import ProfileData from "../components/profile-data";

const Profile = ({ match }) => {
  var organizationId = match.params.organizationId;
  console.log('hey')

  if(!organizationId){
    return <div>Loading</div>
  }

  return (
    <div id='profile'>
      <ProfileData organizationId={organizationId}/>
      <CompanyFacts organizationId={organizationId}/>
    </div>
  );
};

export default Profile;