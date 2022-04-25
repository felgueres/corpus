import React from "react";

export const Home = ({ match }) => {
  return (
    <div id="homeview">
      <div>
        <h4>What is American Machina? </h4>
        <p>American Machina helps understand strategic areas of the American Industrial base.</p>
        <p>
          Aerospace, Defense, Semiconductors, Materials, Machinery, Motors. 
          We've processed the top 10 public companies for each sector and parsed through their risks and opportunities. With the use of a language model we've also made according summaries.
        </p>
        1. How to forecast supply/demand shocks?
        <br />
        2. How to diversify one-of-one suppliers?
        <br />
        3. How to secure critical technology materials?
        <br />
        4. What data streams useful but not yet available?
        <br />
        5. In the next 5-10yrs, what components and parts should we be reshoring now?
        <br />
        6. What are we over relying on from offshore manufacturing? 
        <br />
        <br />
        <p>
          These are the type of questions we aim to answer and get to building. 
          Anecdotally, there's a lot of talk about the need for revamping the industrial base. 
          We want to translate those problems into tractable facts and companies that are likely to solve them.
          How do we build faster, better and at home?
          That's what we aim to find out.
        </p>
      </div>
    </div>
  );
};

export default Home;
