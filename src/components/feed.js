import React, { useState, useEffect } from 'react'
import useCompanySearch from './useCompanySearch'
import { Col, Row } from 'react-bootstrap'
import useMetadata from './useMetadata'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'
import Loading from './loading';
import { Link } from 'react-router-dom'
import useEscape from './useEscape'

export default function Feed() {
  const [filters, setFilters] = useState(false)
  const { sectors, riskTypes, loadingMetadata } = useMetadata()
  const { companies, pagination, loadingCompanyData } = useCompanySearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)
  const [isBrowseVisible, setisBrowseVisible] = useState(false)

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

  useEscape(() => setisBrowseVisible(false))

  return (
    // {/* <Row className="browse-row"> */ }
    // {/* </Row> */ }
    // {/* <Row className='my-2 px-3'>
    //       <ul className='py-0 px-0 browse-list'>
    //         {!loadingMetadata && sectors.map(e => { return (<li className='browse-item'><Link className='browse-item-link' onClick={(e) => { handleFilter(e, 'sector') }}>{e}</Link></li>) })}
    //       </ul>
    //     </Row> */}
    // {/* <Row> */ }
    // {/* <Col>
    //         {loadingCompanyData && <Loading />}
    //         {!loadingCompanyData &&
    //           <div>
    //             <tbody>
    //               {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
    //             </tbody>
    //             {paginator}
    //           </div>
    //         }
    //       </Col> */}
    // {/* </Row> */ }
    <div id='navigation'>
      <ul id='homenav'>
        <li className={`browseNav expandable ${isBrowseVisible ? "on" : ""}`} >
          <a data-body='categoriesNavigation' onClick={() => { setisBrowseVisible(!isBrowseVisible) }} role='button' aria-expanded={`${isBrowseVisible}`}>
            <span style={{ 'paddingLeft': '16px' }}>Browse by Industry</span>
            <span style={{ 'fontSize': '6px' }}> ◢</span>
          </a>
          <ul id='categoriesNavigation' className='taxonomyNavigation'>
            {!loadingMetadata && sectors.map(e => { return (<li className='browse-item'><Link className='browse-item-link' onClick={(e) => { handleFilter(e, 'sector') }}>{e}</Link></li>) })}
          </ul>
        </li>
      </ul>
    </div>
  )
}