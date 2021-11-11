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

  const feedHeader = 
  (
    <li className='p-3 header-title bg-light'>
      Explore Companies
    </li>
  )

  return (
    <div>
      <Row className='my-3'>
        <Col md={8} className='px-0'>
          <ul id="feed" className="px-0">
            {loadingCompanyData && <div>Loading</div>}
            {!loadingCompanyData && feedHeader}
            {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          </ul>
          {!loadingCompanyData && paginator}
        </Col>
        <Col>
          <Row className='ml-2'>
            <ul id="sidebar">
              <li className='bg-light p-2'>
                <span className='card-title'>What is ClimateDisclosures?</span>
              </li>
              <li className='p-2'>
                <span className='card-main'>
                ClimateDisclosures is a company-level database of climate risk and opportunities.
                It helps sift through exposures related to opportunity, physical damages and regulatory shocks associated to climate change.
                <br/>
                The source of data is annual financial disclosures filed to the SEC.
                </span>
              </li>
            </ul>
          </Row>
          <Row className='ml-2 my-1'>
            <ul id="sidebar">
              <li className='bg-light p-2'>
                <span className='card-title'>Filter by sector</span>
              </li>
              <li className='p-2'>
                {!loadingMetadata && sectors.map(e => { return (<Fragment><Button key={e} className={`button-pill ${filters[e] ? 'active-filter' : null}`} onClick={handleFilter} value={e}>{e} {`${filters[e] ? '✕' : ''}`} </Button> <span className='button-divider' /></Fragment>) })}
              </li>
            </ul>
          </Row>
          <Row className='ml-2 my-1'>
            <ul id="sidebar">
              <li className='bg-light p-2'>
                <span className='card-title'>Filter by climate change exposure </span>
              </li>
              <li className='p-2'>
                {!loadingMetadata && riskTypes.map(e => { return (<Fragment><Button key={e} className={`button-pill ${filters[e] ? 'active-filter' : null}`} onClick={handleFilter} value={e}>{e} {`${filters[e] ? '✕' : ''}`} </Button> <span className='button-divider' /></Fragment>) })}
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </div>
  )
}
