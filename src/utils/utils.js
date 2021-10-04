const matchCounter = (text, regex) => {
    if (text.toLowerCase().match(regex)) {
      return (text.toLowerCase().match(regex).length)
    } else {
      return 0
    }
  }

const getStats = (data) => {

if (typeof data === 'undefined') {
    return <span>Nothing yet.</span>
}
var disclosures = data.disclosures
var climateMention = 0
var ghgMention = 0
var climateRiskMention = 0
var weatherMention = 0
var materialMention = 0
var physicalEffectsMention = 0
var regulationRiskMention = 0
var financialRiskMention = 0
for (var y in disclosures) {
    if (disclosures[y]['disclosure'].length > 0) {
    for (var i = 0; i < disclosures[y]['disclosure'].length; i++) {
        var line = disclosures[y]['disclosure'][i];
        climateMention += matchCounter(line, /\bclimate change\b/g)
        ghgMention += matchCounter(line, /\bghg\b/g)
        ghgMention += matchCounter(line, /\bgreenhouse\b/g)
        climateRiskMention += matchCounter(line, /\bclimate risk\b/g)
        weatherMention += matchCounter(line, /\bextreme weather\b/g)
        weatherMention += matchCounter(line, /\bweather\b/g)
        materialMention += matchCounter(line, /\bmaterial impact\b/g)
        physicalEffectsMention += matchCounter(line, /\bphysical effects\b/g)
        regulationRiskMention += matchCounter(line, /\bregulation\b/g)
        regulationRiskMention += matchCounter(line, /\bregulatory\b/g)
        regulationRiskMention += matchCounter(line, /\bcompliance\b/g)
        financialRiskMention += matchCounter(line, /\bfinancial\b/g)
        financialRiskMention += matchCounter(line, /\boperational cost\b/g)
        financialRiskMention += matchCounter(line, /\boperating cost\b/g)
        financialRiskMention += matchCounter(line, /\bcost of operation\b/g)
    }
    }
}
return (
    <div>
    {climateRiskMention > 0 && <span>Climate risk: {climateRiskMention} <br /></span>}
    {climateMention > 0 && <span>Climate change: {climateMention} <br /></span>}
    {ghgMention > 0 && <span>Greenhouse gases: {ghgMention}<br /></span>}
    {materialMention > 0 && <span>Material impact: {materialMention}<br /></span>}
    {weatherMention > 0 && <span>Severe weather: {weatherMention}<br /></span>}
    {physicalEffectsMention > 0 && <span>Physical risk: {physicalEffectsMention}<br /></span>}
    {regulationRiskMention > 0 && <span>Regulation risk: {regulationRiskMention}<br /></span>}
    {financialRiskMention > 0 && <span>Financial risk: {financialRiskMention}<br /></span>}
    </div>
)
}