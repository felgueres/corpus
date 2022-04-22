import React from 'react'
import { CATEGORIESNAVBAR } from "../utils";
import { Navbar, Nav } from 'react-bootstrap';

const CategoriesBar =()=> {
  // Unpack subindustries
  const industriesMap = Object.entries(CATEGORIESNAVBAR).map(([, category],) => category.subindustries)
  let subs = []
  for (const e of industriesMap) {
    Object.entries(e).map(([, sub],) => subs.push(sub))
  }
  const navbarLink = (e) => {
    return (
        <Nav.Link id={e.sic_3d} href={`/categories/${e.urlName}`}>
          {`${e.humanReadable}`}
        </Nav.Link>
      )
  }
  return (
    <div id='industrybar'>
      <Navbar>
        {/* Sort and map to links */}
        <Nav>{subs.sort((a,b)=>(a.humanReadable>b.humanReadable)?1:-1).map(e => navbarLink(e))}</Nav>
      </Navbar>
    </div>
  )
}

export default CategoriesBar;