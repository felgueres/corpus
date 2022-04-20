import React from "react";
import useOrganizationFacts from "./useOrganizationFacts";
import BigNumber from "bignumber.js";

const CompanyFacts = ({ organizationId }) => {
  const { organizationFacts, loadingCompanyFacts } = useOrganizationFacts(organizationId)

  if (loadingCompanyFacts || organizationFacts.length <1) {
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
    
    if(hasCurrent&&hasPrevious&&curVal>0&&previousVal>0){
      var yoy = ((curVal/previousVal- 1) * 100).toFixed(1) + '%'}
    else{
      var yoy = false
    }

    const MILLION = 1000000
    var formatVal = hasCurrent ? BigNumber(curVal).dividedBy(MILLION).toFormat(0): '--'

    return (
      <li>
        <span>{concept} ({curYear}) (MUSD):</span>
        <span>
          {hasCurrent&&yoy ? `${formatVal} (${yoy})` : `${formatVal}`}
        </span>
      </li>
    )
  }
  var facts = {}
  for (const e of organizationFacts){
    var yr = e.frame.slice(2,6)
    facts[parseInt(yr)] = {...facts[yr], [e['concept']]:e}
  }

  const cagr=(end, start, periods)=>{
    return Math.pow((end/start), (1/periods)) - 1
  }

  const YEARSPERIOD = 5
  const maxYr = Math.max(...Object.keys(facts).map(e=>parseInt(e)))
  const current = facts[maxYr]
  const previous = facts[maxYr-1]
  var hasTminusPeriod= facts.hasOwnProperty(maxYr-YEARSPERIOD)
  var hasTminusPeriodRevenue = hasTminusPeriod ? facts[maxYr-YEARSPERIOD].hasOwnProperty('Revenues') : false
  var hasCurrentRevenue = current.hasOwnProperty('Revenues')
  var curRevenue = hasCurrentRevenue ? current.Revenues.val : NaN
  var minusPeriodRevenue = hasTminusPeriodRevenue ? facts[maxYr-YEARSPERIOD].Revenues.val : NaN
  var cagrRevenue = (hasCurrentRevenue&&hasTminusPeriodRevenue) ? cagr(curRevenue,minusPeriodRevenue, YEARSPERIOD) : NaN

  return (
    <div id='profilesummary'>
      <h4>Company Facts</h4>
      <ul id='company-facts'>
        {fact('EntityPublicFloat',current,previous, maxYr )}
        {fact('Revenues',current,previous, maxYr )}
        {fact('CostOfRevenue',current,previous, maxYr )}
        {fact('GrossProfit',current,previous, maxYr )}
        <li><span>{`CAGR ${YEARSPERIOD}yr  Revenue`}</span>{cagrRevenue ? `${(cagrRevenue * 100).toFixed(1)}%` : '--'}</li>
      </ul>
    </div>
  );
};

export default CompanyFacts;