import React from "react";
import useInsights from "./useInsights";
import SkeletonProfile from "../skeletons/SkeletonProfile";

function insight(i, idx) {
  return (<li key={idx}><div className={`insight insight-${i.category}`}>{i.text}</div></li>)
}

const ProfileInsights = ({ organizationId }) => {

  const { insights, loading } = useInsights(organizationId)

  if (loading) {
    return (<SkeletonProfile />)
  }

  function insightCards(insightsArr, category, categoryReadable) {
    return (
      <div>
        <h4>{categoryReadable}</h4>
        {insightsArr.filter(i => i.category === category).map((i, idx) => { return insight(i, idx) })}
      </div>
    )
  }

  function isCategoryAvailable(insightsArr, category){
    return insightsArr.filter(i=> i.category === category).length > 0 
  }

  return (
    <div id='profile-insights'>
      <div id='two-col-frame'>
        <div id='left-col'>
          {isCategoryAvailable(insights, 'supply') && insightCards(insights, 'supply', 'Supply Chains')}
          {isCategoryAvailable(insights, 'material') && insightCards(insights, 'material', 'Raw Materials')}
          {isCategoryAvailable(insights, 'manufacturing') && insightCards(insights, 'manufacturing', 'Manufacturing')}
          {isCategoryAvailable(insights, 'competition') && insightCards(insights, 'competition', 'Competition')}
          {isCategoryAvailable(insights, 'climate') && insightCards(insights, 'climate', 'Climate Risk')}
          {isCategoryAvailable(insights, 'risk') && insightCards(insights, 'risk', 'Other risks')}
          
        </div>
        <div id='right-col'>
          {isCategoryAvailable(insights, 'demand') && insightCards(insights, 'demand', 'Demand')}
          {isCategoryAvailable(insights, 'fact') && insightCards(insights, 'fact', 'Insights')}
        </div>
      </div>
    </div>
  );
};

export default ProfileInsights;