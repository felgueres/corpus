import React from "react";
import useOrganizationFacts from "./useOrganizationFacts";
import SkeletonFacts from "../skeletons/SkeletonFacts";

const cagr = (end, start, periods) => {
  return Math.pow((end / start), (1 / periods)) - 1
}

function formatAsCompact(num) {
  return new Intl.NumberFormat('en', { notation: 'compact' }).format(num);
}

function formatAsPercent(num) {
  return new Intl.NumberFormat('default', {
    style: 'percent',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(num);
}

const CompanyFacts = ({ organizationId }) => {
  const { facts, loading } = useOrganizationFacts(organizationId)
  if (loading || facts.length < 1) { return (<div id='factscomponent'><SkeletonFacts /></div>) }

  function get_values(factsArr, concept) {
    let arr = factsArr.filter(i => i.concept === concept).map(i => { return { ...i, ['CY']: parseInt(i.frame.slice(2, 7)) } })
    let latestYear = Math.max(...arr.map(i => i.CY))
    let latest = arr.filter(i => i.CY === latestYear)
    let latestValue = (latest.length === 0) ? false : latest[0].val
    let previous = arr.filter(i => i.CY === latestYear - 1)
    let previousValue = (previous.length === 0) ? false : previous[0].val
    return { [concept]: {previousValue, latestValue, latestYear} }
  }

  let {EntityPublicFloat} = get_values(facts, 'EntityPublicFloat')
  let {CostOfRevenue}= get_values(facts, 'CostOfRevenue')
  let {Revenues}= get_values(facts, 'Revenues')

  return (
    <div id='factscomponent'>
      <h4>Financial Performance</h4>
      <div id='factsgrid'>
        <div>(USD)</div>
        <div>{EntityPublicFloat.latestYear}</div>
        <div>Y/Y</div>
        <div>Public Float</div>
        <div>{EntityPublicFloat.latestValue ? formatAsCompact(EntityPublicFloat.latestValue) : 'Unavailable'}</div>
        <div>{(EntityPublicFloat.latestValue&& EntityPublicFloat.previousValue) ? formatAsPercent((EntityPublicFloat.latestValue/ EntityPublicFloat.previousValue) - 1) : 'Unavailable'}</div>
        <div>Revenue</div>
        <div>{Revenues.latestValue?formatAsCompact(Revenues.latestValue):'Unavailable'}</div>
        <div>{(Revenues.latestValue&&Revenues.previousValue)?formatAsPercent((Revenues.latestValue/Revenues.previousValue)-1):'Unavailable'}</div>
        <div>Cost of Revenue</div>
        <div>{CostOfRevenue.latestValue?formatAsCompact(CostOfRevenue.latestValue) : 'Unavailable'}</div>
        <div>{(CostOfRevenue.latestValue&&CostOfRevenue.previousValue)?formatAsPercent((CostOfRevenue.latestValue/CostOfRevenue.previousValue)-1):'Unavailable'}</div>
      </div>
    </div>
  );
};

export default CompanyFacts;