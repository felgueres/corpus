import React from "react";
import EarningsSummary from "../components/earnings-summary";
import ProfileData from "../components/profile-data";
import CategoriesBar from "../components/categories-bar";
import { useParams } from "react-router-dom";

const Filings = () => {
  let params = useParams()
  var organizationId = params.organizationId;

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