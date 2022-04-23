import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { CATEGORIES } from "../utils";

const CategoriesBar =()=> {
  let c = Object.entries(CATEGORIES).map(([,v],)=>v)
  const navbarLink = (e) => {
    return (
        <Nav.Link key={e.sic} href={`/categories/${e.url}`}>
          {`${e.humanReadable}`}
        </Nav.Link>
      )
  }
  return (
    <div id='industrybar'>
      <Navbar>
        {/* Sort and map to links */}
        <Nav>{c.sort((a,b)=>(a.humanReadable>b.humanReadable)?1:-1).map(e => navbarLink(e))}</Nav>
      </Navbar>
    </div>
  )
}

export default CategoriesBar;