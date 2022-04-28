import React, { useState } from "react";
import useInsights from "./useInsights";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const NAVS = [['supply','Supply Chains'],['manufacturing', 'Manufacturing'],
              ['demand','Demand'],,['risk', 'Risks'],
              ['fact', 'Insights'], ['climate', 'Climate'],['cyber','Cyber'],
              ['competition', 'Competition'],['material','Raw Materials']]

function insight(i, idx) {
  return (
    <li key={idx}>
      <div className={`insight-${i.category}`}>
        {i.text} <span className="source">Source: {i.source}</span>
      </div>
    </li>
  )
}

const ProfileInsights = ({ organizationId }) => {

  const { insights, loading } = useInsights(organizationId)
  const [activeCategory, setActiveCategory] = useState('');

  if (loading) {
    return (<SkeletonProfile />)
  }

  function navlink(value, name) {
    return (
      <a className={activeCategory === value ? 'active' : ''} role='button' onClick={() => { setActiveCategory(value) }}>{name}</a>
    )
  }

  return (
    <div id='profile-insights'>
      <div id='categories'>
        {NAVS.map(([v, n]) => navlink(v, n))}
      </div>
      {insights.filter(i => i.category === activeCategory || activeCategory === 'all').map((i, idx) => { return insight(i, idx) })}
    </div>
  );
};

export default ProfileInsights;