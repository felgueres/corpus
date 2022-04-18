import { Link } from 'react-router-dom'

const cols = [
'tickers',
'sicDescription',
'regulatory_sentiment',
'physical_sentiment',
'opportunity_sentiment',
]
// Card has name, exchanges, tickers, etc as propertirs

const renderRow = (card) => {
  return (
    <li>
      <a to={`/profiles/${card.name}`}>{card.name}</a>
    </li>
  )
}

export default renderRow;
