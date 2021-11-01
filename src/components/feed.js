import React, { useState } from 'react'
import useOrganizationSearch from './useOrganizationSearch'
import { Button, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import { Link } from 'react-router-dom'

export default function Feed() {
  const [filters, setFilters] = useState({})
  const { sectors, riskTypes, loadingMetadata } = useMetadata()
  const { companies, pagination, loadingCompanyData } = useOrganizationSearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)

  function handleFilter(event) {
    let filterName = event.target.value
    setFilters(prevState => {
      if (!prevState[filterName]) {
        return { ...prevState, [filterName]: true }
      } else {
        return { ...prevState, [filterName]: !prevState[filterName] }
      }
    })
  }

  const renderRow = (card) => {
    var color = card.has_disclosures ? "#90EE90" : "#D3D3D3"
    return (
      <Link className='profile-card' to={`/profiles/${card.company_name}`}>
        <Row className='my-3 py-4 px-3 pointer border border-card d-flex justify-content-between'>
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
            {card.company_name}
            {Object.entries(card.summary).map(([name, value]) => (<span> {name}, {value} </span>))}
            {card.category}
          </span>
        </Row>
      </Link >
    )
  }

  return (
    <div>
      {!loadingMetadata && sectors.map(e => { return <Button key={e} className='button-pill' onClick={handleFilter} value={e}>{e}</Button> })}
      {!loadingMetadata && riskTypes.map(e => { return <Button key={e} className='button-pill' onClick={handleFilter} value={e}>{e}</Button> })}
      {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
      {paginator}
    </div>
  )
}
