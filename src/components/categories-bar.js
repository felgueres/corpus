import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const NAVS = [['supply', 'Supply Chains'], ['manufacturing', 'Manufacturing'],
['demand', 'Demand'], , ['risk', 'Risks'],
['fact', 'Insights'], ['climate', 'Climate'], ['cyber', 'Cyber'],
['competition', 'Competition'], ['material', 'Raw Materials']]

const CategoriesBar = () => {

  const navbarLink = (v, n) => {
    return (
      <Nav.Link key={v}>
        {n}
      </Nav.Link>
    )
  }
  return (
    <div id='categories'>
      <Navbar>
        {/* Sort and map to links */}
        <Nav>
          {NAVS.map(([v, n]) => navbarLink(v, n))}
        </Nav>
      </Navbar>
    </div>
  )
}

export default CategoriesBar;