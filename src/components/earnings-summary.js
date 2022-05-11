import React from "react";
import useSummary from "./useSummary";
import SkeletonProfile from "../skeletons/SkeletonProfile";
import CategoriesBar from "./categories-bar";
import { Navbar, Nav } from "react-bootstrap";

const EarningsSummary = ({ organizationId }) => {
  const { summary, loading } = useSummary(organizationId)

  if (loading) {
    return (<SkeletonProfile />)
  }

  return (
    <div id='earnings'>
      <div id='two-cols-variant'>
        <div>
          <Navbar>
            <Nav className='flex-column'>
              <h4>Q1 2022</h4>
            </Nav>
          </Navbar>
        </div>
        <div>
          {summary.sort((a, b) => (a.start_idx > b.start_idx) ? 1 : -1).filter(e => e.section === 'outlook' && (e.role !== 'operator')).map(e => { return (<div><br/>{e.role}<br/> <br/>{e.summary}</div>) })}
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;