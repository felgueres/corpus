import React from "react";
import useOrganizationProfile from "./useOrganizationProfile";
import SkeletonProfile from "../skeletons/SkeletonProfile";
import replace_quotes from "../utils/utils";

const ProfileData = ({organizationId}) => {
  const { data , loading } = useOrganizationProfile(organizationId)
  if (loading) {
    return (<SkeletonProfile/>)
  }
  let ticker = JSON.parse(replace_quotes(data.tickers))[0]
  let exchange = JSON.parse(replace_quotes(data.exchanges))[0]
  return (
    <div id='profilesummary'>
      <h1>{data.name}</h1>
      <h2>{exchange} : {ticker}
      <br/>Q1, 2022</h2>
    </div>
  );
};

export default ProfileData;