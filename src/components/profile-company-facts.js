import React from "react";
import useOrganizationFacts from "./useOrganizationFacts";
import BigNumber from "bignumber.js";
import SkeletonFacts from "../skeletons/SkeletonFacts";

const MILLION = 1000000
const YEARSPERIOD = 5
const cagr = (end, start, periods) => {
  return Math.pow((end / start), (1 / periods)) - 1
}

const CompanyFacts = ({ organizationId }) => {
  const { facts, loading } = useOrganizationFacts(organizationId)

  if (loading || facts.length < 1) { return (<div id='factscomponent'><SkeletonFacts /></div>) }
  
  const revenues = facts
    .filter(i => i.concept === 'Revenues')
    .map(i => { return { ...i, ['CY']: parseInt(i.frame.slice(2, 7))}})

  const costOfRevenue = facts
    .filter(i => i.concept === 'CostOfRevenue')
    .map(i => { return { ...i, ['CY']: parseInt(i.frame.slice(2, 7))}})
  
  const publicFloat = facts
    .filter(i => i.concept === 'EntityPublicFloat')
    .map(i => {return { ...i, ['CY']: parseInt(i.frame.slice(2, 7))}})

  console.log(publicFloat)
  const latestYear = Math.max(...publicFloat.map(i=>i.CY))
  const publicFloatLatest = publicFloat.filter(i=> i.CY === latestYear)
  const publicFloatLatestValue = (publicFloatLatest.length === 0)? false : BigNumber(publicFloatLatest[0].val).dividedBy(MILLION)
  const publicFloatPrevious = publicFloat.filter(i=> i.CY === latestYear-1)
  const publicFloatPreviousValue = (publicFloatPrevious.length === 0)? false : BigNumber(publicFloatPrevious[0].val).dividedBy(MILLION)
  console.log(publicFloatPrevious)

  return (
    <div id='factscomponent'>
      <h4>Financial Performance</h4>
      <div id='factsgrid'>
        <div>(MUSD)</div>
        <div>{Math.max(...publicFloat.map(i=>parseInt(i.CY)))}</div>
        <div>Y/Y</div>
        <div>Public Float</div>
        <div>{publicFloatLatestValue ? publicFloatLatestValue.toFormat(0): 'Unavailable'}</div>
        <div>{(publicFloatPreviousValue && publicFloatLatestValue) ? publicFloatLatestValue.dividedBy(publicFloatPreviousValue).toFormat(2): 'Unavailable'}</div>
      </div>
      {`CAGR ${YEARSPERIOD}yr  Revenue`}
      {/* {cagrRevenue ? `${(cagrRevenue * 100).toFixed(1)}%` : 'Unavailable'} */}
    </div>
  );
};

export default CompanyFacts;