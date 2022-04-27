import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import useDirectory from './useDirectory';
import { CATEGORIES } from '../utils';

const SideBar = () => {
  const { companies, loading } = useDirectory()
  const navbarLink = (e) => {
    return (
      <Nav.Link key={e.cik} href={`/organizations/${e.cik}`}>
        {`${e.name}`}
      </Nav.Link>
    )
  }

  return (
    <div id='sidebar'>
      <Navbar>
        <Nav className='flex-column'>
          <h4>{CATEGORIES.aircraft.humanReadable}</h4>
          {!loading && companies.filter(e => e.sic_3 === CATEGORIES.aircraft.sic || e.sic_3 === CATEGORIES.space.sic).map(e=> navbarLink(e) )}
          <br/>
          <h4>{CATEGORIES.motorVehicles.humanReadable}</h4>
          {!loading && companies.filter(e => e.sic_3 === CATEGORIES.motorVehicles.sic).map(e=> navbarLink(e) )}
          <br/>
          <h4>{CATEGORIES.electronics.humanReadable}</h4>
          {!loading && companies.filter(e => e.sic_3 === CATEGORIES.electronics.sic).map(e=> navbarLink(e) )}
        </Nav>
      </Navbar>
    </div>
  )
}

export default SideBar;