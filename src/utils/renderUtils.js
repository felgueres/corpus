
import { Link } from 'react-router-dom'
import { Button, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'


const renderRow = (card) => {
    var color = card.has_disclosures ? "#90EE90" : "#D3D3D3"
    return (
      <Link className='profile-card' to={`/profiles/${card.company_name}`}>
        <Row className='my-2 py-3 px-3 pointer border border-card d-flex justify-content-between'>
          <span>
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="button-tooltip-2">{card.has_disclosures ? "Has Disclosures" : "No Disclosures"}</Tooltip>}
            >
              {({ ref, ...triggerHandler }) => (
                <Button
                  variant="transparent"
                  {...triggerHandler}
                  className="d-inline-flex align-items-center"
                >
                  <svg ref={ref} height="18" width="18">
                    <circle cx="9" cy="9" r="3" stroke={color} strokeWidth="3" fill={color} />
                  </svg>
                </Button>
              )}
            </OverlayTrigger>
            <span className='button-divider' />
            <span className='card-company-name'>{card.company_name}</span>
            {/* {Object.entries(card.summary).map(([name, value]) => (<span> {name}, {value} </span>))} */}
            {card.category}
          </span>
        </Row>
      </Link >
    )
  }

export default renderRow;