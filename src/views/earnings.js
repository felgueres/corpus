import React from "react";
import EarningsSummary from "../components/earnings-summary";
import ProfileData from "../components/profile-data";
import CategoriesBar from "../components/categories-bar";

const Filings = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <div id='profile'>
      <ProfileData organizationId={organizationId} />
      <CategoriesBar organizationId={organizationId}/>
      <EarningsSummary organizationId={organizationId} />
    </div>
  );
};
export default Filings;