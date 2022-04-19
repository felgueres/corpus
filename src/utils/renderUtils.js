

const renderRow = (card) => {
  return (
    <li>
      <a to={`/profiles/${card.name}`}>{card.name}</a>
    </li>
  )
}

export default renderRow;
