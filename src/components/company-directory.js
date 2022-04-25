import React from 'react'
import useCategorySearch from './useCategorySearch'
import usePagination from './usePagination'
import { Link } from 'react-router-dom'
import SkeletonDirectory from '../skeletons/SkeletonDirectory'

export default function CompanyDirectory({ category }) {
  let categoryId = category.sic
  const { companies, pagination, loading } = useCategorySearch(categoryId)
  const { paginator, idx } = usePagination(categoryId, pagination)

  if (loading) {
    return (
      <div id='directory'>
        <SkeletonDirectory/>
      </div>
    )
  }
  let s = companies.length
  var col_count = 1
  if (s<30){col_count=1}else if (s<60){col_count=2}else{col_count=4}
  console.log(col_count)
  console.log(`cols-${col_count}`)

  return (
    <div id='directory' >
      <ul className={`cols-${col_count}`}>
        {companies
          .sort((a, b) => (a.name > b.name) ? 1 : -1)
          .slice(idx.startIdx,idx.endIdx)
          .map(c => { return <li key={c.cik}><Link to={`/organizations/${c.cik}`}>{c.name}</Link></li> })
        }
      </ul>
      {/* {paginator} */}
    </div >
  )
}