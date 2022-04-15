import { Link } from 'react-router-dom'

const cols = [
'tickers',
'sicDescription',
'regulatory_sentiment',
'physical_sentiment',
'opportunity_sentiment',
]

const renderRow = (card) => {
  return (
    <tr style={{ 'fontSize': '11px' }}>
      <td><Link to={`/profiles/${card.name}`}>{card.name}</Link></td>
      {cols.map(label => <td>{card[label]}</td>)}
      <td>{card.exchanges}</td>
    </tr>
  )
}

export default renderRow;
