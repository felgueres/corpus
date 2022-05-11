import React, { useState } from "react";
import useInsights from "./useInsights";
import SkeletonProfile from "../skeletons/SkeletonProfile";

function insight(i, idx) {
  return (<li key={idx}><div className={`insight insight-${i.category}`}>{i.text}</div></li>)
}

const ITEMSTOSHOW = 1

const categoriesMap = {
  'supply': { 'readable': 'Supply Chains' },
  'material': { 'readable': 'Raw Materials' },
  'manufacturing': { 'readable': 'Manufacturing' },
  'competition': { 'readable': 'Competition' },
  'climate': { 'readable': 'Climate Risk' },
  'risk': { 'readable': 'Other Risks' },
  'fact': { 'readable': 'Insights' },
  'demand': { 'readable': 'Insights' }
}

const ProfileInsights = ({ organizationId }) => {
  const categoriesNames = Object.entries(categoriesMap).map(([k,]) => k)
  const initItemsToShow = Object.assign({}, ...categoriesNames.map(n => ({ [n]: { 'itemsToShow': ITEMSTOSHOW, 'expanded': false } })))
  const { insights, loading } = useInsights(organizationId)
  const [itemsToShow, setItemsToShow] = useState({ ...initItemsToShow })

  if (loading) {
    return (<SkeletonProfile />)
  }

  function showMore(category) { itemsToShow[category].itemsToShow === 1 ? setItemsToShow({ ...itemsToShow, [category]: { ...itemsToShow[category], 'itemsToShow': 10 } }) : setItemsToShow({ ...itemsToShow, [category]: { ...itemsToShow[category], 'itemsToShow': 1 } }) }
  function insightCards(insightsArr, category, categoryReadable) {
    return (
      <div id="insight-card">
        <h4>{categoryReadable}</h4>
          {insightsArr.filter(i => i.category === category).slice(0, itemsToShow[category].itemsToShow).map((i, idx) => { return insight(i, idx) })}
          {insightsArr.filter(i => i.category === category).length > 1 && (<div className="showmore"><a role="button" onClick={() => showMore(category)}>{itemsToShow[category].itemsToShow===1?'Show more':'Show less'}</a></div>)}
      </div>
    )
  }

  function isCategoryAvailable(insightsArr, category) {
    return insightsArr.filter(i => i.category === category).length > 0
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