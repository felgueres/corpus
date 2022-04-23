import React from "react";
import useOrganizationFacts from "./useOrganizationFacts";
import BigNumber from "bignumber.js";

const CompanyFacts = ({ organizationId }) => {
  const { facts, loading} = useOrganizationFacts(organizationId)

  if (loading || facts.length <1) {
    return (
      <div id='profilesummary'>
        <h4>Company Facts</h4>
        <ul id='company-facts'>
          <li><span>EntityPublicFloat</span>--</li>
          <li><span>Revenue</span>--</li>
          <li><span>CostsOfRevenue</span>--</li>
          <li><span>GrossProfit</span>--</li>
        </ul>
      </div>
    )
  }

  const fact= (concept, current, previous, curYear) => {
    var hasCurrent = current.hasOwnProperty(concept)
    var hasPrevious = previous.hasOwnProperty(concept)
    var curVal = hasCurrent ? current[concept].val : false
    var previousVal = hasPrevious ? previous[concept].val : false
    
    var yoy = false 
    if(hasCurrent&&hasPrevious&&curVal>0&&previousVal>0){
      yoy = ((curVal/previousVal- 1) * 100).toFixed(1) + '%'}

    const MILLION = 1000000
    var formatVal = hasCurrent ? BigNumber(curVal).dividedBy(MILLION).toFormat(0): 'Unavailable'

    return (
      <li>
        <span>{concept} (MUSD) </span>
        <span>
          {hasCurrent&&yoy ? `${formatVal} (${yoy})` : `${formatVal}`}
        </span>
      </li>
    )
  }
  var f = {}
  for (const e of facts){
    var yr = e.frame.slice(2,6)
    f[parseInt(yr)] = {...f[yr], [e['concept']]:e}
  }

  const cagr=(end, start, periods)=>{
    return Math.pow((end/start), (1/periods)) - 1
  }

  const YEARSPERIOD = 5
  const maxYr = Math.max(...Object.keys(f).map(e=>parseInt(e)))
  const current = f[maxYr]
  const previous = f[maxYr-1]
  var hasTminusPeriod= f.hasOwnProperty(maxYr-YEARSPERIOD)
  var hasTminusPeriodRevenue = hasTminusPeriod ? f[maxYr-YEARSPERIOD].hasOwnProperty('Revenues') : false
  var hasCurrentRevenue = current.hasOwnProperty('Revenues')
  var curRevenue = hasCurrentRevenue ? current.Revenues.val : NaN
  var minusPeriodRevenue = hasTminusPeriodRevenue ? f[maxYr-YEARSPERIOD].Revenues.val : NaN
  var cagrRevenue = (hasCurrentRevenue&&hasTminusPeriodRevenue) ? cagr(curRevenue,minusPeriodRevenue, YEARSPERIOD) : NaN

  return (
    <div id='factscomponent'>
      <h4>Annual Financial Performance</h4>
      <ul id='facts'>
        <li><span>{` `}</span>{maxYr}</li>
        {fact('EntityPublicFloat',current,previous, maxYr )}
        {fact('Revenues',current,previous, maxYr )}
        {fact('CostOfRevenue',current,previous, maxYr )}
        {fact('GrossProfit',current,previous, maxYr )}
        <li><span>{`CAGR ${YEARSPERIOD}yr  Revenue`}</span>{cagrRevenue ? `${(cagrRevenue * 100).toFixed(1)}%` : 'Unavailable'}</li>
      </ul>
    </div>
  );
};

export default CompanyFacts;