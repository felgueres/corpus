import React, { useState } from 'react'
import useOrganizationSearch from './useOrganizationSearch'
import { Col, Row, Table, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'

export default function Feed() {
  const [filters, setFilters] = useState({})
  const { sectors, riskTypes, loadingMetadata } = useMetadata()
  const { companies, pagination, loadingCompanyData } = useOrganizationSearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)
  function handleFilter(event, filterType) {
    let filterName = event.target.id
    setFilters(prevState => {
      if (prevState[filterType] && prevState[filterType][filterName]) {
        return {
          ...prevState,
          [filterType]: {
            ...prevState[filterType], [filterName]: !prevState[filterType][filterName]
          }
        }
      }
      else
        return {
          ...prevState,
          [filterType]: {
            ...prevState[filterType], [filterName]: true
          }
        }
    })
    event.target.blur()
  }

  return (
    <Row>
      <Col xs={3}>
        <Row><span className='card-title'>Filters & Sort</span></Row>
        <Row><span className='card-title'>Sector</span></Row>
        <Row>
          <Form>
            <div key='default-checkbox'>
              {!loadingMetadata && sectors.map(e => { return (<Form.Check style={{ 'fontSize': '15px' }} type='checkbox' id={e} onChange={(e) => { handleFilter(e, 'sector') }} label={e}></Form.Check>) })}
            </div>
          </Form>
        </Row>
        <br />
        <Row><span className='card-title'>Exposure Type</span></Row>
        <Row>
          <Form>
            <div key='default-checkbox'>
              {!loadingMetadata && riskTypes.map(e => { return (<Form.Check style={{ 'fontSize': '15px' }} type='checkbox' id={e} onChange={(e) => { handleFilter(e, 'risk_type') }} label={e}></Form.Check>) })}
            </div>
          </Form>
        </Row>
        <br />
        <Row><span className='card-title'>Sentiment</span></Row>
        <Row>
          <Form>
            <div key='default-checkbox'>
              {!loadingMetadata && ["Low", "Med", "High"].map(e => { return (<Form.Check style={{ 'fontSize': '15px' }} type='checkbox' id={e} onChange={(e) => { handleFilter(e, 'sentiment') }} label={e}></Form.Check>) })}
            </div>
          </Form>
        </Row>
        <Row><Link>feedback/contact</Link></Row>
      </Col>
      <Col>
        <Table>
          <thead className='card-title'>
            <tr>
              <th>Company</th>
              <th>Sector</th>
              {['Regulation', 'Physical', 'Opportunity'].map(label => <th>{label}</th>)}
            </tr>
          </thead>
          <tbody>
            {loadingCompanyData && <div>Loading</div>}
            {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          </tbody>
        </Table>
        {!loadingCompanyData && paginator}
      </Col>
    </Row>
  )
}