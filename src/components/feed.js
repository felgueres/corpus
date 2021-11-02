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
      <Row className='my-3'>
        <Col md={8} className='px-0'>
          <ul id="feed" className="px-0">
            {loadingCompanyData && <div>Loading</div>}
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
                In the near-future, lending capital will only be available to organizations with a strategy towards carbon net zero.                
                <br/>
                <hr/>
                ClimateDisclosures is a company-level database of climate-related risks and opportunities.
                <br/>
                It helps investors, creditors, underwriters and entrepreneurs to identify risks & opportunities to decarbonize US listed companies. 
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
                <span className='card-title'>Filter by risk types</span>
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
