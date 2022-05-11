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

  const regex = /\d+/;

  function sentencesWithFacts(summary) {
    var s = summary
      .sort((a, b) => (a.start_idx > b.start_idx) ? 1 : -1)
      .filter(e => e.section === 'outlook' && (e.role !== 'operator'))
      .map(e => e.summary)
      .join(' ')
      .split(' . ')
      .filter(e => regex.test(e))
      .filter(e=>e.split(' ').length <40)
    return s
  }

  function sentencesWithCommentary(summary) {
    var s = summary
      .sort((a, b) => (a.start_idx > b.start_idx) ? 1 : -1)
      .filter(e => e.section === 'outlook' && (e.role !== 'operator'))
      .map(e => e.summary)
      .join(' ')
      .split(' . ')
      .filter(e => !regex.test(e))
      .filter(e=>e.split(' ').length <40)
    return s
  }

  var sentencesWithFacts = sentencesWithFacts(summary)
  var sentencesWithCommentary = sentencesWithCommentary(summary)

  console.log(sentencesWithCommentary)

  return (
    <div id='earnings'>
      <div id='two-col-frame'>
        <div className="summary-card">
          <h4>Key Facts</h4>
          <ul>
            {sentencesWithFacts
              .map(e => {
                return (<li>{e}</li>)
              }
              )}
          </ul>
        </div>
        <div className="summary-card">
          <h4>Top Comments</h4>
          <ul>
            {sentencesWithCommentary
              .map(e => {
                return (<li>{e}</li>)
              }
              )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EarningsSummary;