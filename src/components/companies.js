import React, { useState } from 'react'
import useCompanySearch from './useCompanySearch'
import usePagination from './usePagination'
import useEscape from "./useEscape";
import renderRow from '../utils/renderUtils'

export default function Feed() {
  const [browseIndustry, setBrowseIndustry] = useState(false)
  const { companies, pagination, loadingCompanyData } = useCompanySearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)
  useEscape(() => setisBrowseVisible(false))

// setting the filter state change fetches items from server 
  function handleFilter(filter, filterType) {
    setFilters({
      [filterType]: {
        [filter]: true
      }
    })
    setBrowseIndustry({
      'sic_2d': String(filter).slice(0, 2),
      'sic_3d': String(filter)
    })
  }


  if (loadingCompanyData) {
    return (
      <div>packets</div>
    )
  }

  return (
    <div>
        {!loadingCompanyData &&
          <ul id='companiesnav'>
            {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          </ul>
        }
    </div >
  )
}
