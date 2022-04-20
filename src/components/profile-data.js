import React from "react";
import useOrganizationProfile from "./useOrganizationProfile";

const ProfileData = ({organizationId}) => {

  const { organizationData, loadingCompanyData } = useOrganizationProfile(organizationId)

  if (loadingCompanyData ) {
    return ( 
    <div id='profilesummary'>
      <h4>Company Profile</h4>
      <ul id='company-facts'>
        <li><span>Name</span>...</li>
        <li><span>Ticker</span>...</li>
        <li><span>Exchange</span>...</li>
      </ul>
    </div>)
  }

  function replace_quotes(s){
    return s.replace(/'/g,'"')
  }

  return (
    <div id='profilesummary'>
      <h4>Company Profile</h4>
      <ul id='company-facts'>
        <li><span>Name</span>{organizationData.name}</li>
        <li><span>Ticker</span>{JSON.parse(replace_quotes(organizationData.tickers))[0]}</li>
        <li><span>Exchange</span>{JSON.parse(replace_quotes(organizationData.exchanges))[0]}</li>
      </ul>
    </div>
  );
};

export default ProfileData;