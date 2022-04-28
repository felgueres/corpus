import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div id="two-col-frame">
      <div id='homecopy'>
        <p>American Machina is a tool to understand what sucks in American Industrials, specifically Aerospace, Automotive, and Semiconductors.</p>
        <p>A lot has being <a href="htts://google.com" target="_blank">said</a> about the need to revamp the industrial base but there's a need these words into translate into tractable problems. </p>
        <p><strong>Effectively, what needs to be built faster, better, and at home?</strong></p>
        <p>
          This V0 has company-level risks and opportunities from top public companies by market cap, taken from their annual investor reports.
        </p>
        {/* <p>1. How can we better forecast supply and demand?</p>
        <p>2. How to diversify one-of-one suppliers?</p>
        <p>3. How to secure critical technology materials?</p>
        <p>4. What data streams are useful but not yet available?</p>
        <p>5. What components and parts should we be reshoring now?</p>
        <p>6. What are we over relying on from offshore manufacturing?</p> */}
      </div>
    </div>
  );
};

export default Home;
