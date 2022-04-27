import React from 'react'
import useCategorySearch from './useCategorySearch'
import { Link } from 'react-router-dom'
import SkeletonDirectory from '../skeletons/SkeletonDirectory'

export default function CompanyDirectory({ category }) {
  let categoryId = category.sic
  const { companies, loading } = useCategorySearch(categoryId)

  if (loading) {
    return (
      <div id='directory'>
        <SkeletonDirectory/>
      </div>
    )
  }

  return (
    <div id='directory' >
      <ul>
        {companies
          .sort((a, b) => (a.name > b.name) ? 1 : -1)
          .map(c => { return <li key={c.cik}><Link to={`/organizations/${c.cik}`}>{c.name}</Link></li> })
        }
      </ul>
    </div >
  )
}