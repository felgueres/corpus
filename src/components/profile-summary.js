import React from "react";
import useOrganizationProfile from "./useOrganizationProfile";
import useOrganizationFacts from "./useOrganizationFacts";
import BigNumber from "bignumber.js";

const ProfileSummary = ({ match }) => {
  var organizationId = match.params.organizationId;
  const { organizationData, loadingCompanyData } = useOrganizationProfile(organizationId)
  const { organizationFacts, loadingCompanyFacts } = useOrganizationFacts(organizationId)

  if (loadingCompanyData || loadingCompanyFacts) {
    return <div>Loading</div>
  }
  console.log(organizationFacts.concept)

  const render = (e) => {
    return (
      <tr>
        <p>{e.concept} ({e.frame}): </p>
        <th>{BigNumber(e.val).dividedBy(1000000).toFormat(0)} MUSD</th>
      </tr>
    )
  }

  return (
    <div id='profilesummary'>
      <h4>{organizationData.name}</h4>
      <p>Ticker: {organizationData.tickers}</p>
      <p>Exchange: {organizationData.exchanges}</p>
      {organizationFacts.map(e => render(e))}
    </div>
  );
};

export default ProfileSummary;