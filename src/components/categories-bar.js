import React from 'react'
import { Nav } from 'react-bootstrap';

const CategoriesBar = ({organizationId}) => {
  const url = window.location.pathname;
  return (
    <div>
      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link className={`${url.startsWith('/earnings/')?'active':''}`} href={`/earnings/${organizationId}`}>Earnings Calls</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className={`${url.startsWith('/filings/')?'active':''}`} href={`/filings/${organizationId}`}>SEC Filings</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default CategoriesBar;