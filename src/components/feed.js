import React, { useState } from 'react'
import useCompanySearch from './useCompanySearch'
import { Col, Row, Table, Form } from 'react-bootstrap'
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'
import Loading from './loading';
import { Link } from 'react-router-dom'

export default function Feed() {
  const [filters, setFilters] = useState({})
  const { sectors, riskTypes, loadingMetadata } = useMetadata()
  const { companies, pagination, loadingCompanyData } = useCompanySearch(filters)
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
  const cols = [
    'name',
    'tickers',
    'sic_description',
    'regulatory_sentiment',
    'physical_sentiment',
    'opportunity_sentiment',
  ]

  return (
    <div>
      <Row className='my-2 px-3'>
        <ul className='py-0 px-0 browse-list'>
        {!loadingMetadata && sectors.map(e => { return (<li className='browse-item'><Link className='browse-item-link' onClick={(e) => { handleFilter(e, 'sector') }}>{e}</Link></li>) })}
        </ul>
      </Row>
      <Row>
        <Col>
          {loadingCompanyData && <Loading />}
          {!loadingCompanyData &&
            <div>
              <Table className=''>
                <thead className='card-title'>
                  <tr>
                    {cols.map(label => <th>{label}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
                </tbody>
              </Table>
              {paginator}
            </div>
          }
        </Col>
      </Row>
    </div>)
}