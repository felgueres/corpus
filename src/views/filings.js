import React from "react";
import CategoriesBar from "../components/categories-bar";
import ProfileData from "../components/profile-data";
import ProfileInsights from "../components/profile-insights";

const Filings = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <div id='profile'>
      <ProfileData organizationId={organizationId} />
      <CategoriesBar organizationId={organizationId} />
      <ProfileInsights organizationId={organizationId} />
    </div>
  );
};
export default Filings;