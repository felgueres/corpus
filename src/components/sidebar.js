import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import useDirectory from './useDirectory';
import CATEGORIES from '../utils/constants';
import SkeletonSidebar from '../skeletons/SkeletonSidebar';


const SideBar = () => {
  const { companies, loading } = useDirectory()
  const url = window.location.pathname;
  const organizationId = url.startsWith('/organizations/')?url.split('/organizations/')[1]:''
  console.log(organizationId)

  const navbarLink = (e) => {
    return (
      <Nav.Link className={`${e.cik===organizationId?'active':''}`} key={e.cik} href={`/organizations/${e.cik}`}>
        {`${e.name}`}
      </Nav.Link>
    )
  }
  if(loading){
    return (
    <div id='sidebar'>
      <Navbar>
        <Nav className='flex-column'>
          <h4>{CATEGORIES.aircraft.humanReadable}</h4>
          <SkeletonSidebar/>
          <br/>
          <h4>{CATEGORIES.motorVehicles.humanReadable}</h4>
          <SkeletonSidebar/>
          <br/>
          <h4>{CATEGORIES.electronics.humanReadable}</h4>
          <SkeletonSidebar/>
        </Nav>
      </Navbar>
    </div>
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