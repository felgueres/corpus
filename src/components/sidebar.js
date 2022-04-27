import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { CATEGORIES } from "../utils";

const SideBar = () => {
  let c = Object.entries(CATEGORIES).map(([, v],) => v)
  const navbarLink = (e) => {
    return (
      <Nav.Link key={e.sic}>
        {`${e.humanReadable}`}
      </Nav.Link>
    )
  }
  return (
    <div id='sidebar'>
      <Navbar>
        <Nav className='flex-column'>
          {c.sort((a, b) => (a.humanReadable > b.humanReadable) ? 1 : -1)
            .map(e => navbarLink(e))}
        </Nav>
      </Navbar>
    </div>
  )
}

export default SideBar;