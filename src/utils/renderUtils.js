import { Link } from "react-router-dom";

const renderRow = (card) => {
  return (
    <li key={`${card.cik}`} style={{'textDecoration': 'None'}}>
      <Link to={`/organizations/${card.cik}`}>{card.name}</Link>
    </li>
  )
}

export default renderRow;
