import React from "react";
import useOrganizationProfile from "./useOrganizationProfile";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const ProfileData = ({organizationId}) => {

  const { data , loading } = useOrganizationProfile(organizationId)

  if (loading) {
    return (<SkeletonProfile/>)
  }

  function replace_quotes(s){
    return s.replace(/'/g,'"')
  }

  let ticker = JSON.parse(replace_quotes(data.tickers))[0]
  let exchange = JSON.parse(replace_quotes(data.exchanges))[0]

  return (
    <div id='profilesummary'>
      <h1>{data.name}</h1>
      <h2>{exchange} : {ticker}</h2>
    </div>
  );
};

export default ProfileData;