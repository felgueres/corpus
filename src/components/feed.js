import React, { useState } from 'react'
import useCompanySearch from './useCompanySearch'
import usePagination from './usePagination'
import renderRow from '../utils/renderUtils'
import { CATEGORIESNAVBAR } from "../utils";
import { Link } from "react-router-dom";
import useEscape from "./useEscape";

export default function Feed() {
  const [filters, setFilters] = useState(false)
  const [browseIndustry, setBrowseIndustry] = useState(false)
  const { companies, pagination, loadingCompanyData } = useCompanySearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)
  const [isBrowseVisible, setisBrowseVisible] = useState(false)
  useEscape(() => setisBrowseVisible(false))

  function handleFilter(event, filterType) {
    let filterName = event.target.id
    setisBrowseVisible(false)
    setFilters({
      [filterType]: {
        [filterName]: true
      }
    })
    setBrowseIndustry({
      'sic_2d': String(filterName).slice(0, 2),
      'sic_3d': String(filterName)
    })
  }

  const getCategoryItems = (idx, category) => {
    return (
      <li>
        <span className="dropdown-category">{category.humanReadable}</span>
        {Object.entries(category.subindustries).map(([k, subindustry],) => { return (<li key={k} className='browse-item'><Link id={k} onClick={(e) => { handleFilter(e, 'sic_3') }} className='browse-item-link'>{`${subindustry.humanReadable}`}</Link></li>) })}
      </li>
    )
  }

  return (
    <div>
      <div className='grid-container dropdown'>
        <button className="dropbtn" onClick={() => setisBrowseVisible(!isBrowseVisible)}>
          <span style={{ 'paddingLeft': '16px' }}>Browse by Industry</span>
          <span style={{ 'fontSize': '6px' }}> ◢</span>
        </button>
        <ul className={`dropdown-content ${isBrowseVisible ? 'isActive' : ''}`}>
          {Object.entries(CATEGORIESNAVBAR).map(([idx, category],) => getCategoryItems(idx, category))}
        </ul>
      </div>

      <section className='browseTitle'>
        {!browseIndustry && `Browse`}
        {browseIndustry && ` ${CATEGORIESNAVBAR[browseIndustry.sic_2d].humanReadable} / ${CATEGORIESNAVBAR[browseIndustry.sic_2d].subindustries[browseIndustry.sic_3d].humanReadable}`}
        {paginator}
      </section>
      <section>
        {!loadingCompanyData &&
          <ul id='companiesnav'>
            {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          </ul>
        }
      </section>
    </div >
  )
}