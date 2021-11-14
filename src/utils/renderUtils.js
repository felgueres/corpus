import { Link } from 'react-router-dom'
import { BsChevronCompactUp, BsDashLg } from 'react-icons/bs'

const renderRow = (card) => {
  const gradientPlot = (data, exposureType) => {
    // let total = Object.values(data).reduce((a, b) => a + b, 0)
    // let exposure = Math.floor((data[exposureType] / total) * 100 / 25)
    let exposure = data[exposureType]
    // if (exposure > 0 && exposure < 1) {
    //   exposure = 1
    // }
    console.log(exposureType, exposure)
    switch (true) {
      case (exposure === 1):
        return <td style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}><BsChevronCompactUp size={25} color={exposureType === 'opportunity' ? '#6aa84f' : '#ff9900'} /></td>
      case (exposure === 2):
        return <td style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}><BsChevronCompactUp size={25} color={exposureType === 'opportunity' ? '#6aa84f' : '#ff9900'} /></td>
      case (exposure === 3):
        return <td style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}><BsChevronCompactUp size={25} color={exposureType === 'opportunity' ? '#6aa84f' : '#ff9900'} /></td>
      case (exposure >= 4):
        return <td style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}><BsChevronCompactUp size={25} color={exposureType === 'opportunity' ? '#6aa84f' : '#cc0000'} /></td>
      default: return <td style={{ 'textAlign': 'center', 'verticalAlign': 'middle' }}><BsDashLg size={10} /></td>
    }
  }
  return (
    <tr style={{ 'fontSize': '11px' }}>
      <td><Link to={`/profiles/${card.company_name}`}>{card.company_name}</Link></td>
      <td>{card.category}</td>
      {['regulation', 'physical', 'opportunity'].map((exposureType) => gradientPlot(card.summary, exposureType))}
    </tr>
  )
}

export default renderRow;
