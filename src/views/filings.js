import React from "react";
import CategoriesBar from "../components/categories-bar";
import ProfileData from "../components/profile-data";
import ProfileInsights from "../components/profile-insights";

const Filings = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <div id='profile'>
      <div id='two-col-frame'>
      <div><ProfileData organizationId={organizationId} /></div>
      <div><CategoriesBar organizationId={organizationId}/></div>
      </div>
      <ProfileInsights organizationId={organizationId} />
    </div>
  );
};
export default Filings;