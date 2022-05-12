import React from "react";
import EarningsSummary from "../components/earnings-summary";
import ProfileData from "../components/profile-data";
import CategoriesBar from "../components/categories-bar";

const Filings = ({ match }) => {
  var organizationId = match.params.organizationId;

  return (
    <div id='profile'>
      <div id='two-col-frame'>
      <div><ProfileData organizationId={organizationId} /></div>
      <div><CategoriesBar organizationId={organizationId}/></div>
      </div>
      <EarningsSummary organizationId={organizationId} />
    </div>
  );
};
export default Filings;