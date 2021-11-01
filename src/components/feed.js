import React, { useState } from 'react'
import useOrganizationSearch from './useOrganizationSearch'
import { Button, Col, Row } from 'react-bootstrap'
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'
import { Fragment } from 'react'

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
    event.target.blur() //Removes focus 
  }

  return (
    <div>
      <Row>
        <Col>
          <Row className='my-1'>{!loadingMetadata && sectors.map(e => { return ( <Fragment><Button key={e} className={`button-pill ${filters[e] ? 'active-filter' : null}`}  onClick={handleFilter} value={e}>{e}</Button> <span className='button-divider' /></Fragment>) })}</Row>
          <Row className="my-1">{!loadingMetadata && riskTypes.map(e => { return ( <Fragment><Button key={e} className='button-pill' onClick={handleFilter} value={e}>{e}</Button> <span className='button-divider' /></Fragment>) })}</Row>
        </Col>
      </Row>
      <Row>
        <Col>
          {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          {paginator}
        </Col>
      </Row>
    </div>
  )
}
