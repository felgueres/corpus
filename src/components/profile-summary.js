import React, { useState } from "react";
import useOrganizationProfile from "./useOrganizationProfile";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const { organizationData, loadingCompanyData } = useOrganizationProfile(organizationId)

  if (loadingCompanyData) {
    return <div>Loading</div>
  }

  return (
    <div className="navbar-font">
        <h4>{organizationData.name}</h4>
        <p>Ticker: {organizationData.tickers}</p>
    </div>
  );
};

export default ProfileSummary;