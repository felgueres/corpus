
import { Link } from 'react-router-dom'
import { Row, Button, Col } from 'react-bootstrap'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function status(color, card) {
  return (
    <Button variant="transparent">
      <span>
        <svg height="18" width="18">
          <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="3" fill={color} />
        </svg>
        <span style={{ 'fontSize': '10px' }}>{card.has_disclosures ? "Has disclosures" : "No disclosures"}</span>
      </span>
    </Button>)
}

const renderRow = (card) => {
  var color = card.has_disclosures ? "#00b171" : "#D3D3D3"
  
  const gradientPlot = (data, exposureType) => {
    let total = Object.values(data).reduce((a, b) => a + b, 0)
    console.log(card.company_name,exposureType,data[exposureType])
    
    let exposure = Math.floor((data[exposureType] / total) * 100 /25)*25
    console.log(exposure)
    if(exposure>0&&exposure<25){
      exposure=25
    }
    if (!exposure || !total) {
      return (
        <Row className='my-1'>
          <Col style={{ 'fontSize': '10px', 'color': 'black' }}>{capitalizeFirstLetter(exposureType)}</Col>
          <Col>
            <Row className='null-gradient' style={{ 'color': 'transparent', 'fontSize': '10px', 'width': '100%' }}>na</Row>
          </Col>
        </Row>
      )
    }

    return (
      <Row className='my-1'>
        <Col style={{ 'fontSize': '10px', 'color': 'black' }}>{capitalizeFirstLetter(exposureType)}</Col>
        <Col>
          <Row className='climate-risk-gradient' style={{ 'width': `${exposure}%`, 'fontSize': '10px', color: 'black' }}>{exposure}</Row>
        </Col>
      </Row>

    )
  }



  return (
    <li className='py-2 px-3'>
      <Link to={`/profiles/${card.company_name}`} className='text-decoration-none'>
        <Row>
          <Col>
            <Row className='pb-2'>
              <Col>
                <a className='header-title'>{card.company_name}</a>
              </Col>
            </Row>
            <Row>
              <Col>
                {status(color, card)}
                <Button className='button-pill category'>{card.category}</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={3} className='mx-4'>
            <Row style={{ 'color': 'black', 'fontSize': '12px', 'fontWeight': '600' }}>Climate Exposure</Row>
            <Row>
              <Col className='p-0'>
                {['regulation', 'physical', 'opportunity'].map((exposureType) => gradientPlot(card.summary, exposureType))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Link >
    </li>
  )
}

export default renderRow;
