import React, { useState } from "react";
import useInsights from "./useInsights";
import SkeletonProfile from "../skeletons/SkeletonProfile";
import CompanyFacts from "./profile-company-facts";

const NAVS = [['supply', 'Supply Chains'], ['manufacturing', 'Manufacturing'],
['demand', 'Demand'], , ['risk', 'Risks'],
['fact', 'Insights'], ['climate', 'Climate'], ['cyber', 'Cyber'],
['competition', 'Competition'], ['material', 'Raw Materials']]

function insight(i, idx) {
  return (<li key={idx}><div className={`insight insight-${i.category}`}>{i.text}</div></li>)
}

const ProfileInsights = ({ organizationId }) => {

  const { insights, loading } = useInsights(organizationId)
  const [activeCategory, setActiveCategory] = useState('');

  if (loading) {
    return (<SkeletonProfile />)
  }

  function navlink(value, name) {
    return (
      <a className={activeCategory === value ? 'active' : ''} role='button' onClick={() => { setActiveCategory(value) }}>{name}</a>)
  }

  function insightCards(insightsArr, category, categoryReadable) {
    return (
      <div>
        <h4>{categoryReadable}</h4>
        {insightsArr.filter(i => i.category === category || activeCategory === 'all').map((i, idx) => { return insight(i, idx) })}
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
          <CompanyFacts organizationId={organizationId}/>
        </div>
      </div>
    </div>
  );
};

export default ProfileInsights;