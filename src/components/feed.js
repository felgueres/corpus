import React, { useState } from 'react'
import useCompanySearch from './useCompanySearch'
import usePagination from './usePagination'
import { CATEGORIESNAVBAR } from "../utils";
import useEscape from "./useEscape";
import { Navbar, Nav } from 'react-bootstrap';
import renderRow from '../utils/renderUtils'

export default function Feed() {
  const [filters, setFilters] = useState(false)
  const [browseIndustry, setBrowseIndustry] = useState(false)
  const { companies, pagination, loadingCompanyData } = useCompanySearch(filters)
  const { paginator, idx } = usePagination(filters, pagination)
  const [isBrowseVisible, setisBrowseVisible] = useState(false)
  useEscape(() => setisBrowseVisible(false))

// setting the filter state change fetches items from server 

  function handleFilter(filter, filterType) {
    console.log(filter)
    setisBrowseVisible(false)
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

  // Unpack subindustries
  const industriesMap = Object.entries(CATEGORIESNAVBAR).map(([, category],) => category.subindustries)
  let subs = []
  for (const e of industriesMap) {
    Object.entries(e).map(([, sub],) => subs.push(sub))
  }

  const navbarLink = (e) => {
    return (
      <span>
        <Nav.Link id={e.sic_3d} href={`/${e.urlName}`}>
          {`${e.humanReadable}`}
        </Nav.Link>
      </span>)
  }

  return (
    <div>
      <div id='industrybar'>
        <Navbar bg="white">
            <Nav>
              {subs.map(e => navbarLink(e))}
            </Nav>
        </Navbar>
      </div>

      <div>
        {!loadingCompanyData &&
          <ul id='companiesnav'>
            {!loadingCompanyData && Object.entries(companies).map(([, entry]) => entry).slice(idx.startIdx, idx.endIdx).map(card => (renderRow(card)))}
          </ul>
        }
      </div>
    </div >
  )
}
      // <section className='browseTitle'>
      //   {!browseIndustry && `Browse`}
      //   {browseIndustry && ` ${CATEGORIESNAVBAR[browseIndustry.sic_2d].humanReadable} / ${CATEGORIESNAVBAR[browseIndustry.sic_2d].subindustries[browseIndustry.sic_3d].humanReadable}`}
      //   {paginator}
      // </section>