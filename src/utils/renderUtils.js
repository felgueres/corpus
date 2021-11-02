
import { Link } from 'react-router-dom'
import { Row, Button, OverlayTrigger, Tooltip, Col } from 'react-bootstrap'

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const renderRow = (card) => {
  var color = card.has_disclosures ? "#90EE90" : "#D3D3D3"
  const gradientPlot = (data, exposureType) => {
    let total = Object.values(data).reduce((a, b) => a + b, 0)
    let exposure = (data[exposureType] / total) * 100
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
          <Row className='climate-risk-gradient' style={{ 'width': `${exposure}%`, 'fontSize': '10px', color: 'transparent' }}>{exposure}</Row>
        </Col>
      </Row>

    )
  }

  function tooltip(color, card) {
    return <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="button-tooltip-2">{card.has_disclosures ? "Has Disclosures" : "No Disclosures"}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="transparent"
          {...triggerHandler}
          className="d-inline-flex align-items-center"
        >
          <span>
            <svg ref={ref} height="18" width="18">
              <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="3" fill={color} />
            </svg>
            <span style={{'fontSize':'10px'}}>{card.has_disclosures ? "Has disclosures" : "No disclosures yet"}</span>
          </span>
        </Button>
      )}
    </OverlayTrigger>
  }

  return (
    <li className='py-3 px-3'>
      <Link to={`/profiles/${card.company_name}`} className='text-decoration-none'>
        <Row>
          <Col>
            <Row>
              <Col>
                <a className='header-title'>{card.company_name}</a>
                <span className="button-divider" />
              </Col>
            </Row>
            <Row>
              <Col>
                {tooltip(color, card)}
                <Button className='button-pill category'>{card.category}</Button>
              </Col>
            </Row>
          </Col>
          <Col xs={3} className='mx-4'>
            <Row style={{ 'color': 'black', 'fontSize': '12px', 'fontWeight': '600' }}>Climate Exposure</Row>
            <Row>
              <Col className='p-0'>
                {gradientPlot(card.summary, 'regulation')}
                {gradientPlot(card.summary, 'physical')}
                {gradientPlot(card.summary, 'opportunity')}
              </Col>
            </Row>
          </Col>
        </Row>
      </Link >
    </li>
  )
}

export default renderRow;
