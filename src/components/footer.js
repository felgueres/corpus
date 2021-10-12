import React from "react";
import { Container } from "react-bootstrap";
import { BsTwitter } from 'react-icons/bs';

const Footer = () => (
  <div className='shadow-sm bg-white'>
    <Container>
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-5 border-top bg-white">
      <div className="col-md-11 d-flex align-items-center">
        <span><strong className="navbar-font">ClimateDisclosures</strong> helps investors quickly screen climate-related financial disclosures.</span>
      </div>
      <ul className="col-md-1 justify-content-end list-unstyled d-flex">
        <li className="px-3"><a href="https://twitter.com/getclimatecap"><BsTwitter/></a></li>
      </ul>
    </footer>
    </Container>
  </div >
)
;

export default Footer;
