import { Link } from 'react-router-dom'
import { BsChevronCompactUp, BsDashLg} from 'react-icons/bs'

const renderRow = (card) => {
  const gradientPlot = (data, exposureType) => {
    let total = Object.values(data).reduce((a, b) => a + b, 0)
    let exposure = Math.floor((data[exposureType] / total) * 100 / 25)
    if (exposure > 0 && exposure < 1) {
      exposure = 1
    }
    if (!exposure || !total) {
      return (
        <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsDashLg size={10}/></td>
      )
    }
    switch (exposure) {
      case 1:
        return <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsChevronCompactUp size={25} color='#ff9900'/></td>
      case 2:
        return <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsChevronCompactUp size={25} color='#ff9900'/></td>
      case 3:
        return <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsChevronCompactUp size={25} color='#cc0000'/></td>
      case 4:
        return <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsChevronCompactUp size={25} color='#cc0000'/></td>
      default: <td style={{ 'textAlign': 'center', 'verticalAlign':'middle'}}><BsDashLg size={10}/></td>
    }
  }
  return (
    <tr style={{ 'fontSize': '11px'}}>
      <td><Link to={`/profiles/${card.company_name}`}>{card.company_name}</Link></td>
      <td>{card.category}</td>
      {['regulation', 'physical', 'opportunity'].map((exposureType) => gradientPlot(card.summary, exposureType))}
    </tr>
  )
}

export default renderRow;
