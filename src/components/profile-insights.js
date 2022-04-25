import React, { useState } from "react";
import useInsights from "./useInsights";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const NAVS = [['summary', 'Summary'], ['risk', 'Risks'], ['opportunity', 'Opportunities'], ['fact', 'Facts'], ['all', 'Show all']]

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
  const [activeCategory, setActiveCategory] = useState('all');
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
      <li key='header'>
        {NAVS.map(([v, n]) => navlink(v, n))}
      </li>
      {insights.filter(i => i.category === activeCategory || activeCategory === 'all').map((i, idx) => { return insight(i, idx) })}
    </div>
  );
};

export default ProfileInsights;